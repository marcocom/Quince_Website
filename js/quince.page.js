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
        _construct : function(el) {
           // this._submit = $('#sign-in-button');
           // this._postUrl = '/login';
            this._el = $(el);
            this._super(this._el);
            $log("Register init");
            this.toplinks = $(this._el.find('.header .toplink'));
            this.subcontentOpened = false;
            this.currentContent = null;
            this.contentSwap = null;
            this.initPage();
        },

        initPage : function(){

//            $.fancybox({
//                padding: 0,
//                'autoScale'     : false,
//                'transitionIn'  : 'none',
//                'transitionOut' : 'none',
//                'title'         : "Christmas Wishes",
//                'autoPlay'      : true,
//                'hideOnOverlayClick' : true,
//                'width'         : 1280,
//                'height'        : 720,
////                    'href'          : "http://player.vimeo.com/video/82283832", //HD
//                'href'          : "http://player.vimeo.com/video/82293470", //SD
////                    'href'          : "http://vimeo.com/moogaloop.swf?clip_id=82283832",
//                'type'          : 'iframe',
//                'swf'           : {
//                    'wmode'             : 'transparent',
//                    'allowfullscreen'   : 'true',
//
//                },
//                overlay: {
//                    opacity: 0.3, // or the opacity you want
//                    css: {'background-color': '#ff0000'} // or your preferred hex color value
//                } // overlay
//            });


            this.toplinks.click($.proxy(this.toplinkAnimate, this));

        },
        onOpenTransitionEnd : function(){

                this.subcontentOpened = true;
                //this._el.mouseover($.proxy(this.pageOver, this));
//                this._el.touch($.proxy(this.pageOver, this));

                this._el.bind('tap click swipe focus', $.proxy(this.pageOver, this));
            $log("OPEN TRANSITION END - subcontentOpened:"+this.subcontentOpened);
        },
        onCloseTransitionEnd : function(){
            // THIS ALLOWS FOR A SWAPPING FROM LINKED SECTION TO SECTION THROUGH HAND-OFF OF THE 'currentSwap' VALUE.  BUT IS NOT NEEDED WITH THE MOUSEOVER LOGIC.
            $log("CLOSE TRANSITION END - subcontentOpened:"+this.subcontentOpened);
            if(this.subcontentOpened == true){
                this.subcontentOpened = false;
                this.currentContent.hide();
                this.currentContent = null;
                this.setScrollable(true);

                if(this.contentSwap != null){
                    $(this.contentSwap).trigger('click');
                    $log("CONTENT SWAP:"+this.contentSwap);
                    this.contentSwap = null;
                }

            }
        },
        pageOver : function(e){
//            if(this.subcontentOpened) this._el.css('top', '0px');
            var _this = this;
            if(this.subcontentOpened)
            this._el.animate({
                top:'0'
            }, 500, function(){
                _this.onCloseTransitionEnd();
            });
            this._el.mouseover(null);
            this._el.unbind('tap click swipe focus');
//            this._el.touch(null);
        },
        toplinkAnimate : function(e){
            e.preventDefault();

            var c = $(e.currentTarget)[0];
            var ref = "."+c.id + "-content";
            var $content = $(ref);
            var _this = this;
            if(this.subcontentOpened == false){

                $content.show();
//                $content.addClass('opened');

                var t = $content.find('.content')[0];
                var targetHeight = $(t).height() + ($('body').hasClass('ipad-iphone') ? 10 : 40);

                $log("TOPLINKACTION: subOpened:"+this.subcontentOpened+" targetHeight:"+targetHeight+" currentContent:", this.currentContent);

                this.setScrollable(false);
                this.currentContent = $content;

//                this._el.css('top', (targetHeight + 'px'));

                this._el.animate({
                    top:targetHeight
                }, 500, function(){
                    _this.onOpenTransitionEnd();
                });
            }
            else {
                $log("TOPLINKACTION: subOpened:"+this.subcontentOpened+" currentContent:", this.currentContent);
                if(this.currentContent !== $content) this.contentSwap = c;

                this._el.animate({
                    top:'0'
                }, 500, function(){
                    _this.onCloseTransitionEnd();
                });
            }
        },

        onRevealComplete : function(){
          $log("--GREENSOCK WORKS");
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

    $q.Page.Init();

    if($('.home-content').length > 0) this.landingContent = new $q.Page.Home('.home-content');

})(jQuery, Quince);
