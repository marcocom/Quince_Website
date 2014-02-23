(function($) {

    var thisJS = 'loader.js';
    var jsFiles = [ // files to be conditionally included
        'lib/iscroll.js',
        'lib/hammer.js',
        'lib/jquery.hammer.js',
        'lib/masonry.js',
        'lib/lodash.underscore.js',
        'lib/backbone.js',
        'jquery.ext.js',
        'helper.js',
        'lib/jquery.flexslider.js',
        'lib/jquery.fancybox.js',
        'quince.js',
        'quince.model.js',
        'quince.page.js',
        'quince.mosaic.js',
        'plugins.js'
    ];

    if (jsFiles.length > 0) {
        $('script').each(function() {
            var src = $(this).attr('src');
            var i;
            if (src && (i = src.indexOf(thisJS, this.length - thisJS.length)) > -1) {
                var path = src.substring(0, i);
                for (var j = 0, k = jsFiles.length; j < k; j++)
                    document.write('<script type="text/javascript" src="'+path+jsFiles[j]+'"></script>');
                return false;
            }
        });
    }

})(jQuery);
