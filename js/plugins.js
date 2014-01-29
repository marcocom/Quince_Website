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
//
//(function(b,o,i,l,e,r){
//    b.GoogleAnalyticsObject = l;
//    b[l]||(b[l] = function(){(b[l].q = b[l].q||[]).push(arguments)});
//    b[l].l = +new Date;
//    e = o.createElement(i);
//    r = o.getElementsByTagName(i)[0];
//    e.src = '//www.google-analytics.com/analytics.js';
//    r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
//    ga('create',Quince.googleAccount);
//ga('send','pageview');

var _gaq = _gaq || [];
_gaq.push(['_setAccount', Quince.googleAccount]);
_gaq.push(['_trackPageview']);
console.log("GA: "+Quince.googleAccount);
(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


