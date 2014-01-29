// Initialise menu links to scroll
function initializeScrollingLinks(linkSelector) {

    $(linkSelector).click(function () {
        var location = $(this).attr('data-element');
        var sectionPosition = $('#section-' + location).position();
        $.scrollTo((sectionPosition.top - $('nav').height()), 700);
    });
}

$(function () {
    // Initialise menu links to scroll
//    initializeScrollingLinks('a.scrolling-link');

//    initializeCircle(document.getElementById('circle'));

//    initializeGallery();

    initializeProfiles();
	
	$('nav a').click(function(){
		resetMap();
		resetCircle();
	});

    // Initialize Google Map
    var map = $('#map');
    if(map.length > 0) initializeMap('#map');
	
	$(window).resize(function(){
		resizeHomeContent();
	});
	
	resizeHomeContent();
	
//	$('.colorbox').colorbox({iframe:true, width:"80%", height:"80%"});
//
//	var moreVisibleFlag = true;
//	$(document).on('scroll', function()
//	{
//		if ( moreVisibleFlag === true && $(document).scrollTop() > 20)
//		{
//			$('#section-about .more-selector').fadeOut()
//			moreVisibleFlag = false;
//		}
//		else if ( moreVisibleFlag === false && $(document).scrollTop() == 0 )
//		{
//			$('#section-about .more-selector').fadeIn();
//			moreVisibleFlag = true;
//		}
//	});
});

function resizeHomeContent(){
	
	var MINHEIGHT = 650;
	var currentHeight = $(window).height() - $('nav').height();
	var currentWidth = $(window).width();
	var targetHeight = Math.max(MINHEIGHT, currentHeight);
	
	var imageSrcWidth = 1470;
	var imageSrcHeight = 848;
	var imageRatio = imageSrcHeight / imageSrcWidth;
	
	$('#backgrounds-home').css('height', targetHeight + 'px');
	$('#section-home').css('height', targetHeight + 'px');
	
	if((currentWidth * imageRatio) < targetHeight){
		// adjust according to the height
		$('#backgrounds-home img').css('width', 'auto');
		$('#backgrounds-home img').css('height', targetHeight + 'px');
		$('#backgrounds-home img').css('margin-left', (($(window).width() - $('#backgrounds-home img').width())/2) + 'px');
	} else {
		// adjust according to the width
		$('#backgrounds-home img').css('width', '100%');
        $('#backgrounds-home img').css('height', 'auto');
        $('#backgrounds-home img').css('margin-left', 0);
	}
	
	$('#section-home .content').css('height',targetHeight + 'px');
	$('#nextButton, #prevButton').css('top',((targetHeight - 100)/2).toString() + 'px');
	$('#section-home #canvas').css('margin-top',((targetHeight - 430)/2) + 'px');
	var canvasTargetHeight = Math.max(430,(targetHeight  - ((targetHeight - 430)/2)));
	$('#section-home #canvas').attr('height',canvasTargetHeight + 'px');
//	updateBackButtonTween(canvasTargetHeight - 135);
}

