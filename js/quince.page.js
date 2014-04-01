/*
 Manages the Page-level logic.
 The z-indexed logic of sub-pages are managed here, either through
 link-actions, or else global events.
 */
(function($, $q) {

    $q.Page = Class.extend({
        _construct : function(el) {
            this._el = $(el);
        }
    });

    $.extend($q.Page,
        {	// associate element class to Page for auto initialization
            _selectors : {},
            _extend : $q.Page.extend,
            extend : function(prop, selector) {
                var klass = $q.Page._extend(prop);
                if (typeof selector == 'string')
                    $q.Page._selectors[selector] = klass;
                return klass;
            },
            Init : function() {
                //$q.Page._selectors;
                $.each($q.Page._selectors,
                    function(selector, klass) {
                        $(selector).each(function() {
                            var i = new klass(this);
                            $(this).data(selector, i);
                        });
                    });
            }
        }
    );

    $q.Page.Home = $q.Page.extend({
        cellRouter:null,
        toplinks:null,
        currentContent:null,
        contentSwap:null,
        closeButton:null,
        subcontentOpened:false,
        introColumn:null,
        _current:null,
        _construct : function(el) {
            this._el = $(el);
            this._super(this._el);
            this.toplinks = $(this._el.find('.header .toplink'));

            this.introColumn = new $q.Page.IntroColumn(this._el.find('#slider-container .scroller .homepage .intro-block')[0]);
            this.initPage();

        },

        initPage : function(){
            var _this = this;
            this.closeButton = $('.sub-close-cta a').click($.proxy(this.pageCollapse, this));

            this.toplinks.click($.proxy(this.clickAnimate, this));

//            $q.EventManager.addEventHandler($q.Event.PAGECHANGE, this.catchPageChange.bind(this));

            //BACKBONE ROUTER
            var router = Backbone.Router.extend({
                routes: {

                    "posts/:id": "getPost",
                    // <a href="http://example.com/#/posts/121">Example</a>
                    "client/:id": "getClient",
                    "author/:id": "getAuthor",
                    "tag/:id": "getTag",
                    "search/:query":        "search",  // #/search/subject
                    ":route/:action": "loadView",
                    // <a href="http://example.com/#/dashboard/graph">Load Route/Action View</a>
                    "*action": "defaultRoute" // Backbone will try match the route above first
                }
            });


            this.cellRouter = new router;

            this.cellRouter.on('route:loadView', function( route, action ){
                $log(route + "_" + action); // dashboard_graph
                $q.EventManager.fireEvent(Quince.Event.ROUTER_CALL, this);
            });

            this.cellRouter.on('route:getPost', function (id) {
                $log( "Get post number " + id );
                $q.EventManager.fireEvent(Quince.Event.ROUTER_POST, this, id);
            });

            this.cellRouter.on('route:getClient', function (id) {
                $log( "Get client number " + id );
                $q.EventManager.fireEvent(Quince.Event.ROUTER_CLIENT, this, id);
            });

            this.cellRouter.on('route:getAuthor', function (id) {
                $log( "Get author number " + id );
                $q.EventManager.fireEvent(Quince.Event.ROUTER_AUTHOR, this, id);
            });

            this.cellRouter.on('route:getTag', function (word) {
                $log( "Get tag: " + word );
                $q.EventManager.fireEvent(Quince.Event.ROUTER_TAG, this, word);
            });

            this.cellRouter.on('route:search', function (word) {
                $log( "Search term: " + word );
                $q.EventManager.fireEvent(Quince.Event.ROUTER_SEARCH, this, word);
            });

            this.cellRouter.on('route:defaultRoute', function (action) {
                $log( "DEFAULT ROUTE:" + action + " subcontentOpened:"+this.subcontentOpened);
                if(action == "jobs" || action == "about" || action == "contact" || action == "people"){
                    _this.remoteAnimate(action);
//                $q.EventManager.fireEvent(Quince.Event.ROUTER_PAGE, this, action);
                } else if(action == null && this.subcontentOpened == true){
                    this.pageCollapse(null);
                }

            });

//            Backbone.emulateHTTP = true;
//            Backbone.emulateJSON = true;
//
//            Start Backbone history a necessary step for bookmarkable URL's
//            - See more at: http://thomasdavis.github.io/2011/02/07/making-a-restful-ajax-app.html#sthash.oYCvSDf5.dpuf
            Backbone.history.start({pushState: true});

        },

        catchPageChange : function(e, props){
            //$log("PAGECHANGE e:"+e+" props:"+props);
            this.remoteAnimate(props);
        },


        remoteAnimate : function(remoteLink){

            if(remoteLink != undefined && remoteLink.length < 2) return;
            this._current = remoteLink;
            var ref = "."+( remoteLink ? remoteLink : clicksource.id) + "-content";
            var $content = $(ref);
//            $log("REMOTE ANIMATE subcontentOpened:"+this.subcontentOpened);
            this.subcontentOpened == false ? this.pageAnimateFromClosed($content) : this.pageAnimateFromOpened($content, null);
        },

        clickAnimate : function(e){
            e.preventDefault();

            var clicksource = $(e.currentTarget)[0];

            this._current = clicksource.id;

            var ref = "." + clicksource.id + "-content";
            var $content = $(ref);

            this.cellRouter.navigate(clicksource.id, {trigger:false});
            //$log("CLICK ANIMATE subcontentOpened:"+this.subcontentOpened);

            this.subcontentOpened == false ? this.pageAnimateFromClosed($content) : this.pageAnimateFromOpened($content, clicksource);
        },

        pageAnimateFromClosed : function(el){
            var _this = this;
            el.show();
//                $content.addClass('opened');

            var t = el.find('.content')[0];
            var targetHeight = $(t).height() + ($('body').hasClass('ipad-iphone') ? 10 : 40);
            var maxHeight = $q.windowHeight - 30;

            if(targetHeight > maxHeight) targetHeight = maxHeight;

            //$log("ANIMATEFROM-CLOSED: subOpened:"+this.subcontentOpened+" targetHeight:"+targetHeight+" currentContent:"+ this.currentContent);

            this.setScrollable(false);

            this.currentContent = el;

//             this._el.css('top', (targetHeight + 'px'));

            this._el.animate({
                top:targetHeight
            }, 500, function(){
                _this.onOpenTransitionEnd();
            });
        },

        pageAnimateFromOpened : function(el, c){
            var _this = this;
            //$log("ANIMATEFROM-OPEN: subOpened:"+this.subcontentOpened+" currentContent:"+this.currentContent.selector);
            //$log("NEW CONTENT:"+el.selector);
            if(this.currentContent.selector != el.selector){
                this.contentSwap = c;
                //$log("CONTENTSWAP REASSIGNED-------")
            } else {
                this.contentSwap = null;
            }

            this._el.animate({
                top:'0'
            }, 500, function(){
                _this.onCloseTransitionEnd();
            });
        },

        onOpenTransitionEnd : function(){

            this.subcontentOpened = true;

            var bg = this.currentContent.find('.content');
            $(bg).bind('click', $.proxy(this.pageCollapse, this));
            this._el.bind('tap click swipe focus', $.proxy(this.pageCollapse, this));
            //$log("OPEN TRANSITION END - subcontentOpened:"+this.subcontentOpened);
        },

        onCloseTransitionEnd : function(){
            // THIS ALLOWS FOR A SWAPPING FROM LINKED SECTION TO SECTION THROUGH HAND-OFF OF THE 'currentSwap' VALUE.  BUT IS NOT NEEDED WITH THE MOUSEOVER LOGIC.
//            $log("CLOSE TRANSITION END - subcontentOpened:"+this.subcontentOpened+" contentSwap:");
            $dir(this.contentSwap);
            if(this.subcontentOpened == true){
                this.subcontentOpened = false;
                this.currentContent.hide();
                this.currentContent = null;
                this.setScrollable(true);


                if(this.contentSwap != null){

                    $(this.contentSwap).trigger('click');
//                    this.remoteAnimate(this._current);

                    $log("CONTENT SWAP:"+this._current);
                    this.contentSwap = null;
                } else {

                }

            }
        },

        pageCollapse : function(e){
//            if(this.subcontentOpened) this._el.css('top', '0px');
            var _this = this;
            this.cellRouter.navigate("/", {trigger:false});
            if(this.subcontentOpened){
                this._el.animate({
                    top:'0'
                }, 500, function(){
                    _this.onCloseTransitionEnd();
                });
                this._el.mouseover(null);
                this._el.unbind('tap click swipe focus');
                //            this._el.touch(null);
            }
        },

        setScrollable : function(setOn){
            var topdoc = $('html, body');

            if(!setOn){
                topdoc.css({
                    'overflow':'hidden',
                    'height':'100%'
                });
            } else {
                topdoc.css({
                    'overflow':'auto',
                    'height':'100%'
                });
            }

        }
    });

    $q.Page.IntroColumn = $q.Page.extend({
        _current:null,
        _imgrow:null,
        _textrow:null,
        _words:null,
        words_spacer:null,
        timer:null,
        highlight:'#5d2278',
        timerLength:3000,

        _construct : function(el) {
            this._el = $(el);
            this._super(this._el);
            this.initIntro();
        },
        initIntro : function(){
            var _this = this;
            this._imgrow = $(this._el.find('.left-side .imgs ul.img-scroller')[0]);
            this._textrow = $(this._el.find('.left-side .texts ul.txt-scroller')[0]);
            this._words = $(this._el.find('.words ul')[0]);
            this.words_spacer = $(this._el.find('.words .spacer')[0]);

            $log("INTRO :", this._el, "IMGS:", this._imgrow, "TEXTS:", this._textrow, "WORDS:", this._words);

            this.decorateWords();

            this.timer = setInterval($.proxy(_this.rotateWords, _this), _this.timerLength);

        },
        decorateWords : function(){
            var _this = this;
            this._words = $(this._el.find('.words ul')[0]);

            var list_arr = this._words[0].children;

            $(list_arr[0]).addClass("active");
            $(list_arr[list_arr.length-1]).css({'opacity':'0'});
            $(list_arr[list_arr.length-2]).css({'opacity':'0.2'});
            $(list_arr[list_arr.length-3]).css({'opacity':'0.4'});
            $(list_arr[list_arr.length-4]).css({'opacity':'0.6'});

            this._words.each(function(i){
//                $(this).click($.proxy(_this.wordClick, _this));
            });

        },
        wordClick : function(e){
            $log("CLICK");
        },
        rotateWords : function(){
            var _this = this;
            var firstword = this._words.find('li:first');

            $(firstword[0]).animate({'opacity':0}, 1000, function () {
                $(this).appendTo(_this._words).css('opacity', 1).removeClass('active');
                _this.words_spacer.height(firstword.height());
                _this.words_spacer.animate({'height':0}, 1000);
                _this.decorateWords();
            });



        }

    });

    $q.Page.Init();

    if($('.home-content').length > 0) Quince._landingPage = new $q.Page.Home('.home-content');

})(jQuery, Quince);
