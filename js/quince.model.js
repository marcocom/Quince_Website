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










    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////BASE
    $q.Model.Mosaic = $q.Model.extend({
        _totalDataFiles : 0,
        _totalPreload : 5,
        _currentColumn : 0,
        _columns : [],
        _firstLoad : false,
        _dataFinished : false,
        _directory : null,
        _mosaic:null,
        cellRouter : null,

        _construct : function(el, dir) {
            this._el = $(el);
            this._directory = dir;
            this._super(this._el);
            var m = this._el.find('.mosaic-container');
            this._mosaic = $(m);

            $.ajax({
                url: dir+"count.php",
                cache: false,
                async:true,
                dataType: 'html',
                success: $.proxy(this.getCount, this)
            });




            //BACKBONE
            this.cellRouter = Backbone.Router.extend({
                routes: {

                    "posts/:id": "getPost",
                    // <a href="http://example.com/#/posts/121">Example</a>
                    "client/:id": "getClient",
                    "author/:id": "getAuthor",
                    "tag/:id": "getTag",

                    ":route/:action": "loadView",
                    // <a href="http://example.com/#/dashboard/graph">Load Route/Action View</a>

                    "*action": "defaultRoute" // Backbone will try match the route above first
                }


            });


            var app_router = new this.cellRouter;

            app_router.on('route:loadView', function( route, action ){
                $log(route + "_" + action); // dashboard_graph
                $q.EventManager.fireEvent(Quince.Event.ROUTER_CALL, this);
            });
            app_router.on('route:getPost', function (id) {
                $log( "Get post number " + id );
                $q.EventManager.fireEvent(Quince.Event.ROUTER_POST, this, id);
            });
            app_router.on('route:getClient', function (id) {
                $log( "Get client number " + id );
                $q.EventManager.fireEvent(Quince.Event.ROUTER_CLIENT, this, id);
            });
            app_router.on('route:getAuthor', function (id) {
                $log( "Get author number " + id );
                $q.EventManager.fireEvent(Quince.Event.ROUTER_AUTHOR, this, id);
            });
            app_router.on('route:getTag', function (word) {
                $log( "Get tag: " + word );
                $q.EventManager.fireEvent(Quince.Event.ROUTER_TAG, this, word);
            });
            app_router.on('route:defaultRoute', function (action) {
                $log( "DEFAULT ROUTE:" + action );
                $q.EventManager.fireEvent(Quince.Event.ROUTER_RANDOM, this, action);
            });

//            Backbone.emulateHTTP = true;
//            Backbone.emulateJSON = true;

            // Start Backbone history a necessary step for bookmarkable URL's
            // - See more at: http://thomasdavis.github.io/2011/02/07/making-a-restful-ajax-app.html#sthash.oYCvSDf5.dpuf
            Backbone.history.start();
        },

        getCount : function(e){
            this._totalDataFiles = Number(e) - 1;

            this.modifyPreload();
            this.compileTemplates();
            this.initModel();
            $q.EventManager.addEventHandler($q.Event.MOSAIC_SCROLL_END, this.mosaicScrollHandler.bind(this));
        },

        modifyPreload : function(){
            if($q.windowWidth <= 450){
                this._totalPreload = 3;
            } else if($q.windowHeight >= 970 ){
                this._totalPreload = 7;
            }
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
        },
        
        initModel : function(){
            //$log("-------------------------MODEL MOSAIC INIT-----------------------------");

//            this.components.Models.CellModel = Backbone.Model.extend({});
//            this.components.Collections.Column = Backbone.Collection.extend({
//                model: this.components.Models.CellModel,
//                url: "../data/column_0.json",
//                initialize: function(){
//                    //$log("JSON INIT:"+this.url);
//                }
//            });
            this.loadJsonFile(this._currentColumn);
        },
        
        nextModel : function(){
            var nextup  = (this._currentColumn+=1);

            if(nextup < this._totalPreload){
                this.loadJsonFile(nextup);
            } else if(!this._firstLoad){
                this._firstLoad = true;
                Quince.EventManager.fireEvent(Quince.Event.MODEL_COLUMNS_COMPLETE, this);
            } else if(!this._dataFinished){
                this.loadJsonFile(nextup);
            }
        },
        
        loadJsonFile : function(indexnum){
            var nextInverted = this._totalDataFiles - indexnum;
            //$log("LOAD JSON:"+nextInverted+" index:"+indexnum);
            if(nextInverted == 0) Quince.EventManager.fireEvent(Quince.Event.MODEL_COLUMNS_NODATA, this);

            if(nextInverted >= 0) {
                Quince.EventManager.fireEvent(Quince.Event.MODEL_COLUMN_LOADING , this);
                $.ajax({
                    url: this._directory+"column_"+nextInverted+".json",
                    cache: false,
                    async:true,
                    dataType: 'json',
                    success: $.proxy(this.parseColumn, this),
                    error:$.proxy(this.loadError, this)
                });
            } else {
                this.loadError(null);
            }

        },
        
        parseColumn : function(result ){

            var style = Math.abs(this._currentColumn % 3);
            var el = this.injectColumn(style);

            var c = new Quince.Model.Column(result, style, el, this._currentColumn);

            this._columns.push(c);
            !this._firstLoad ? this.nextModel() : $q.EventManager.fireEvent(Quince.Event.MODEL_COLUMN_LOADED, this);
        },
        loadError : function(error){
            this._dataFinished = true;
            Quince.EventManager.removeEventHandler($q.Event.MOSAIC_SCROLL_END, this.mosaicScrollHandler);
//            Quince.EventManager.fireEvent(Quince.Event.JSON_NOT_FOUND, this);
        },
        injectColumn : function(style){
            var htm = $('<li class="column col-style-'+style+'"></li>');
            var el = htm.appendTo(this._mosaic);
            return el;
        },
        loadTemplateFile : function(templateName) {
            var template = $('#tpl-' + templateName);
            if (template.length === 0) {
                var tmpl_dir = '/templates';
                var tmpl_url = tmpl_dir + '/' + templateName + '.tmpl';
                var tmpl_string = '';

                $.ajax({
                    url: tmpl_url,
                    method: 'GET',
                    async: false,
                    contentType: 'text',
                    success: function (data) {
                        tmpl_string = data;
                        $('head').append('<script id="tpl-' +
                            templateName + '" type="text/template">' + tmpl_string + '<\/script>');
                    }
                });

            }
        }

    });





    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////COLUMNS
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

        initModel : function(_m){
            //$log("-------------------------MODEL COLUMN INIT-----------------------------:"+this._style);

            var cellModel = Backbone.Model.extend({
                defaults:{
                    _comment : "nothing",
                    CellType : "i",
                    Id : "0001",
                    Portal : "fb",
                    Ref : "",
                    Date : new Date(),
                    Viewed : 0,
                    Client : 0,
                    Title : "",
                    Author : "",
                    AuthorId : 0,
                    JobTitle : "Hero",
                    Article : "",
                    URL : "",
                    Image :[],
                    Tags : "Lorem, Ipsum, Dolor, Sit, Amet"
                },
                initialize: function(opt){


                    this.on("change:Viewed", function(model){
                        var name = model.get("Viewed");
                        alert("Changed Viewed: " + name );
                    });


                    this.on('invalid', function(model, error) {
                        alert(error);
                    });
                },
                validate: function( attributes ){
                    if( attributes.age < 0 && attributes.name != "Dr Manhatten" ){
                        return "You can't be negative years old";
                    }
                },
                addViewed: function(){
                    var newnum = Number(this.get('Viewed')) + 1;
                    this.set({ Viewed: newnum });
                }

            });

            var columnCollection = Backbone.Collection.extend({
                model: cellModel
            });

            var patm = this.patternFormatData(_m);

            var castm = patm.map(function(post) {
                return new cellModel(post);
            });
            this._collection = new columnCollection(castm);

            this.instantiateCells();
        },

        instantiateCells : function(){
            var _this = this;
            this._collection.each(function(model) {
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

        patternFormatData : function(_m){ //----------------------------------------------------THIS NEEDS CLEANUP
            var pattern = $q.ancillary_models.column_patterns[this._style];

            var newArr = [];
//            if(this._index == 0){
//                var firstobj = this.pullAncillaryData("d");
//                firstobj.CellType = "d";
//                if(firstobj.Id) firstobj.Id = '0001';
//                newArr.push(firstobj);
//                //$log("INDEX ZERO:", firstobj, newArr);
//            }

            for(var i = 0; i < pattern.length; i++){

                var ancil_obj = {};
                var cell_letter = pattern[i];
                var uId = "0" + this._index.toString() + i.toString();

                if($q.AncillaryLetters.indexOf(cell_letter) > -1){ //insert ancillary object when pattern calls for it. (not CMS fed)
                    ancil_obj = this.pullAncillaryData(cell_letter);
                    ancil_obj.CellType = cell_letter;

                } else {
                    for (var k = 0; k < _m.length; k++){
                        var cl = _m[k].CellType;
                        if(cl == cell_letter) ancil_obj = _m.splice(k, 1)[0];

                    }

                    if($q.isEmpty(ancil_obj)) ancil_obj = {};  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<DISABLE TO FIND OUT IF YOURE MISSING DATA IN THE HARD-CODED FILES
                }

                if($q.isEmpty(ancil_obj) == false){
                    if(ancil_obj.Id) ancil_obj.Id = uId;
                    newArr.push(ancil_obj);
                }
            }


            return newArr;
        },

        pullAncillaryData : function(letter){
            var obj = {};
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
                obj = {'Id':''};
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





    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CELLS
    $q.Model.CellView = Backbone.View.extend({
        _tplname:null,
        _compiledTemplate:null,
        _style:null,
        _column:null,
        _model:{},

        initialize: function(m, el){
            this._model = m;
            this._column = el;
            this._style = this._model.get("CellType");
            this._tplname = 'cell_'+this._style;
//            $log("CELL m:", this._model, " c:", this._column);
            this.render();
        },

        render: function(){
            var template = Quince.templates.cells[this._tplname](this._model.toJSON());
            this.$el.html( template );
            this.$el.appendTo(this._column);
        },

        events: {
//            "click input[type=button]": "doSearch"
            "click": "onClick"
        },

        onClick: function( e ){
            $log( "CLICK EVENT:"+ e.currentTarget );
        }
    });



    $q.Model.Init();

    Quince._model = new $q.Model.Mosaic("#slider-container", "data/cells/");

})(jQuery, Quince);
