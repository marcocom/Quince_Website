var cases = [
    {
        key: 'software',
        images: [
            {src: 'Software_no1.jpg', alt: 'Quince - Software'},
			{src: 'Software_no2.jpg', alt: 'Quince - Software'},
			{src: 'Software_no3.jpg', alt: 'Quince - Software'},
			{src: 'Software_no4.jpg', alt: 'Quince - Software'},
			{src: 'Software_no5.jpg', alt: 'Quince - Software'},
			{src: 'Software_no6.jpg', alt: 'Quince - Software'}
        ]
    },
    {
        key: 'print',
        images: [
            {src: 'Print_no1.jpg', alt: 'Quince - Print'},
            {src: 'Print_no2.jpg', alt: 'Quince - Print'},
			{src: 'Print_no3.jpg', alt: 'Quince - Print'},
			{src: 'Print_no4.jpg', alt: 'Quince - Print'},
			{src: 'Print_no5.jpg', alt: 'Quince - Print'},
			{src: 'Print_no6.jpg', alt: 'Quince - Print'}
        ]
    },
    { 
		key: 'online',
		images: [
			{src: 'Online_no1.jpg', alt: 'Quince - Online'},
            {src: 'Online_no2.jpg', alt: 'Quince - Online'},
			{src: 'Online_no3.jpg', alt: 'Quince - Online'},
			{src: 'Online_no4.jpg', alt: 'Quince - Online'},
			{src: 'Online_no5.jpg', alt: 'Quince - Online'},
			{src: 'Online_no6.jpg', alt: 'Quince - Online'}
		]
	},
    {
		key: 'displays',
		images: [
			{src: 'Display_no1.jpg', alt: 'Quince - Displays'},
            {src: 'Display_no2.jpg', alt: 'Quince - Displays'},
			{src: 'Display_no3.jpg', alt: 'Quince - Displays'},
			{src: 'Display_no4.jpg', alt: 'Quince - Displays'},
			{src: 'Display_no5.jpg', alt: 'Quince - Displays'},
			{src: 'Display_no6.jpg', alt: 'Quince - Displays'}
		]
	},
    {
		key: 'events',
		images: [
			{src: 'Events_no1.jpg', alt: 'Quince - Events'},
			{src: 'Events_no2.jpg', alt: 'Quince - Events'},
			{src: 'Events_no3.jpg', alt: 'Quince - Events'},
			{src: 'Events_no4.jpg', alt: 'Quince - Events'},
			{src: 'Events_no5.jpg', alt: 'Quince - Events'},
			{src: 'Events_no6.jpg', alt: 'Quince - Events'}
		]
	}
]

var thumbPosition;
var thumbCount;
var currentGallery;
var currentImageIndex;
var images;

function setThumbnails(galleryToShow) {
	currentGallery = galleryToShow;
	
    var container = $('#gallery-images');
    var imgPath = 'assets/img/backgrounds/galleries/' + galleryToShow;

    images = $.grep(cases, function (e) {
        return e.key == galleryToShow
    })[0].images;
    container.empty();
	
	//Hide show more icon on home screen
	$('#section-about .more-selector').fadeOut(600);	

	
    $(images).each(function () {
        var img = $('<img>').attr('src', imgPath + '/thumbs/' + this.src).click(function () {
			showImage(String(this.src).substring(String(this.src).indexOf('/thumbs/') + 8 , String(this.src).length));
        });
        container.append(img);
    });
	
	$('#backgrounds-home img').hide();
	currentImageIndex = 0;
	showImage(images[currentImageIndex].src);

    thumbPosition = 0;
    thumbCount = $(images).length;

    if (thumbCount > 0) {
        $('#gallery').fadeIn(1000);
		$('#prevButton').fadeIn(1000);
		$('#nextButton').fadeIn(1000);
    } else {
        $('#gallery').hide();
    }

}

function showImage(imageSource){
	$('#gallery-images img').removeClass('selected');
	
	var imgPath = 'assets/img/backgrounds/galleries/' + currentGallery;
	
	$('#gallery-images img').each(function(index,image){
		if($(image).attr('src') == imgPath + '/thumbs/' + imageSource){
			$(image).addClass('selected');
		}
	});
	
	$('#background-gallery').fadeOut(100,function(){
		$('#background-gallery').attr('src',imgPath + '/' + imageSource);
		$('#background-gallery').fadeIn(100)
	});
	
	
	
	var i = 0;
	$(images).each(function () {
		if(this.src == imageSource){
			currentImageIndex = i;
		}
		i++;
    });
}

function hideGallery(){
	$('#gallery').fadeOut(600);
	$('#prevButton').fadeOut(600);
	$('#nextButton').fadeOut(600);
	$('#background-print').show();
	$('#background-gallery').fadeOut(200,function(){
		$('#background-gallery').attr('src','');	
	});
	$('#section-about .more-selector').fadeIn(600);
}

function initializeGallery() {

    // Gallery arrows
    $('#gallery-button-left').click(function () {
        if (thumbPosition > 0) {
            thumbPosition--;
            $('#gallery-images').animate({
                marginLeft: '+=134px'
            }, 500);
        }
    });
    $('#gallery-button-right').click(function () {
        if (thumbPosition < thumbCount - 5) {
            thumbPosition++;
            $('#gallery-images').animate({
                marginLeft: '-=134px'
            }, 500);
        }
    });
	
	$('#prevButton').click(function(){
		if(currentImageIndex == 0){
			currentImageIndex = images.length - 1;
		} else {
			currentImageIndex--;
		}
		
		showImage(images[currentImageIndex].src);
	});
	
	$('#nextButton').click(function(){
		if(currentImageIndex == (images.length - 1)){
			currentImageIndex = 0;
		} else {
			currentImageIndex++;
		}
		
		showImage(images[currentImageIndex].src);
	});

}