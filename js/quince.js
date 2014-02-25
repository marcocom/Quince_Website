

(function($) {

    var $q = Quince = {

        resetpassword : null,
        isUserLoggedIn : false,
        contentManagementSysURL:"",
        _uid : 0,
        isIE : ($('html').is('.ie9, .ie8')), //("v" == "\v"),
        isFF : navigator.userAgent.indexOf('Firefox') > 0,
        isHandheldPortrait : $('body').width() < 450 && $('body').height() > $('body').width(),
        msGesture : window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
        isTouch : (( "ontouchstart" in window ) || this.msGesture || window.DocumentTouch && document instanceof DocumentTouch),
        googleAccount:"UA-1007198-3",
        _popups : {},

        windowWidth:$(window).width(),
        windowHeight:$(window).height(),
        columnSizes : {
            cell_total_container_width:720,
            cell_total_med_width:960,
            cell_total_sm_width:1682,
            cell_total_extra_tall:482,
            cell_total_short_width:482
            },
        _currentPopup : null,
        landingContent:null,
        _model:null,


        init: function() {
            if ($.support.touch) $('body').addClass('ipad-iphone');
            this.setupEventManager();
            $log("QUINCE:INIT isHandheld:"+this.isHandheldPortrait+"  --UA:"+navigator.userAgent);
            $(window).resize(this.onResize);
           // document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

//            Quince.eventManager.addEventHandler(Quince.Event.LOGIN_SUCCESS_FB_USER,this.fbLoggedIn.bind(this));
        },
        onResize: function(){
            this.windowWidth = $(window).width();
            this.windowHeight = $(window).height();
//            $log("RESIZE!  w:"+this.windowWidth+" h:"+this.windowHeight);
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
        fireHashEvents :function() {
            var name = document.location.hash.toString().replace('#','');
            this._getPopup(name);
            Quince.eventManager.fireEvent(Quince.Event.SHOWPOPUP,name);
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
        }

    };




    Quince.SquareItem = Class.extend({
        _construct : function(el) {
            //this.api.onClose = this.overlayClose.bind(this);

            Quince.eventManager.addEventHandler(Quince.Event.SHOWPOPUP,this.show.bind(this));

            this._el = el;
            this._type = el.attr('id');
        },
        hide : function() {
            this.hide();
        },
        show : function() {

            if (this.isOpened()) {
                this.hide();
//                setTimeout(this.__show.bind(this,type), 300);
            }
        },
        onClick : function(e) {
            e.preventDefault();
        }
    });

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
        },
        checkImei: function (str)
        {
            str = str.replace(/[ -]/g, "");

            var exp = new RegExp("^[0-9]{15}$");

            if (!exp.exec(str))
            {
                return false;
            }

            var digit;
            var check = 0;

            for (var i = 0; i < 15; i++)
            {
                digit = parseInt (str[i]);

                if (i === 14)
                {
                    if ((check + digit) % 10 !== 0)
                    {
                        return false;
                    }

                    break;
                }
                if (i % 2 === 1)
                {
                    if (digit >= 5)
                    {
                        check += 1 + digit * 2 - 10;
                    }
                    else
                    {
                        check += digit * 2;
                    }
                }
                else
                {
                    check += digit;
                }
            }

            return true;
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

    Quince.Brand = {
        brand_blue:              '#0172b4',
        brand_purple:              '#5d2278',
        brand_orange:              '#f5a81f',
        brand_red:              '#da061e',
        brand_green:              '#009339'
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
                'cell_i':null
        },
        quotes:[
            {
                'Body':'Creativity is contagious, pass it on.',
                'Credit':'Albert Einstein',
                'Id':''
            },
            {
                'Body':'Creativity is contagious, pass it on.',
                'Credit':'Albert Einstein',
                'Id':''
            },
            {
                'Body':'Creativity is contagious, pass it on.',
                'Credit':'Albert Einstein',
                'Id':''
            },
            {
                'Body':'Creativity is contagious, pass it on.',
                'Credit':'Albert Einstein',
                'Id':''
            },
            {
                'Body':'Creativity is contagious, pass it on.',
                'Credit':'Albert Einstein',
                'Id':''
            }
        ],
            actions:[
            {
                'Action':'jobs',
                'Sentences':['Get to know us', 'click here if you are up to the challenge'],
                'Id':''
            },
            {
                'Action':'jobs',
                'Sentences':['Get to know us', 'click here if you are up to the challenge'],
                'Id':''
            },
            {
                'Action':'jobs',
                'Sentences':['Get to know us', 'click here if you are up to the challenge'],
                'Id':''
            },
            {
                'Action':'jobs',
                'Sentences':['Get to know us', 'click here if you are up to the challenge'],
                'Id':''
            },
            {
                'Action':'jobs',
                'Sentences':['Get to know us', 'click here if you are up to the challenge'],
                'Id':''
            },
            {
                'Action':'jobs',
                'Sentences':['Get to know us', 'click here if you are up to the challenge'],
                'Id':''
            }
        ]
    };


    Quince.Brand.ALL_COLORS = [Quince.Brand.brand_blue, Quince.Brand.brand_purple, Quince.Brand.brand_orange, Quince.Brand.brand_green];

    Quince.EventManager = new Quince.Event();

    Quince.Event.SHOWPOPUP = 'SHOWPOPUP';
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
    Quince.Event.MODEL_COLUMN_LOADED = "MODEL_COLUMN_LOADED";
    Quince.Event.MODEL_COLUMNS_COMPLETE = "MODEL_COLUMNS_COMPLETE";
    Quince.Event.MODEL_TEMPLATES_COMPLETE = "MODEL_TEMPLATES_COMPLETE";

    
    this.Quince = Quince;

})(jQuery);
Quince.init();

