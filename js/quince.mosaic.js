(function($, $q) {

    $q.Mosaic = Class.extend({
        _construct : function(el) {
            this._el = $(el);
            this.slider = null;
        }
    });

    $.extend($q.Mosaic,
        {	// associate element class to Page for auto initialization
            _selectors : {},
            _extend : $q.Mosaic.extend,
            extend : function(prop, selector) {
                var klass = $q.Mosaic._extend(prop);
                if (typeof selector == 'string')
                    $q.Mosaic._selectors[selector] = klass;
                return klass;
            },
            Init : function() {
                //$q.Page._selectors;
                $.each($q.Mosaic._selectors,
                    function(selector, klass) {
                        $(selector).each(function() {
                            var i = new klass(this);
                            $(this).data(selector, i);
                        });
                    });
            }
        }
    );

    $q.Mosaic.Container = $q.Mosaic.extend({
        _construct : function(el) {
            this._el = $(el);
            this._super(this._el);
            $log("Mosaic init");
            this.initContainer();
        },

        initContainer : function(){
            $q.Mosaic.slider = new IScroll('#slider-container', { scrollX: true, scrollY: false, mouseWheel: true });
            $log("SLIDER INIT")

        }
    });

    $q.Mosaic.Init();
    if($('#slider-container').length > 0) this.landingContent = new $q.Mosaic.Container('#slider-container');

})(jQuery, Quince);
