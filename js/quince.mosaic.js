(function($, $q) {

    $q.Mosaic = Class.extend({
        _construct : function(el) {
            this._el = $(el);
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
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////BASE
    $q.Mosaic.Container = $q.Mosaic.extend({
        _mosaic:null,
        _columns:null,
        loading_items:false,
        building:false,
        currentColumnWidth:null,
        currentScrollX:0,
        _slider : null,
        _scrollerChild : null,
        _loader : null,
        _cta : null,
        _home : null,
        _enabled:true,
        filteringMode:null,
        columnWidths:{
            'xs':480,
            'md':720,
            'sh':540,
            'tl':700
        },
        _construct : function(el, filtering) {
            this._el = $(el);
            this._super(this._el);

            this.filteringMode = filtering;
            if(filtering == $q.Constants.Filters.CHRONOLOGICAL) this._home = $(this._el.find('.homepage')[0]);

            this._scrollerChild = $(this._el.find('.scroller')[0]);

            this.initContainer();
            $log("Mosaic init :"+filtering);

        },

        initContainer : function(){
//            if(!$q.isIE8){
            this._slider = new IScroll(this._el[0], {
                scrollX: true,
                scrollY: false,
                mouseWheel: true,
                click:true,
                startX:0,
                useTransform: !$q.isIE8,
//                snap: 'li',
                deceleration:0.05,
                momentum:!$q.isIE8
//                scrollbars:$q.isIE8,
//                interactiveScrollbars:$q.isIE8
            });

//            } else {
//                var sl = this._el.find('#slider-container .scroller')
//                this._slider = $(sl[0]);
//                this._slider.css({'overflow-y':'hidden', 'overflow-x':'visible'});
//            }

            this.loading_items = true;

            var m = this._el.find('.mosaic-container');
            this._mosaic = $(m);

            var c = this._mosaic.find('.column');
            this._columns = $(c);

            this._columns.each(function(){
               var mc = new $q.Mosaic.ParentColumn(this);
            });


            $q.EventManager.fireEvent($q.Event.RESIZE, this);

            this.initCTA();
            this._loader = $(".home-content .loader-anim").hide();

            if(this._home)this._home.show();
            this.onResize(null);
            this.showMosaic(true);
        },

        addEventHandlers : function(){
            this._slider.on('scrollStart', $.proxy(this.onScrollStart, this));
            this._slider.on('scrollEnd', $.proxy(this.onScrollEnd, this));
            $q.EventManager.addEventHandler($q.Event.RESIZE, this.onResize.bind(this));
            $q.EventManager.addEventHandler($q.Event.MOSAIC_VIDEO, this.playbackVideo.bind(this));
            $q.EventManager.addEventHandler($q.Event.MODEL_COLUMNS_NODATA, this.onEndOfData.bind(this));
            $q.EventManager.addEventHandler($q.Event.MODEL_COLUMN_LOADING, $.proxy(this.onLoadingData, this));
            $q.EventManager.addEventHandler($q.Event.MODEL_COLUMN_LOADED, $.proxy(this.appendMosaic, this));
        },

        removeEventHandlers : function(){
            this._slider.off('scrollStart');
            this._slider.off('scrollEnd');
            $q.EventManager.removeEventHandler($q.Event.RESIZE, this.onResize);
            $q.EventManager.removeEventHandler($q.Event.MOSAIC_VIDEO, this.playbackVideo);
            $q.EventManager.removeEventHandler($q.Event.MODEL_COLUMNS_NODATA, this.onEndOfData);
            $q.EventManager.removeEventHandler($q.Event.MODEL_COLUMN_LOADING, this.onLoadingData);
            $q.EventManager.removeEventHandler($q.Event.MODEL_COLUMN_LOADED, this.appendMosaic);
        },

        initCTA : function(){
            var _this = this;

            var cta = this._el.find('.cta-msg');
            this._cta = $(cta[0]);
            this._cta.css({'left':'150px'});
            if($q.isIE8) this._cta.css({'width':'230px'});

            setTimeout(function(){
                // Get the width here
                _this.animateCTA();
            },2000);
        },

        animateCTA : function(){

            //this._slider.x <= this._slider.maxScrollX
            if(this._slider){

                var go = ($q.windowWidth + Math.abs(this._slider.x)) - (this._cta.width() + 10);
                var currentX = Number(this._cta.css('left').split('px')[0]);

                if(go > currentX && this._enabled)
                    this._cta.animate({ left: (go+'px') }, 600, 'easeOutBounce');
            }

        },

        onLoadingData : function(e){
            this.loading_items = true;
            this._loader.show();
        },

        onEndOfData : function(e){
            this.loading_items = false;
            if(this._home){
                var homew = $q.windowWidth - 50;
                this._home.width(homew);
            }
            var w = $(this._columns[0]).width();
            var totalw = (this._columns.length * w) + (homew || 0);
            this._scrollerChild.width(totalw);
            this._slider.refresh();
            this._loader.hide();

            this._cta.fadeOut();
        },

        onResize : function(e){
            if(!this._enabled) return;
            if(this._home){
                var homew = $q.windowWidth - 50;
                if(homew <= 350) homew = 350;
                this._home.width(homew);
            }

            var w = $(this._columns[0]).width();
            var totalw = (this._columns.length * w) + (this.loading_items ? 50 : 0 ) + (homew || 0);
            var slider = this._slider;

            this._scrollerChild.width(totalw);

            if(w != this.currentColumnWidth && !$q.isIE8){  //one-time event fire when site shifts through a responsive media-query

                this.currentColumnWidth = w;

                setTimeout(function () {
                    slider.refresh();
                }, 0);

            }

        },

        appendMosaic: function(e){

//            $log("REFRESH MOSAIC!!!!!!");
            var c = this._mosaic.find('.column');
            var newcol = c[c.length-1];

            this._columns.push(newcol);
            var totalw = (this._columns.length) * this.currentColumnWidth;
            $('#slider-container .scroller').width(totalw);

            var mc = new $q.Mosaic.ParentColumn(newcol);

            this._loader.hide();

            this._home.show();

            this._slider.refresh();

        },

        removeMosaic: function(){
            this._columns.each(function(el){
                $(this).empty();
            })
            this.removeEventHandlers();
            this._slider.destroy();
            this._slider = null;
            this._mosaic.empty();
            this._mosaic = null;
            this._el.empty();
            this._el = null;
        },


        showMosaic : function(reveal){
            $log("SHOW MOSAIC - reveal:"+reveal, this._el);
            if(reveal){
                this.addEventHandlers();
                this._el.show();
//                this._loader.show();
                this._cta.show();
                this._slider.enable();
                this._enabled = true;
                $log("-----------MOSAIC:"+this.filteringMode+" SHOW!!!");
            }  else {
                this.removeEventHandlers();
                this._el.hide();
                this._loader.hide();
                this._cta.hide();
                this._slider.disable();
                this._enabled = false;
                $log("-----------MOSAIC:"+this.filteringMode+" HIDE!!!");
            }
        },

        positionMosaic : function(){
//            this._slider.scrollTo(this.currentScrollX, 0, 0);
            this._slider.forcePositionX(this.currentScrollX);
        },

        scaleColumns : function(w){
            var _this = this;
//            $log("SET WIDTH:"+w);
            this._columns.each(function(e){
                $(this).width(w);
            })
        },

        onScrollStart : function(e){
//            $log("SCROLL START----------------");
            if(this._enabled) $q.EventManager.fireEvent($q.Event.MOSAIC_SCROLL_START, this);
        },

        onScrollCancel : function(e){
//            $log("SCROLL CANCEL----------------");
        },

        onScrollEnd : function(e){
//            $log("SCROLL END---------------- X:"+this.x);
                this.currentScrollX = this._slider.x;
                this.animateCTA();
//            if(this._slider.x <= this._slider.maxScrollX) this._loader.show();
            if(this._enabled) $q.EventManager.fireEvent($q.Event.MOSAIC_SCROLL_END, this, this._slider.x, this._slider.maxScrollX, this._slider.directionX, this._slider.directionY);
        },

        onFlick : function(e){
            $log("FLICK----------------");
            $q.EventManager.fireEvent($q.Event.MOSAIC_FLICK, this);
        },

        playbackVideo : function(e, url){
//            $log("VIDEO PLAYER----------   src:"+url);

            $.fancybox({

                'padding': 0,
                'autoScale'     : false,
                'transitionIn'  : 'none',
                'transitionOut' : 'none',
                'title'         : "",
                'autoPlay'      : true,
                'hideOnOverlayClick' : true,
                'width'         : 1280,
                'height'        : 720,
                'href'          : url,
                'type'          : 'iframe',
                'swf'           : {
                    'wmode'             : 'transparent',
                    'allowfullscreen'   : 'false'

                },
                overlay: {
                    opacity: 0.2,
                    css: {'background-color': '#FFFFFF'}
                } // overlay
            });
        }
    });




    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////COLUMNS
    $q.Mosaic.ParentColumn = $q.Mosaic.extend({
        _grid:null,
        _cells:[],
        currentCellOpened:null,
        loading_items:false,
        building:false,
        strict:false,
        overlay:false,
        scroll:false,
        filter:false,
        grid_full:false,

        _construct : function(el) {
            this._el = $(el);
            this._super(this._el);


            this.initContainer();
        },

        initContainer : function(){
            var _this = this;
            this._grid = this._el.masonry({
                itemSelector: '.cell-box',
                columnWidth: 240,
                isAnimated: true
            }).masonry('bindResize');

            var c = this._grid.masonry('getItemElements');
            $(c).each(function(e){
                var mc = new $q.Mosaic.Cell(this, _this._grid);
                _this._cells.push(mc);
            });

            $q.EventManager.fireEvent(Quince.Event.RESIZE, this);
        }
    });




    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CELLS
    $q.Mosaic.Cell = $q.Mosaic.extend({
        _parent:null,
        _carousel:null,
        loading_items:false,
        building:false,
        opened:false,
        half_width:235,
        full_width:474,
        half_height:134,
        full_height:272,
        deadzone:5,
        startMouseX:null,
        offContent:null,
        onContent:null,
        sizeLetter:null,

        _construct : function(el, parentColumn) {
            this._el = $(el);
            this._super(this._el);
//            this._el.hammer({prevent_default: true});
            this._parent = parentColumn;

            this.initContainer();

            return this.closeInfo;
        },

        initContainer : function(){
            this.sizeLetter = this.getItemSize(this._el);
//            $log("CELL INIT -- SIZE:"+this.sizeLetter+" parent:"+this._parent);


            var n = this._el.find('.on-state');
            var f = this._el.find('.off-state');

            this.offContent = $(f);
            this.onContent = n.length > 0 ? $(n) : null;

            if(this.sizeLetter == "a" || this.sizeLetter == "b" || this.sizeLetter == "j" || this.sizeLetter == "f"){

                if($q.msGesture){
                    this._el.on('MSPointerDown', $.proxy(this.onMsPress, this));
                    this._el.on('MSGestureEnd', $.proxy(this.onMsRelease, this));
                } else {
                    this._el.hammer().on('touch', $.proxy(this.onPress, this));
//                                    this._el.on('mousedown, touchstart', $.proxy(this.onPress, this));
                    //                this._el.mousedown($.proxy(this.onPress, this));

                    this._el.hammer().on('release', $.proxy(this.onRelease, this));
//                                    this._el.on('mouseup, touchend', $.proxy(this.onRelease, this));
                    //                this._el.mouseup($.proxy(this.onRelease, this));

                }
            } else
            if(this.sizeLetter == "e"){
                this.colorizeCell();
                this.processPageAction(this._el.data('action'));

            }




            if(this.sizeLetter == "f"){
                this._carousel = this._el.find('.flexslider').flexslider({
                    namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
                    selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
                    animation: "fade",              //String: Select your animation type, "fade" or "slide"
                    easing: "swing",               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
                    direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
                    reverse: false,                 //{NEW} Boolean: Reverse the animation direction
                    animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
                    smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
                    startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
                    slideshow: true,                //Boolean: Animate slider automatically
                    slideshowSpeed: 4000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
                    animationSpeed: 500,            //Integer: Set the speed of animations, in milliseconds
                    initDelay: (Math.random * 5000),                   //{NEW} Integer: Set an initialization delay, in milliseconds
                    randomize: false,               //Boolean: Randomize slide order

// Usability features
                    pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
                    pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
                    useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
                    touch: false,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
                    video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches

// Primary Controls
                    controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
                    directionNav: false,             //Boolean: Create navigation for previous/next navigation? (true/false)
                    prevText: "Previous",           //String: Set the text for the "previous" directionNav item
                    nextText: "Next",               //String: Set the text for the "next" directionNav item

// Secondary Navigation
                    keyboard: false,                 //Boolean: Allow slider navigating via keyboard left/right keys
                    multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
                    mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
                    pausePlay: false,               //Boolean: Create pause/play dynamic element
                    pauseText: 'Pause',             //String: Set the text for the "pause" pausePlay item
                    playText: 'Play',               //String: Set the text for the "play" pausePlay item

// Special properties
                    controlsContainer: "",          //{UPDATED} Selector: USE CLASS SELECTOR. Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be ".flexslider-container". Property is ignored if given element is not found.
                    manualControls: "",             //Selector: Declare custom control navigation. Examples would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
                    sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
                    asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider

// Carousel Options
                    itemWidth: 474,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
                    itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
                    minItems: 0,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
                    maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
                    move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.

// Callback API
                    start: function(slider){
//                        $(slider).find('.slides li img').click(function(event){
//                            event.preventDefault();
//                            slider.flexAnimate(slider.getTarget("next"));
//                        });
                    },            //Callback: function(slider) - Fires when the slider loads the first slide
                    before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
                    after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
                    end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
                    added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
                    removed: function(){}           //{NEW} Callback: function(slider) - Fires after a slide is removed
                });
            }

            $q.EventManager.addEventHandler($q.Event.OPEN_CELL, this.onCellClick.bind(this));
            $q.EventManager.addEventHandler($q.Event.MOSAIC_SCROLL_START, this.closeInfo.bind(this));


        },

        processVideoAction : function(portal){

            var num = this._el.data('ref');

            var url = "http://";
            if(portal == "vim") url += "player.vimeo.com/video/";
            if(portal == "yt") url += "youtube.com/?";

            if(num){
                url += num;
            } else {
                url = "http://vimeo.com/quinceamsterdam";
            }

            $q.EventManager.fireEvent($q.Event.MOSAIC_VIDEO, this, url);
        },

        processPageAction : function(actionString){
            //$log("ACTION:"+actionString);

            if(actionString != "none"){
                this._el.click(function(e){
                    e.preventDefault();
//                    $q.EventManager.fireEvent($q.Event.PAGECHANGE, this, actionString);
                    $q.cellRouter.navigate(actionString, {trigger:true});
                })
                this._el.css({'cursor':'pointer'});
            }
        },

        colorizeCell : function(){
            var ind = Math.floor(Math.random() * $q.Brand.ALL_COLORS.length);
            //$log("COLORIZE CELL index:"+ind);
            var newcolor = $q.Brand.ALL_COLORS[ind];
            this._el.find('.off-state').css({'background-color':newcolor});
        },

        onCellClick : function(e, target){
            var isMe = e == this;
            if(!isMe && this.opened) this.closeInfo();
        },

        onClick : function(e){

            //$log("CELL CLICKED!");
            if(!this.opened){
                this.openInfo();
            } else {
                if(this.sizeLetter == "j") this.processVideoAction(this._el.data('portal'));
                this.closeInfo();
            }
        },

        openInfo : function(){
            if(!this.opened){
                $q.EventManager.fireEvent($q.Event.OPEN_CELL, this);
                var t = Math.round(this._el.height() - 20);
                //if($q.platformDetect.android || $q.platformDetect.blackberry || $q.platformDetect.iphone)
                    this.offContent.addClass('desaturate');
                if(this.onContent) this.onContent.topZIndex();
                this.opened = true;
                if(this.sizeLetter == "f"){
                    this._carousel.flexslider("pause");
                    if(this.onContent) this.onContent.css({'top':'60%'});
                } else {
                    this.onContent.css({'top':(this.sizeLetter == 'a' ? '30%' : '0')});

                }
            }
        },

        closeInfo : function(){
            if(this.opened){
                this.offContent.removeClass('desaturate');
                if(this.onContent) this.onContent.css({'top':'100%'});
                this.opened = false;
                if(this.sizeLetter == "f") this._carousel.flexslider("play");
            }
        },

        onPress : function(e){
            e.preventDefault();
            e.stopPropagation();
            this.startMouseX = e.gesture.center.pageX;
//            $log("ONPRESS [[]]:"+this.startMouseX);
        },

        onRelease : function(e){
            e.preventDefault();
            e.stopPropagation();
            var xdist = e.gesture.center.pageX - this.startMouseX;
            if(xdist < this.deadzone && xdist > -this.deadzone) this.onClick(null);
//            $log("ONRELEASE ]][[:"+xdist);
        },

        onMsPress : function(e){
            e.preventDefault();
            e.stopPropagation();
//            $log("CELL PRESS!");
            this.startMouseX = e.pageX;
        },

        onMsRelease : function(e){
//            $log("CELL RELEASE!");
            e.preventDefault();
            e.stopPropagation();
            var xdist = e.pageX - this.startMouseX;
            if(xdist < this.deadzone && xdist > -this.deadzone) this.onClick(null);

        },

        getItemSize : function(item) {
            if(item.hasClass('cell-a')) return 'a';
            if(item.hasClass('cell-b')) return 'b';
            if(item.hasClass('cell-c')) return 'c';
            if(item.hasClass('cell-d')) return 'd';
            if(item.hasClass('cell-e')) return 'e';
            if(item.hasClass('cell-f')) return 'f';
            if(item.hasClass('cell-g')) return 'g';
            if(item.hasClass('cell-h')) return 'h';
            if(item.hasClass('cell-i')) return 'i';
            if(item.hasClass('cell-j')) return 'j';
            return '';
        }

    });



    $q.Mosaic.Init();

    if($('.home-content').length > 0) Quince._landingPage = new $q.Page.Home('.home-content');


})(jQuery, Quince);