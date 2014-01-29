// Initialize Google Map
var map, amsterdamMarker, budapestMarker, athensMarker;
function zoomMapTo(marker) {
    map.setZoom(16);
    map.setCenter(marker.getPosition());
	var contactPosition = $('#section-contact').position();
	var mapPosition = $('#map').position();
    $.scrollTo((mapPosition.top + contactPosition.top - $('nav').height()), 400);	
}

function resetMap(){
	map.setZoom(5);
    map.setCenter(new google.maps.LatLng(47.2, 12));
}


// Create map with markers for each Quince location
function initializeMap(mapSelector) {

    var mapElement = $(mapSelector)[0];
    var mapOptions = {
        center: new google.maps.LatLng(47.2, 12),
        zoom: 5,
        mapTypeControl: false,
        zoomControl: true,
        streetViewControl: false,
        scrollwheel: false,
        draggable: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(mapElement, mapOptions);
    amsterdamMarker = new google.maps.Marker({
        position: new google.maps.LatLng(52.328134, 4.867555),
        map: map,
        icon: 'assets/img/map/amsterdam.png'
    });
    budapestMarker = new google.maps.Marker({
        position: new google.maps.LatLng(47.491950, 19.051366),
        map: map,
        icon: 'assets/img/map/budapest.png'
    });
    athensMarker = new google.maps.Marker({
        position: new google.maps.LatLng(40.640687, 22.942505),
        map: map,
        icon: 'assets/img/map/thesaloniki.png'
    });

    // Add click listeners in map
    google.maps.event.addListener(amsterdamMarker, 'click', function () {
        zoomMapTo(amsterdamMarker);
    });
    google.maps.event.addListener(budapestMarker, 'click', function () {
        zoomMapTo(budapestMarker);
    });
    google.maps.event.addListener(athensMarker, 'click', function () {
        //zoomMapTo(athensMarker);
    });

    // Add click handlers to addresses
    $('#contact-amsterdam').find('h3, span', 'span').click(function () {
        zoomMapTo(amsterdamMarker);
    });
    $('#contact-budapest').find('h3, span', 'span').click(function () {
        zoomMapTo(budapestMarker);
    });
    $('#contact-athens').find('h3, span', 'span').click(function () {
        zoomMapTo(athensMarker);
    });
}
