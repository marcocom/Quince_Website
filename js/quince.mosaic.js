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
            _slider : null,
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
//            $log("Mosaic init");
            this._mosaic = null;
            this._columns = null;
            this.loading_items = false;
            this.building = false;

            this.currentColumnWidth = null;

            this.initContainer();

        },

        initContainer : function(){

            $q.Mosaic._slider = new IScroll('#slider-container', {
                scrollX: true,
                scrollY: false,
                mouseWheel: true,
                click:true
            });

//            $q.Mosaic._slider.scrollBy(-$q.windowWidth, 0, 2500);

            $q.Mosaic._slider.on('scrollStart', $.proxy(this.onScrollStart, this));
            $q.Mosaic._slider.on('scrollCancel', $.proxy(this.onScrollCancel, this));
            $q.Mosaic._slider.on('scrollEnd', $.proxy(this.onScrollEnd, this));
            $q.Mosaic._slider.on('flick', $.proxy(this.onFlick, this));

            $log("DETECTIONS =======  isMSGesture:"+$q.msGesture+" isTouch:"+$q.isTouch);

            var m = this._el.find('.mosaic-container');
            this._mosaic = $(m);
//
//            var tmpl_to_html = function(id) {
//                var $el = $('#' + id);
//                return _.template($el.html(), { });
//            };
//            var $e = $(tmpl_to_html('template'));



            var c = this._mosaic.find('.column');
            this._columns = $(c);

            this._columns.each(function(){
               var mc = new $q.Mosaic.ParentColumn(this);
            });



            $q.EventManager.addEventHandler($q.Event.RESIZE, $.proxy(this.onResize, this));//this.onResize.bind(this));
            Quince.EventManager.fireEvent(Quince.Event.RESIZE, this);

            $q.EventManager.addEventHandler($q.Event.MOSAIC_VIDEO, this.playbackVideo.bind(this));

        },

        onResize : function(){

            var w = $(this._columns[0]).width();
            var totalw = (this._columns.length) * w;
            var xs = 480;
            var md = 720;
            var sh = 540;
            var tl = 700;

            $('#slider-container .scroller').width(totalw);
            if(w != this.currentColumnWidth){  //one-time event fire when site shifts through a responsive media-query

                $q.Mosaic._slider.refresh();
                this.currentColumnWidth = w;

//
//                if($q.windowWidth < xs){
//                    Quince.EventManager.fireEvent(Quince.Event.RESIZE_SM_RESPONSE, this);
//                    this.scaleColumns($q.columnSizes.cell_total_sm_width);
//                } else
//                if($q.windowWidth >= xs && $q.windowWidth < md){
//                    Quince.EventManager.fireEvent(Quince.Event.RESIZE_MED_RESPONSE, this);
//                    this.scaleColumns($q.columnSizes.cell_total_med_width);
//                } else
//                if($q.windowWidth >= md){
//                    Quince.EventManager.fireEvent(Quince.Event.RESIZE_LRG_RESPONSE, this);
//                    this.scaleColumns($q.columnSizes.cell_total_container_width);
//                }

//
//                if($q.windowHeight > tl && $q.windowWidth > xs){
//                    Quince.EventManager.fireEvent(Quince.Event.RESIZE_TALL_RESPONSE, this);
//                    this.scaleColumns($q.columnSizes.cell_total_med_width);
//                } else
//                if($q.windowHeight < sh){
//                    Quince.EventManager.fireEvent(Quince.Event.RESIZE_SHORT_RESPONSE, this);
//                    this.scaleColumns($q.columnSizes.cell_total_short_width);
//                }
            }
//            $log("COLUMN RESIZE ----  w:"+$q.windowWidth+" columns:"+this.currentColumnWidth);

        },

        scaleColumns : function(w){
            var _this = this;
            $log("SET WIDTH:"+w);
            this._columns.each(function(e){
                $(this).width(w);
            })
        },

        onScrollStart : function(e){
//            $log("SCROLL START----------------");
            $q.EventManager.fireEvent($q.Event.MOSAIC_SCROLL_START, this);
            Quince.EventManager.fireEvent(Quince.Event.RESIZE);
        },

        onScrollCancel : function(e){
//            $log("SCROLL CANCEL----------------");
        },

        onScrollEnd : function(e){
//            $log("SCROLL END----------------");
            $q.EventManager.fireEvent($q.Event.MOSAIC_SCROLL_END, this);
        },

        onFlick : function(e){
//            $log("FLICK----------------");
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
//                    'href'          : "http://player.vimeo.com/video/82283832", //HD
                'href'          : url, //SD
//                    'href'          : "http://vimeo.com/moogaloop.swf?clip_id=82283832",
                'type'          : 'iframe',
                'swf'           : {
                    'wmode'             : 'transparent',
                    'allowfullscreen'   : 'false'

                },
                overlay: {
                    opacity: 0.1, // or the opacity you want
                    css: {'background-color': '#000000'} // or your preferred hex color value
                } // overlay
            });
        }
    });

    $q.Mosaic.ParentColumn = $q.Mosaic.extend({
        _construct : function(el) {
            this._el = $(el);
            this._super(this._el);
            this._grid = null;
            this.currentCellOpened = null;
            this._cells = new Array();
            this.loading_items = false;
            this.building = false;
            this.strict=false;
            this.overlay=false;
            this.building=false
            this.scroll=false;
            this.filter=false;
            this.grid_full=false;
            this.loading_items=false;

            this.initContainer();
        },

        initContainer : function(){
            var _this = this;
            this._grid = this._el.masonry({
                itemSelector: '.cell-box',
                columnWidth: 240,
                isAnimated: true
            }).masonry('bindResize');
//            this.grid.bindResize();

            var c = this._grid.masonry('getItemElements');
            $(c).each(function(e){
                var mc = new $q.Mosaic.Cell(this, _this._grid);
                _this._cells.push(mc);
            });

            //$log("INIT PARENT-COLUMN cells:"+ this._cells.length);

            Quince.EventManager.fireEvent(Quince.Event.RESIZE);
        }




    });

    $q.Mosaic.Cell = $q.Mosaic.extend({
        _construct : function(el, parentColumn) {
            this._el = $(el);
            this._super(this._el);
//            this._el.hammer({prevent_default: true});
            this._parent = parentColumn;

            this.loading_items = false;
            this.building = false;
            this.loading_items=false;
            this.opened=false;

            this.half_width = 235;
            this.full_width = 474; //plus margin space 2x2px
            this.half_height = 134;
            this.full_height = 272;

            this.deadzone = 5;
            this.startMouseX = null;
            this.offContent = null;
            this.onContent = null;
            this.sizeLetter = null;

            this._carousel = null;

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
            //$log("VIDEO ACTION -portal:"+portal+" num:"+num);

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
                    $q.EventManager.fireEvent($q.Event.PAGECHANGE, this, actionString);
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
                this.onContent.topZIndex();
                this.opened = true;
                if(this.sizeLetter == "f"){
                    this._carousel.flexslider("pause");
                    this.onContent.css({'top':'60%'});
                } else {
                    this.onContent.css({'top':(this.sizeLetter == 'a' ? '30%' : '0')});

                }
            }
        },

        closeInfo : function(){
            if(this.opened){
                this.offContent.removeClass('desaturate');
                this.onContent.css({'top':'100%'});
                this.opened = false;
                if(this.sizeLetter == "f") this._carousel.flexslider("play");
            }
        },

        onPress : function(e){
            e.preventDefault();
            e.stopPropagation();
            this.startMouseX = e.gesture.center.pageX;
            $log("ONPRESS [[]]:"+this.startMouseX);
        },

        onRelease : function(e){
            e.preventDefault();
            e.stopPropagation();
            var xdist = e.gesture.center.pageX - this.startMouseX;
            if(xdist < this.deadzone && xdist > -this.deadzone) this.onClick(null);
            $log("ONRELEASE ]][[:"+xdist);
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
    if($('#slider-container').length > 0) this.landingContent = new $q.Mosaic.Container('#slider-container');

})(jQuery, Quince);