/*
IMPORTANT
If the canvas content is regenerated from Flash do the following:
1) Find the tween of the back button in the generated JS, assign it to the variable "backButtonTween"
2) Use the same tween code in the function "updateBackButtonTween" in this document. replace "this" with "canvasContent" and add to({_off:true},0) before the first wait() method, change the startpoint:0 with the actual start coordinates . You can also remove unneeded waits.
3) in the generate JS code assign the cjs to the global variable createJS
*/

var currentBGImage = 'general';
var canvasContent;
var backButtonTween;

function initializeCircle(container) {
	canvas = document.getElementById("canvas");
	exportRoot = new lib.quinceMenuCircle();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();
	stage.enableMouseOver();

	createjs.Ticker.setFPS(24);
	createjs.Ticker.addEventListener("tick", stage);
	
	canvasContent = stage.getChildAt(0);
}

function changeBGImage(imageToShow){
	$('#background-' + currentBGImage).fadeOut(500);
	$('#background-' + imageToShow).fadeIn(500,function(){
		currentBGImage = imageToShow;
	});
}

function openGallery(galleryToShow){
	setThumbnails(galleryToShow);
}

function updateBackButtonTween(backButtonY){
	
	// Blue button tween
	canvasContent.timeline.removeTween(backButtonTween);
	backButtonTween = createjs.Tween.get(canvasContent.instance_20).to({_off:true},0).wait(484).to({scaleX:1,scaleY:1,x:215,y:215,_off:false},0).to({scaleX:0.51,scaleY:0.51,x:211.3,y:backButtonY},8).wait(8).to({scaleX:1,scaleY:1,x:215,y:215},7).wait(144);
	canvasContent.timeline.addTween(backButtonTween);
	
	// button hit area
	canvasContent.BTN_back.y = backButtonY;
	
	// button text
	canvasContent.instance.y = backButtonY - 28;
}

function resetCircle(){
	if(canvasContent.timeline.position > 468){
		hideGallery();
		canvasContent.gotoAndPlay(496);
	}
	
}
