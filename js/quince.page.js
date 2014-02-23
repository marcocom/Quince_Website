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
            this.closeButton = null;
            this.initPage();
        },

        initPage : function(){

            this.closeButton = $('.sub-close-cta a').click($.proxy(this.pageCollapse, this));
            
            
            this.toplinks.click($.proxy(this.toplinkAnimate, this));

            $q.EventManager.addEventHandler($q.Event.PAGECHANGE, this.catchPageChange.bind(this));

        },

        catchPageChange : function(e, props){
            $log("PAGECHANGE e:"+e+" props:"+props);
            this.toplinkAnimate(null,props);
        },

        onOpenTransitionEnd : function(){

                this.subcontentOpened = true;
                //this._el.mouseover($.proxy(this.pageCollapse, this));
//                this._el.touch($.proxy(this.pageCollapse, this));

                this._el.bind('tap click swipe focus', $.proxy(this.pageCollapse, this));
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

        pageCollapse : function(e){
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

        toplinkAnimate : function(e, remoteLink){
            if(e) e.preventDefault();

            var c = e ? $(e.currentTarget)[0] : null;
            var ref = "."+( remoteLink ? remoteLink : c.id) + "-content";
            var $content = $(ref);
            var _this = this;
            if(this.subcontentOpened == false){

                $content.show();
//                $content.addClass('opened');

                var t = $content.find('.content')[0];
                var targetHeight = $(t).height() + ($('body').hasClass('ipad-iphone') ? 10 : 40);
                var maxHeight = $q.windowHeight - 30;

                if(targetHeight > maxHeight) targetHeight = maxHeight;

                $log("TOPLINKACTION: subOpened:"+this.subcontentOpened+" targetHeight:"+targetHeight+" currentContent:"+ this.currentContent);

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
                $log("TOPLINKACTION: subOpened:"+this.subcontentOpened+" currentContent:"+this.currentContent.selector);
                $log("NEW CONTENT:"+$content.selector);
                if(this.currentContent.selector != $content.selector){
                    this.contentSwap = c;
                    $log("CONTENTSWAP REASSIGNED-------")
                } else {
                    this.contentSwap = null;
                }

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
