(function(){
    if ( !Array.prototype.forEach ) {
        Array.prototype.forEach = function(fn, scope) {
            for(var i = 0, len = this.length; i < len; ++i) {
                fn.call(scope || this, this[i], i, this);
            }
        }
    };


    Function.prototype.bind = (function(){

      var _slice = Array.prototype.slice;

      return function(context) {
        var fn = this,
            args = _slice.call(arguments, 1);

        if (args.length) {
          return function() {
            return arguments.length
              ? fn.apply(context, _slice.call(arguments).concat(args))
              : fn.apply(context, args);
          };
        }
        return function() {
          return arguments.length
            ? fn.apply(context, arguments)
            : fn.call(context);
        };
      };
    })();

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    String.prototype.unparam = function() {
        var
        // Object that holds names => values.
        params = {},
        // Get query string pieces (separated by &)
        pieces = this.replace('?','').split('&'),
        // Temporary variables used in loop.
        pair, i, l;

        // Loop through query string pieces and assign params.
        for (i = 0, l = pieces.length; i < l; i++) {
            pair = pieces[i].split('=', 2);
            // Repeated parameters with the same name are overwritten. Parameters
            // with no value get set to boolean true.
            params[decodeURIComponent(pair[0])] = (pair.length == 2 ?
                decodeURIComponent(pair[1].replace(/\+/g, ' ')) : true);
        }

        return params;}

    jQuery.unparam = function (value) {
        return value.unparam();
    };


    /**
     * Javascript Inheritance
     * http://ejohn.org/blog/simple-javascript-inheritance/
     * note: constructor is _construct() instead of init() as the original code
     **/
    (function(){
      var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;

      // The base Class implementation (does nothing)
      this.Class = function(){};

      // Create a new Class that inherits from this class
      Class.extend = function(prop) {
        var _super = this.prototype;

        // Instantiate a base class (but only create the instance,
        // don't run the init constructor)
        initializing = true;
        var prototype = new this();
        initializing = false;

        // Copy the properties over onto the new prototype
        for (var name in prop) {
          // Check if we're overwriting an existing function
          prototype[name] = typeof prop[name] == "function" &&
            typeof _super[name] == "function" && fnTest.test(prop[name]) ?
            (function(name, fn){
              return function() {
                var tmp = this._super;

                // Add a new ._super() method that is the same method
                // but on the super-class
                this._super = _super[name];

                // The method only need to be bound temporarily, so we
                // remove it when we're done executing
                var ret = fn.apply(this, arguments);
                this._super = tmp;

                return ret;
              };
            })(name, prop[name]) :
            prop[name];
        }

        // The dummy class constructor
        function Class() {
          // All construction is actually done in the _construct method
          if ( !initializing && this._construct )
            this._construct.apply(this, arguments);
        }

        // Populate our constructed prototype object
        Class.prototype = prototype;

        // Enforce the constructor to be what we expect
        Class.constructor = Class;

        // And make this class extendable
        Class.extend = arguments.callee;

        return Class;
      };
    })();

    $empty = function() {};
    $returnTrue = function() { return true; };

    String.format = function() {
        var s = arguments[0];
        for (var i = 0; i < arguments.length - 1; i++) {
            var reg = new RegExp("\\{" + i + "\\}", "gm");
            s = s.replace(reg, arguments[i + 1]);
        }

        return s;
    }

    $.fn.clearForm = function() {
        return this.each(function() {
            $(this).data("validator").resetForm();
            $(':input', this).each(function() {
                var type = this.type, tag = this.tagName.toLowerCase();
                if (type == 'text' || type == 'password' || tag == 'textarea')
                    this.value = '';
                else if (type == 'checkbox' || type == 'radio') {
                    this.checked = false;
                    elm = $(this).parent();
                    if ($(this).is(':checked')) {
                        elm.addClass("checked");
                    } else {
                        elm.removeClass("checked");
                    }
                } else if (tag == 'select') {
                    this.selectedIndex = -1;
                    var myId = $(this).attr('id');
                    $(this).prev().text($(myId + ' :selected').text());
                }
            });
        });
    };

    function random_string(string_length) {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var randomstring = '';
        for (var i=0; i<string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum,rnum+1);
        }
        return randomstring;
    }


    $log = function(obj) {
         try { if (arguments.length > 1) { console.dir(arguments); } else { console.log(arguments[0]); } } catch (d) { }
    };

}());
