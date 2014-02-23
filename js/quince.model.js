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
        _construct : function() {
            this.initModel();
        },

        initModel : function(){
            $log("-------------------------MODEL MOSAIC INIT-----------------------------");



            this.components.Models.Column = Backbone.Model.extend({});
            this.components.Models.Cell = Backbone.Model.extend({});

            this.components.Collections.Cells = Backbone.Collection.extend({
                model: this.components.Models.Column,
                url: "data/column_0.json",
                initialize: function(){
                    $log("JSON INIT:"+this.url);
                }
            });



        }

    });
    $q.Model.Column = $q.Model.extend({
        _construct : function() {
            this.initModel();
        },

        initModel : function(){
            $log("-------------------------MODEL COLUMN INIT-----------------------------");
        }

    });
    $q.Model.Cell = $q.Model.extend({
        _construct : function() {
            this.initModel();
        },

        initModel : function(){
            $log("-------------------------MODEL CELL INIT-----------------------------");
        }

    });

    SearchView = Backbone.View.extend({
        initialize: function(){
            this.render();
        },
        render: function(){
            // Compile the template using underscore
            var template = _.template( $("#tpl-cell-a").html(), {} );
            // Load the compiled HTML into the Backbone "el"
            this.$el.html( template );
        },
        events: {
            "click input[type=button]": "doSearch"
        },
        doSearch: function( event ){
            // Button clicked, you can access the element that was clicked with event.currentTarget
            alert( "Search for " + $("#search_input").val() );
        }
    });

    var search_view = new SearchView({ el: $("#search_container") });





    $q.Model.Init();

//    this._model = new $q.Model.Mosaic();

})(jQuery, Quince);
