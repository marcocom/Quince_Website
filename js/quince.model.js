/*
Manages the Backbone data handling and sorting.
REST integration is not used for server data, so sequential JSON files are loaded until depleted.
JSON arrays are cast into Column collections with associated Views per block.
Views use templates which are pre-compiled in Mosaic object and then removed from DOM.
 */
(function($, $q) {

    $q.Model = Class.extend({
        _construct : function() {}
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
//                $log("Changed Viewed: " + name );
//            });

//            this.on('invalid', function(model, error) {
//                $log("invalid error:"+error);
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
        offsetCounters:{
            'a':-1,
            'b':-1,
            'c':-1,
            'd':-1,
            'f':-1,
            'h':-1,
            'j':-1
        },

        _construct : function(el, dir, filter, val) {
            this._el = $(el).hide();
            this._directory = dir;
            this._super(this._el);

            var m = this._el.find('.mosaic-container');
            this._mosaic = $(m);

            this._filterMode = filter || $q.Constants.Filters.CHRONOLOGICAL;
            this._filterVal = val || "default";
            this._firstLoad = false;
            this._currentColumn = 0;
            this.offsetCounters = {
                'a':-1,
                'b':-1,
                'c':-1,
                'd':-1,
                'f':-1,
                'h':-1,
                'j':-1
            };


            this.modifyPreload();
            this.initModel();
            this.addEventListeners();

        },

        destruct : function(){
            this.removeEventListeners();

        },

        modifyPreload : function(){
            if($q.windowWidth <= 450){
                this._totalPreload = 3;
            } else if($q.windowHeight >= 970 ){
                this._totalPreload = 7;
            }

            if(this._filterMode != $q.Constants.Filters.CHRONOLOGICAL) this._totalPreload -= 2;
        },

        addEventListeners : function(){
            $q.EventManager.addEventHandler($q.Event.MOSAIC_SCROLL_END, this.mosaicScrollHandler.bind(this));

        },

        removeEventListeners : function(){
            $q.EventManager.removeEventHandler($q.Event.MOSAIC_SCROLL_END, this.mosaicScrollHandler.bind(this));
        },

        mosaicScrollHandler : function(e, xdiff, maxscroll, directx, directy){
            if(xdiff <= maxscroll && !this._dataFinished) this.nextModel();
        },
        
        initModel : function(){
            $log("-------------------------MODEL MOSAIC INIT-----------------------------");
            this.requestData(this._currentColumn);
        },
        
        nextModel : function(){
            var nextup  = (this._currentColumn+=1);

//            $log("NEXTMODEL nextup:"+nextup+" totalpreload:"+this._totalPreload+" firstLoad:"+this._firstLoad);

            if(nextup < this._totalPreload){
                this.requestData(nextup);

            } else if(!this._firstLoad){
                this._firstLoad = true;
                $log("FIRSTLOAD MODELS COMPLETE - INITIALIZING MOSAIC CONTROLLER");
                Quince.EventManager.fireEvent($q.Event.MODEL_COLUMNS_COMPLETE, this, this._el, this._filterMode);
//                $q.State.startMosaic(null, this._el, this._filterMode);

            } else if(!this._dataFinished){
                this.requestData(nextup);
            }
        },
        
        requestData : function(indexnum){
            $log("LOAD JSON - index:"+indexnum+"  counters:", this.offsetCounters);


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
            if(this._filterMode != $q.Constants.Filters.CHRONOLOGICAL ){
                sendObj[this._filterMode] = this._filterVal;
            }

            var style = Math.abs(this._currentColumn % 3);
            var pattern = $q.Patterns[this._filterMode][this._filterVal][style];
            var cleaned = _.difference(pattern, $q.AncillaryLetters); //removed front-end handled types

            _.each($q.DataLetters, function(val){
                var list = _this.returnFiltered(cleaned, val);
                if(list.length <= 0) return;

                $log("GET OFFSET-cell:"+val+" CURRENT offset:"+_this.offsetCounters[val]);
                var offset = _this.offsetCounters[val] += list.length;
                $log("SET OFFSET-cell:"+val+" CURRENT offset:"+offset+" list:"+list+" length:"+list.length);

                var insertobj = {
                    'type':val,
                    'limit':list.length,
                    'offset':offset
                }

                sendObj.types.push(insertobj);
            });

            Quince.EventManager.fireEvent(Quince.Event.MODEL_COLUMN_LOADING , this);

            $.getJSON(this._directory, { filters: JSON.stringify(sendObj) }, $.proxy(this.parseColumn, this)).error($.proxy(this.loadError, this));
        },

        returnFiltered : function(arr, terms){
            var newarr = _.filter(arr, function(val){
                return val == terms;
            });
            return newarr;
        },

        parseColumn : function($result){

            var style = Math.abs(this._currentColumn % 3);

            var el = this.injectColumn(style);
            var style = Math.abs(this._currentColumn % 3);
            var pattern = $q.Patterns[this._filterMode][this._filterVal][style];
            $log('parseColumn() el:', el);

            var c = new Quince.Model.Column($result, style, el, this._currentColumn, pattern);

            this._columns.push(c);

//            !this._firstLoad ? this.nextModel() : $q.EventManager.fireEvent(Quince.Event.MODEL_COLUMN_LOADED, this);

            $q.EventManager.fireEvent(Quince.Event.MODEL_COLUMN_LOADED, this);
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

//            $log("Column Created - Data Return:", castm);

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

            if(!(images.length == 0 || isAncillary || type == 'h')){
                _(images).each(function(val){
                   var newtxt = Quince.cellImageDirectory + val.id + "." + val.extension;
                   newImages.push(newtxt);
                });
                
                model.set('images', newImages, false);
            }

            return model;
        },

        sub_template : function (str, data) {
            // match "<% include template-id %>"
            return _.template(
                str.replace(
                    /<%\s*include\s*(.*?)\s*%>/g,
                    function(match, templateId) {
                        var el = $('#' + templateId);
                        return el ? el.html() : '';
                    }
                ),
                data
            );
        },

        patternFormatData : function(model){ //----------------------------------------------------THIS NEEDS CLEANUP


            var newArr = [];

            for(var i = 0; i < this._pattern.length; i++){

                var ancil_obj = {};
                var cell_letter = this._pattern[i];
                var uId = "0" + this._index.toString() + i.toString();

                if($.inArray(cell_letter, $q.AncillaryLetters) > -1){ //insert ancillary object when pattern calls for it. (not CMS fed)

                    cell_letter != "i" ? ancil_obj = this.pullAncillaryData(cell_letter) : ancil_obj = {'id':'4', 'type':'i'};

                } else {

                    for (var k = 0; k < model.length; k++){
                        var cl = model[k].type;
                        if(cl == cell_letter)
                            ancil_obj = model.splice(k, 1)[0];
                    }


                }
//
//                if($q.isEmpty(ancil_obj) == false){
//                    if(ancil_obj.id) ancil_obj.id = uId;
//
//                }
                if(!$q.isEmpty(ancil_obj)) newArr.push(ancil_obj);
            }
            return newArr;
        },

        pullAncillaryData : function(letter){
            var ran;
            var obj;
            if(letter == 'd'){
                ran = Math.floor(Math.random() * $q.ancillary_models.quote_data.length);
                obj = $q.ancillary_models.quote_data[ran];
//                obj = $q.ancillary_models.quote_data.splice(ran,1)[0];
            } else
            if(letter == 'e'){
                ran = Math.floor(Math.random() * $q.ancillary_models.action_data.length);
                obj = $q.ancillary_models.action_data[ran];
//                obj = $q.ancillary_models.action_data.splice(0,1)[0];
            } else
            if(letter == 'g'){
                ran = Math.floor(Math.random() * $q.ancillary_models.long_images.length);
                obj = $q.ancillary_models.long_images[ran];
//                obj = $q.ancillary_models.long_images.splice(0,1)[0];
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
            $log("CELL:"+this._style, this._model, " el:", this.$el);
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
            $log( "CLICK EVENT:"+ e.currentTarget );
        }
    });




    $q.Model.Init();




})(jQuery, Quince);
