(function($, $q) {

    $q.Model = Class.extend({
        _construct : function() {
//            this._el = $(el);
            this.components ={
                Models: {},
                Collections: {},
                Views: {},
                Templates:{}
            };
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
                //$q.Model._selectors;
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

    $q.Model.Mosaic = $q.Model.extend({
        _totalPreload : 4,
        _currentColumn : 0,
        _columns : [],
        _firstLoad : false,
        _mosaic:null,
        _construct : function(el) {
            this._el = $(el);
            this._super(this._el);
            var m = this._el.find('.mosaic-container');
            this._mosaic = $(m);

            this.compileTemplates();
            this.initModel();
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
        },
        initModel : function(){
            $log("-------------------------MODEL MOSAIC INIT-----------------------------");
//            this.components.Models.Column = Backbone.Model.extend({});
//            this.components.Models.Cell = Backbone.Model.extend({});
//            this.components.Collections.Cells = Backbone.Collection.extend({
//                model: this.components.Models.Column,
//                url: "../data/column_0.json",
//                initialize: function(){
//                    $log("JSON INIT:"+this.url);
//                }
//            });
            this.loadJson();
        },
        nextModel : function(){
            if((this._currentColumn+1) < this._totalPreload){
                this._currentColumn++;
                this.loadJson();
            } else if(!this._firstLoad){
                this._firstLoad = true;
                $log("==============================FINISH PRELOAD===========================:"+this._firstLoad);
                //event call
                Quince.EventManager.fireEvent(Quince.Event.MODEL_COLUMNS_COMPLETE, this);
            } else {
                //what now?
                $log("==============================LOAD REQUEST===========================:"+this._firstLoad);
                this._currentColumn++;
                this.loadJson();
            }
        },
        loadJson : function(){
            $.ajax({
                url: "data/column_"+this._currentColumn+".json",
                cache: false,
                async:true,
                dataType: 'json',
                success: $.proxy(this.parseColumn, this),
                error:this.loadError
            });
        },
        parseColumn : function(result ){
            var style = Math.abs(this._currentColumn % 3);
            var el = this.injectColumn(style);

            var c = new Quince.Model.Column(result, style, el);
            this._columns.push(c);

            this.nextModel();
        },
        loadError : function(error){
            $log("=============================DATA LOAD ERROR===========================");
        },
        injectColumn : function(style){
            var htm = $('<li class="column col-style-'+style+'"></li>');
            var el = htm.appendTo(this._mosaic);
            return el;
        },
        loadtemplateFile : function(templateName) {
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



    $q.Model.Column = $q.Model.extend({
        _model:[],
        _cells:[],
        _style:null,
        _construct : function(m, int, el) {
            this._el = $(el);
            this._model = m;
            this._style = int;
            this.initModel();
        },

        initModel : function(){
            $log("-------------------------MODEL COLUMN INIT-----------------------------:"+this._style);


            for(var i = 0; i < this._model.length; i++){
                this.generateCell(i);
            }
        },
        generateCell : function(ref){
//            $("#slider-container .mosaic-container").append(obj.toString() + " ");
            var c = new Quince.Model.Cell(this._model[ref], this._el);
            this._cells.push(c);
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
        }

    });


    $q.Model.Cell = $q.Model.extend({
        _model:{},
        _compiledTemplate:null,
        _view:null,
        _style:null,
        _column:null,
        _construct : function(m, el) {
            this._model = m;
            this._column = el;
            this._style = this._model.CellType;
            $log("-----------MODEL CELL INIT----------:"+this._style);
            this.initTemplate();

        },
        initTemplate : function(){
            var tplname = 'cell-'+this._model.CellType;
            var tpl = $('#tpl-'+tplname).html();
            this._view = Quince.templates.cells['cell_'+this._style](this._model);
//            this._view = new $q.Model.CellView(tplname, this._model);
//            $dir(this._view);
            $(this._view).appendTo(this._column);
        }


    });

//    $q.Model.CellView = Backbone.View.extend({
//        _tplname:null,
//        _model:{},
//        initialize: function(t, m){
//            this._tplname = t;
//            this._model = m;
//            this.render();
//        },
//        render: function(){
//            // Compile the template using underscore
//            var template = _.template( $("#tpl-"+this._tplname).html(), this._model );
//            // Load the compiled HTML into the Backbone "el"
//            this.$el.html( template );
//        },
//        events: {
//            "click input[type=button]": "doSearch"
//        },
//        doSearch: function( event ){
//            // Button clicked, you can access the element that was clicked with event.currentTarget
//            alert( "Search for " + $("#search_input").val() );
//        }
//    });
//var search_view = new $q.Model.CellView({ el: $("#search_container") });





    $q.Model.Init();

    this._model = new $q.Model.Mosaic("#slider-container");

})(jQuery, Quince);
