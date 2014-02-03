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
            $log("Mosaic init");
            this.initContainer();
            this.grid = null;
            this.loading_items = false;
            this.building = false;

            this.rows=200;
            this.columns=4;
            this.max_rows=200;
            this.max_items=200;
            this.row_height=160;
            this.column_width=256;
            this.strict=false;
            this.overlay=false;
            this.building=false
            this.scroll=false;
            this.filter=false;
            this.grid_full=false;
            this.loading_items=false;


        },

       setup_grid : function () {

            // grid setup
            set_columns();
            $(window).resize(function() { if(this.columns!=set_columns()) place_grid_items(true); });
            $('#grid .item').hide();

            // scroll loader
            if(scroll) $(window).bind('scroll',scroll_handler);

            // item actions
            item_actions();

            // place items
            place_grid_items(false);

            // check height
            if(scroll) scroll_handler(null);

        },

        create_grid_array : function() {
            var array = new Array(rows);
            for(var i=0; i<rows; i++) {
                array[i] = new Array(this.columns);
                for(var j=0; j<this.columns; j++) {
                    array[i][j]=false;
                }
            }
            return array;
        },

        place_grid_items : function(animate) {

            if(debug) trace('placing grid items');

            this.building=true;

            // hide items
            $('#grid .item').hide();
            this.loading_items=false;

            // create grid
            this.grid=this.create_grid_array();

            // fill 0,0 (logo)
            grid[0][0]=1;
            if($('header.top div.logo').hasClass('talllogo')) { grid[1][0]=1; grid[2][0]=1; }

            // loop and place items
            var items=$('#grid .item');
            var placed=false;
            var insert=null;
            for(var i=0; i<items.length; i++) {
                placed=false;
                for(var j=0; !placed; j++) {
                    insert=get_insert_location(j);
                    if(insert.row >= max_rows) break;
                    placed=place_item(items[i],insert.row,insert.column,animate);
                    if(placed) {
                        if(debug) trace('item #'+i+' placed at ['+insert.row+','+insert.column+']');
                    } else {
                        if(debug) trace('item #'+i+' NOT placed at ['+insert.row+','+insert.column+']');
                    }
                }
            }

            // update grid height
            $('#grid').css({height:(get_total_rows()*row_height)+'px'});
            if(debug) trace('new grid height: '+$('#grid').height()+'px');

        },
        get_insert_location : function(offset) {
            for(var i=0; i<rows; i++) {
                for(var j=0; j<this.columns; j++) {
                    if(!grid[i][j]) {
                        if(offset==0) {
                            if(debug) trace('found location ['+i+','+j+']');
                            return {row: i,column: j};
                        } else {
                            if(debug) trace('ignoring location ['+i+','+j+'] decrementing offset');
                            offset--;
                        }
                    }
                }
            }
        },
        /**
         * GET_ITEM_SIZE
         *
         * Get item size based on CSS styling.
         */
        get_item_size : function(item) {
            if($(item).hasClass('cell-a')) return 'a';
            if($(item).hasClass('cell-b')) return 'b';
            if($(item).hasClass('cell-c')) return 'c';
            if($(item).hasClass('cell-d')) return 'd';
            if($(item).hasClass('cell-e')) return 'e';
            if($(item).hasClass('cell-f')) return 'f';
            if($(item).hasClass('cell-g')) return 'g';
            if($(item).hasClass('cell-h')) return 'h';
            return '';
        },

        /**
         * GET_TOTAL_ROWS
         *
         * Get total number of rows in current grid.
         */
       get_total_rows : function () {
            for(var i=0; i<rows; i++) {
                var empty=true;
                for(var j=0; j<this.columns; j++) {
                    if(grid[i][j]) empty=false;
                }
                if(empty) return i;
            }
            return i;
        },

       get_total_items : function () {
            return $('#grid .item').length;
        },

       get_top_position : function (row) {
            return (row*row_height)+'px';
        },

       get_left_position : function (column) {
            return (column*column_width)+'px';
        },

       set_columns : function() {
            var new_columns=Math.floor(($(window).width()-30)/column_width);
            if(debug) trace('calculated this.columns: '+new_columns);
            if(new_columns>=4&&new_columns!=this.columns) {
                if(debug) trace('changing this.columns: '+new_columns);
                this.columns=new_columns;
                var width=this.columns*column_width;
                $('#grid').css({width:width+'px'}); // set new grid size
                $('header.top .container').css({width:width+'px'}); // update header position
            }
            return this.columns;
        },


       place_item : function (item,row,column,animate) {
            var size=get_item_size(item);
            var location={top:get_top_position(row),left:get_left_position(column)};
            switch(size)
            {

                case 'a': // 1x1
                    if( grid[row][column] ) return false; // space clear?
                    grid[row][column] = 'a1';
                    break;

                case 'b': // 1x2
                    if( grid[row][column] || grid[row+1][column] ) return false; // space clear?
                    if( strict && (

                        ( (column-1)>=0 && grid[row][column-1]=='b1' && grid[row+1][column-1]=='b2' ) // size b to left
                            ||
                            ( (column+1)<this.columns && grid[row][column+1]=='b1' && grid[row+1][column+1]=='b2' ) // size b to right
                            ||
                            ( (column-1)>=0 && grid[row][column-1]=='d1' && grid[row+1][column-1]=='d3' ) // size d to left
                            ||
                            ( (column+1)<this.columns && grid[row][column+1]=='d1' && grid[row+1][column+1]=='d3' ) // size d to right

                        )) return false; // strict neighbor rules
                    grid[row][column]	='b1';
                    grid[row+1][column]	='b2';
                    break;

                case 'c': // 2x1
                    if( (column+1)>=this.columns || grid[row][column] || grid[row][column+1] ) return false; // space clear?
                    if( strict && (

                        ( (row-1)>=0 && grid[row-1][column]=='c1' && grid[row-1][column+1]=='c2' ) // size c above
                            ||
                            ( (row+1)<max_rows && grid[row+1][column]=='c1' && grid[row+1][column+1]=='c2' ) // size c below
                            ||
                            ( (row-1)>=0 && grid[row-1][column]=='d3' && grid[row-1][column+1]=='d4' ) // size d above
                            ||
                            ( (row+1)<max_rows && grid[row+1][column]=='d1' && grid[row+1][column+1]=='d2' ) // size d below

                        )) return false; // strict neighbor rules
                    grid[row][column]	='c1';
                    grid[row][column+1]	='c2';
                    break;

                case 'd': // 2x2
                    if( (column+1)>=this.columns || grid[row][column] || grid[row][column+1] || grid[row+1][column] || grid[row+1][column+1] ) return false; // space clear?
                    if( strict && (

                        ( (row-1)>=0 && grid[row-1][column]=='c1' && grid[row-1][column+1]=='c2' ) // size c above
                            ||
                            ( (row+1)<max_rows && grid[row+1][column]=='c1' && grid[row+1][column+1]=='c2' ) // size c below
                            ||
                            ( (row-1)>=0 && grid[row-1][column]=='d3' && grid[row-1][column+1]=='d4' ) // size d above
                            ||
                            ( (row+1)<max_rows && grid[row+1][column]=='d1' && grid[row+1][column+1]=='d2' ) // size d below
                            ||
                            ( (column-1)>=0 && grid[row][column-1]=='b1' && grid[row+1][column-1]=='b2' ) // size b to left
                            ||
                            ( (column+1)<this.columns && grid[row][column+1]=='b1' && grid[row+1][column+1]=='b2' ) // size b to right
                            ||
                            ( (column-1)>=0 && grid[row][column-1]=='d1' && grid[row+1][column-1]=='d3' ) // size d to left
                            ||
                            ( (column+1)<this.columns && grid[row][column+1]=='d1' && grid[row+1][column+1]=='d3' ) // size d to right

                        )) return false; // strict neighbor rules
                    grid[row][column]		='d1';
                    grid[row][column+1]		='d2';
                    grid[row+1][column]		='d3';
                    grid[row+1][column+1]	='d4';
                    break;

                case 'e': // 2x3
                    if( (column+1)>=this.columns || grid[row][column] || grid[row][column+1] || grid[row+1][column] || grid[row+1][column+1] || grid[row+2][column] || grid[row+2][column+1] ) return false; // space clear?
                    grid[row][column]		='e1';
                    grid[row][column+1]		='e2';
                    grid[row+1][column]		='e3';
                    grid[row+1][column+1]	='e4';
                    grid[row+2][column]		='e5';
                    grid[row+2][column+1]	='e6';
                    break;

                case 'f': // 3x3
                    if( (column+2)>=this.columns || grid[row][column] || grid[row][column+1]|| grid[row][column+2] || grid[row+1][column] || grid[row+1][column+1] || grid[row+1][column+2] || grid[row+2][column] || grid[row+2][column+1] || grid[row+2][column+2] ) return false; // space clear?
                    grid[row][column]		='f1';
                    grid[row][column+1]		='f2';
                    grid[row][column+2]		='f3';
                    grid[row+1][column]		='f4';
                    grid[row+1][column+1]	='f5';
                    grid[row+1][column+2]	='f6';
                    grid[row+2][column]		='f7';
                    grid[row+2][column+1]	='f8';
                    grid[row+2][column+2]	='f9';
                    break;

                default:
                    return false;

            }
//            if(animate) {
//                $(item).show().stop().animate({top:location.top,left:location.left},animate_speed,easing_method,function() { building=false; });
//            } else {
//                $(item).show().css({top:location.top,left:location.left}); building=false;
//            }
           $(item).show().css({top:location.top,left:location.left}); building=false;
            return true;
        },




























    initContainer : function(){
            $q.Mosaic.slider = new IScroll('#slider-container', { scrollX: true, scrollY: false, mouseWheel: true });




            $('.flexslider').flexslider({
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
                initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
                randomize: false,               //Boolean: Randomize slide order

// Usability features
                pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
                pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
                useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
                touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
                video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches

// Primary Controls
                controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
                directionNav: false,             //Boolean: Create navigation for previous/next navigation? (true/false)
                prevText: "Previous",           //String: Set the text for the "previous" directionNav item
                nextText: "Next",               //String: Set the text for the "next" directionNav item

// Secondary Navigation
                keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
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
//                start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
//                before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
//                after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
//                end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
//                added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
//                removed: function(){}           //{NEW} Callback: function(slider) - Fires after a slide is removed
            });

        }
    });

    $q.Mosaic.Init();
    if($('#slider-container').length > 0) this.landingContent = new $q.Mosaic.Container('#slider-container');

})(jQuery, Quince);
