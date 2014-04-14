/*! 
*   Plugin:       livingGrid
*   Description:  A jQuery plugin for manipulating homogenous Bootstrap grids.
*   Version:      0.4.2
*   By:           Ryan Burnette http://ryanburnette.com
*   License:      Apache2 http://www.apache.org/licenses/LICENSE-2.0.html
*/

;(function ($) {
  'use strict';
  
  var thisGrid
    , defaults
    , defaultAction = 'append' // append (default), prepend, insert, delete, sort, reflow
    , i
    , selStr
    , settings
    , elements
    ;
  
  defaults = {
    rowClass: 'row' // 'row' or 'row-fluid'
  , rowColumns: 12
  , spanColumns: 4
  , insertPosition: 0
  , sort: 'asc' // asc or desc
  , sortBy: 'id' // attribute to sort by, if sorting
  };
  
  function sortAlpha(a,b){  
    return $(a).attr(settings.sortBy).toLowerCase() > $(b).attr(settings.sortBy).toLowerCase() ? 1 : -1;
  }
  
  function sortReverse(a,b){  
    return $(b).attr(settings.sortBy).toLowerCase() > $(a).attr(settings.sortBy).toLowerCase() ? 1 : -1;
  }
  
  $.validate = function (that) {
    var grid = that;
    // verify there is only one level of rows
    if ( grid.find(selStr.span).children().find(selStr.span).length > 0 ) {
      return false;
    }
    // verify all spans have same number of columns
    i = 1;
    while ( i < 13 ) {
      if ( i !== settings.spanColumns ) {
        if ( grid.find('.span' + String(i)).length > 0 ) {
          return false;
        }
      }
      i = i + 1;
    }
    return true;
  };
  
  $.append = function (elements, grid) {
    grid.find(selStr.lastRow).append(elements);
  };
  
  $.prepend = function (elements, grid) {
    grid.find(selStr.firstRow).prepend(elements);
  };
  
  $.insert = function (elements, grid) {
    grid.find(selStr.span + ':eq(' + settings.insertPosition + ')').before(elements);
  };
  
  $.delete = function (eq, grid) {
    grid.find(selStr.span + ':eq(' + eq + ')').remove();
  };
  
  $.condense = function () {
    var firstRow = thisGrid.find(selStr.firstRow)
      , notFirstRow = thisGrid.find(selStr.row + ':not(:first)')
      ;
    notFirstRow.find(selStr.span).appendTo(firstRow);
    $.removeEmptyRows();
  };
  
  $.sort = function (sort, grid) {
    var sortFunction
      , sorted
      ;
    
    if ( sort === 'asc' ) {
      sortFunction = sortAlpha;
    }
    else {
      sortFunction = sortReverse;
    }
    sorted = grid.find(selStr.span).sort(sortFunction);
    $(selStr.span).remove();
    $.removeEmptyRows();
    $(selStr.firstRow).append(sorted);
  };
  
  $.appendRow = function () {
    var newRow = $('<div class="' + settings.rowClass + '"></div>');
    thisGrid.append(newRow);
    return newRow;
  };
  
  $.removeEmptyRows = function () {
    thisGrid.find(selStr.row + ':not(:first)').each(function () {
      if ( $(this).children(selStr.span).length === 0 ) {
        $(this).remove();
      }
    });
  };
  
  $.reflowRows = function (grid) {
    var rows = grid.find(selStr.row)
      , rowTotal = rows.length
      , fullRowColumns = ( settings.rowColumns / settings.spanColumns )
      , colCounter
      , nextRow
      , thatRow
      ;
    
    for ( i = 0; i <= rowTotal; i++ ) {
      thatRow = grid.find(selStr.row + ':eq(' + String(i) + ')');
      colCounter = 0;
      thatRow.find(selStr.span).each(function () {
        colCounter = colCounter + settings.spanColumns;
      });
      $.removeEmptyRows();
      nextRow = grid.find(selStr.row + ':eq(' + String(i + 1) + ')');
      if ( colCounter > 12 ) {
        if ( nextRow.length === 0 ) {
          nextRow = $.appendRow();
          rowTotal = rowTotal + 1;
        }
        thatRow.find(selStr.span).slice(fullRowColumns).prependTo(nextRow);
        i = i - 1;
      }
      if ( colCounter < 12 ) {
        if ( nextRow.length === 0 ) {
        }
        else {
          nextRow.find(selStr.firstSpan).appendTo(thatRow);
        }
      }
    }
  };
  
  $.getSettings = function (defaults,options,grid) {
    var preSettings = grid.data('livingGridSettings')
      , newSettings
      ;
    
    if ( !preSettings ) {
      newSettings = $.extend(defaults,options);
      grid.data('livingGridSettings',newSettings);
      return newSettings;
    }
    
    return $.extend(preSettings,options);
  };
  
  $.fn.livingGrid = function (passedElements, action, options) {
    thisGrid = this;
    elements = passedElements;
    action = action || defaultAction;
    settings = $.getSettings(defaults,options,$(this));
    
    selStr = {
      row: '.' + settings.rowClass
    , firstRow: '.' + settings.rowClass + ':first'
    , lastRow: '.' + settings.rowClass + ':last'
    , span: '.span' + String(settings.spanColumns)
    , firstSpan: '.span' + String(settings.spanColumns) + ':first'
    , lastSpan: '.span' + String(settings.spanColumns) + ':last'
    };
    
    return this.each(function () {      
      if ( !$.validate($(this)) ) {
        console.log('livingGrid:','incompatible grid');
        return false;
      }
      
      if ( elements && action === 'append' ) {
        $.append(elements, $(this));
      }
      
      if ( elements && action === 'prepend' ) {
        $.prepend(elements, $(this));
      }
      
      if ( elements && action === 'insert' ) {
        $.insert(elements, $(this));
      }
      
      if ( elements && action === 'delete' ) {
        $.delete(elements, $(this));
      }
      
      if ( action === 'sort' ) {
        $.sort(settings.sort,$(this));
      }
      
      if ( elements !== null || action === 'sort' || action === 'reflow' ) {
        $.reflowRows($(this));
      }
      
      return this;
    });
  };
}(jQuery));
