/*
Manages the Backbone data handling and sorting.
returned data-object arrays are cast into Column collections with associated View and Models per individual cell.
Views use compiled templates which are pre-compiled at run-time and then removed from DOM prior to visual presentation.

note:  Quince.Model.People and Quince.Model.PeopleColumn classes at bottom inherit from their respective classes with specific overwrites to
deviate for unique employee data structure and thus its own Quince.Model.Person model class primitive
 */
(function($, $q) {

    $q.Model = Class.extend({
        _construct : function() {

        }
    });

    $.extend($q.Model,
        {	// associate element class to Model for auto initialization
            _selectors : {},
            _extend : $q.Model.extend,
            extend : function(prop, selector) {
                var klass = $q.Model._extend(prop);
                if (typeof selector == 'string')
                    $q.Model._selectors[selector] = klass;
                return klass;
            },
            Init : function() {
                $.each($q.Model._selectors,
                    function(selector, klass) {
                        $(selector).each(function() {
                            var i = new klass(this);
                            $(this).data(selector, i);
                        });
                    });
            }
        }
    );


    ///////////////////////////////////////////////////////////////////////core model backbone class
    $q.Model.CellModel = Backbone.Model.extend({
        defaults:{
            'comment' : "",
            'type' : "",
            'id' : "",
            'portal' : "",
            'ref' : "",
            'date' : "",
            'viewed' : "",
            'customerId': "",
            'title' : "",
            'authorName' : "",
            'authorId' : "",
            'authorJob' : "",
            'text' : "",
            'url' : "",
            'images' :[],
            'tags' : []
        },
        initialize: function(){
//            this.on("change:viewed", function(model){
//                var name = model.get("viewed");
//                //$log("Changed Viewed: " + name );
//            });

//            this.on('invalid', function(model, error) {
//                //$log("invalid error:"+error);
//            });
        },
        validate: function( attributes ){
//            if( attributes.age < 0 && attributes.name != "Dr Manhatten" ){
//                return "You can't be negative years old";
//            }

        },
        addViewed: function(){
//            var newnum = Number(this.get('viewed')) + 1;
//            this.set({ 'viewed': newnum });
        }

    });

    $q.Model.Person = Backbone.Model.extend({
        defaults:{
            'type' : "p",
            'id' : "",
            'name' : "",
            'job' : "",
            'email' : "",
            'useFbImage' : "",
            'facebook': "",
            'linkedin' : "",
            'mobile' : "",
            'details' : "",
            'section' : "",
            'image':"/img/people/avatar.jpg"
        },
        //{
        // "id":7,
        // "name":"Martijn Thieme",
        // "job":null,
        // "email":"martijn@quince.nl",
        // "useFbImage":true,
        // "facebook":"https:\/\/www.facebook.com\/martijnt?fref=ts",
        // "linkedin":"http:\/\/www.linkedin.com\/profile\/view?id=2777140&locale=en_US&trk=tyah",
        // "mobile":"",
        // "details":"",
        // "section":"Project leader"
        // },
        initialize: function(){

        }

    });


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////BASE WALL CLASS
    $q.Model.Mosaic = $q.Model.extend({
        _totalPreload : 5,
        _currentColumn : 0,
        _columns : [],
        _firstLoad : false,
        _dataFinished : false,
        _directory : null,
        _mosaic:null,
        _filterMode:null,
        _filterVal:null,
        offsetCounters:{},
        remainderCounters:{},

        _construct : function(el, dir, filter, val) {
            this._el = $(el).hide();
            this._directory = dir;
            this._super(this._el);
            Quince._currentModel = this;
            var m = this._el.find('.mosaic-container');
            this._mosaic = $(m);

            this._filterMode = filter || $q.Constants.Filters.CHRONOLOGICAL;
            this._filterVal =  val  || "default";

            this._filterDefault = (this._filterMode == $q.Constants.Filters.CUSTOMER
                || this._filterMode == $q.Constants.Filters.AUTHOR
                || this._filterMode == Quince.Constants.Filters.SEARCH
                || this._filterMode == Quince.Constants.Filters.TAG)
                && this._filterVal != 'all';

            this._firstLoad = false;
            this._currentColumn = 0;
            this.offsetCounters = {
                'a':0,
                'b':0,
                'c':0,
                'd':0,
                'f':0,
                'h':0,
                'j':0
            };

            this.remainderCounters = {
                'a':1,
                'b':1,
                'c':1,
                'd':1,
                'f':1,
                'h':1,
                'j':1
            };

            this.modifyPreload();
            this.initModel();
            this.addEventListeners();

        },


        modifyPreload : function(){
            if($q.windowWidth <= 450){
                this._totalPreload = 3;
            } else if($q.windowHeight >= 970 ){
                this._totalPreload = 7;
            }

            if(this._filterMode != $q.Constants.Filters.CHRONOLOGICAL) {
                this._totalPreload -= 2;
            }
            if(this._filterMode == $q.Constants.Filters.CUSTOMER && this._filterVal == 'all') {
                this._totalPreload += 2;
            }

        },

        addEventListeners : function(){
            $q.EventManager.addEventHandler($q.Event.MOSAIC_SCROLL_END, $.proxy(this.mosaicScrollHandler, this));
        },

        removeEventListeners : function(){
            $q.EventManager.removeEventHandler($q.Event.MOSAIC_SCROLL_END, this.mosaicScrollHandler);
        },

        mosaicScrollHandler : function(e, xdiff, maxscroll, directx, directy){
            //$log("------------------MOSAIC SCROLL HANDLER ------------------ xdiff:"+xdiff+" maxscroll:"+maxscroll+" datafinished:"+this._dataFinished);
            if(xdiff <= maxscroll && !this._dataFinished) this.nextModel();
        },
        
        initModel : function(){
            $q.State.startMosaic(this._el, this._filterMode);
            this.requestData(this._currentColumn);
        },
        
        nextModel : function(){

            var nextup  = (this._currentColumn+=1);

            if(nextup < this._totalPreload){
                this.requestData(nextup);
            } else if(!this._firstLoad){
                this._firstLoad = true;
            } else if(!this._dataFinished){
                this.requestData(nextup);
            }
        },
        
        requestData : function(indexnum){

            if(this._currentColumn == 0) $q._currentMosaic.initContainer();

            var _this = this;

            var sendObj = {
                'types':[]
            };


            var style = Math.abs(this._currentColumn % 3);

            var pattern =  $q.Patterns[this._filterMode][(this._filterDefault ? "default" : this._filterVal)][style];
            var cleaned = _.difference(pattern, $q.AncillaryLetters); //removed front-end handled types

            _.each($q.DataLetters, function(val){

                var list = _this.returnFiltered(cleaned, val);
                var totalcount = list.length;

                if(!totalcount || _this.remainderCounters[val] <= 0){
                    return;
                }

                if(_this.remainderCounters[val] < totalcount && indexnum != 0){
                    totalcount = _this.remainderCounters[val];
                    if(totalcount == 0){
                        return;
                    }
                }

                var offset = _this.offsetCounters[val];
                _this.offsetCounters[val] += totalcount;

                var insertobj = {
                    'type':val,
                    'limit':totalcount,
                    'offset':offset
                };

                sendObj.types.push(insertobj);

            });

            if(sendObj.types.length == 0){
                Quince.EventManager.fireEvent($q.Event.MODEL_COLUMNS_COMPLETE, this, this._el, this._filterMode);
                this.loadError(null);
                return;
            }




            if((this._filterMode != $q.Constants.Filters.CHRONOLOGICAL || this._filterDefault)
                && this._filterVal != 'all')
                sendObj[this._filterMode] = this._filterVal;

            // Quince.EventManager.fireEvent(Quince.Event.MODEL_COLUMN_LOADING , this);

            $log("<<<<REQUEST DATA - index:"+indexnum+"  FILTER:"+this._filterMode+" PATTERN:"+pattern+" VAL:"+this._filterVal+" CLEANED:"+cleaned+ " SENDOBJ:");
            $dir(sendObj);

            $.getJSON(this._directory, { filters: JSON.stringify(sendObj) }, $.proxy(this.parseColumn, this)).error($.proxy(this.loadError, this));
        },

        returnFiltered : function(arr, terms){
            var newarr = _.filter(arr, function(val){
                return val == terms;
            }, this);
            return newarr;
        },

        parseColumn : function($result){
            var _this = this;
            var data = $result.items;
            var remainders = $result.remaining;

            _.each(remainders, function(val, key){
                _this.remainderCounters[key] = val;
                $log(key+" remaining:"+ val);
            });
            var style = Math.abs(this._currentColumn % 3);

            var el = this.injectColumn(style);

            _.each(data, function(val, i){
                //$log(val.title);
            });

            var pattern =  $q.Patterns[this._filterMode][(this._filterDefault ? "default" : this._filterVal)][style];

            var c = new Quince.Model.Column(data, style, el, this._currentColumn, pattern);

            this._columns.push(c);



            !$q._currentMosaic ? $q.EventManager.fireEvent(Quince.Event.MODEL_COLUMN_LOADED, this) : $q._currentMosaic.appendMosaic(null);

            if(!this._firstLoad) this.nextModel();
        },

        loadError : function(error){
            this._dataFinished = true;
            Quince.EventManager.removeEventHandler($q.Event.MOSAIC_SCROLL_END, this.mosaicScrollHandler);
            Quince.EventManager.fireEvent(Quince.Event.MODEL_COLUMNS_NODATA, this);
        },

        injectColumn : function(style){
            var htm = $('<li class="column col-style-'+style+'"></li>');
            var el = htm.appendTo(this._mosaic);
            return el;
        }

    });



    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////COLUMN CLASS
    $q.Model.Column = $q.Model.extend({
        _cells:[],
        _style:null,
        _index:0,
        _collection:null,
        _pattern:null,
        _construct : function(m, index, el, i, pat) {
            this._el = $(el);
            this._style = index;
            this._index = i;
            this._pattern = pat;
//            this._model = $(m).each(function(i){return new $q.Model.Mosaic.cellModel(i)});
            this.initModel(m);
        },

        initModel : function(model){
            //instantiate backbone collection per column container
            var columnCollection = Backbone.Collection.extend({
                model: $q.Model.CellModel
            });
            columnCollection.comparator = 'type';

            //fill in for non-backend fed objects
            var patm = this.patternFormatData(model);

            //cast objects to backbone model class
            var castm = $.map(patm, function(post) {
                return new $q.Model.CellModel(post);
            });

            this._collection = new columnCollection(castm);


            this.instantiateCells();
        },

        instantiateCells : function(){
            var _this = this;
            this._collection.each(function(model) {

                var m = _this.generateImageLink(model);
                var c = new Quince.Model.CellView(m, _this._el);
            });
        },

        generateImageLink : function(model){
            var newImages = [];
            var images = model.get('images');
            var type = model.get('type');
            var isAncillary = $.inArray(type, $q.AncillaryLetters) > -1;

            if(!(images.length == 0 || isAncillary || type == 'h' || type == 'i')){
                _(images).each(function(val){
                   var newtxt = Quince.cellImageDirectory + val.id + "." + val.extension;
                   newImages.push(newtxt);
                });
                
                model.set('images', newImages, false);
            }

            return model;
        },

        patternFormatData : function(model){

            if(($q._currentModel._filterMode != $q.Constants.Filters.CHRONOLOGICAL) && ($q._currentModel._filterMode != $q.Constants.Filters.PEOPLE))
                return model;

            var newArr = [];



            for(var i = 0; i < this._pattern.length; i++){

                var ancil_obj = {};
                var cell_letter = this._pattern[i];
                var uId = "0" + this._index.toString() + i.toString();

                var isAncillary = $.inArray(cell_letter, $q.AncillaryLetters) > -1;



                if(isAncillary){ //insert ancillary object when pattern calls for it. (not CMS fed)

                    cell_letter != "i" ? ancil_obj = this.pullAncillaryData(cell_letter) : ancil_obj = {'id':uId, 'type':'i'};

                } else {
                    for (var k = 0; k < model.length; k++){
                        var cl = model[k].type;
                        if(cl == cell_letter)
                            ancil_obj = model.splice(k, 1)[0];
                    }

                }
                if(!_.isEmpty(ancil_obj)) newArr.push(ancil_obj);
            }

            return newArr;
        },

        pullAncillaryData : function(letter){
            var ran;
            var obj;
            if(letter == 'd'){
                ran = Math.floor(Math.random() * $q.ancillary_models.quote_data.length);
                obj = $q.ancillary_models.quote_data[ran];
            } else
            if(letter == 'e'){
                ran = Math.floor(Math.random() * $q.ancillary_models.action_data.length);
                obj = $q.ancillary_models.action_data[ran];
            } else
            if(letter == 'g'){
                ran = Math.floor(Math.random() * $q.ancillary_models.long_images.length);
                obj = $q.ancillary_models.long_images[ran];
            } else
            if(letter == 'i'){
                obj = {
                    'id':'4'
                };
            }
            return obj;
        },

        getObjects : function (obj, key, val) {
            var objects = [];
            for (var i in obj) {
                if (!obj.hasOwnProperty(i)) continue;
                if (typeof obj[i] == 'object') {
                    objects = objects.concat(this.getObjects(obj[i], key, val));
                } else
                if (i == key && obj[key] == val) {
                    objects.push(obj);
                }
            }
            return objects;
        }

    });



    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CELL CLASS
    $q.Model.CellView = Backbone.View.extend({
        _tplname:null,
        _compiledTemplate:null,
        _style:null,
        _column:null,
        _model:{},

        initialize: function(m, col){
            this._model = m;
            this._column = col;
            this._style = this._model.get("type");
            this._tplname = 'cell_'+this._style;
            this.render();
        },

        render: function(){
            var template = Quince.templates.cells[this._tplname](this._model.toJSON());
            this.$el.html( template );
            this.setElement(this.$el);
            this.$el.appendTo(this._column);
        },

        events: {
//            "click input[type=button]": "doSearch"
//            "click": "onClick"
        },

        onClick: function( e ){
//            //$log( "CLICK EVENT:"+ e.currentTarget );
        }
    });









    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PEOPLE INHERITED CLASSES
    $q.Model.People = $q.Model.Mosaic.extend({

        _construct : function(el, dir, filter, val) {
            this._el = $(el).hide();
            this._directory = dir;
//            this._super(this._el);
            $q._currentModel = this;
            var m = this._el.find('.mosaic-container');
            this._mosaic = $(m);

            this._filterMode = $q.Constants.Filters.PEOPLE;
            this._filterVal = "default";
            this._firstLoad = false;

            this._totalPreload = 3;
            this._currentColumn = 0;

            this.offsetCounters = {
                'a':0,
                'b':0,
                'c':0,
                'd':0,
                'f':0,
                'h':0,
                'j':0,
                'p':0
            };

            this.remainderCounters = {
                'a':null,
                'b':null,
                'c':null,
                'd':null,
                'f':null,
                'h':null,
                'j':null,
                'p':null
            };

            this.modifyPreload();
            this.initModel();
            this.addEventListeners();

        },

        modifyPreload : function(){
            if($q.windowWidth <= 450){
                this._totalPreload = 3;
            } else if($q.windowHeight >= 970 ){
                this._totalPreload = 7;
            }
        },


        initModel : function(){
            //$log("-------------------------MODEL PEOPLE INIT-----------------------------");
            $q.State.startMosaic(this._el, this._filterMode);
            this.requestData(this._currentColumn);
        },

        requestData : function(indexnum){
//            //$log("LOAD JSON - index:"+indexnum+"  counters:", this.offsetCounters);

            if(this._currentColumn == 0) $q._currentMosaic.initContainer();

            var _this = this;

            var sendObj = {
                'types':[]
            };
//            var example = {
//                'customer':123,
//                'types':[
//                    {
//                        'type':'a',
//                        'offset':0,
//                        'limit':1
//                    },
//                    {
//                        'type':'b',
//                        'offset':0,
//                        'limit':1
//                    }
//                ]
//            };


            var style = Math.abs(this._currentColumn % 3);
            var pattern = $q.Patterns[this._filterMode][this._filterVal][style];
            var cleaned = _.difference(pattern, $q.AncillaryLetters); //removed front-end handled types

//            //$log("IMPLIMENT PATTERN:"+pattern+" requestTypes:"+cleaned);
            _.each($q.DataLetters, function(val){

                var list = _this.returnFiltered(cleaned, val);
                if(list.length <= 0) return;

//                if(_this.remainderCounters[val] > list.length)

                var offset = _this.offsetCounters[val];
                _this.offsetCounters[val] += list.length;

//                //$log("SET OFFSET-cell:"+val+" CURRENT:"+indexnum+" offset:"+offset+" list:"+list+" INCR:"+_this.offsetCounters[val]);

                var insertobj = {
                    'limit':list.length,
                    'offset':offset
                }

                sendObj = insertobj;
            });

//            //$log("SENDOBJ:", sendObj);
            Quince.EventManager.fireEvent(Quince.Event.MODEL_COLUMN_LOADING , this);
            $.getJSON(this._directory, { filters: JSON.stringify(sendObj) }, $.proxy(this.parseColumn, this)).error($.proxy(this.loadError, this));
        },

        returnFiltered : function(arr, terms){
            var newarr = _.filter(arr, function(val){
                return val == terms;
            }, this);
            return newarr;
        },

        parseColumn : function($result){
            var _this = this;
            var data = $result["authors"];


            var style = Math.abs(this._currentColumn % 3);

            var el = this.injectColumn(style);

            var pattern = $q.Patterns[this._filterMode][this._filterVal][style];

            var c = new Quince.Model.PeopleColumn(data, style, el, this._currentColumn, pattern);

            this._columns.push(c);

            !$q._currentMosaic ? $q.EventManager.fireEvent(Quince.Event.MODEL_COLUMN_LOADED, this) :
                $q._currentMosaic.appendMosaic(null);

            if(!this._firstLoad) this.nextModel();
        }

    });

    $q.Model.PeopleColumn = $q.Model.Column.extend({
        _cells:[],
        _style:null,
        _index:0,
        _collection:null,
        _pattern:null,
        _construct : function(m, index, el, i, pat) {
            this._el = $(el);
            this._style = index;
            this._index = i;
            this._pattern = pat;



            this.initModel(m);
        },

        initModel : function(model){

            //collection is not used, just plain array, since mixed-model types of unique Author data attributes
            var columnCollection = Backbone.Collection.extend({
                model: $q.Model.Person
            });
            var patm = this.patternFormatData(model);

            var newarr = $.merge(model, patm);

            var cleaned = newarr.filter(function(n){ return _.isEmpty(n) != true });

            var castm = $.map($.makeArray(cleaned), function(post) {
                var isAncillary = _.has(post, 'type');
                var mc = isAncillary ?
                    new Quince.Model.CellModel(post):
                    new Quince.Model.Person(post);
                return mc;
            });

            this._collection = _.shuffle(castm);

//            //$log("COLLECTION:",this._collection);


            this.instantiateCells();
        },

        instantiateCells : function(){
            var _this = this;
            _.each(this._collection, function(model) {

                var m = model.get('type') == "p" ? _this.generatePersonImageLink(model) :_this.generateImageLink(model);
                var c = new Quince.Model.CellView(m, _this._el);
            });
        },

        generatePersonImageLink : function(model){
            var id = model.get('id');
            var type = model.get('type');
            var useFB = model.get('useFbImage');
            var isAncillary = $.inArray(type, $q.AncillaryLetters) > -1;

            var img = useFB ?
                "https://graph.facebook.com/"+model.get('facebook')+"/picture?width=235&height=272": //272 full 134 half
                "img/people/"+id+".jpg";

            model.set('image', img, false);

//            //$log("IMAGE PEOPLE LINK:"+img);

            return model;
        }

    });




    $q.Model.Init();




})(jQuery, Quince);
