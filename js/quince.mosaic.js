/*
Mosaic controller.  All elements are generated from recieved data using the Quince.Model class,
where they are injected into the templates and written to the page. Upon completion and even notification,
its Quince.Mosaic that is the initialized controller for each new wall, their seperate columns, and each individual cell.
 */
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
        _mosaic_container:null,
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
            $q._currentMosaic = this;
            // this.initContainer();
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



            this.loading_items = true;

            var m = this._el.find('.mosaic-container');
            // this._mosaic_container = $(m);
            this._mosaic_container = $(m).addClass(this.filteringMode);
            if(this.filteringMode == $q.Constants.Filters.CUSTOMER && Quince._currentModel._filterVal == "all") this._mosaic_container.addClass('filtered');


            var c = this._mosaic_container.find('.column');
            this._columns = $(c);

            this._columns.each(function(){
               var mc = new $q.Mosaic.ParentColumn(this);
            });


            $q.EventManager.fireEvent($q.Event.RESIZE, this);

            this.initCTA();
            this._loader = $(".home-content .loader-anim").hide();

            if(this._home){
                this._home.show();
            }

            this.onResize(null);
            this.showMosaic(true);
        },

        addEventHandlers : function(){
            this._slider.on('scrollStart', $.proxy(this.onScrollStart, this));
            this._slider.on('scrollEnd', $.proxy(this.onScrollEnd, this));
            $q.EventManager.addEventHandler($q.Event.RESIZE, this.onResize.bind(this));
            $q.EventManager.addEventHandler($q.Event.MOSAIC_VIDEO, this.playbackVideo.bind(this));
            $q.EventManager.addEventHandler($q.Event.MODEL_COLUMNS_NODATA, this.onEndOfData.bind(this));
            $q.EventManager.addEventHandler($q.Event.MODEL_COLUMN_LOADING, this.onLoadingData.bind(this));
            $q.EventManager.addEventHandler($q.Event.MODEL_COLUMN_LOADED, this.onLoadingData.bind(this));
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
                _this.animateCTA();
            },2000);
        },

        animateCTA : function(){
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

            if(!this._enabled) return;

            var newcol = $(this._mosaic_container.find('.column').filter(":last"));

            this._columns.push(newcol);

            var totalw = (this._columns.length) * this.currentColumnWidth;
            $('#slider-container .scroller').width(totalw);

            $log("MOSAIC APPEND:");
            $dir(newcol);
            new $q.Mosaic.ParentColumn(newcol);


            this._slider.refresh();

            this._loader.hide();

            if(this._home){
                this._home.show();
                Quince._landingAnimation.manageRotationTimer(true);
            }


        },

        removeMosaic: function(){

            this._columns.each(function(el){
                $(this).empty();
            })
            this.removeEventHandlers();
            this._slider.destroy();
            this._mosaic_container.empty();
            this._el.empty();
        },

        showMosaic : function(reveal){
            if(reveal){

                this.addEventHandlers();
                this._el.show();
//                this._loader.show();
                this._cta.show();
                this._slider.enable();
                this._enabled = true;

            }  else {

                this.removeEventHandlers();
                this._el.hide();
                this._loader.hide();
                this._cta.hide();
                this._slider.disable();
                this._enabled = false;

            }
        },

        positionMosaic : function(){
            this._slider.forcePositionX(this.currentScrollX);
        },

        scaleColumns : function(w){
            var _this = this;
            this._columns.each(function(e){
                $(this).width(w);
            })
        },

        onScrollStart : function(e){
            if(this._enabled) $q.EventManager.fireEvent($q.Event.MOSAIC_SCROLL_START, this);
        },

        onScrollCancel : function(e){
//            $log("SCROLL CANCEL----------------");
        },

        onScrollEnd : function(e){
            this.currentScrollX = this._slider.x;
            this.animateCTA();

            if(this._enabled && $q._currentModel) {
                $q._currentModel.mosaicScrollHandler(null, this._slider.x, this._slider.maxScrollX, this._slider.directionX, this._slider.directionY);
                $q._landingAnimation.mosaicScrollHandler(null, this._slider.x);
            } else {
                $q.EventManager.fireEvent($q.Event.MOSAIC_SCROLL_END, this, this._slider.x, this._slider.maxScrollX, this._slider.directionX, this._slider.directionY);
            }
        },

        onFlick : function(e){
            $q.EventManager.fireEvent($q.Event.MOSAIC_FLICK, this);
        },

        playbackVideo : function(e, url){

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


            $dir(this._el);
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
            this._parent = parentColumn;

            this.initContainer();

            return this.closeInfo;
        },

        initContainer : function(){
            this.sizeLetter = this.getItemSize(this._el);

            var n = this._el.find('.on-state');
            var f = this._el.find('.off-state');

            this.offContent = $(f);
            this.onContent = n.length > 0 ? $(n) : null;

            if(this.sizeLetter == "a" || this.sizeLetter == "b" || this.sizeLetter == "j" || this.sizeLetter == "f" || this.sizeLetter == "p"){
                if($q.msGesture){
                    this._el.on('MSPointerDown', $.proxy(this.onMsPress, this));
                    this._el.on('MSGestureEnd', $.proxy(this.onMsRelease, this));
                } else {
                    this._el.hammer().on('touch', $.proxy(this.onPress, this));
                    this._el.hammer().on('release', $.proxy(this.onRelease, this));
                }
            } else
            if(this.sizeLetter == "e"){
                this.colorizeCell();
                this.processPageAction(this._el.data('action'));
            } else
            if(this.sizeLetter == "c"){
                this.processClientAction(this._el.data('client'));
            } else
            if(this.sizeLetter == "h"){
                var link = $(this.onContent.find('.author a')[0]);
                    link.click(function(e){
                        e.preventDefault();
                        $q.cellRouter.navigate("author/"+ $(this).data('author'), {trigger:true});
                    }).css({'cursor':'pointer'});
            }

            if(this.sizeLetter == "f"){
                this._carousel = this._el.find('.flexslider').flexslider({
                    namespace: "flex-",
                    selector: ".slides > li",
                    animation: "fade",
                    easing: "swing",
                    direction: "horizontal",
                    reverse: false,
                    animationLoop: true,
                    smoothHeight: false,
                    startAt: 0,
                    slideshow: true,
                    slideshowSpeed: 4000,
                    animationSpeed: 500,
                    initDelay: (Math.random * 5000),
                    randomize: false,

// Usability features
                    pauseOnAction: true,
                    pauseOnHover: false,
                    useCSS: true,
                    touch: false,
                    video: false,

// Primary Controls
                    controlNav: true,
                    directionNav: false,
                    prevText: "Previous",
                    nextText: "Next",

// Secondary Navigation
                    keyboard: false,
                    multipleKeyboard: false,
                    mousewheel: false,
                    pausePlay: false,
                    pauseText: 'Pause',
                    playText: 'Play',

// Special properties
                    controlsContainer: "",
                    manualControls: "",
                    sync: "",
                    asNavFor: "",

// Carousel Options
                    itemWidth: 474,
                    itemMargin: 0,
                    minItems: 0,
                    maxItems: 0,
                    move: 0,

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

            if(actionString != "none"){
                this._el.click(function(e){
                    e.preventDefault();
//                    $q.EventManager.fireEvent($q.Event.PAGECHANGE, this, actionString);
                    $q.cellRouter.navigate(actionString, {trigger:true});
                })
                this._el.css({'cursor':'pointer'});
            }
        },
        processClientAction : function(actionString){
            //$log("ACTION:"+actionString);

            if(actionString != "none"){
                this._el.click(function(e){
                    e.preventDefault();
//                    $q.EventManager.fireEvent($q.Event.PAGECHANGE, this, actionString);
                    $q.cellRouter.navigate("client/"+actionString, {trigger:true});
                })
                this._el.css({'cursor':'pointer'});
            }
        },

        colorizeCell : function(){
            var ind = Math.floor(Math.random() * $q.Brand.ALL_COLORS.length);
            var newcolor = $q.Brand.ALL_COLORS[ind];
            this._el.find('.off-state').css({'background-color':newcolor});
        },

        onCellClick : function(e, target){
            var isMe = e == this;
            if(!isMe && this.opened) this.closeInfo();
        },

        onClick : function(e){

            if(!this.opened){
                this.openInfo();
            } else {
                if(this.sizeLetter == "j") this.processVideoAction(this._el.data('portal'));
                this.closeInfo();
            }
        },

        openInfo : function(){

            var ypoints = {
                'a':'30%',
                'b':'0',
                'f':'50%',
                'j':'0',
                'p':'20%'
            }

            if(!this.opened){
                $q.EventManager.fireEvent($q.Event.OPEN_CELL, this);
                var t = Math.round(this._el.height() - 20);
                //if($q.platformDetect.android || $q.platformDetect.blackberry || $q.platformDetect.iphone)
                    this.offContent.addClass('desaturate');
//                if(this.onContent) this.onContent.topZIndex();
                this.opened = true;
                if(this.sizeLetter == "f") this._carousel.flexslider("pause");
                if(this.onContent){
                    $q.isIE8 ?
                        this.onContent.animate({ 'top': ypoints[this.sizeLetter] }, 1000, 'easeOutQuad'):
                        this.onContent.css({'top':ypoints[this.sizeLetter]});
                }

                if(this.sizeLetter == "p" || this.sizeLetter == "a" || this.sizeLetter == "b" || this.sizeLetter == "j"){
                    var link = $(this.onContent.find('.author a')[0]);
                    setTimeout(function(){
                        link.click(function(e){
                            e.preventDefault();
                            $q.cellRouter.navigate("author/"+ $(this).data('author'), {trigger:true});
                        }).css({'cursor':'pointer'});
                    } , 2000);
                }


            }
        },

        closeInfo : function(){

            var ypoints = {
                'a':'100%',
                'b':'100%',
                'f':'90%',
                'j':'100%',
                'p':'88%'
            }
            if(this.opened){
                this.offContent.removeClass('desaturate');
                this.opened = false;
                if(this.sizeLetter == "f") this._carousel.flexslider("play");
                if(this.sizeLetter == "p"){
                    var link = $(this.onContent.find('.author a')[0]);
//                    link.unbind('click').css({'cursor':'default'});
                }
                if(this.onContent){
                    $q.isIE8 ?
                        this.onContent.animate({ 'top': ypoints[this.sizeLetter] }, 1000, 'easeOutQuad'):
                        this.onContent.css({'top':ypoints[this.sizeLetter]});
                }
            }
        },

        onPress : function(e){
            e.preventDefault();
            e.stopPropagation();
            this.startMouseX = e.gesture.center.pageX;
        },

        onRelease : function(e){
            e.preventDefault();
            e.stopPropagation();
            var xdist = e.gesture.center.pageX - this.startMouseX;
            if(xdist < this.deadzone && xdist > -this.deadzone) this.onClick(null);
        },

        onMsPress : function(e){
            e.preventDefault();
            e.stopPropagation();
            this.startMouseX = e.pageX;
        },

        onMsRelease : function(e){
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
            if(item.hasClass('cell-p')) return 'p';
            return '';
        }

    });



    $q.Mosaic.Init();

    if($('.home-content').length > 0) Quince._landingPage = new $q.Page.Home('.home-content');


})(jQuery, Quince);