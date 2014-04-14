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
            'viewed' : 0,
            'customerId': 0,
            'title' : "",
            'authorName' : "",
            'authorId' : 0,
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
        offsetCounters:{},

        _construct : function(el, dir, filter, val) {
            this._el = $(el);
            this._directory = dir;
            this._super(this._el);
            var m = this._el.find('.mosaic-container');
            this._mosaic = $(m);

            this._filterMode = filter || $q.Constants.Filters.CHRONOLOGICAL;
            this._filterVal = val || 0;
            this._currentColumn = 0;
            this.offsetCounters = {
                'a':-1,
                'b':-1,
                'c':-1,
                'd':-1,
                'f':-1,
                'h':-1,
                'j':0
            };


            this.modifyPreload();
            if(!Quince.templates.cells.cell_a) this.compileTemplates();
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
        
        compileTemplates : function(){
            Quince.templates.cells.cell_a = _.template($('#tpl-cell-a').html());
            Quince.templates.cells.cell_b = _.template($('#tpl-cell-b').html());
            Quince.templates.cells.cell_c = _.template($('#tpl-cell-c').html());
            Quince.templates.cells.cell_d = _.template($('#tpl-cell-d').html());
            Quince.templates.cells.cell_e = _.template($('#tpl-cell-e').html());
            Quince.templates.cells.cell_f = _.template($('#tpl-cell-f').html());
            Quince.templates.cells.cell_g = _.template($('#tpl-cell-g').html());
            Quince.templates.cells.cell_h = _.template($('#tpl-cell-h').html());
            Quince.templates.cells.cell_i = _.template($('#tpl-cell-i').html());
            Quince.templates.cells.cell_j = _.template($('#tpl-cell-j').html());
            Quince.templates.cells.cell_p = _.template($('#tpl-cell-personnel').html());
            Quince.templates.containers.slider = _.template($('#tpl-slider').html());

            $('#tpl-cell-a').remove();
            $('#tpl-cell-b').remove();
            $('#tpl-cell-c').remove();
            $('#tpl-cell-d').remove();
            $('#tpl-cell-e').remove();
            $('#tpl-cell-f').remove();
            $('#tpl-cell-g').remove();
            $('#tpl-cell-h').remove();
            $('#tpl-cell-i').remove();
            $('#tpl-cell-j').remove();

            $('#tpl-cell-personnel').remove();
            $('#tpl-slider').remove();
        },
        
        initModel : function(){
            //$log("-------------------------MODEL MOSAIC INIT-----------------------------");
            this.requestData(this._currentColumn);
        },
        
        nextModel : function(){
            var nextup  = (this._currentColumn+=1);

//            $log("NEXTMODEL nextup:"+nextup+" totalpreload:"+this._totalPreload);

            if(nextup < this._totalPreload){
                this.requestData(nextup);
            } else if(!this._firstLoad){
                this._firstLoad = true;
                Quince.EventManager.fireEvent(Quince.Event.MODEL_COLUMNS_COMPLETE, this, this._el, this._filterMode);
            } else if(!this._dataFinished){
                this.requestData(nextup);
            }
        },
        
        requestData : function(indexnum){
            //$log("LOAD JSON - index:"+indexnum);
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
            var pattern = $q.ancillary_models.column_patterns[style];
            var cleaned = _.difference(pattern, $q.AncillaryLetters); //removed front-end handled types

            _.each($q.DataLetters, function(val){
                var list = _this.returnFiltered(cleaned, val);
                if(list.length <= 0) return;
                var nextup = _this.offsetCounters[val] += list.length;
//                $log("REQUEST type:"+val+" COUNTER:"+nextup);

                var insertobj = {
                    'type':val,
                    'limit':list.length,
                    'offset':nextup
                }

                sendObj.types.push(insertobj);
            });

            Quince.EventManager.fireEvent(Quince.Event.MODEL_COLUMN_LOADING , this);

            $.getJSON(this._directory, { filters: JSON.stringify(sendObj) }, $.proxy(this.parseColumn, this))
                .error($.proxy(this.loadError, this));
        },

        returnFiltered : function(arr, terms){
            var newarr = _.filter(arr, function(val){
                return val == terms;
            });
            return newarr;
        },

        parseColumn : function(result){

            var style = Math.abs(this._currentColumn % 3);

            var el = this.injectColumn(style);

            var c = new Quince.Model.Column(result, style, el, this._currentColumn);

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
        _construct : function(m, index, el, i) {
            this._el = $(el);
            this._style = index;
            this._index = i;

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

            this._collection = new columnCollection(castm);

            this.instantiateCells();
        },

        instantiateCells : function(){
            var _this = this;

            this._collection.each(function(model) {
//                $log("CREATE CELL:"+model.get("type"));
                var c = new Quince.Model.CellView(model, _this._el);
            });
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
            var pattern = $q.ancillary_models.column_patterns[this._style];

            var newArr = [];

            for(var i = 0; i < pattern.length; i++){

                var ancil_obj = {};
                var cell_letter = pattern[i];
                var uId = "0" + this._index.toString() + i.toString();

                if($.inArray(cell_letter, $q.AncillaryLetters) > -1){ //insert ancillary object when pattern calls for it. (not CMS fed)
                    ancil_obj = this.pullAncillaryData(cell_letter);
                } else {

                    for (var k = 0; k < model.length; k++){
                        var cl = model[k].type;
                        if(cl == cell_letter) ancil_obj = model.splice(k, 1)[0];

                    }

                    if($q.isEmpty(ancil_obj)) ancil_obj = {};  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<DISABLE TO FIND OUT IF YOURE MISSING DATA IN THE HARD-CODED FILES
                }

                if($q.isEmpty(ancil_obj) == false){
                    if(ancil_obj.id) ancil_obj.id = uId;
                    newArr.push(ancil_obj);
                }
            }
            return newArr;
        },

        pullAncillaryData : function(letter){
            var obj;
            if(letter == 'd'){
                var ran = Math.floor(Math.random() * $q.ancillary_models.action_data.length);
                obj = $q.ancillary_models.quote_data.splice(ran,1)[0];
            } else
            if(letter == 'e'){
                obj = $q.ancillary_models.action_data.splice(0,1)[0];
            } else
            if(letter == 'g'){
                obj = $q.ancillary_models.long_images.splice(0,1)[0];
            } else
            if(letter == 'i'){
                obj = {
                    'id':''
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
            $log("CELL m:", this._model, " el:", this.$el);
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










    $q.Model.refineByPortal = function(e, filter){
        $log("RECIEVED FILTER:"+filter);
        $q.State.createRefinedModel("portal", filter);
    };
    $q.Model.refineByFilter = function(e, filter){
        $log("RECIEVED FILTER:"+filter);

        if(filter == $q.Constants.Filters.CHRONOLOGICAL)
            $q.State.removeRefinedModel(); //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<TEMPDEV. REMOVE
    };
    $q.EventManager.addEventHandler($q.Event.REFINE_PORTAL, $q.Model.refineByPortal.bind(this));
    $q.EventManager.addEventHandler($q.Event.REFINE_FILTER, $q.Model.refineByFilter.bind(this));



    $q.Model.Init();

    Quince._model = new $q.Model.Mosaic("#slider-container", "backend/item");



})(jQuery, Quince);
