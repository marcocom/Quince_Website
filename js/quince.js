(function($) {

    var $q = Quince = {

        resetpassword : null,
        isUserLoggedIn : false,
        contentManagementSysURL:"",
        _something:true,
        _uid : 0,
        isIE8 : navigator.userAgent.indexOf('MSIE 8') > -1, //("v" == "\v"),
        isFF : navigator.userAgent.indexOf('Firefox') > 0,
        isHandheldPortrait : $('body').width() < 450 && $('body').height() > $('body').width(),
        msGesture : window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
        isTouch : (( "ontouchstart" in window ) || this.msGesture || window.DocumentTouch && document instanceof DocumentTouch),
        googleAccount:"UA-1007198-3",
        cellImageDirectory:"img/cells/",
        _popups : {},

        windowWidth:0,
        windowHeight:0,
        columnSizes : {
            cell_total_container_width:720,
            cell_total_med_width:960,
            cell_total_sm_width:1682,
            cell_total_extra_tall:482,
            cell_total_short_width:482
            },
        _currentPopup : null,
        _mosaic:null,
        _model:null,
        _secondaryMosaic:null, //controller and model for second 'refined' wall upon use of search/refine features. destroyed and reused.
        _secondaryModel:null,
        _landingPage:null,
        _landingAnimation:null,
        AncillaryLetters : ["d", "e", "i", "g"], //cell-types that are not CMS data-fed.  pulled from objects below.
        DataLetters : ["a", "b", "c", "f", "h", "j"], //cell-types that are CMS data-fed.


        init: function() {
            if ($.support.touch) $('body').addClass('ipad-iphone');
            this.setupEventManager();
            $log("QUINCE:INIT isHandheld:"+this.isHandheldPortrait+"  --UA:"+navigator.userAgent+" isIE8:"+this.isIE8);

            this.windowWidth = $(window).width();
            this.windowHeight = $(window).height();

            $(window).resize($.proxy(this.onResize, this));

            $("#slider-container").hide();
           // document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

//            Quince.eventManager.addEventHandler(Quince.Event.LOGIN_SUCCESS_FB_USER,this.fbLoggedIn.bind(this));
        },
        onResize: function(){
            this.windowWidth = $(window).width();
            this.windowHeight = $(window).height();
            Quince.EventManager.fireEvent(Quince.Event.RESIZE, this);
        },
        animationHelper: function(target, from, to, options) {
            $(target)
                .css({position: 'absolute', left: from})
                .animate({left: to}, options);
        },
        bindToDocument: function(event,callback) {
            if(!document[event + '_callbacks']) document[event+'_callbacks']=[];
            document[event + '_callbacks'].push(callback);
            if(!document[event + '_registered']) {
                $(document).bind(event, this.handleDocumentEvent.bind(this,event));
                document[event+'_registered']=true;
            }
        },
        handleDocumentEvent: function(e,event){
            var callbacks = document[event+'_callbacks'];
            $(callbacks).each(function(index){callbacks[index]();})
        },
        setupEventManager : function() {
            this.eventManager = new Quince.Event();
        },
        fireHashEvents :function() { //replaced with Backbone Router logic in Model code
            var name = document.location.hash.toString().replace('#','');
//            this._getPopup(name);
            if(name.length > 0) Quince.eventManager.fireEvent(Quince.Event.DEEPLINK,name);
        },
        popup : function(t,name) {
            //$log('open popup: '+name);
            var popup = this._getPopup(name);
            if(popup != null) {
                popup.show(name);
                this._currentPopup = name;
            }
        },
        _getPopup : function(name) {
            var popup = this._popups[name];
            if (popup == null) {

                switch(name) {
                    case 'register':
                        popup = new Quince.Registration();
                        break;
                    case 'sign-in':
                        popup = new Quince.Login();
                        break;
                }
                this._popups[name] = popup;
            }
            return popup;
        },
        loadTemplate : function(id){
            var $el = $('#' + id);
            return _.template($el.html(), { });
        },
        nano : function(template, data) {
            return template.replace(/\{([\w\.]*)\}/g, function(str, key) {
                var keys = key.split("."), v = data[keys.shift()];
                for (var i = 0, l = keys.length; i < l; i++) v = v[keys[i]];
                return (typeof v !== "undefined" && v !== null) ? v : "";
            });
        },
        loadTemplateFile : function(templateName) {
            var template = $('#tpl-' + templateName);
            if (template.length === 0) {
                var tmpl_dir = '/templates';
                var tmpl_url = tmpl_dir + '/' + templateName + '.tmpl';
                var tmpl_string = '';

                $.ajax({
                    url: tmpl_url,
                    method: 'GET',
                    async: false,
                    contentType: 'text',
                    success: function (data) {
                        tmpl_string = data;
                        $('head').append('<script id="tpl-' +
                            templateName + '" type="text/template">' + tmpl_string + '<\/script>');
                    }
                });

            }
        },

        isEmpty : function(obj) {

            // null and undefined are "empty"
            if (obj == null) return true;

            // Assume if it has a length property with a non-zero value
            // that that property is correct.
            if (obj.length > 0)    return false;
            if (obj.length === 0)  return true;

            // Otherwise, does it have any properties of its own?
            // Note that this doesn't handle
            // toString and valueOf enumeration bugs in IE < 9
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
            }

            return true;
        },

        sub_template : function (str, data) {
            // match "<% include template-id %>"
            return _.template(
                str.replace(
                    /<%\s*include\s*(.*?)\s*%>/g,
                    function(match, templateId) {
                        var el = $('#' + templateId);
                        return el ? el.html() : '';
                    }
                ),
                data
            );
        },

        loadTemplateFile : function(templateName) {
            var template = $('#tpl-' + templateName);
            if (template.length === 0) {
                var tmpl_dir = '/templates';
                var tmpl_url = tmpl_dir + '/' + templateName + '.tmpl';
                var tmpl_string = '';

                $.ajax({
                    url: tmpl_url,
                    method: 'GET',
                    async: false,
                    contentType: 'text',
                    success: function (data) {
                        tmpl_string = data;
                        $('head').append('<script id="tpl-' +
                            templateName + '" type="text/template">' + tmpl_string + '<\/script>');
                    }
                });

            }
        }

    };




    Quince.Popup = Class.extend({
        _construct : function(el) {
            //this.api.onClose = this.overlayClose.bind(this);
            Quince.eventManager.addEventHandler(Quince.Event.SHOWPOPUP,this.show.bind(this));

            this._el = el;
            this._type = el.attr('id');
            this._form = new Quince.Form(this._submit,this._el.find('div.form form'), null, this.formClick.bind(this));
            el.find('a.close').click(this.hide.bind(this));
        },

        //disable this for now
        overlayClose : function() {
            document.location.hash = "";
        },

        hide : function() {
            this.hide();
        },
        show : function(type) {
            if(type != this._type)
                return;

            if (this.isOpened()) {
                this.hide();
                setTimeout(this.__show.bind(this,type), 300);
            } else this.__show();
        },
        __show : function() {
            this.show();
        },
        formClick : function(e) {
            e.preventDefault();
            var valid = this._form.valid();
            if(valid) {
                var data = this._form.serialize();
                $.post(this._postUrl,data,this._submitResult.bind(this),"json");
            }
        },
        _submitResult : function(result,success,request) {
            if(result && result.success == true) {
                this.hide();
                if(typeof(result.email) != "Undefined") {
                    registeredEmail = result.email;
                }
                else {
                    registeredEmail = "Undefined";
                }
                this.submitSuccess(result.redirect);
            }
            else {
                $log('submit failed');
            }

        },
        submitSuccess : function(redirect) {
            document.location.reload();
        }
    });

    Quince.Validate = {
        NAME_REGEX : new RegExp("^[a-z\'][-a-z \']*$"),
        PHONE_REGEX : new RegExp("/\d{2}-\d{9}/"),
        EMAIL_REGEX : new RegExp("/^[a-zA-Z0-9_+][-\.a-zA-Z0-9_+]*@[a-zA-Z0-9][-\.a-zA-Z0-9]*\.(com|nl|de|be|se|edu|info|gov|int|mil|net|org|biz|name|museum|coop|aero|pro|tv|[a-zA-Z]{2})$/"),
        daysOfMonths : [31,28,31,30,31,30,31,31,30,31,30,31],
        validateDayDOB : function(str)
        {
            var max = Boolean(Number(str) <= 31);
            var min = Boolean(Number(str) > 0);
            return (max && min);
        },

        validateMonthDOB : function(str)
        {
            var max = Boolean(Number(str) <= 12);
            var min = Boolean(Number(str) > 0);

            return (max && min);
        },
        validateYearDOB : function(str)
        {
            return this.checkLength(str, 4);
        },
        validateDayExists : function(d, m, y)
        {
            //console.log("TEST isleapyear:"+isLeapYear(y)+" days:"+daysOfMonths[(m - 1)]+" d:"+d);
            if(m == 2 && isLeapYear(y))
                return (d <= 29);
            else
                var days = this.daysOfMonths[(m - 1)];
            return (d <= days);
        },

        isLeapYear : function(y)
        {
            return (y % 4 == 0);
        },
        trim : function(str)
        {
            if (str == null)
                return "";
            return str.replace(/^\s+|\s+$/g, "");
        },
        checkIsEmpty : function(str)
        {
            var s = this.trim(str);
            return Boolean(s.length == 0);
        },
        checkLength : function(str, num)
        {
            return Boolean(this.trim(str).length >= num);
        }
    };

    Quince.Event = Class.extend({
        _construct : function() {
            this.__event = {};
        },
        addEventHandler : function(event, func) {
            if (!this.__event[event]) this.__event[event] = new Array();
            if ($.inArray(func, this.__event[event]) < 0) this.__event[event].push(func);
            return this;
        },
        removeEventHandler : function(event, func) {
            var i = $.inArray(func, this.__event[event]);
            if (i >= 0) this.__event[event].splice(i, 1);
            return this;
        },
        removeEventHandlers : function(event) {
            this.__event[event].length = 0;
            return this;
        },
        fireEvent : function(event) {
            if (this.__event[event]) {
                if (1 < arguments.length) {
                    var $arguments = Array.prototype.slice.call(arguments, 1);
                    $arguments.push(event);
                    for(i=0;i<this.__event[event].length;i++) {
                        this.__event[event][i].apply(this, $arguments);
                    }
                } else {
                    for(i=0;i<this.__event[event].length;i++) {
                        this.__event[event][i](event);
                    }
                }
            }
        }
    });

    Quince.State = {

        createRefinedModel : function(filter, val){
            if (Quince._secondaryModel && filter == Quince._secondaryModel._filterMode) return;
            Quince._mosaic.showMosaic(false);
            //$('#slider-container').hide();

            Quince._landingAnimation.manageRotationTimer(true);
//            if(Quince._secondaryModel) Quince._secondaryModel.destruct();
//            if(Quince._secondaryMosaic) Quince._secondaryMosaic.removeMosaic();
//            Quince._secondaryModel = null;;
//            Quince._secondaryMosaic = null

            $('#second-container').empty().html(Quince.templates.containers.slider);
            Quince._secondaryModel = new $q.Model.Mosaic('#second-container', "backend/item", filter, val);

            $('#second-container').after($('#slider-container'));
        },

        removeRefinedModel : function(){

            Quince._mosaic.showMosaic(true);
            //$('#slider-container').show();

            Quince._landingAnimation.manageRotationTimer(false);
            if(Quince._secondaryModel) Quince._secondaryModel.destruct();
            if(Quince._secondaryMosaic){
                Quince._secondaryMosaic.showMosaic(false);
                Quince._secondaryMosaic.removeMosaic();
            }
            Quince._secondaryModel = null;
            Quince._secondaryMosaic = null;

            var target = $('#second-container').empty();
            $('#slider-container').after($('#second-container'));
        }

    }

    Quince.Constants = {
        'Filters':{
            'CHRONOLOGICAL':"time",
            'AUTHOR':"authorId",
            'CUSTOMER':"customerId",
            'TAG':"tag",
            'CHRONOLOGICAL':"time",
        }
    };

    Quince.Brand = {
        'brand_blue':              '#0172b4',
        'brand_purple':              '#5d2278',
        'brand_orange':              '#f5a81f',
        'brand_red':              '#da061e',
        'brand_green':              '#009339'
    };

    Quince.templates = {
        cells:{
            'cell_a':null,
            'cell_b':null,
            'cell_c':null,
            'cell_d':null,
            'cell_e':null,
            'cell_f':null,
            'cell_g':null,
            'cell_h':null,
            'cell_i':null,

            'cell_p':null
        },
        containers:{
            'slider':null
        }
    };
    Quince.ancillary_models = {
        'quote_data':[
            {
                'text':"learn the rules like a pro, so you can break them like an artist.",
                'authorName':"Pablo Picasso",
                'id':"",
                'type':'d'
            },
            {
                'text':"creativity is contagious, pass it on.",
                'authorName':"Albert Einstein",
                'id':"",
                'type':'d'
            },
            {
                'text':"you can't wait for inspiration, you have to go after it with a club.",
                'authorName':"Jack London",
                'id':"",
                'type':'d'
            },
            {
                'text':"creativity requires the courage to let go of certainties.",
                'authorName':"Erich Fromm",
                'id':"",
                'type':'d'
            },
            {
                'text':"when the going gets weird, the weird turn pro.",
                'authorName':"Hunter S. Thompson",
                'id':"",
                'type':'d'
            },
            {
                'text':"we don't make mistakes, just happy little accidents.",
                'authorName':"Bob Ross",
                'id':"",
                'type':'d'
            },
            {
                'text':"design is not just what it looks like and feels like. design is how it works.",
                'authorName':"Steve Jobs",
                'id':"",
                'type':'d'
            },
            {
                'text':"there is nothing worse than a sharp image of a fuzzy concept.",
                'authorName':"Ansel Adams",
                'id':"",
                'type':'d'
            },
            {
                'text':"while they are deciding, make even more art.",
                'authorName':"Andy Warhol",
                'id':"",
                'type':'d'
            },
            {
                'text':"let the blood and the bruises define your legacy.",
                'authorName':"Lady Gaga",
                'id':"",
                'type':'d'
            }
        ],
        'action_data':[
            {
                'title':"",
                'images':["real people", "real passion", "real action"],
                'id':"",
                'type':'e'
            },
            {
                'title':"jobs",
                'images':["get to know us", "click here if you are up to the challenge"],
                'id':"",
                'type':'e'
            },
            {
                'title':"about",
                'images':["who we are", "click here to find out"],
                'id':"",
                'type':'e'
            },
            {
                'title':"about",
                'images':["a team photo has many portraits", "but only one story"],
                'id':"",
                'type':'e'
            },
            {
                'title':"contact",
                'images':["a place to grow", "click here to find our locations"],
                'id':"",
                'type':'e'
            },
            {
                'title':"",
                'images':["real people", "real passion", "real action"],
                'id':"",
                'type':'e'
            },
            {
                'title':"jobs",
                'images':["get to know us", "click here if you are up to the challenge"],
                'id':"",
                'type':'e'
            },
            {
                'title':"about",
                'images':["who we are", "click here to find out"],
                'id':"",
                'type':'e'
            },
            {
                'title':"about",
                'images':["a team photo has many portraits", "but only one story"],
                'id':"",
                'type':'e'
            },
            {
                'title':"contact",
                'images':["a place to grow", "click here to find our locations"],
                'id':"",
                'type':'e'
            }
        ],
        'long_images':[
            {
                'images':"img/cells/longs/cell_g_1.jpg",
                'id':"",
                'type':'g'
            },
            {
                'images':"img/cells/longs/cell_g_2.jpg",
                'id':"",
                'type':'g'
            },
            {
                'images':"img/cells/longs/cell_g_3.jpg",
                'id':"",
                'type':'g'
            }
        ],
//        'column_patterns':[
//            ["d","a","e","c","f","b","j"],
//            ["a","j","e","f","b","h"],
//            ["g","a","j","a","e","b","j"]
//        ]
        'column_patterns':[
           ["d","a","e","b","f","b","c","j"],
           ["a","j","b","e","c","b","h","f","j"],
           ["g","f","a","j","a","e","b","j"]
        ],
        'portal_video_pattern':[
            ["d","j","e", "j","c","j","j"],
            ["a","j","e","f","b","h"],
            ["g","a","j","a","e","b","j"]
        ],
    };




    Quince.Brand.ALL_COLORS = [Quince.Brand.brand_blue, Quince.Brand.brand_purple, Quince.Brand.brand_orange, Quince.Brand.brand_green];

    Quince.EventManager = new Quince.Event();

    Quince.Event.SHOWPOPUP = 'SHOWPOPUP';
    Quince.Event.DEEPLINK = 'DEEPLINK';
    Quince.Event.RESIZE = 'RESIZE';
    Quince.Event.RESIZE_SM_RESPONSE = 'RESIZE_SM';
    Quince.Event.RESIZE_MED_RESPONSE = 'RESIZE_MED';
    Quince.Event.RESIZE_LRG_RESPONSE = 'RESIZE_LRG';
    Quince.Event.RESIZE_SHORT_RESPONSE = 'RESIZE_SHORT';
    Quince.Event.RESIZE_TALL_RESPONSE = 'RESIZE_TALL';

    Quince.Event.PAGECHANGE = "PAGECHANGE";
    Quince.Event.DISCLAIMER = "DISCLAIMER";
    Quince.Event.CURRENTPAGE = "CURRENTPAGE";
    Quince.Event.OPEN_CELL = "OPEN_CELL";

    Quince.Event.MOSAIC_SCROLL_START = "MOSAIC_SCROLL_START";
    Quince.Event.MOSAIC_SCROLL_END = "MOSAIC_SCROLL_END";
    Quince.Event.MOSAIC_FLICK = "MOSAIC_FLICK";
    Quince.Event.MOSAIC_VIDEO = "MOSAIC_VIDEO";
    Quince.Event.MOSAIC_POSITION = "MOSAIC_POSITION";

    Quince.Event.MODEL_COLUMN_LOADING = "MODEL_COLUMN_LOADING";
    Quince.Event.MODEL_COLUMN_LOADED = "MODEL_COLUMN_LOADED";
    Quince.Event.MODEL_COLUMNS_COMPLETE = "MODEL_COLUMNS_COMPLETE";
    Quince.Event.MODEL_COLUMNS_NODATA = "MODEL_COLUMNS_NODATA";
    Quince.Event.MODEL_TEMPLATES_COMPLETE = "MODEL_TEMPLATES_COMPLETE";
    Quince.Event.JSON_NOT_FOUND = "JSON_NOT_FOUND";

    Quince.Event.ROUTER_CALL = "ROUTER_CALL";
    Quince.Event.ROUTER_CLIENT = "ROUTER_CLIENT";
    Quince.Event.ROUTER_POST = "ROUTER_POST";
    Quince.Event.ROUTER_AUTHOR = "ROUTER_AUTHOR";
    Quince.Event.ROUTER_SEARCH = "ROUTER_SEARCH";
    Quince.Event.ROUTER_TAG = "ROUTER_TAG";
    Quince.Event.ROUTER_PAGE = "ROUTER_PAGE";


    Quince.Event.REFINE_PORTAL = "REFINE_PORTAL";
    Quince.Event.REFINE_FILTER = "REFINE_FILTER";


    
    this.Quince = Quince;

})(jQuery);
Quince.init();

