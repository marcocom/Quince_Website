/*** Circle navigation on the home page ***/
var activeWedge = undefined;
var hoverWedge = undefined;
var clickedWedge = undefined;
var galleryMode = false;
function createWedges(stage, layer, outerCircle, wedges) {
    var angle = 360 / wedges.length;

    var result = new Array();

    $(wedges).each(function (i) {

        var wedge = new Kinetic.Wedge({
            name: wedges[i].toLowerCase(),
            x: stage.getWidth() / 2,
            y: stage.getHeight() / 2,
            radius: outerCircle.getRadius(),
            angleDeg: angle,
            fill: 'white',
            opacity: 0,
            rotationDeg: -90 + (i * angle)
        }).on('mouseover',function () {
				if(!galleryMode){
					setActiveWedge(this);
					hoverWedge = this;
					document.body.style.cursor = 'pointer';
				}
            }).on('mouseout',function () {
				if(!galleryMode){
					hoverWedge = undefined;
	
					document.body.style.cursor = 'default';
	
					if (!clickedWedge) {
						new Kinetic.Tween({
							node: this,
							opacity: 0,
							duration: .2
						}).play();
	
						outerCircle.setFill('white');
						new Kinetic.Tween({
							node: outerCircle,
							opacity: 0.3,
							duration: .5
						}).play();
					}
				}
            }).on('click', function () {
				$('#circle canvas').fadeOut();
				$('.backButton').fadeIn();
				galleryMode = true;
				document.body.style.cursor = 'default';
				hoverWedge = undefined;
                setThumbnails(this);
            });

        var text = new Kinetic.Text({
            x: wedge.getX() - 75 + (wedge.getRadius() * .75) * (Math.cos((2 * Math.PI * i / wedges.length) + ((angle / 2 - 90) * Math.PI / 180))),
            y: wedge.getY() - 20 + (wedge.getRadius() * .75) * (Math.sin((2 * Math.PI * i / wedges.length) + ((angle / 2 - 90) * Math.PI / 180))),
            text: wedges[i],
            listening: false,
            fontSize: 18,
            fontFamily: 'Tahoma',
            fontWeight: 'Bold',
            width: 150,
            align: 'center',
            fill: 'black'
        });
        layer.add(wedge);
        layer.add(text);
        result.push(wedge);
    });
    return result;
}

function setActiveWedge(wedge) {
    new Kinetic.Tween({
        node: wedge,
        opacity: .8,
        duration: .4
    }).play();

    var $active = $('#backgrounds-home img.active');
    var $next = $('#background-' + wedge.getName());
    $next.css('z-index', 2);
    $active.fadeOut(800, function () {
        $active.css('z-index', 1).show().removeClass('active');
        $next.css('z-index', 3).addClass('active');
    });
}


var loopCount = 0;
function loopWedges(wedges) {
	if(!galleryMode){
		$(wedges).each(function () {
			if (this != hoverWedge && this != clickedWedge) {
				new Kinetic.Tween({
					node: this,
					opacity: 0,
					duration: 1
				}).play();
			}
		});
	
		if (hoverWedge === undefined && clickedWedge === undefined) {
			setActiveWedge(wedges[loopCount]);
			loopCount++;
	
			if (loopCount == wedges.length) {
				loopCount = 0;
			}
		}
	}
}

function initializeCircle(container) {
    var stage = new Kinetic.Stage({
        container: container,
        width: 430,
        height: 430
    });

    var layer = new Kinetic.Layer();

    var outerCircle = new Kinetic.Circle({
        x: stage.getWidth() / 2,
        y: stage.getHeight() / 2,
        radius: stage.getWidth() / 2,
        opacity: 0.3,
        fill: 'white'
    });

    var innerCirle = new Kinetic.Circle({
        x: stage.getWidth() / 2,
        y: stage.getHeight() / 2,
        radius: outerCircle.getRadius() / 2,
        opacity: 1,
        fill: '#0090C1'
    });
    var innerText = new Kinetic.Text({
        x: innerCirle.getX() - (innerCirle.getWidth() / 2),
        y: innerCirle.getY() - 30,
        width: innerCirle.getWidth(),
        text: "Retail\nConcept & Activation\n Agency",
        fontSize: 20,
        fontFamily: 'Tahoma',
        align: 'center',
        fill: 'white'
    });

    layer.add(outerCircle);
    var wedges = createWedges(stage, layer, outerCircle, ['Print', 'Software', 'Online', 'Displays', 'Events']);
    layer.add(innerCirle);
    layer.add(innerText);
    stage.add(layer);


    setInterval(function () {
        loopWedges(wedges)
    }, 3000);
	
	$('.backButton').click(function(){
		hideGallery();
		galleryMode = false;
	});
}
