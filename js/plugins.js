(function() {
    var agents = ['android', 'webos', 'iphone', 'ipad', 'blackberry'];
    for(i in agents) {
        if(navigator.userAgent.toLowerCase().indexOf(agents[i]) != -1) {
            $(document).data('mobile', navigator.userAgent);
        }
    }
})();

(function() {
// Avoid `console` errors in browsers that lack a console.
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});
    while (length--) {
        method = methods[length];
        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


var _gaq = _gaq || [];
_gaq.push(['_setAccount', Quince.googleAccount]);
_gaq.push(['_trackPageview']);
console.log("GA: "+Quince.googleAccount);
(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();




/*
 TopZIndex plugin for jQuery
 Version: 1.2

 http://topzindex.googlecode.com/

 ------------------------------------------------------*/

(function ($) {

    $.topZIndex = function (selector) {
        /// <summary>
        ///     Returns the highest (top-most) zIndex in the document
        ///     (minimum value returned: 0).
        /// </summary>
        /// <param name="selector" type="String" optional="true">
        ///     (optional, default = "*") jQuery selector specifying
        ///     the elements to use for calculating the highest zIndex.
        /// </param>
        /// <returns type="Number">
        ///     The minimum number returned is 0 (zero).
        /// </returns>

        return Math.max(0, Math.max.apply(null, $.map(((selector || "*") === "*")? $.makeArray(document.getElementsByTagName("*")) : $(selector),
            function (v) {
                return parseFloat($(v).css("z-index")) || null;
            }
        )));
    };

    $.fn.topZIndex = function (opt) {
        /// <summary>
        ///     Increments the CSS z-index of each element in the matched set
        ///     to a value larger than the highest current zIndex in the document.
        ///     (i.e., brings all elements in the matched set to the top of the
        ///     z-index order.)
        /// </summary>
        /// <param name="opt" type="Object" optional="true">
        ///     (optional) Options, with the following possible values:
        ///     increment: (Number, default = 1) increment value added to the
        ///             highest z-index number to bring an element to the top.
        ///     selector: (String, default = "*") jQuery selector specifying
        ///             the elements to use for calculating the highest zIndex.
        /// </param>
        /// <returns type="jQuery" />

        // Do nothing if matched set is empty
        if (this.length === 0) {
            return this;
        }

        opt = $.extend({increment: 1}, opt);

        // Get the highest current z-index value
        var zmax = $.topZIndex(opt.selector),
            inc = opt.increment;

        // Increment the z-index of each element in the matched set to the next highest number
        return this.each(function () {
            this.style.zIndex = (zmax += inc);
        });
    };

})(jQuery);


