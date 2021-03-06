/*
author: Marco Comparato - marco@marcocomparato.com - github/google/aim: marcocom

Quince main namespace root.   all global accessable values, event management , constants and reference-pointers are here.
state-management, based on Router events from Page class are in Quince.State located here.


namespace / file map:

Quince ($q) -- quince.js:
main namespace root. this file, duh

Quince.Model -- quince.model.js:
Data handling, parsing, and Collection/Modeling, creates Backbone View objects for template injection.
broadcasts readiness for mosaic wall

Quince.Mosaic --quince.mosaic.js:
Controller for interactivity of Wall containers, their individual columns, and child cells.
initialized each time after Model code has recieved data

Quince.Page -- quince.page.js:
Router for all URL-awareness. Page-level logic such as sub-pages (about, jobs, contact). Homepage animation logic.
Page class boots up the entire site, as well as broadcasts state-changes from URL changes.
All internal js link-events and state changes are driven through the router logic here by writing to the URL address using router.

example (this shows the main mosaic wall):
 Quince.cellRouter.navigate("/", { trigger: true });

 Quince.cellRouter.navigate("/clients", { trigger: true });
 (trigger value defines whether or not router logic is fired when changing the URL value, or passively ignored.)


 */
(function($) {

    var $q = Quince = {

        resetpassword: null,
        isUserLoggedIn: false,
        contentManagementSysURL: '',
        _something: true,
        _uid: 0,
        isIE8: navigator.userAgent.indexOf('MSIE 8') > -1, //("v" == "\v"),
        isFF: navigator.userAgent.indexOf('Firefox') > 0,
        isHandheldPortrait: $('body').width() < 450 && $('body').height() > $('body').width(),
        msGesture: window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
        isTouch: (( 'ontouchstart' in window ) || this.msGesture || window.DocumentTouch && document instanceof DocumentTouch),
        googleAccount: 'UA-1007198-3',
        cellImageDirectory: '/img/cells/',
        _popups : {},

        windowWidth: 0,
        windowHeight: 0,
        columnSizes : {
            cell_total_container_width: 720,
            cell_total_med_width: 960,
            cell_total_sm_width: 1682,
            cell_total_extra_tall: 482,
            cell_total_short_width: 482
        },
        _currentPopup: null,
        _currentFiltering: null,
        _mosaic: null,
        _model: null,
        _secondaryMosaic: null, //controller and model for second 'refined' wall upon use of search/refine features. destroyed and reused.
        _secondaryModel: null,
        _currentMosaic: null,
        _currentModel: null,
        _landingPage: null,
        _landingAnimation: null,
        AncillaryLetters: ["d", "e", "i", "g"], //cell-types that are not CMS data-fed.  pulled from objects below.
        DataLetters: ["a", "b", "c", "f", "h", "j", "p"], //cell-types that are CMS data-fed.


        init: function () {
            if ($.support.touch) {
                $('body').addClass('ipad-iphone');
            }
            this.setupEventManager();
            //$log("QUINCE:INIT isHandheld:"+this.isHandheldPortrait+"  --UA:"+navigator.userAgent+" isIE8:"+this.isIE8);

            this.windowWidth = $(window).width();
            this.windowHeight = $(window).height();

            $(window).resize($.proxy(this.onResize, this));

            $("#slider-container").hide();

            this.compileTemplates();

            Quince.EventManager.addEventHandler(Quince.Event.ROUTER_PORTAL, Quince.State.refineByPortal.bind(this));
            Quince.EventManager.addEventHandler(Quince.Event.ROUTER_SEARCH, Quince.State.refineBySearch.bind(this));
            Quince.EventManager.addEventHandler(Quince.Event.ROUTER_TAG, Quince.State.refineByTag.bind(this));
            Quince.EventManager.addEventHandler(Quince.Event.ROUTER_MAIN_MOSAIC, Quince.State.createMainModel.bind(this));
            Quince.EventManager.addEventHandler(Quince.Event.REFINE_FILTER, Quince.State.refineByFilter.bind(this));
            Quince.EventManager.addEventHandler(Quince.Event.REFINE_CLIENTS, Quince.State.showAllClients.bind(this));
            Quince.EventManager.addEventHandler(Quince.Event.ROUTER_CLIENT, Quince.State.refineByClient.bind(this));
            Quince.EventManager.addEventHandler(Quince.Event.ROUTER_AUTHOR, Quince.State.refineByAuthor.bind(this));
            Quince.EventManager.addEventHandler(Quince.Event.REFINE_PEOPLE, Quince.State.createPeopleModel.bind(this));

            // Quince.EventManager.addEventHandler(Quince.Event.MODEL_COLUMNS_COMPLETE, Quince.State.startMosaic.bind(this));
        },

        onResize: function () {
            this.windowWidth = $(window).width();
            this.windowHeight = $(window).height();
            Quince.EventManager.fireEvent(Quince.Event.RESIZE, this);
        },

        animationHelper: function (target, from, to, options) {
            $(target)
                .css({position: 'absolute', left: from})
                .animate({left: to}, options);
        },

        bindToDocument: function (event, callback) {
            if(!document[event + '_callbacks']) document[event+'_callbacks']=[];
            document[event + '_callbacks'].push(callback);
            if(!document[event + '_registered']) {
                $(document).bind(event, this.handleDocumentEvent.bind(this,event));
                document[event+'_registered']=true;
            }
        },

        handleDocumentEvent: function (e, event) {
            var callbacks = document[event+'_callbacks'];
            $(callbacks).each(function(index){callbacks[index]();})
        },

        setupEventManager: function () {
            this.eventManager = new Quince.Event();
        },

        fireHashEvents: function () { //replaced with Backbone Router logic in Model code
            var name = document.location.hash.toString().replace('#','');
//            this._getPopup(name);
            if(name.length > 0) Quince.eventManager.fireEvent(Quince.Event.DEEPLINK,name);
        },

        popup: function (t, name) {
            var popup = this._getPopup(name);
            if(popup != null) {
                popup.show(name);
                this._currentPopup = name;
            }
        },

        _getPopup: function (name) {
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

        loadTemplate: function (id){
            var $el = $('#' + id);
            return _.template($el.html(), { });
        },

        nano: function (template, data) {
            return template.replace(/\{([\w\.]*)\}/g, function(str, key) {
                var keys = key.split("."), v = data[keys.shift()];
                for (var i = 0, l = keys.length; i < l; i++) v = v[keys[i]];
                return (typeof v !== "undefined" && v !== null) ? v : "";
            });
        },

        loadTemplateFile: function (templateName) {
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

        strpos: function (haystack, needle, offset) {
            var i = (haystack+'').indexOf(needle, (offset || 0));
            return i === -1 ? false : i;
        },

        sub_template: function (str, data) {
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

        compileTemplates: function () {
            Quince.templates.cells.cell_a = _.template($('#tpl-cell-a').html());
            Quince.templates.cells.cell_b = _.template($('#tpl-cell-b').html());
            Quince.templates.cells.cell_c = _.template($('#tpl-cell-c').html());
            Quince.templates.cells.cell_d = _.template($('#tpl-cell-d').html());
            Quince.templates.cells.cell_e = _.template($('#tpl-cell-e').html());
            Quince.templates.cells.cell_f = _.template($('#tpl-cell-f').html());
            Quince.templates.cells.cell_g = _.template($('#tpl-cell-g').html());
            Quince.templates.cells.cell_h = _.template($('#tpl-cell-h').html());
            Quince.templates.cells.cell_i = _.template($('#tpl-cell-i').html());
            Quince.templates.cells.cell_j = _.template($('#tpl-cell-j').html());

            Quince.templates.cells.cell_p = _.template($('#tpl-personnel').html());
            Quince.templates.containers.slider = _.template($('#tpl-slider').html());

            $('#tpl-cell-a').remove();
            $('#tpl-cell-b').remove();
            $('#tpl-cell-c').remove();
            $('#tpl-cell-d').remove();
            $('#tpl-cell-e').remove();
            $('#tpl-cell-f').remove();
            $('#tpl-cell-g').remove();
            $('#tpl-cell-h').remove();
            $('#tpl-cell-i').remove();
            $('#tpl-cell-j').remove();

            $('#tpl-personnel').remove();
            $('#tpl-slider').remove();
        }
    };

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    Quince.Popup = Class.extend({
        _construct: function (el) {
            //this.api.onClose = this.overlayClose.bind(this);
            Quince.eventManager.addEventHandler(Quince.Event.SHOWPOPUP,this.show.bind(this));

            this._el = el;
            this._type = el.attr('id');
            this._form = new Quince.Form(this._submit,this._el.find('div.form form'), null, this.formClick.bind(this));
            el.find('a.close').click(this.hide.bind(this));
        },

        //disable this for now
        overlayClose: function () {
            document.location.hash = "";
        },

        hide: function () {
            this.hide();
        },

        show: function (type) {
            if(type != this._type)
                return;

            if (this.isOpened()) {
                this.hide();
                setTimeout(this.__show.bind(this,type), 300);
            } else this.__show();
        },

        __show: function () {
            this.show();
        },

        formClick: function (e) {
            e.preventDefault();
            var valid = this._form.valid();
            if(valid) {
                var data = this._form.serialize();
                $.post(this._postUrl, data, this._submitResult.bind(this), "json");
            }
        },

        _submitResult: function (result, success, request) {
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
                //$log('submit failed');
            }

        },

        submitSuccess: function (redirect) {
            document.location.reload();
        }
    });

    Quince.Validate = {
        NAME_REGEX : new RegExp("^[a-z\'][-a-z \']*$"),
        PHONE_REGEX : new RegExp("/\d{2}-\d{9}/"),
        EMAIL_REGEX : new RegExp("/^[a-zA-Z0-9_+][-\.a-zA-Z0-9_+]*@[a-zA-Z0-9][-\.a-zA-Z0-9]*\.(com|nl|de|be|se|edu|info|gov|int|mil|net|org|biz|name|museum|coop|aero|pro|tv|[a-zA-Z]{2})$/"),
        daysOfMonths : [31,28,31,30,31,30,31,31,30,31,30,31],

        validateDayDOB : function (str) {
            var max = Boolean(Number(str) <= 31);
            var min = Boolean(Number(str) > 0);
            return (max && min);
        },

        validateMonthDOB: function (str) {
            var max = Boolean(Number(str) <= 12);
            var min = Boolean(Number(str) > 0);

            return (max && min);
        },

        validateYearDOB: function (str) {
            return this.checkLength(str, 4);
        },

        validateDayExists: function (d, m, y) {
            if(m == 2 && this.isLeapYear(y)) {
                return (d <= 29);
            } else {
                return (d <= this.daysOfMonths[(m - 1)]);
            }
        },

        isLeapYear: function (y) {
            return (y % 4 == 0);
        },

        trim: function (str) {
            if (str == null)
                return "";
            return str.replace(/^\s+|\s+$/g, "");
        },

        checkIsEmpty: function (str) {
            var s = this.trim(str);
            return Boolean(s.length == 0);
        },

        checkLength: function (str, num) {
            return Boolean(this.trim(str).length >= num);
        }
    };

    Quince.Event = Class.extend({
        _construct: function() {
            this.__event = {};
        },

        addEventHandler: function (event, func) {
            if (!this.__event[event]) this.__event[event] = [];
            if ($.inArray(func, this.__event[event]) < 0) this.__event[event].push(func);
            return this;
        },

        removeEventHandler: function (event, func) {
            var i = $.inArray(func, this.__event[event]);
            if (i >= 0) this.__event[event].splice(i, 1);
            return this;
        },

        removeEventHandlers: function (event) {
            this.__event[event].length = 0;
            return this;
        },

        fireEvent: function (event) {
            if (this.__event[event]) {
                if (1 < arguments.length) {
                    var $arguments = Array.prototype.slice.call(arguments, 1);
                    $arguments.push(event);
                    for(var i = 0; i < this.__event[event].length; i++) {
                        this.__event[event][i].apply(this, $arguments);
                    }
                } else {
                    for(var j = 0; j < this.__event[event].length; j++) {
                        this.__event[event][j](event);
                    }
                }
            }
        }
    });

    Quince.Patterns = {
        'time': {
            'default': [
                ["d","a","e","c","f","b","j"],
                ["a","j","c","f","b","h"],
                ["g","a","j","a","e","b","j"]
            ]
        },
        'search': {
            'default': [
                ["d","a","e","c","f","b","j"],
                ["a","j","c","f","b","h"],
                ["g","a","j","a","e","b","j"]
            ]
        },
        'tag': {
            'default': [
                ["d","a","e","c","f","b","j"],
                ["a","j","c","f","b","h"],
                ["g","a","j","a","e","b","j"]
            ]
        },
        'people': {
            'default': [
                ["d","p","p","g","p","p","p"],
                ["e","p","p","c","p","p"],
                ["g","p","p","e","p","p","p"]
            ]
        },
        'authorId': {
            'default': [
                ["g","a","e","c","b","j"],
                ["a","j","c","b","h"],
                ["a","j","a","e","b","j"]
            ]
        },
        'customerId': {
            'default': [
                ["g","a","e","c","b","j"],
                ["a","j","c","b","h"],
                ["a","j","a","e","b","j"]
            ],
            'all': [
                ["c","c","c","c"],
                ["c","c","c","c"],
                ["c","c","c","c"]
            ]
        },
        'portal': {
            'fb': [
                ["d","a","e","c","f","b","j","d","a","e","c","f","b","j"],
                ["a","j","c","f","b","h","a","j","c","f","b","h"],
                ["g","a","j","a","e","b","j","g","a","j","a","e","b","j"]
            ],
            'vim': [
                ["g","j","j","c","j","j","c","j","j"],
                ["j","j","c","j","e","j","c","j"],
                ["d","j","j","g","j","c","j","j"]
            ],
            'yt': [
                ["j","c","j","j","j","c","j","j","g"],
                ["j","j","c","j","j","j","c","j","j"],
                ["g","j","j","j","e","j","j","j","j"]
            ],
            'pin': [
                ["a","a","c","a","a","g"],
                ["a","c","a","a","a"],
                ["a","a","c","a","a"]
            ],
            'tw': [
                ["g","h","h","c","h","h","h","c","h"],
                ["h","c","h","h","g","c","h","h"],
                ["g","h","c","h","h","h","c","h","h"]
            ],
            'link': [
                ["g","h","h","c","h","h","h","c","h"],
                ["h","c","h","h","g","c","h","h"],
                ["g","h","c","h","h","h","c","h","h"]
            ]
        }
    };


    Quince.State = {

        destroyPrimary: function () {

            if (Quince._mosaic && Quince._mosaic._enabled) {
                Quince._mosaic.showMosaic(false);
                Quince._model.removeEventListeners();
                Quince._landingAnimation.manageRotationTimer(true);
            }
        },

        destroySecondary: function () {
            if(Quince._secondaryMosaic){
                Quince._secondaryModel.removeEventListeners();
                Quince._secondaryMosaic.showMosaic(false);
                if(Quince._secondaryMosaic) Quince._secondaryMosaic.removeMosaic();
                Quince._secondaryModel = null;
                Quince._secondaryMosaic = null;
            }
        },

        showAllClients: function () {

            Quince.State.destroyPrimary();

            Quince.State.destroySecondary();

            $('#second-container').empty().html(Quince.templates.containers.slider);

            Quince._currentFiltering = Quince.Constants.Filters.CUSTOMER;
            Quince._secondaryModel = new Quince.Model.Mosaic('#second-container', "/backend/item", Quince.Constants.Filters.CUSTOMER, "all");
            Quince._currentModel = Quince._secondaryModel;

            $('#second-container').after($('#slider-container'));
        },

        createRefinedModel: function (filter, val) {

            this.destroyPrimary();

            this.destroySecondary();

            $('#second-container').empty().html(Quince.templates.containers.slider);

            Quince._currentFiltering = filter;
            Quince._secondaryModel = new Quince.Model.Mosaic('#second-container', "/backend/item", filter, val);
            Quince._currentModel = Quince._secondaryModel;

            $('#second-container').after($('#slider-container'));
        },

        createPeopleModel: function () {

            Quince.State.destroyPrimary();

            Quince.State.destroySecondary();

            $('#second-container').empty().html(Quince.templates.containers.slider);

            Quince._currentFiltering = Quince.Constants.Filters.PEOPLE;
            Quince._secondaryModel = new Quince.Model.People('#second-container', "/backend/author");
            Quince._currentModel = Quince._secondaryModel;

            $('#second-container').after($('#slider-container'));
        },

        removeRefinedModel: function () {
            this.destroySecondary();
            var target = $('#second-container').empty();

            $('#slider-container').after($('#second-container'));

            if(Quince._mosaic){
                Quince._currentModel = Quince._model;
                Quince._currentMosaic = Quince._mosaic;
                Quince._currentFiltering = Quince.Constants.Filters.CHRONOLOGICAL;
                Quince._mosaic.showMosaic(true);
                Quince._model.addEventListeners();
                Quince._landingAnimation.manageRotationTimer(false);
                Quince._currentMosaic.onResize();
            } else {
                Quince._currentModel = Quince._model = new Quince.Model.Mosaic("#slider-container", "/backend/item");

            }

        },

        startMosaic: function (el, filter){

            Quince._currentFiltering = filter;

            var targetEl = filter == Quince.Constants.Filters.CHRONOLOGICAL ? '#slider-container' : '#second-container';

                if(filter == Quince.Constants.Filters.CHRONOLOGICAL){
                    Quince._currentMosaic = Quince._mosaic = new Quince.Mosaic.Container(el, filter);
                } else {
                    Quince._currentMosaic = Quince._secondaryMosaic = new Quince.Mosaic.Container(el, filter);
                }

        },

        createMainModel: function (e) {
            Quince._currentFiltering = Quince.Constants.Filters.CHRONOLOGICAL;
            Quince.State.removeRefinedModel();
        },


        refineBySearch: function (e, filter) {
            //$log("STATE refineBySearch WORD:"+filter);
            Quince.State.createRefinedModel(Quince.Constants.Filters.SEARCH, filter);
        },

        refineByTag: function (e, filter) {
            //$log("STATE refineByTag WORD:"+filter);
            Quince.State.createRefinedModel(Quince.Constants.Filters.SEARCH, filter);
        },

        refineByPortal: function (e, filter) {
            //$log("STATE refineByPortal FILTER:"+filter);
            Quince.State.createRefinedModel(Quince.Constants.Filters.PORTAL, filter);
        },

        refineByClient: function (e, filter) {
            //$log("STATE refineByClient FILTER:"+filter);
            Quince.State.createRefinedModel(Quince.Constants.Filters.CUSTOMER, filter);
        },

        refineByAuthor: function (e, filter) {
            //$log("STATE refineByClient FILTER:"+filter);
            Quince.State.createRefinedModel(Quince.Constants.Filters.AUTHOR, filter);
        },

        refineByFilter: function (e, filter) {
            //$log("refineByFilter FILTER:"+filter);
            if (filter == Quince.Constants.Filters.CHRONOLOGICAL) {
                Quince.cellRouter.navigate("/", { trigger: true });
            }
        }

    };


    Quince.Constants = {
        'Filters': {
            'CHRONOLOGICAL': "time",
            'AUTHOR': "authorId",
            'PEOPLE': "people",
            'CUSTOMER': "customerId",
            'TAG': "tag",
            'SEARCH': "search",
            'PORTAL': "portal"
        }
    };

    Quince.Brand = {
        'brand_blue':  '#0172b4',
        'brand_purple':'#5d2278',
        'brand_orange':'#f5a81f',
        'brand_red':   '#da061e',
        'brand_green': '#009339'
    };
    Quince.Brand.ALL_COLORS = [Quince.Brand.brand_blue, Quince.Brand.brand_purple, Quince.Brand.brand_orange, Quince.Brand.brand_green];


    Quince.templates = {
        cells: {
            'cell_a': null,
            'cell_b': null,
            'cell_c': null,
            'cell_d': null,
            'cell_e': null,
            'cell_f': null,
            'cell_g': null,
            'cell_h': null,
            'cell_i': null,
            'cell_p': null
        },
        containers: {
            'slider' :null
        }
    };

    Quince.ancillary_models = {
        'quote_data': [
            {
                'text':"learn the rules like a pro, so you can break them like an artist.",
                'authorName':"Pablo Picasso",
                'id':"3",
                'type':'d'
            },
            {
                'text':"creativity is contagious, pass it on.",
                'authorName':"Albert Einstein",
                'id':"3",
                'type':'d'
            },
            {
                'text':"you can't wait for inspiration, you have to go after it with a club.",
                'authorName':"Jack London",
                'id':"3",
                'type':'d'
            },
            {
                'text':"creativity requires the courage to let go of certainties.",
                'authorName':"Erich Fromm",
                'id':"3",
                'type':'d'
            },
            {
                'text':"when the going gets weird, the weird turn pro.",
                'authorName':"Hunter S. Thompson",
                'id':"3",
                'type':'d'
            },
            {
                'text':"we don't make mistakes, just happy little accidents.",
                'authorName':"Bob Ross",
                'id':"3",
                'type':'d'
            },
            {
                'text':"design is not just what it looks like and feels like. design is how it works.",
                'authorName':"Steve Jobs",
                'id':"3",
                'type':'d'
            },
            {
                'text':"there is nothing worse than a sharp image of a fuzzy concept.",
                'authorName':"Ansel Adams",
                'id':"3",
                'type':'d'
            },
            {
                'text':"while they are deciding, make even more art.",
                'authorName':"Andy Warhol",
                'id':"3",
                'type':'d'
            },
            {
                'text':"let the blood and the bruises define your legacy.",
                'authorName':"Lady Gaga",
                'id':"3",
                'type':'d'
            }
        ],
        'action_data': [
            {
                'title':"",
                'images':["real people", "real passion", "real action"],
                'id':"1",
                'type':'e'
            },
            {
                'title':"jobs",
                'images':["get to know us", "click here if you are up to the challenge"],
                'id':"1",
                'type':'e'
            },
            {
                'title':"about",
                'images':["who we are", "click here to find out"],
                'id':"1",
                'type':'e'
            },
            {
                'title':"about",
                'images':["a team photo has many portraits", "but only one story"],
                'id':"1",
                'type':'e'
            },
            {
                'title':"contact",
                'images':["a place to grow", "click here to find our locations"],
                'id':"1",
                'type':'e'
            },
            {
                'title':"",
                'images':["real people", "real passion", "real action"],
                'id':"1",
                'type':'e'
            },
            {
                'title':"jobs",
                'images':["get to know us", "click here if you are up to the challenge"],
                'id':"1",
                'type':'e'
            },
            {
                'title':"about",
                'images':["who we are", "click here to find out"],
                'id':"1",
                'type':'e'
            },
            {
                'title':"about",
                'images':["a team photo has many portraits", "but only one story"],
                'id':"1",
                'type':'e'
            },
            {
                'title':"contact",
                'images':["a place to grow", "click here to find our locations"],
                'id':"1",
                'type':'e'
            }
        ],
        'long_images': [
            {
                'images':"/img/longs/cell_g_1.jpg",
                'id':"101",
                'type':'g'
            },
            {
                'images':"/img/longs/cell_g_2.jpg",
                'id':"102",
                'type':'g'
            },
            {
                'images':"/img/longs/cell_g_3.jpg",
                'id':"103",
                'type':'g'
            },
            {
                'images':"/img/longs/cell_g_4.jpg",
                'id':"104",
                'type':'g'
            },
            {
                'images':"/img/longs/cell_g_5.jpg",
                'id':"105",
                'type':'g'
            },
            {
                'images':"/img/longs/cell_g_6.jpg",
                'id':"106",
                'type':'g'
            },
            {
                'images':"/img/longs/cell_g_7.jpg",
                'id':"107",
                'type':'g'
            }
        ]
    };

    Quince.customerHash = {
        '560': 'ABN-AMRO',
        '334': 'Alrec',
        '277': 'Apple',
        '233': 'Bauknecht',
        '562': 'Bissell',
        '600': 'brandXtension',
        '590': 'Calvin Klein',
        '499': 'Cambridge',
        '561': 'CTOUCH',
        '568': 'Fox Sports',
        '257': 'Goodyear-Dunlop NL-BE',
        '510': 'Green Hill',
        '579': 'Hema',
        '360': 'Holland Casino',
        '598': 'Holmatro',
        '289': 'HTC EMEA',
        '528': 'ID&T',
        '538': 'Infopact',
        '511': 'ING Retail Nederland',
        '594': 'Intergamma',
        '537': 'InVue Security Products',
        '382': 'Kirkman Company',
        '527': 'Korstjens Crossmedia Consultancy',
        '270': 'KPN',
        '460': 'Media Markt & Saturn',
        '370': 'MMD',
        '457': 'NAGA',
        '586': 'Nederland Schoon',
        '506': 'Nokia',
        '602': 'Oxxio',
        '451': 'Philips Consumer Lifestyle',
        '521': 'Philips TV / TP Vision',
        '441': 'Platform Outsourcing',
        '108': 'Quince',
        '368': 'Quince Hungary',
        '595': 'Quince Platforms',
        '565': 'Quince Retail Solutions',
        '345': 'QYN',
        '113': 'Samsung Benelux',
        '589': 'Scheer & Foppe',
        '489': 'Setar',
        '505': 'Stage Entertainment',
        '577': 'Telfort',
        '547': 'Teradata',
        '162': 'The Phone House',
        '214': 'Tommy Hilfiger',
        '599': 'VNU',
        '513': 'Whirlpool'
    };

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
    Quince.Event.ROUTER_MAIN_MOSAIC = "ROUTER_MAIN_MOSAIC";
    Quince.Event.ROUTER_CLIENT = "ROUTER_CLIENT";
    Quince.Event.ROUTER_POST = "ROUTER_POST";
    Quince.Event.ROUTER_AUTHOR = "ROUTER_AUTHOR";
    Quince.Event.ROUTER_PORTAL = "ROUTER_PORTAL";
    Quince.Event.ROUTER_SEARCH = "ROUTER_SEARCH";
    Quince.Event.ROUTER_TAG = "ROUTER_TAG";
    Quince.Event.ROUTER_PAGE = "ROUTER_PAGE";


    Quince.Event.REFINE_PORTAL = "REFINE_PORTAL";
    Quince.Event.REFINE_FILTER = "REFINE_FILTER";
    Quince.Event.REFINE_PEOPLE = "REFINE_PEOPLE";
    Quince.Event.REFINE_CLIENTS = "REFINE_CLIENTS";

    this.Quince = Quince;

})(jQuery);

Quince.init();