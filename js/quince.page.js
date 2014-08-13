/*
 Manages the Page-level logic.
 The z-indexed logic of sub-pages are managed here, either through
 link-actions, or else global events.

 Backbone Router is initialized here and broadcasts events, including initial boot-up of entire site based on deep-link (address) values.

 IntroColumn represents the 'landing-page' first-column of the wall
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
        _logo:null,
        toplinks:null,
        currentContent:null,
        contentSwap:null,
        closeButton:null,
        subcontentOpened:false,
        refineNav:null,
        introColumn:null,
        _current:null,
        _currentscroller:null,
        _construct : function(el) {
            this._el = $(el);
            this._super(this._el);
            this.toplinks = $(this._el.find('.header .toplink'));
            this._logo = $('#logo').parent('a');
            $q._landingAnimation = new $q.Page.IntroColumn(this._el.find('#slider-container .scroller .homepage .intro-block')[0]);
            this.refinedNav = new $q.Page.RefineNav(this._el.find('.nav')[0]);
            this.initPage();

        },

        initPage : function(){
            var _this = this;
            this.closeButton = $('.sub-close-cta a').click($.proxy(this.pageCollapse, this));

            this.toplinks.click($.proxy(this.clickAnimate, this));
            //$log("LOGO:");
            $dir(this._logo)
            this._logo.click(function(e){
                e.preventDefault();
                e.stopImmediatePropagation();
                $q.cellRouter.navigate("/", {trigger:true});
            });

            this.initRouter();

        },

        initRouter : function(){
            //BACKBONE ROUTER
            var _this = this;
            var router = Backbone.Router.extend({
                routes: {

                    "posts/:id": "getPost",
                    "client/:id": "getClient",
                    "author/:id": "getAuthor",
                    "portal/:id": "getPortal",
                    "tag/:id": "getTag",
                    "search/:query":        "search",  // #/search/subject
                    "*action": "defaultRoute" // Backbone will try match the route above first
                }
            });


            $q.cellRouter = new router;

            $q.cellRouter.on('route:getPost', function (id) {
                //$log( "Get post number " + id );
                $q.EventManager.fireEvent(Quince.Event.ROUTER_POST, this, id);
            });

            $q.cellRouter.on('route:getClient', function (id) {
                //$log( "Get client number " + id );
                $q.EventManager.fireEvent(Quince.Event.ROUTER_CLIENT, this, id);
            });

            $q.cellRouter.on('route:getPortal', function (id) {
                //$log( "Get portal:" + id );
                $q.EventManager.fireEvent(Quince.Event.ROUTER_PORTAL, this, id);
            });

            $q.cellRouter.on('route:getAuthor', function (id) {
                //$log( "Get author number " + id );
                $q.EventManager.fireEvent(Quince.Event.ROUTER_AUTHOR, this, id);
            });

            $q.cellRouter.on('route:getTag', function (word) {
                //$log( "Get tag: " + word );
                $q.EventManager.fireEvent(Quince.Event.ROUTER_TAG, this, word);
            });

            $q.cellRouter.on('route:search', function (word) {
                //$log( "Search term: " + word );
                $q.EventManager.fireEvent(Quince.Event.ROUTER_SEARCH, this, word);
            });

            $q.cellRouter.on('route:defaultRoute', function (action) {
                //$log( "DEFAULT ROUTE:" + action + " subcontentOpened:"+this.subcontentOpened);

                if(action == "jobs" || action == "about" || action == "contact"){
                    _this.remoteAnimate(action);
                    $q.EventManager.fireEvent(Quince.Event.ROUTER_MAIN_MOSAIC, _this, action || null);
                } else if(action == "people"){
                    $q.EventManager.fireEvent(Quince.Event.REFINE_PEOPLE, _this);
                    //$log("--------------------POEPLE ROUTE-------------------")
                } else if(action == "clients"){
                    $q.EventManager.fireEvent(Quince.Event.REFINE_CLIENTS, _this);
                    //$log("--------------------CLIENT ROUTE-------------------")
                } else if(action == null){
                    //$log("DEFAULT ROUTE - NO ACTION");
                    if(_this.subcontentOpened == true) _this.pageCollapse(null);
                    $q.EventManager.fireEvent(Quince.Event.ROUTER_MAIN_MOSAIC, _this, action || null);
                }
            });

            Backbone.history.start({pushState: true, root: '/'});
        },

        catchPageChange : function(e, props){
            ////$log("PAGECHANGE e:"+e+" props:"+props);
            this.remoteAnimate(props);
        },

        remoteAnimate : function(remoteLink){

            if(remoteLink != undefined && remoteLink.length < 2) return;
            this._current = remoteLink;
            var ref = "."+( remoteLink ? remoteLink : clicksource.id) + "-content";
            var $content = $(ref);

            this.subcontentOpened == false ? this.pageAnimateFromClosed($content) : this.pageAnimateFromOpened($content, null);
        },

        clickAnimate : function(e){
            e.preventDefault();

            var clicksource = $(e.currentTarget)[0];

            this._current = clicksource.id;

            var ref = "." + clicksource.id + "-content";
            var $content = $(ref);

            $q.cellRouter.navigate(clicksource.id, {trigger:true});
        },

        pageAnimateFromClosed : function(el){
            var _this = this;
            el.show();

            var t = el.find('.content')[0];
            var targetHeight = $(t).height() + ($('body').hasClass('ipad-iphone') ? 10 : 40);
            var maxHeight = $q.windowHeight - 30;

            if(targetHeight > maxHeight) targetHeight = maxHeight;

            this.setScrollable(false);

            this.currentContent = el;
            var hasSlider = this.currentContent.hasClass('sliding');

            if(hasSlider) this._currentscroller = new $q.Page.SubPage(this.currentContent);

            this._el.animate({
                top:targetHeight
            }, 500, function(){
                _this.onOpenTransitionEnd();
            });
        },

        pageAnimateFromOpened : function(el, c){
            var _this = this;

            if(this.currentContent.selector != el.selector){
                this.contentSwap = c;
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

            ////////////////////////////////////////BACKGROUND CLICK TO CLOSE
            var bg = this.currentContent.find('.content');
            $(bg).bind('click', $.proxy(this.pageCollapse, this));
            this._el.bind('tap click swipe focus', $.proxy(this.pageCollapse, this));
        },

        onCloseTransitionEnd : function(){
            $dir(this.contentSwap);
            if(this.subcontentOpened == true){
                this.subcontentOpened = false;
                this.currentContent.hide();
                this.currentContent = null;
                this.setScrollable(true);
                if(this._currentscroller){
                    this._currentscroller._slider.destroy();
                    this._currentscroller.removeEventHandlers();
                    this._currentscroller = null;
                }

                if(this.contentSwap != null){

                    $(this.contentSwap).trigger('click');
                    this.contentSwap = null;
                } else {
                    $q.cellRouter.navigate("/", {trigger:false});

                }

            }
        },

        pageCollapse : function(e){

            var _this = this;
            $q.cellRouter.navigate("/", {trigger:false});
            if(this.subcontentOpened){
                this._el.animate({
                    top:'0'
                }, 500, function(){
                    _this.onCloseTransitionEnd();
                });
                this._el.mouseover(null);
                this._el.unbind('tap click swipe focus');
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












    $q.Page.RefineNav = $q.Page.extend({
        portalnav:null,
        filternav:null,
        searchform:null,
        searchfield:null,
        searchbutton:null,
        _defaultSearchText:null,
        _searchIsOpened:false,
        _construct : function(el){
            this._el = $(el);
            this._super(this._el);

            this.portalnav = $(this._el.find('ul.social')[0]);
            this.filternav = $(this._el.find('ul.refinement')[0]);


            this.initPortal();
            this.initRefine();
            this.initSearch();
        },
        initPortal : function(){
            var _this = this;
            this.portalnav.find('a').each(function(el){
                $(this).click(function(e){
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    //$q.EventManager.fireEvent($q.Event.REFINE_PORTAL, this, $(this).data('portal'));
                    $q.cellRouter.navigate("portal/"+$(this).data('portal'), {trigger:true});
                });
            })
        },
        initRefine : function(){
            var _this = this;


            this.filternav.find('a').each(function(el){
                $(this).click(function(e){
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    var f = $(this).data('filter');
                    if(f == $q.Constants.Filters.CHRONOLOGICAL){
                        $q.cellRouter.navigate("/", {trigger:true});
                    } else if (f == $q.Constants.Filters.CUSTOMER) {
                        $q.cellRouter.navigate("/clients", {trigger:true});
                    } else if(f == $q.Constants.Filters.TAG){
//                        $q.cellRouter.navigate("filter/"+f, {trigger:true});

                    }
                });
            });

        },
        initSearch : function(){
            this.searchform = $(this.filternav.find('.search-bar-body form')[0]);
            this.searchfield = $(this.searchform.find('.text')[0]);
            this.searchbutton = $(this.searchform.find('.submit')[0]);

            this.searchbutton.click(this.searchButtonAction.bind(this));
            this.searchfield.focus(this.searchTextFocus.bind(this))
                .blur(this.searchTextBlur.bind(this)).hide();

            this._defaultSearchText = this.searchfield.val();
        },
        searchTextFocus : function(e) {

            if(this.searchfield.val() == this._defaultSearchText)
                this.searchfield.val("");
        },
        searchTextBlur : function(e) {
            if(this.searchfield.val() == "")
                this.searchfield.val(this._defaultSearchText);
        },
        searchButtonAction : function(e){
            if (e instanceof $.Event) {
                var target = $(e.target);
                e.preventDefault();
            }
            if(!this._searchIsOpened){

                this._searchIsOpened = true;
                this.searchfield.mouseleave(this.hideField.bind(this)).show();
            } else {
                var searchQuery = this.searchfield.val()  == this._defaultSearchText ? "" : encodeURIComponent(this.searchfield.val());
                this.hideField(null);
                //$log("========SEARCH:"+searchQuery);
                if(searchQuery != "")
                    $q.cellRouter.navigate(("/search/"+searchQuery), {trigger:true});

            }


        },
        hideField:function(e){
            this.searchfield.hide();
            this.searchfield.val(this._defaultSearchText);

            this._searchIsOpened = false;
        }
    });





    $q.Page.IntroColumn = $q.Page.extend({
        _current:0,
        _imgrow:null,
        _textrow:null,
        _words:null,
        _preview:null,
        _isrotating:false,
        words_spacer:null,
        timer:null,
        highlight:'#5d2278',
        timerLength:3000,
        _currentMainMosaicX:0,

        _construct : function(el) {
            this._el = $(el);
            this._super(this._el);


            var homew = $q.windowWidth - 50;
            if(homew <= 350) homew = 350;
            //this._el.css({'width':(homew + 'px')});
            this._el.width(homew);

            this._el.hide();
            this.initIntro();

        },

        initIntro : function(){
            var _this = this;
//            this._el.css({'opacity':'0'});
            this._imgrow = $(this._el.find('.left-side .imgs ul.img-scroller')[0]);
            this._words = $(this._el.find('.words ul')[0]);
            this.words_spacer = $(this._el.find('.words .spacer')[0]);
            this._preview = $(this._el.find('.preview')[0]);
            this._textrow = $(this._el.find('.left-side .texts ul.txt-scroller')[0]);
            this.decorateWords(true);

            this.animateIn();
//            this.initRotation(); //bypass
        },

        animateIn : function(){
            this._words.css({'left':-300 }).hide();

            var textparent = this._textrow.parent();
            var textw = $(textparent).outerWidth();
            this._textrow.css({'left':textw});

            this._imgrow.css({'opacity':'0'});
            var staticTxt = $(this._el.find('.left-side .static')[0]);
            staticTxt.css({'right':'10px', 'opacity':0});

            var afterText = function(){
                this._imgrow.animate({ 'opacity': '1' }, 2000, 'easeOutQuad');
                this.initRotation();
                afterStatic = null;
            };
            var afterStatic = function(){
                this._textrow.animate({ 'left': '0' }, 600, 'easeInQuad');
                this._words.animate({ 'left': '0' }, 600, 'easeInQuad', $.proxy(afterText, this)).show();
            };
//            this._el.css({'opacity':'1'});
            this._el.show();
            staticTxt.animate({ 'right': '0', 'opacity':1 }, 2400, 'easeOutQuad', $.proxy(afterStatic, this));
        },

        initRotation : function(){
            this.manageRotationTimer(false);
//            $q.EventManager.addEventHandler($q.Event.MOSAIC_SCROLL_END, this.mosaicScrollHandler.bind(this));
            $q.EventManager.addEventHandler($q.Event.MOSAIC_SCROLL_END, $.proxy(this.mosaicScrollHandler, this));
        },

        mosaicScrollHandler : function(e, xdiff){
            this._currentMainMosaicX = xdiff;
            if(!$q._mosaic || !$q._mosaic._enabled) return;
            var homew = $($q._mosaic._home).width();

            //$log("PAGE.INTROCOLUMN.MOSAICSCROLLHANDLER --- xdiff:"+xdiff+" homew:"+homew);
            
            if(xdiff < -homew){//less than
                this.manageRotationTimer(true);
            } else {//greater than
                this.manageRotationTimer(false);
            }
        },

        manageRotationTimer : function(turnOff){
            if(!$q._mosaic) return;
            var _this = this;
            var homew = $($q._mosaic._home).width() ;
            var isNotViewable = this._currentMainMosaicX < -homew;
            if(!turnOff && !Quince._secondaryMosaic && !isNotViewable){
                if(!this._isrotating){
                    this.timer = setInterval($.proxy(_this.rotateWords, _this), _this.timerLength);
                    //$log("TURN ON HOMEPAGE");
                    this._isrotating = true;
                }
            } else {
                if(this._isrotating){
                    //$log("SHUT OFF HOMEPAGE");
                    clearInterval(this.timer);
                    this._isrotating = false;
                }
            }
        },

        decorateWords : function(firstTime){
            var _this = this;
            this._words = $(this._el.find('.words ul')[0]);

            var list_arr = this._words[0].children;
            var ind = Math.floor(Math.random() * $q.Brand.ALL_COLORS.length);
            var newcolor = firstTime ? $q.Brand.ALL_COLORS[0] : $q.Brand.ALL_COLORS[ind];

            $(list_arr[0]).addClass("active").find('h1').css({'color':newcolor, 'opacity':'1'});
            $(list_arr[list_arr.length-1]).hide();
            $(list_arr[list_arr.length-2]).css({'opacity':'0.2'}).fadeIn();

            for (var i = (list_arr.length - 1); i >= 3; i--){
                var word = $(list_arr[i]);
                var neg = i - list_arr.length;
                var val = Math.abs(neg * 0.1);
                firstTime ? word.css({'opacity':val}) : word.animate({'opacity':val}, 1000);
            }
        },

        wordClick : function(e){
            //$log("CLICK");
        },

        rotateWords : function(){
            var _this = this;
            var firstword = this._words.find('li:first');

            this._current >= (this._imgrow[0].children.length-1) ? this._current = 0 : this._current++;

            $(firstword[0]).animate(
                {'opacity':0},
                1000,
                function () {
                    $(this).appendTo(_this._words).removeClass('active').find('h1').css({'color':'inherit'});
                    _this.words_spacer.height(firstword.height());
                    _this.words_spacer.animate({'height':0}, 1000);
                    _this.decorateWords();
                });


            var imgw = $(this._imgrow[0].children[0]).width()
            var img_goto = -(this._current * imgw) + 'px';
//            this._imgrow.animate(
//                {'left':(img_goto)},
//                1000 );

            setTimeout(function(){
//                _this._imgrow.css({'left':(img_goto)});
                _this._imgrow.animate(
                    {'left':(img_goto)},
                    1000 );
            }, 1000);
        }

    });





    $q.Page.SubPage = $q.Page.extend({
        _mosaic:null,
        _columns:null,
        loading_items:false,
        building:false,
        currentColumnWidth:null,
        currentScrollX:0,
        _slider : null,
        _scroller : null,
        _content:null,
        columnWidths:{
            'xs':480,
            'md':720,
            'sh':540,
            'tl':700
        },
        _construct : function(el) {
            this._el = el;
            this._super(this._el);
            this.initContainer();

        },

        initContainer : function(){
//            if(!$q.isIE8){
            this._content = this._el.find('.content')[0];
            var m = $(this._content).find('.items');
            this._mosaic = $(m[0]);

            this._scroller = $(this._content).find('.scroller');

            this._slider = new IScroll(this._content, {
                scrollX: true,
                scrollY: false,
                mouseWheel: true,
                click:true,
                startX:0,
                useTransform: !$q.isIE8,
                snap: 'li'
//                deceleration:0.05,
//                momentum:!$q.isIE8
//                scrollbars:$q.isIE8,
//                interactiveScrollbars:$q.isIE8
            });

//            this._slider.on('scrollStart', $.proxy(this.onScrollStart, this));
//            this._slider.on('scrollCancel', $.proxy(this.onScrollCancel, this));
//            this._slider.on('scrollEnd', $.proxy(this.onScrollEnd, this));
//            this._slider.on('flick', $.proxy(this.onFlick, this));
//            this._slider.on('refresh', $.proxy(this.positionMosaic, this));
//            this._slider.on('beforeScrollStart', this.onBeforeScrollStart.bind(this));

            this.loading_items = true;
//            //$log("SUBPAGE INITCONTAINER ()  -- DETECTIONS =======  isMSGesture:"+$q.msGesture+" isTouch:"+$q.isTouch);

            var c = this._mosaic.find('li');

            this._columns = $(c);

//            this._columns.each(function(){
//                var mc = new $q.Page.ParentColumn(this);
//            });

            this.addEventHandlers();

            this.onResize(null);
        },

        addEventHandlers : function(){
            $q.EventManager.addEventHandler($q.Event.RESIZE, $.proxy(this.onResize, this));//this.onResize.bind(this));
        },

        removeEventHandlers : function(){

            $q.EventManager.removeEventHandler($q.Event.RESIZE, $.proxy(this.onResize, this));
        },

        onResize : function(e){

            var w = $(this._columns[0]).width();
            var totalw = (this._columns.length + 1) * w;
            var _this = this;
            //$log("SUB RESIZE() w:"+w+" totalwidth:"+totalw);


            $(this._scroller).width( totalw );

            if(w != this.currentColumnWidth && !$q.isIE8){  //one-time event fire when site shifts through a responsive media-query
                this.currentColumnWidth = w;
                setTimeout(function () {
                    _this._slider.refresh();
                }, 0);
            }

        },

        scaleColumns : function(w){
            var _this = this;
            //$log("SET WIDTH:"+w);
            this._columns.each(function(e){
                $(this).width(w);
            })
        },

        onFlick : function(e){
            //$log("FLICK----------------");
            $q.EventManager.fireEvent($q.Event.MOSAIC_FLICK, this);
        }

    });




    $q.Page.Init();

})(jQuery, Quince);
