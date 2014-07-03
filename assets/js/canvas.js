

(function (lib, img, cjs) {

var textShadow = new createjs.Shadow("#666666", 0, 0, 2);

var p; // shortcut to reference prototypes

// stage content:
(lib.quinceMenuCircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:9,OutroToButton:469,IntroFromBackbutton:496,eventsSelect:511,displaysSelect:539,softwareSelected:566,onlineSelected:594,printSelected:622});

	// timeline functions:
	this.frame_9 = function() {
		var eventsSelectedFrame = 511;
			var displaysSelectedFrame = 539;
			var softwareSelectedFrame = 566;
			var onlineSelectedFrame = 594;
			var printSelectedFrame = 622;
			
			this.BTN_events.onClick = function(){
				this.parent.gotoAndPlay(eventsSelectedFrame);
				openGallery("events");
			}
			
			this.BTN_displays.onClick = function(){
				this.parent.gotoAndPlay(displaysSelectedFrame);
				openGallery("displays");
			}
			
			this.BTN_software.onClick = function(){
				this.parent.gotoAndPlay(softwareSelectedFrame);
				openGallery("software");
			}
			
			this.BTN_online.onClick = function(){
				this.parent.gotoAndPlay(onlineSelectedFrame);
				openGallery("online");
			}
			
			this.BTN_print.onClick = function(){
				this.parent.gotoAndPlay(printSelectedFrame);
				openGallery("print");
			}
	}
	this.frame_48 = function() {
		// Show print image
			changeBGImage("print");
	}
	this.frame_126 = function() {
		// Show online image
			changeBGImage("online");
	}
	this.frame_195 = function() {
		// Show software image
			changeBGImage("software");
	}
	this.frame_272 = function() {
		// Show displays image
			changeBGImage("displays");
	}
	this.frame_343 = function() {
		// Show events image
			changeBGImage("events");
	}
	this.frame_413 = function() {
		changeBGImage("print");
	}
	this.frame_423 = function() {
		this.gotoAndPlay(59);
	}
	this.frame_426 = function() {
		// Show general image
			changeBGImage("general");
	}
	this.frame_468 = function() {
		// Show events image
			this.gotoAndPlay(9);
	}
	this.frame_495 = function() {
		this.stop();
			this.BTN_back.onClick = function(){
				this.parent.gotoAndPlay(496);
				hideGallery();
			}
	}
	this.frame_510 = function() {
		this.gotoAndPlay(9);
	}
	this.frame_538 = function() {
		this.gotoAndPlay(469); // frame number for the back button animation
	}
	this.frame_565 = function() {
		this.gotoAndPlay(469); // frame number for the back button animation
	}
	this.frame_593 = function() {
		this.gotoAndPlay(469); // frame number for the back button animation
	}
	this.frame_621 = function() {
		this.gotoAndPlay(469); // frame number for the back button animation
	}
	this.frame_650 = function() {
		this.gotoAndPlay(469); // frame number for the back button animation
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(39).call(this.frame_48).wait(78).call(this.frame_126).wait(69).call(this.frame_195).wait(77).call(this.frame_272).wait(71).call(this.frame_343).wait(70).call(this.frame_413).wait(10).call(this.frame_423).wait(3).call(this.frame_426).wait(42).call(this.frame_468).wait(27).call(this.frame_495).wait(15).call(this.frame_510).wait(28).call(this.frame_538).wait(27).call(this.frame_565).wait(28).call(this.frame_593).wait(28).call(this.frame_621).wait(29).call(this.frame_650));

	// Layer 1
	this.instance = new lib.Text_back();
	this.instance.setTransform(210.9,774.5,0.7,0.7,0,0,0,35.7,12.7);
	this.instance.alpha = 0.051;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(491).to({_off:false},0).to({alpha:1},4).wait(1).to({alpha:0.051},4).to({_off:true},1).wait(150));

	// Layer 11
	this.instance_1 = new lib.Reatail_consept_blu_stip_text();
	this.instance_1.setTransform(214.6,214.3,0.355,0.355,0,0,0,78.2,24.9);
	this.instance_1.alpha = 0.051;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({regX:78.1,scaleX:1,scaleY:1,x:213.9,y:212.9,alpha:1},4).wait(470).to({alpha:0},5).wait(23).to({alpha:1},3).wait(141));

	// Layer 10
	this.instance_2 = new lib.midden_circel_ani();
	this.instance_2.setTransform(215,215,0.222,0.222,0,0,0,97.7,97.7);
	this.instance_2.alpha = 0.051;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6).wait(476).to({_off:true},1).wait(167));

	// BTN_events
	this.BTN_events = new lib.BTN_events();
	this.BTN_events.setTransform(112.8,92.5,1,1,0,0,0,102.3,92.5);
	this.BTN_events._off = true;
	new cjs.ButtonHelper(this.BTN_events, 0, 1, 2, false, new lib.BTN_events(), 3);

	this.timeline.addTween(cjs.Tween.get(this.BTN_events).wait(9).to({_off:false},0).wait(461).to({_off:true},0).wait(181));

	// BTN_displays
	this.BTN_displays = new lib.BTN_displays();
	this.BTN_displays.setTransform(78.9,268.8,1,1,0,0,0,78.9,120.2);
	this.BTN_displays._off = true;
	new cjs.ButtonHelper(this.BTN_displays, 0, 1, 2, false, new lib.BTN_displays(), 3);

	this.timeline.addTween(cjs.Tween.get(this.BTN_displays).wait(9).to({_off:false},0).wait(461).to({_off:true},0).wait(181));

	// BTN_software
	this.BTN_software = new lib.BTN_software();
	this.BTN_software.setTransform(215.1,361.9,1,1,0,0,0,126.4,68.1);
	this.BTN_software._off = true;
	new cjs.ButtonHelper(this.BTN_software, 0, 1, 2, false, new lib.BTN_software(), 3);

	this.timeline.addTween(cjs.Tween.get(this.BTN_software).wait(9).to({_off:false},0).wait(461).to({_off:true},0).wait(181));

	// BTN_online
	this.BTN_online = new lib.BTN_online();
	this.BTN_online.setTransform(351.1,268.8,1,1,0,0,0,78.9,120.2);
	this.BTN_online._off = true;
	new cjs.ButtonHelper(this.BTN_online, 0, 1, 2, false, new lib.BTN_online(), 3);

	this.timeline.addTween(cjs.Tween.get(this.BTN_online).wait(9).to({_off:false},0).wait(461).to({_off:true},0).wait(181));

	// BTN_print
	this.BTN_print = new lib.BTN_print();
	this.BTN_print.setTransform(317.3,92.5,1,1,0,0,0,102.3,92.5);
	this.BTN_print._off = true;
	new cjs.ButtonHelper(this.BTN_print, 0, 1, 2, false, new lib.BTN_print(), 3);

	this.timeline.addTween(cjs.Tween.get(this.BTN_print).wait(9).to({_off:false},0).wait(461).to({_off:true},0).wait(181));

	// preloader
	this.instance_3 = new lib.Loading_animation();
	this.instance_3.setTransform(84.4,78.4,1.002,1.002);
	this.instance_3.alpha = 0.031;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).wait(33).to({_off:false},0).to({alpha:1},5).wait(371).to({scaleX:1,scaleY:1,x:84.5,alpha:0.031},4).to({_off:true},1).wait(229));

	// events_tekst_blue
	this.instance_4 = new lib.tekst_events_blue();
	this.instance_4.setTransform(125.8,90.3,1,1,0,0,0,24.9,7.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(343).wait(5).to({_off:false},0).to({alpha:1},4).wait(61).to({alpha:0},3).to({_off:true},1).wait(234));

	// events_tekst_white
	this.instance_5 = new lib.transperant();
	this.instance_5.setTransform(125.8,90.3,1,1,0,0,0,24.9,7.2);
	this.instance_5.alpha = 0.051;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).wait(38).to({_off:false},0).to({alpha:1},4).wait(298).to({alpha:0},4).wait(61).to({alpha:1},3).wait(10).to({alpha:0.051},4).to({_off:true},1).wait(220));

	// display_tekst_blue
	this.instance_6 = new lib.Tekst_Display_blue();
	this.instance_6.setTransform(72.1,270.5,1,1,0,0,0,31.1,7.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(272).wait(7).to({_off:false},0).to({alpha:1},4).wait(63).to({alpha:0},5).to({_off:true},1).wait(299));

	// display_tekst
	this.instance_7 = new lib.displays_transperant();
	this.instance_7.setTransform(72.1,270.5,1,1,0,0,0,31.1,7.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).wait(30).to({_off:false},0).to({alpha:1},4).wait(237).to({alpha:0},4).wait(60).to({alpha:1},0).wait(3).to({alpha:0},0).to({alpha:1},5).wait(83).to({alpha:0},4).to({_off:true},1).wait(212));

	// soft_ware_tekst_blue
	this.instance_8 = new lib.tekst_software_blue();
	this.instance_8.setTransform(215.9,374,1,1,0,0,0,33.8,7.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(200).to({_off:false},0).to({alpha:1},3).wait(69).to({alpha:0},4).to({_off:true},1).wait(374));

	// soft_ware_tekst
	this.instance_9 = new lib.tekst_software_white();
	this.instance_9.setTransform(216,374,1,1,0,0,0,33.9,7.2);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30).to({_off:false},0).to({regX:33.8,x:215.9,alpha:1},4).wait(169).to({alpha:0},3).wait(69).to({alpha:1},4).wait(150).to({regX:33.9,x:216},0).wait(16).to({alpha:0},4).to({_off:true},1).wait(204));

	// online_tekst
	this.instance_10 = new lib.txt_online_blue();
	this.instance_10.setTransform(360.6,270.4,1,1,0,0,0,24.1,7.2);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(25).wait(105).to({_off:false},0).to({alpha:1},4).wait(61).to({alpha:0},4).to({_off:true},1).wait(451));

	// online_tekst
	this.instance_11 = new lib.Online_tekst_transprant();
	this.instance_11.setTransform(360.6,270.4,1,1,0,0,0,24.1,7.2);
	this.instance_11.alpha = 0.051;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(8).wait(13).to({_off:false},0).to({alpha:1},4).wait(105).to({alpha:0},4).wait(61).to({alpha:1},4).wait(251).to({alpha:0},4).to({_off:true},1).wait(196));

	// print_tekst
	this.instance_12 = new lib.Tekst_print_blue();
	this.instance_12.setTransform(304.4,90.2,1,1,0,0,0,18.1,7.2);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(17).wait(38).to({_off:false},0).to({alpha:1},4).wait(67).to({alpha:0},4).to({_off:true},1).wait(520));

	// print_tekst
	this.instance_13 = new lib.Tekst_print_white();
	this.instance_13.setTransform(304.5,90.2,1,1,0,0,0,18.2,7.2);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(8).wait(5).to({_off:false},0).to({regX:18.1,x:304.4,alpha:1},4).wait(38).to({alpha:0},4).wait(67).to({alpha:1},4).wait(213).wait(83).to({regX:18.2,x:304.5},0).wait(33).to({alpha:0},4).to({_off:true},1).wait(187));

	// Layer 23
	this.instance_14 = new lib.print_schijf_wit();
	this.instance_14.setTransform(214.1,212.9,1,1,-72.4,0,0,-0.9,213);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(8).wait(40).to({_off:false},0).to({rotation:0,y:213,alpha:1},8).wait(3).wait(67).to({x:215.9,y:214},0).to({regY:213.1,scaleX:1,scaleY:1,rotation:73.5,x:215.8,y:214.1},8).wait(63).to({regY:212.9,scaleX:1,scaleY:1,rotation:144.2,x:217.3,y:216.6},6).wait(71).to({rotation:217,x:213.7,y:216.5},7).wait(62).to({regY:213,rotation:287.3,x:213,y:215},9).wait(63).to({regX:-0.7,regY:213.1,scaleX:1,scaleY:1,rotation:360,x:214.2,y:213.1},8).to({_off:true},46).wait(182));

	// print_schijf_intro
	this.instance_15 = new lib.print_schijf();
	this.instance_15.setTransform(215,215,1,1,-72.4,0,0,0,215);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(8).wait(1).to({_off:false},0).to({rotation:0,alpha:1},4,cjs.Ease.get(0.25)).wait(450).to({rotation:-72.3,alpha:0},4).to({_off:true},1).wait(183));

	// online_schijf_intro
	this.instance_16 = new lib.Online_schijf();
	this.instance_16.setTransform(215.1,214.9,1,1,-71.4,0,0,-57,66.5);
	this.instance_16.alpha = 0.4;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(8).wait(9).to({_off:false},0).to({regX:-57,rotation:0,y:215.1},4,cjs.Ease.get(0.26)).wait(434).to({regX:-56.9,rotation:-71.3,y:214.9},4).to({_off:true},1).wait(191));

	// software_schijf_intro
	this.instance_17 = new lib.software_schijf();
	this.instance_17.setTransform(215,214.7,1,1,-73.3,0,0,126.4,-78.7);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(8).wait(17).to({_off:false},0).to({rotation:0,x:215.1},4,cjs.Ease.get(0.25)).wait(417).to({rotation:-73.2,x:215},4).to({_off:true},1).wait(200));

	// display_schijf_intro
	this.instance_18 = new lib.Display_schijf();
	this.instance_18.setTransform(215.09,215,1,1,-72.6,0,0,215,66.4);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(8).wait(26).to({_off:false},0).to({regY:66.5,rotation:0,y:215.1},4,cjs.Ease.get(0.25)).wait(400).to({regY:66.4,rotation:-72.5,y:215},4).to({_off:true},1).wait(208));

	// events_schijf_intro
	this.instance_19 = new lib.events_schijf();
	this.instance_19.setTransform(215.1,215.25,1,1,-72.1,0,0,204.5,215.1);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(8).wait(34).to({_off:false},0).to({regY:215,rotation:0,x:215},4,cjs.Ease.get(0.25)).wait(384).to({regY:215.1,rotation:-72,x:215.1},4).to({_off:true},1).wait(216));

	// Layer 3
	this.BTN_back = new lib.btn_back();
	this.BTN_back.setTransform(211.2,800.8,1,1,0,0,0,50.1,50.1);
	this.BTN_back._off = true;
	new cjs.ButtonHelper(this.BTN_back, 0, 1, 2, false, new lib.btn_back(), 3);

	this.timeline.addTween(cjs.Tween.get(this.BTN_back).wait(492).to({_off:false},0).wait(159));

	// Layer 2
	this.instance_20 = new lib.Tween6("synched",0);
	this.instance_20.setTransform(215,215);
	this.instance_20._off = true;

	backButtonTween = cjs.Tween.get(this.instance_20).wait(484).to({startPosition:0,_off:false},0).to({scaleX:0.51,scaleY:0.51,x:211.3,y:800.9},8).wait(4).to({startPosition:0},0).wait(4).to({startPosition:0},0).to({scaleX:1,scaleY:1,x:215,y:215},7).wait(144);

	this.timeline.addTween(backButtonTween);

	// events_tekst_white
	this.instance_21 = new lib.tekst_events();
	this.instance_21.setTransform(125.4,89.4,1,1,0,0,0,24.9,7.2);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(469).to({_off:false},0).to({regX:24.7,scaleX:0.61,scaleY:0.61,x:165.4,y:143.7,alpha:0},9).wait(33).to({regX:24.9,scaleX:1,scaleY:1,x:125.4,y:90.4,alpha:1},0).wait(140));

	// display_tekst
	this.instance_22 = new lib.Tekst_Display();
	this.instance_22.setTransform(71.8,269.5,1,1,0,0,0,31.1,7.2);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(469).to({_off:false},0).to({regX:30.9,scaleX:0.61,scaleY:0.61,x:132.7,y:253.6,alpha:0},9).wait(33).to({regX:31.1,scaleX:1,scaleY:1,x:71.8,y:270.5,alpha:1},0).wait(140));

	// soft_ware_tekst
	this.instance_23 = new lib.tekst_software();
	this.instance_23.setTransform(215.5,373,1,1,0,0,0,33.8,7.2);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(469).to({_off:false},0).to({scaleX:0.61,scaleY:0.61,x:220.3,y:316.6,alpha:0},9).wait(33).to({scaleX:1,scaleY:1,x:215.5,y:374,alpha:1},0).wait(140));

	// online_tekst
	this.instance_24 = new lib.txt_online();
	this.instance_24.setTransform(360.3,269.4,1,1,0,0,0,24.1,7.2);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(469).to({_off:false},0).to({regY:7.1,scaleX:0.74,scaleY:0.74,x:322.6,y:255.4,alpha:0},9).wait(33).to({regY:7.2,scaleX:1,scaleY:1,x:361.5,y:270.4,alpha:1},0).wait(140));

	// print_tekst
	this.instance_25 = new lib.Tekst_print();
	this.instance_25.setTransform(304.1,89.3,1,1,0,0,0,18.1,7.2);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(469).to({_off:false},0).to({regX:18.2,scaleX:0.61,scaleY:0.61,x:274.3,y:143.7,alpha:0},9).wait(33).to({regX:18.1,scaleX:1,scaleY:1,x:304.1,y:90.3,alpha:1},0).wait(140));

	// print_schijf_intro
	this.instance_26 = new lib.print_schijf();
	this.instance_26.setTransform(317.3,92.5,1,1,0,0,0,102.3,92.5);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(469).to({_off:false},0).to({regX:102.2,regY:92.7,scaleX:0.61,scaleY:0.61,x:282.3,y:144.6,alpha:0},9).wait(33).to({regX:102.3,regY:92.5,scaleX:1,scaleY:1,x:317.3,y:92.5,alpha:1},0).wait(140));

	// online_schijf_intro
	this.instance_27 = new lib.events_schijf();
	this.instance_27.setTransform(112.8,92.5,1,1,0,0,0,102.3,92.5);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(469).to({_off:false},0).to({regY:92.7,scaleX:0.61,scaleY:0.61,x:157.7,y:144.6,alpha:0},9).wait(33).to({regY:92.5,scaleX:1,scaleY:1,x:112.8,y:92.5,alpha:1},0).wait(140));

	// software_schijf_intro
	this.instance_28 = new lib.Display_schijf();
	this.instance_28.setTransform(78.9,268.8,1,1,0,0,0,78.9,120.2);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(469).to({_off:false},0).to({regY:119.9,scaleX:0.61,scaleY:0.61,x:137.1,y:251.7,alpha:0},9).wait(33).to({regY:120.2,scaleX:1,scaleY:1,x:78.9,y:268.8,alpha:1},0).wait(140));

	// display_schijf_intro
	this.instance_29 = new lib.software_schijf();
	this.instance_29.setTransform(215.1,361.9,1,1,0,0,0,126.4,68.1);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(469).to({_off:false},0).to({regX:126.5,regY:68,scaleX:0.61,scaleY:0.61,x:220,y:308.5,alpha:0},9).wait(33).to({regX:126.4,regY:68.1,scaleX:1,scaleY:1,x:215.1,y:361.9,alpha:1},0).wait(140));

	// events_schijf_intro
	this.instance_30 = new lib.Online_schijF_ani("single",0);
	this.instance_30.setTransform(351.1,268.8,1,1,0,0,0,78.9,120.2);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(469).to({startPosition:0,_off:false},0).to({regY:119.9,scaleX:0.61,scaleY:0.61,x:302.9,y:251.7,alpha:0},9).wait(33).to({regY:120.2,scaleX:1,scaleY:1,x:351.1,y:268.8,alpha:1},0).wait(140));

	// tekst_print
	this.instance_31 = new lib.Tekst_print_blue();
	this.instance_31.setTransform(304.1,90.3,1,1,0,0,0,18.1,7.2);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(628).to({_off:false},0).to({alpha:1},6).wait(5).to({alpha:0},3).wait(9));

	// tekst_print
	this.instance_32 = new lib.Tekst_print();
	this.instance_32.setTransform(304.1,90.3,1,1,0,0,0,18.1,7.2);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(622).to({_off:false},0).wait(6).to({alpha:0},6).wait(5).to({alpha:1},3).wait(9));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_622 = new cjs.Graphics().p("AJ1G6QkBi+lAAAIAAyXQFgAAFLBvQFABrERDJQENDHDFEPQDHERBoFBIxgFsQhgkoj8i6g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(622).to({graphics:mask_graphics_622,x:209.8,y:92.5}).wait(29));

	// Layer 7
	this.instance_33 = new lib.print_schijf_wit();
	this.instance_33.setTransform(214.1,212.9,1,1,-72.4,0,0,-0.9,213);
	this.instance_33.alpha = 0;
	this.instance_33._off = true;

	this.instance_33.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(622).to({_off:false},0).to({rotation:0,y:213,alpha:1},10).wait(10).to({rotation:-72.3,y:212.9,alpha:0},8).wait(1));

	// text_online
	this.instance_34 = new lib.txt_online_blue();
	this.instance_34.setTransform(361.4,270.4,1,1,0,0,0,24.1,7.2);
	this.instance_34.alpha = 0;
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(601).to({_off:false},0).to({x:361.5,alpha:1},4).wait(4).to({y:270.5,alpha:0},4).to({_off:true},9).wait(29));

	// text_online
	this.instance_35 = new lib.txt_online();
	this.instance_35.setTransform(361.4,270.4,1,1,0,0,0,24.1,7.2);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(594).to({_off:false},0).wait(7).to({x:361.5,alpha:0},4).wait(4).to({y:270.5,alpha:1},4).to({_off:true},9).wait(29));

	// mask_schijf (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_594 = new cjs.Graphics().p("AI7PgQC7iHBpjLQBtjTAAjuQABicgwiPIRglsQBoFFABFSQgBIPjxHQQjqHBmbErg");
	var mask_1_graphics_602 = new cjs.Graphics().p("AI7PgQC7iHBpjLQBtjTAAjuQABicgwiPIRglsQBoFFABFSQgBIPjxHQQjqHBmbErg");
	var mask_1_graphics_612 = new cjs.Graphics().p("AI7PgQC7iHBpjLQBtjTAAjuQABicgwiPIRglsQBoFFABFSQgBIPjxHQQjqHBmbErg");
	var mask_1_graphics_619 = new cjs.Graphics().p("AI7PgQC7iHBpjLQBtjTAAjuQABicgwiPIRglsQBoFFABFSQgBIPjxHQQjqHBmbErg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(594).to({graphics:mask_1_graphics_594,x:215,y:194.5}).wait(8).to({graphics:mask_1_graphics_602,x:215,y:194.5}).wait(2).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_1_graphics_612,x:215,y:194.5}).wait(7).to({graphics:mask_1_graphics_619,x:215,y:194.5}).wait(32));

	// witte_schijf
	this.instance_36 = new lib.Online_schijf();
	this.instance_36.setTransform(219.2,215.6,1,1,-76.3,0,0,-53,67.2);
	this.instance_36.alpha = 0;
	this.instance_36._off = true;

	this.instance_36.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(594).to({_off:false},0).to({rotation:0,y:215.8,alpha:1},9).wait(9).to({rotation:-76.2,y:215.6,alpha:0},9).to({_off:true},1).wait(29));

	// tekst_software
	this.instance_37 = new lib.tekst_software_blue();
	this.instance_37.setTransform(215.5,374.1,1,1,0,0,0,33.8,7.2);
	this.instance_37.alpha = 0;
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(566).wait(4).to({_off:false},0).to({y:374,alpha:1},4).wait(5).to({alpha:0},4).to({_off:true},11).wait(57));

	// tekst_software
	this.instance_38 = new lib.tekst_software();
	this.instance_38.setTransform(215.5,374,1,1,0,0,0,33.8,7.2);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(566).to({_off:false},0).wait(4).to({y:374.1},0).to({y:374,alpha:0},4).wait(5).to({alpha:1},4).to({_off:true},11).wait(57));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_566 = new cjs.Graphics().p("Ajnf5Qk+hpkOjFIKyu5QB9BaCNAwQCUAwCeAAQCdAACVgwQCPgwB6hZIK0O4QkPDFk8BpQlIBslcABQldgBlFhsg");
	var mask_2_graphics_584 = new cjs.Graphics().p("Ajnf5Qk+hpkOjFIKyu5QB9BaCNAwQCUAwCeAAQCdAACVgwQCPgwB6hZIK0O4QkPDFk8BpQlIBslcABQldgBlFhsg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(566).to({graphics:mask_2_graphics_566,x:170.7,y:215}).wait(9).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_2_graphics_584,x:170.7,y:215}).wait(67));

	// schijf_wit
	this.instance_39 = new lib.software_schijf_wit();
	this.instance_39.setTransform(213.2,213.8,1,1,-72.7,0,0,124.4,-79.8);
	this.instance_39.alpha = 0;
	this.instance_39._off = true;

	this.instance_39.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(566).to({_off:false},0).to({rotation:0,x:213.1,y:213.9,alpha:1},9).wait(9).to({rotation:-72.6,x:213.2,y:213.8,alpha:0},9).to({_off:true},1).wait(57));

	// tekst_displays
	this.instance_40 = new lib.Tekst_Display_blue();
	this.instance_40.setTransform(71.8,270.5,1,1,0,0,0,31.1,7.2);
	this.instance_40.alpha = 0;
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(544).to({_off:false},0).to({alpha:1},4).wait(6).to({alpha:0},4).to({_off:true},8).wait(85));

	// tekst_displays
	this.instance_41 = new lib.Tekst_Display();
	this.instance_41.setTransform(71.8,270.4,1,1,0,0,0,31.1,7.2);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(539).to({_off:false},0).wait(5).to({y:270.5},0).to({alpha:0},4).wait(6).to({alpha:1},4).to({_off:true},8).wait(85));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_539 = new cjs.Graphics().p("AoiSpQjynQAAoPQAAlTBplEIReFtQgwCQAACaQAADuBuDTQBpDLC7CIIq0O4QmZksjqnBg");
	var mask_3_graphics_557 = new cjs.Graphics().p("AoiSpQjynQAAoPQAAlTBplEIReFtQgwCQAACaQAADuBuDTQBpDLC7CIIq0O4QmZksjqnBg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(539).to({graphics:mask_3_graphics_539,x:78.9,y:194.2}).wait(9).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_3_graphics_557,x:78.9,y:194.2}).wait(94));

	// pie
	this.instance_42 = new lib.Display_schijf_wit();
	this.instance_42.setTransform(215,213.3,1,1,-72.4,0,0,214.9,65.3);
	this.instance_42.alpha = 0;
	this.instance_42._off = true;

	this.instance_42.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(539).to({_off:false},0).to({regY:65.2,rotation:0,x:214.9,y:213.2,alpha:1},8).wait(10).to({regY:65.3,rotation:-72.3,x:215,y:213.3,alpha:0},8).to({_off:true},1).wait(85));

	// tekst_events_blue
	this.instance_43 = new lib.tekst_events_blue();
	this.instance_43.setTransform(125.4,90.4,1,1,0,0,0,24.9,7.2);
	this.instance_43.alpha = 0;
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(511).wait(8).to({_off:false},0).to({alpha:1},5).wait(6).to({alpha:0},5).to({_off:true},4).wait(112));

	// tekst_events_white
	this.instance_44 = new lib.tekst_events();
	this.instance_44.setTransform(125.4,90.3,1,1,0,0,0,24.9,7.2);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(511).to({_off:false},0).wait(8).to({y:90.4},0).to({alpha:0},5).wait(6).to({alpha:1},5).to({_off:true},4).wait(112));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_511 = new cjs.Graphics().p("AvJIwQBolBDIkRQDEkPENjHQEPjJE/hrQFMhvFhAAIAASXQlCAAkBC+Qj7C6hgEog");
	var mask_4_graphics_529 = new cjs.Graphics().p("AvJIwQBolBDIkRQDEkPENjHQEPjJE/hrQFMhvFhAAIAASXQlCAAkBC+Qj7C6hgEog");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(511).to({graphics:mask_4_graphics_511,x:107.6,y:92.5}).wait(10).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_4_graphics_529,x:107.6,y:92.5}).wait(122));

	// pie
	this.instance_45 = new lib.events_schijf_wit();
	this.instance_45.setTransform(215.7,214.6,1,1,73.2,0,0,205.2,216.5);
	this.instance_45.alpha = 0;
	this.instance_45._off = true;

	this.instance_45.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(511).to({_off:false},0).to({regX:205.3,rotation:0,x:215.8,y:216.5,alpha:1},9).wait(9).to({regX:205.2,regY:216.4,rotation:72.5,alpha:0},9).to({_off:true},1).wait(112));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


// symbols:
(lib.txt_online_blue = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Online", "bold 15px Tahoma", "#188FBC");
	this.text.lineHeight = 18;
	this.text.lineWidth = 67;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71,21.9);


(lib.txt_online = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Online", "bold 15px Tahoma", "#ffffff");
	this.text.shadow = textShadow;
	this.text.lineHeight = 18;
	this.text.lineWidth = 67;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71,21.9);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("Al6OEQivhKiIiHQiHiHhLiwQhNi1AAjHQABjFBMi1QBLivCGiIQCHiHCwhLQC2hNDFAAQDGABC1BMQCvBLCICGQCHCHBLCwQBNC2AADFQgBDGhMC1QhLCwiGCIQiHCHiwBKQi1BNjHAAQjFgBi1hMg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.6,-97.6,195.4,195.4);


(lib.Text_back = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("go back", "bold 12px Tahoma", "#FFFFFF");
	this.text.lineHeight = 14;
	this.text.lineWidth = 81;
	this.text.setTransform(-7.4,8.5,1.764,1.764);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.5,8.5,149.5,32.7);


(lib.tekst_software_white = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Software", "bold 15px Tahoma", "#ffffff");
	this.text.shadow = textShadow;
	this.text.lineHeight = 18;
	this.text.lineWidth = 85;
	this.text.setTransform(0,0.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,89,21.9);


(lib.tekst_software_blue = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Software", "bold 15px Tahoma", "#188FBC");
	this.text.lineHeight = 18;
	this.text.lineWidth = 85;
	this.text.setTransform(0,0.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,89,21.9);


(lib.tekst_software = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Software", "bold 15px Tahoma", "#ffffff");
	this.text.lineHeight = 18;
	this.text.lineWidth = 85;
	this.text.setTransform(0,0.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,89,21.9);


(lib.Tekst_print_white = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Print", "bold 15px Tahoma", "#ffffff");
	this.text.shadow = textShadow;
	this.text.lineHeight = 18;
	this.text.lineWidth = 49;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53,21.9);


(lib.Tekst_print_blue = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Print", "bold 15px Tahoma", "#188FBC");
	this.text.lineHeight = 18;
	this.text.lineWidth = 49;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53,21.9);


(lib.tekst_events_blue = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Events", "bold 15px Tahoma", "#188FBC");
	this.text.lineHeight = 18;
	this.text.lineWidth = 62;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66,21.9);


(lib.tekst_events = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Events", "bold 15px Tahoma", "#ffffff");
	this.text.shadow = textShadow;
	this.text.lineHeight = 18;
	this.text.lineWidth = 62;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66,21.9);


(lib.Tekst_Display_blue = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Displays", "bold 15px Tahoma", "#188FBC");
	this.text.lineHeight = 18;
	this.text.lineWidth = 76;
	this.text.setTransform(0,0.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.1,21.9);


(lib.Tekst_Display = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Displays", "bold 15px Tahoma", "#ffffff");
	this.text.shadow = textShadow;
	this.text.lineHeight = 18;
	this.text.lineWidth = 76;
	this.text.setTransform(0,0.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.1,21.9);


(lib.Reatail_consept_blu_stip_text = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Agency", "bold 15px Tahoma", "#FFFFFF");
	this.text.lineHeight = 18;
	this.text.lineWidth = 109;
	this.text.setTransform(51,35.6);

	this.text_1 = new cjs.Text("Concept & Activation", "bold 15px Tahoma", "#FFFFFF");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 196;
	this.text_1.setTransform(0,17.9);

	this.text_2 = new cjs.Text("Retail", "bold 15px Tahoma", "#FFFFFF");
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 71;
	this.text_2.setTransform(56.3,0);

	this.addChild(this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200.1,57.5);


(lib.reatail_button = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("Al7OEQivhKiHiHQiHiHhKivQhOi2AAjHQAAjFBNi2QBLivCHiHQCHiHCvhKQC1hODGAAQDFAAC3BNQCvBLCHCHQCHCHBLCvQBMC1AADGQABDGhNC2QhKCviICHQiHCHivBLQi1BMjHAAQjFABi2hNg");
	this.shape.setTransform(97.7,97.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,195.4,195.4);


(lib.print_text = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Print", "bold 15px Tahoma", "#ffffff");
	this.text.lineHeight = 18;
	this.text.lineWidth = 49;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53,21.9);


(lib.Online_schijf = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsUD5QC7iHBpjJQBujSAAjvQgBibgviSIRelsQBoFFAAFUQAAIPjxHOQjqHBmYErg");
	this.shape.setTransform(78.9,120.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,157.8,240.4);


(lib.loader_symbol_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("Ag7hPIBLgaQAgBkAMBmIhPAJQgLhggdhZg");
	this.shape.setTransform(6.1,10.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12.1,21.3);


(lib.Path_4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am8G6QkBi+lAAAIAAyXQFgAAFLBvQFABrEPDJQENDHDFEPQDHERBoFBIxeFsQhgkoj8i6g");
	this.shape.setTransform(102.3,92.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,204.6,185);


(lib.Path_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoiHFQjynOAAoPQAAlVBplEIReFsQgwCTAACaQAADvBuDSQBpDJC7CIIq0O3QmZkrjqnBg");
	this.shape.setTransform(78.9,120.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,157.9,240.4);


(lib.Path_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqjI9Qk9hpkOjFIKyu3QB8BaCQAvQCUAxCcAAQCdAACUgxQCQgvB6hZIK0O2QkPDFk9BpQlHBslcAAQlbAAlIhsg");
	this.shape.setTransform(126.4,68.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,252.8,136.4);


(lib.Path = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Av+IwQBplBDHkRQDFkPEMjHQEQjJE/hrQFLhvFhAAIAASXQlBAAkBC+Qj8C6hgEog");
	this.shape.setTransform(102.3,92.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,204.6,185);


(lib.Group_28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AhqAEIAhhIQBZAoBbATIgRBOQhjgWhhgrg");
	this.shape.setTransform(10.8,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.6,13.9);


(lib.Group_27 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AhpALQBZgnBLg4IAvBCQhWA8hcArg");
	this.shape.setTransform(10.7,8.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.4,17);


(lib.Group_26 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AhmgdQBegBBegTIARBNQhnAVhmABg");
	this.shape.setTransform(10.4,5.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.8,10.1);


(lib.Group_25 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AhqgJQBggVBUgmIAhBIQhhAqhkAXg");
	this.shape.setTransform(10.8,6.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.5,13.9);


(lib.Group_24 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("Ag7BhQAMhlAghlIBLAaQgcBXgMBig");
	this.shape.setTransform(6,10.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12.1,21.3);


(lib.Group_23 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AhaAyQA+hEAxhVIBGAoQg1BahEBNg");
	this.shape.setTransform(9.1,10.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.3,21);


(lib.Group_22 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AhMBDQAbgwAQgkQAUgqANgvIBNAZQgTA4gSAnQgXAxgXAsg");
	this.shape.setTransform(7.8,10.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.5,21.6);


(lib.Group_21 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AhmAcIARhNQBfAUBdAAIAABPQhmAAhngWg");
	this.shape.setTransform(10.4,5.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.8,10.2);


(lib.Group_20 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AhlAbQBRg0BBhEIA5A5QhMBKhSA4g");
	this.shape.setTransform(10.3,9.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.6,19);


(lib.Group_19 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AgkhnIBOAJQgJBgAKBdIhPAJQgKhpAKhmg");
	this.shape.setTransform(4.3,10.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,8.6,20.9);


(lib.Group_18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("Ag7hgIBPgJQALBjAdBXIhLAZQghhmgLhkg");
	this.shape.setTransform(6,10.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12.1,21.3);


(lib.Group_17 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AhMBSQARgyAVgtQAWgwAXgtIBGAoQgYArgTApQgSApgQAwg");
	this.shape.setTransform(7.8,10.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.5,21.6);


(lib.Group_16 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AhpATQBWg8BcgqIAhBKQhXAmhMA3g");
	this.shape.setTransform(10.7,8.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.4,17);


(lib.Group_15 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AhaA/QA2haBChMIA9A2Qg/BGgwBTg");
	this.shape.setTransform(9.2,10.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.3,20.9);


(lib.Group_14 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("Ag7BRQAehcAKheIBPAJQgLBlghBlg");
	this.shape.setTransform(6,10.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12.1,21.3);


(lib.Group_13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AhMhRIBMgaQAeBdAvBQIhGAqQgyhbghhig");
	this.shape.setTransform(7.8,10.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.5,21.6);


(lib.Group_12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("Ahag/IBGgoQAwBUA/BFIg9A2QhDhPg1hYg");
	this.shape.setTransform(9.2,10.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.3,21);


(lib.Group_11 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AhkgpIA9g2QA+BGBOA4IgwBBQhSg+hHhLg");
	this.shape.setTransform(10.1,9.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.3,19.4);


(lib.Group_10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AhkAqQBIhMBRg+IAwBCQhNA4hABHg");
	this.shape.setTransform(10.2,9.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.3,19.4);


(lib.Group_9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AhpgSIAvhBQBKA2BaAnIghBKQhegshUg6g");
	this.shape.setTransform(10.7,8.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.4,17);


(lib.Group_8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AhMhCIBGgoQAyBbAhBhIhNAZQgchagwhTg");
	this.shape.setTransform(7.8,10.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.5,21.6);


(lib.Group_7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AhqgJIAihKQBgAtBTA5IgxBBQhKg3hagmg");
	this.shape.setTransform(10.7,8.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.4,17);


(lib.Group_6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AhqgDQBegqBmgXIARBNQhdAVhYAng");
	this.shape.setTransform(10.8,6.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.5,13.9);


(lib.Group_5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AhmgbQBmgVBngBIAABPQhjABhZATg");
	this.shape.setTransform(10.4,5.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.8,10.2);


(lib.Group_4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AhagxIA8g2QBEBPA1BYIhGAoQgwhUg/hFg");
	this.shape.setTransform(9.1,10.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.3,21);


(lib.Group_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AhmAeIAAhPQBoABBlAVIgRBNQhcgThggBg");
	this.shape.setTransform(10.4,5.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.8,10.1);


(lib.Group_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AgpBfQAJhfgJheIBOgJQALBngLBog");
	this.shape.setTransform(4.3,10.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,8.6,20.9);


(lib.Group_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AhkgeIAwhBQBQA7BJBOIg8A2Qg+hFhPg5g");
	this.shape.setTransform(10.1,9.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.3,19.4);


(lib.Group = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AhqAJIAQhNQBkAXBhAqIghBIQhYgnhcgVg");
	this.shape.setTransform(10.8,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.5,13.9);


(lib.btn_back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#188FBC").s().p("AlgFhQiTiSAAjPQAAjOCTiSQCSiTDOAAQDPAACSCTQCTCSAADOQAADPiTCSQiSCTjPAAQjOAAiSiTg");
	this.shape.setTransform(50.1,50.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.transperant = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.tekst_events();
	this.instance.setTransform(24.9,7.2,1,1,0,0,0,24.9,7.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66,21.9);


(lib.Tekst_print = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.print_text();
	this.instance.setTransform(26.5,10.9,1,1,0,0,0,26.5,10.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53,21.9);


(lib.software_schijf_wit = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_1();
	this.instance.setTransform(126.4,68.1,1,1,0,0,0,126.4,68.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,252.8,136.4);


(lib.software_schijf = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_1();
	this.instance.setTransform(126.4,68.1,1,1,0,0,0,126.4,68.1);
	this.instance.alpha = 0.4;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,252.8,136.4);


(lib.print_schijf_wit = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_4();
	this.instance.setTransform(102.3,92.5,1,1,0,0,0,102.3,92.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,204.6,185);


(lib.print_schijf = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_4();
	this.instance.setTransform(102,92.85,1,1,0,0,0,102.3,92.5);
	this.instance.alpha = 0.4;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,204.6,185);


(lib.Online_tekst_transprant = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt_online();
	this.instance.setTransform(24.1,7.2,1,1,0,0,0,24.1,7.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71,21.9);


(lib.Online_schijF_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask_schijf (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AsUD5QC7iHBpjJQBujSAAjvQgBibgviSIRelsQBoFFAAFUQAAIPjxHOQjqHBmYErg");
	var mask_graphics_8 = new cjs.Graphics().p("AsUD5QC7iHBpjJQBujSAAjvQgBibgviSIRelsQBoFFAAFUQAAIPjxHOQjqHBmYErg");
	var mask_graphics_18 = new cjs.Graphics().p("AsUD5QC7iHBpjJQBujSAAjvQgBibgviSIRelsQBoFFAAFUQAAIPjxHOQjqHBmYErg");
	var mask_graphics_25 = new cjs.Graphics().p("AsUD5QC7iHBpjJQBujSAAjvQgBibgviSIRelsQBoFFAAFUQAAIPjxHOQjqHBmYErg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:78.9,y:120.2}).wait(8).to({graphics:mask_graphics_8,x:78.9,y:120.2}).wait(2).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_graphics_18,x:78.9,y:120.2}).wait(7).to({graphics:mask_graphics_25,x:78.9,y:120.2}).wait(5));

	// witte_schijf
	this.instance = new lib.Online_schijf();
	this.instance.setTransform(-53,67.1,1,1,-76.3,0,0,-53,67.2);
	this.instance.alpha = 0;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,x:-52.8,y:67.2,alpha:1},9).wait(9).to({rotation:-76.2,x:-52.9,y:67.1,alpha:0},9).wait(3));

	// BG_schijf
	this.instance_1 = new lib.Online_schijf();
	this.instance_1.setTransform(78.9,120.2,1,1,0,0,0,78.9,120.2);
	this.instance_1.alpha = 0.4;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},9).wait(5).wait(4).to({_off:false},0).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157.8,240.4);


(lib.midden_circel_ani = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.reatail_button();
	this.instance.setTransform(97.7,97.7,1,1,0,0,0,97.7,97.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,195.4,195.4);


(lib.Loading_animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.loader_symbol_1();
	this.instance.setTransform(230.5,114.7,1,1,0,0,0,6,10.6);
	this.instance.alpha = 0.031;

	this.instance_1 = new lib.Group();
	this.instance_1.setTransform(161.9,38.5,1,1,0,0,0,10.8,7);
	this.instance_1.alpha = 0.031;

	this.instance_2 = new lib.Group_1();
	this.instance_2.setTransform(198.9,59.8,1,1,0,0,0,10.1,9.7);
	this.instance_2.alpha = 0.031;

	this.instance_3 = new lib.Group_2();
	this.instance_3.setTransform(233,136.6,1,1,0,0,0,4.3,10.4);
	this.instance_3.alpha = 0.031;

	this.instance_4 = new lib.Group_3();
	this.instance_4.setTransform(140.8,34,1,1,0,0,0,10.4,5);
	this.instance_4.alpha = 0.031;

	this.instance_5 = new lib.Group_4();
	this.instance_5.setTransform(213.2,75.7,1,1,0,0,0,9.1,10.5);
	this.instance_5.alpha = 0.031;

	this.instance_6 = new lib.Group_5();
	this.instance_6.setTransform(118.4,34,1,1,0,0,0,10.4,5);
	this.instance_6.alpha = 0.031;

	this.instance_7 = new lib.Group_6();
	this.instance_7.setTransform(97.4,38.5,1,1,0,0,0,10.8,6.9);
	this.instance_7.alpha = 0.031;

	this.instance_8 = new lib.Group_7();
	this.instance_8.setTransform(181.5,47.1,1,1,0,0,0,10.7,8.4);
	this.instance_8.alpha = 0.031;

	this.instance_9 = new lib.Group_8();
	this.instance_9.setTransform(224,94.3,1,1,0,0,0,7.8,10.8);
	this.instance_9.alpha = 0.031;

	this.instance_10 = new lib.Group_9();
	this.instance_10.setTransform(77.8,226.1,1,1,0,0,0,10.7,8.4);

	this.instance_11 = new lib.Group_10();
	this.instance_11.setTransform(60.4,59.8,1,1,0,0,0,10.2,9.7);
	this.instance_11.alpha = 0.031;

	this.instance_12 = new lib.Group_11();
	this.instance_12.setTransform(60.3,213.6,1,1,0,0,0,10.1,9.7);

	this.instance_13 = new lib.Group_12();
	this.instance_13.setTransform(46.1,197.6,1,1,0,0,0,9.2,10.5);

	this.instance_14 = new lib.Group_13();
	this.instance_14.setTransform(35.4,179,1,1,0,0,0,7.8,10.8);

	this.instance_15 = new lib.Group_14();
	this.instance_15.setTransform(230.5,158.4,1,1,0,0,0,6,10.6);
	this.instance_15.alpha = 0.031;

	this.instance_16 = new lib.Group_15();
	this.instance_16.setTransform(46,75.8,1,1,0,0,0,9.2,10.5);
	this.instance_16.alpha = 0.031;

	this.instance_17 = new lib.Group_16();
	this.instance_17.setTransform(77.7,47.1,1,1,0,0,0,10.7,8.4);
	this.instance_17.alpha = 0.031;

	this.instance_18 = new lib.Group_17();
	this.instance_18.setTransform(35.3,94.4,1,1,0,0,0,7.8,10.8);
	this.instance_18.alpha = 0.031;

	this.instance_19 = new lib.Group_18();
	this.instance_19.setTransform(28.7,158.5,1,1,0,0,0,6,10.6);

	this.instance_20 = new lib.Group_19();
	this.instance_20.setTransform(26.3,136.6,1,1,0,0,0,4.3,10.4);

	this.instance_21 = new lib.Group_20();
	this.instance_21.setTransform(199,213.5,1,1,0,0,0,10.3,9.5);
	this.instance_21.alpha = 0.031;

	this.instance_22 = new lib.Group_21();
	this.instance_22.setTransform(118.5,239.1,1,1,0,0,0,10.4,5);
	this.instance_22.alpha = 0.75;

	this.instance_23 = new lib.Group_22();
	this.instance_23.setTransform(224,178.9,1,1,0,0,0,7.8,10.8);
	this.instance_23.alpha = 0.031;

	this.instance_24 = new lib.Group_23();
	this.instance_24.setTransform(213.3,197.6,1,1,0,0,0,9.1,10.5);
	this.instance_24.alpha = 0.031;

	this.instance_25 = new lib.Group_24();
	this.instance_25.setTransform(28.7,114.8,1,1,0,0,0,6,10.6);
	this.instance_25.alpha = 0.031;

	this.instance_26 = new lib.Group_25();
	this.instance_26.setTransform(162,234.8,1,1,0,0,0,10.8,6.9);
	this.instance_26.alpha = 0.25;

	this.instance_27 = new lib.Group_26();
	this.instance_27.setTransform(140.9,239.1,1,1,0,0,0,10.4,5);
	this.instance_27.alpha = 0.5;

	this.instance_28 = new lib.Group_27();
	this.instance_28.setTransform(181.6,226.1,1,1,0,0,0,10.7,8.5);
	this.instance_28.alpha = 0.102;

	this.instance_29 = new lib.Group_28();
	this.instance_29.setTransform(97.4,234.9,1,1,0,0,0,10.8,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29,p:{alpha:1}},{t:this.instance_28,p:{alpha:0.102}},{t:this.instance_27,p:{alpha:0.5}},{t:this.instance_26,p:{alpha:0.25}},{t:this.instance_25,p:{alpha:0.031}},{t:this.instance_24,p:{alpha:0.031}},{t:this.instance_23,p:{alpha:0.031}},{t:this.instance_22,p:{alpha:0.75}},{t:this.instance_21,p:{alpha:0.031}},{t:this.instance_20,p:{alpha:1}},{t:this.instance_19,p:{alpha:1}},{t:this.instance_18,p:{alpha:0.031}},{t:this.instance_17,p:{alpha:0.031}},{t:this.instance_16,p:{alpha:0.031}},{t:this.instance_15,p:{alpha:0.031}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_12,p:{alpha:1}},{t:this.instance_11,p:{alpha:0.031}},{t:this.instance_10,p:{alpha:1}},{t:this.instance_9,p:{alpha:0.031}},{t:this.instance_8,p:{alpha:0.031}},{t:this.instance_7,p:{alpha:0.031}},{t:this.instance_6,p:{alpha:0.031}},{t:this.instance_5,p:{alpha:0.031}},{t:this.instance_4,p:{alpha:0.031}},{t:this.instance_3,p:{alpha:0.031}},{t:this.instance_2,p:{alpha:0.031}},{t:this.instance_1,p:{alpha:0.031}},{t:this.instance,p:{alpha:0.031}}]}).to({state:[{t:this.instance_29,p:{alpha:0.75}},{t:this.instance_28,p:{alpha:0.031}},{t:this.instance_27,p:{alpha:0.25}},{t:this.instance_26,p:{alpha:0.102}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_24,p:{alpha:0.031}},{t:this.instance_23,p:{alpha:0.031}},{t:this.instance_22,p:{alpha:0.5}},{t:this.instance_21,p:{alpha:0.031}},{t:this.instance_20,p:{alpha:1}},{t:this.instance_19,p:{alpha:1}},{t:this.instance_18,p:{alpha:0.031}},{t:this.instance_17,p:{alpha:0.031}},{t:this.instance_16,p:{alpha:0.031}},{t:this.instance_15,p:{alpha:0.031}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_12,p:{alpha:1}},{t:this.instance_11,p:{alpha:0.031}},{t:this.instance_10,p:{alpha:1}},{t:this.instance_9,p:{alpha:0.031}},{t:this.instance_8,p:{alpha:0.031}},{t:this.instance_7,p:{alpha:0.031}},{t:this.instance_6,p:{alpha:0.031}},{t:this.instance_5,p:{alpha:0.031}},{t:this.instance_4,p:{alpha:0.031}},{t:this.instance_3,p:{alpha:0.031}},{t:this.instance_2,p:{alpha:0.031}},{t:this.instance_1,p:{alpha:0.031}},{t:this.instance,p:{alpha:0.031}}]},2).to({state:[{t:this.instance_29,p:{alpha:0.5}},{t:this.instance_28,p:{alpha:0.031}},{t:this.instance_27,p:{alpha:0.102}},{t:this.instance_26,p:{alpha:0.031}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_24,p:{alpha:0.031}},{t:this.instance_23,p:{alpha:0.031}},{t:this.instance_22,p:{alpha:0.25}},{t:this.instance_21,p:{alpha:0.031}},{t:this.instance_20,p:{alpha:1}},{t:this.instance_19,p:{alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_17,p:{alpha:0.031}},{t:this.instance_16,p:{alpha:0.031}},{t:this.instance_15,p:{alpha:0.031}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_12,p:{alpha:1}},{t:this.instance_11,p:{alpha:0.031}},{t:this.instance_10,p:{alpha:0.75}},{t:this.instance_9,p:{alpha:0.031}},{t:this.instance_8,p:{alpha:0.031}},{t:this.instance_7,p:{alpha:0.031}},{t:this.instance_6,p:{alpha:0.031}},{t:this.instance_5,p:{alpha:0.031}},{t:this.instance_4,p:{alpha:0.031}},{t:this.instance_3,p:{alpha:0.031}},{t:this.instance_2,p:{alpha:0.031}},{t:this.instance_1,p:{alpha:0.031}},{t:this.instance,p:{alpha:0.031}}]},2).to({state:[{t:this.instance_29,p:{alpha:0.25}},{t:this.instance_28,p:{alpha:0.031}},{t:this.instance_27,p:{alpha:0.031}},{t:this.instance_26,p:{alpha:0.031}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_24,p:{alpha:0.031}},{t:this.instance_23,p:{alpha:0.031}},{t:this.instance_22,p:{alpha:0.102}},{t:this.instance_21,p:{alpha:0.031}},{t:this.instance_20,p:{alpha:1}},{t:this.instance_19,p:{alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_17,p:{alpha:0.031}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_15,p:{alpha:0.031}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_12,p:{alpha:0.75}},{t:this.instance_11,p:{alpha:0.031}},{t:this.instance_10,p:{alpha:0.5}},{t:this.instance_9,p:{alpha:0.031}},{t:this.instance_8,p:{alpha:0.031}},{t:this.instance_7,p:{alpha:0.031}},{t:this.instance_6,p:{alpha:0.031}},{t:this.instance_5,p:{alpha:0.031}},{t:this.instance_4,p:{alpha:0.031}},{t:this.instance_3,p:{alpha:0.031}},{t:this.instance_2,p:{alpha:0.031}},{t:this.instance_1,p:{alpha:0.031}},{t:this.instance,p:{alpha:0.031}}]},2).to({state:[{t:this.instance_29,p:{alpha:0.102}},{t:this.instance_28,p:{alpha:0.031}},{t:this.instance_27,p:{alpha:0.031}},{t:this.instance_26,p:{alpha:0.031}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_24,p:{alpha:0.031}},{t:this.instance_23,p:{alpha:0.031}},{t:this.instance_22,p:{alpha:0.031}},{t:this.instance_21,p:{alpha:0.031}},{t:this.instance_20,p:{alpha:1}},{t:this.instance_19,p:{alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_17,p:{alpha:0.031}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_15,p:{alpha:0.031}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_13,p:{alpha:0.75}},{t:this.instance_12,p:{alpha:0.5}},{t:this.instance_11,p:{alpha:1}},{t:this.instance_10,p:{alpha:0.25}},{t:this.instance_9,p:{alpha:0.031}},{t:this.instance_8,p:{alpha:0.031}},{t:this.instance_7,p:{alpha:0.031}},{t:this.instance_6,p:{alpha:0.031}},{t:this.instance_5,p:{alpha:0.031}},{t:this.instance_4,p:{alpha:0.031}},{t:this.instance_3,p:{alpha:0.031}},{t:this.instance_2,p:{alpha:0.031}},{t:this.instance_1,p:{alpha:0.031}},{t:this.instance,p:{alpha:0.031}}]},2).to({state:[{t:this.instance_29,p:{alpha:0.031}},{t:this.instance_28,p:{alpha:0.031}},{t:this.instance_27,p:{alpha:0.031}},{t:this.instance_26,p:{alpha:0.031}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_24,p:{alpha:0.031}},{t:this.instance_23,p:{alpha:0.031}},{t:this.instance_22,p:{alpha:0.031}},{t:this.instance_21,p:{alpha:0.031}},{t:this.instance_20,p:{alpha:1}},{t:this.instance_19,p:{alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_17,p:{alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_15,p:{alpha:0.031}},{t:this.instance_14,p:{alpha:0.75}},{t:this.instance_13,p:{alpha:0.5}},{t:this.instance_12,p:{alpha:0.25}},{t:this.instance_11,p:{alpha:1}},{t:this.instance_10,p:{alpha:0.102}},{t:this.instance_9,p:{alpha:0.031}},{t:this.instance_8,p:{alpha:0.031}},{t:this.instance_7,p:{alpha:0.031}},{t:this.instance_6,p:{alpha:0.031}},{t:this.instance_5,p:{alpha:0.031}},{t:this.instance_4,p:{alpha:0.031}},{t:this.instance_3,p:{alpha:0.031}},{t:this.instance_2,p:{alpha:0.031}},{t:this.instance_1,p:{alpha:0.031}},{t:this.instance,p:{alpha:0.031}}]},2).to({state:[{t:this.instance_29,p:{alpha:0.031}},{t:this.instance_28,p:{alpha:0.031}},{t:this.instance_27,p:{alpha:0.031}},{t:this.instance_26,p:{alpha:0.031}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_24,p:{alpha:0.031}},{t:this.instance_23,p:{alpha:0.031}},{t:this.instance_22,p:{alpha:0.031}},{t:this.instance_21,p:{alpha:0.031}},{t:this.instance_20,p:{alpha:1}},{t:this.instance_19,p:{alpha:0.75}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_17,p:{alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_15,p:{alpha:0.031}},{t:this.instance_14,p:{alpha:0.5}},{t:this.instance_13,p:{alpha:0.25}},{t:this.instance_12,p:{alpha:0.102}},{t:this.instance_11,p:{alpha:1}},{t:this.instance_10,p:{alpha:0.031}},{t:this.instance_9,p:{alpha:0.031}},{t:this.instance_8,p:{alpha:0.031}},{t:this.instance_7,p:{alpha:1}},{t:this.instance_6,p:{alpha:0.031}},{t:this.instance_5,p:{alpha:0.031}},{t:this.instance_4,p:{alpha:0.031}},{t:this.instance_3,p:{alpha:0.031}},{t:this.instance_2,p:{alpha:0.031}},{t:this.instance_1,p:{alpha:0.031}},{t:this.instance,p:{alpha:0.031}}]},2).to({state:[{t:this.instance_29,p:{alpha:0.031}},{t:this.instance_28,p:{alpha:0.031}},{t:this.instance_27,p:{alpha:0.031}},{t:this.instance_26,p:{alpha:0.031}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_24,p:{alpha:0.031}},{t:this.instance_23,p:{alpha:0.031}},{t:this.instance_22,p:{alpha:0.031}},{t:this.instance_21,p:{alpha:0.031}},{t:this.instance_20,p:{alpha:0.75}},{t:this.instance_19,p:{alpha:0.5}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_17,p:{alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_15,p:{alpha:0.031}},{t:this.instance_14,p:{alpha:0.25}},{t:this.instance_13,p:{alpha:0.102}},{t:this.instance_12,p:{alpha:0.031}},{t:this.instance_11,p:{alpha:1}},{t:this.instance_10,p:{alpha:0.031}},{t:this.instance_9,p:{alpha:0.031}},{t:this.instance_8,p:{alpha:0.031}},{t:this.instance_7,p:{alpha:1}},{t:this.instance_6,p:{alpha:1}},{t:this.instance_5,p:{alpha:0.031}},{t:this.instance_4,p:{alpha:0.031}},{t:this.instance_3,p:{alpha:0.031}},{t:this.instance_2,p:{alpha:0.031}},{t:this.instance_1,p:{alpha:0.031}},{t:this.instance,p:{alpha:0.031}}]},2).to({state:[{t:this.instance_29,p:{alpha:0.031}},{t:this.instance_28,p:{alpha:0.031}},{t:this.instance_27,p:{alpha:0.031}},{t:this.instance_26,p:{alpha:0.031}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_24,p:{alpha:0.031}},{t:this.instance_23,p:{alpha:0.031}},{t:this.instance_22,p:{alpha:0.031}},{t:this.instance_21,p:{alpha:0.031}},{t:this.instance_20,p:{alpha:0.75}},{t:this.instance_19,p:{alpha:0.5}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_17,p:{alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_15,p:{alpha:0.031}},{t:this.instance_14,p:{alpha:0.25}},{t:this.instance_13,p:{alpha:0.102}},{t:this.instance_12,p:{alpha:0.031}},{t:this.instance_11,p:{alpha:1}},{t:this.instance_10,p:{alpha:0.031}},{t:this.instance_9,p:{alpha:0.031}},{t:this.instance_8,p:{alpha:0.031}},{t:this.instance_7,p:{alpha:1}},{t:this.instance_6,p:{alpha:1}},{t:this.instance_5,p:{alpha:0.031}},{t:this.instance_4,p:{alpha:1}},{t:this.instance_3,p:{alpha:0.031}},{t:this.instance_2,p:{alpha:0.031}},{t:this.instance_1,p:{alpha:0.031}},{t:this.instance,p:{alpha:0.031}}]},2).to({state:[{t:this.instance_29,p:{alpha:0.031}},{t:this.instance_28,p:{alpha:0.031}},{t:this.instance_27,p:{alpha:0.031}},{t:this.instance_26,p:{alpha:0.031}},{t:this.instance_25,p:{alpha:0.75}},{t:this.instance_24,p:{alpha:0.031}},{t:this.instance_23,p:{alpha:0.031}},{t:this.instance_22,p:{alpha:0.031}},{t:this.instance_21,p:{alpha:0.031}},{t:this.instance_20,p:{alpha:0.5}},{t:this.instance_19,p:{alpha:0.25}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_17,p:{alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_15,p:{alpha:0.031}},{t:this.instance_14,p:{alpha:0.102}},{t:this.instance_13,p:{alpha:0.031}},{t:this.instance_12,p:{alpha:0.031}},{t:this.instance_11,p:{alpha:1}},{t:this.instance_10,p:{alpha:0.031}},{t:this.instance_9,p:{alpha:0.031}},{t:this.instance_8,p:{alpha:0.031}},{t:this.instance_7,p:{alpha:1}},{t:this.instance_6,p:{alpha:1}},{t:this.instance_5,p:{alpha:0.031}},{t:this.instance_4,p:{alpha:1}},{t:this.instance_3,p:{alpha:0.031}},{t:this.instance_2,p:{alpha:0.031}},{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{alpha:0.031}}]},2).to({state:[{t:this.instance_29,p:{alpha:0.031}},{t:this.instance_28,p:{alpha:0.031}},{t:this.instance_27,p:{alpha:0.031}},{t:this.instance_26,p:{alpha:0.031}},{t:this.instance_25,p:{alpha:0.5}},{t:this.instance_24,p:{alpha:0.031}},{t:this.instance_23,p:{alpha:0.031}},{t:this.instance_22,p:{alpha:0.031}},{t:this.instance_21,p:{alpha:0.031}},{t:this.instance_20,p:{alpha:0.25}},{t:this.instance_19,p:{alpha:0.102}},{t:this.instance_18,p:{alpha:0.75}},{t:this.instance_17,p:{alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_15,p:{alpha:0.031}},{t:this.instance_14,p:{alpha:0.031}},{t:this.instance_13,p:{alpha:0.031}},{t:this.instance_12,p:{alpha:0.031}},{t:this.instance_11,p:{alpha:1}},{t:this.instance_10,p:{alpha:0.031}},{t:this.instance_9,p:{alpha:0.031}},{t:this.instance_8,p:{alpha:1}},{t:this.instance_7,p:{alpha:1}},{t:this.instance_6,p:{alpha:1}},{t:this.instance_5,p:{alpha:0.031}},{t:this.instance_4,p:{alpha:1}},{t:this.instance_3,p:{alpha:0.031}},{t:this.instance_2,p:{alpha:0.031}},{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{alpha:0.031}}]},2).to({state:[{t:this.instance_29,p:{alpha:0.031}},{t:this.instance_28,p:{alpha:0.031}},{t:this.instance_27,p:{alpha:0.031}},{t:this.instance_26,p:{alpha:0.031}},{t:this.instance_25,p:{alpha:0.25}},{t:this.instance_24,p:{alpha:0.031}},{t:this.instance_23,p:{alpha:0.031}},{t:this.instance_22,p:{alpha:0.031}},{t:this.instance_21,p:{alpha:0.031}},{t:this.instance_20,p:{alpha:0.102}},{t:this.instance_19,p:{alpha:0.031}},{t:this.instance_18,p:{alpha:0.5}},{t:this.instance_17,p:{alpha:1}},{t:this.instance_16,p:{alpha:0.75}},{t:this.instance_15,p:{alpha:0.031}},{t:this.instance_14,p:{alpha:0.031}},{t:this.instance_13,p:{alpha:0.031}},{t:this.instance_12,p:{alpha:0.031}},{t:this.instance_11,p:{alpha:1}},{t:this.instance_10,p:{alpha:0.031}},{t:this.instance_9,p:{alpha:0.031}},{t:this.instance_8,p:{alpha:1}},{t:this.instance_7,p:{alpha:1}},{t:this.instance_6,p:{alpha:1}},{t:this.instance_5,p:{alpha:0.031}},{t:this.instance_4,p:{alpha:1}},{t:this.instance_3,p:{alpha:0.031}},{t:this.instance_2,p:{alpha:1}},{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{alpha:0.031}}]},2).to({state:[{t:this.instance_29,p:{alpha:0.031}},{t:this.instance_28,p:{alpha:0.031}},{t:this.instance_27,p:{alpha:0.031}},{t:this.instance_26,p:{alpha:0.031}},{t:this.instance_25,p:{alpha:0.102}},{t:this.instance_24,p:{alpha:0.031}},{t:this.instance_23,p:{alpha:0.031}},{t:this.instance_22,p:{alpha:0.031}},{t:this.instance_21,p:{alpha:0.031}},{t:this.instance_20,p:{alpha:0.031}},{t:this.instance_19,p:{alpha:0.031}},{t:this.instance_18,p:{alpha:0.25}},{t:this.instance_17,p:{alpha:1}},{t:this.instance_16,p:{alpha:0.5}},{t:this.instance_15,p:{alpha:0.031}},{t:this.instance_14,p:{alpha:0.031}},{t:this.instance_13,p:{alpha:0.031}},{t:this.instance_12,p:{alpha:0.031}},{t:this.instance_11,p:{alpha:0.75}},{t:this.instance_10,p:{alpha:0.031}},{t:this.instance_9,p:{alpha:0.031}},{t:this.instance_8,p:{alpha:1}},{t:this.instance_7,p:{alpha:1}},{t:this.instance_6,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_4,p:{alpha:1}},{t:this.instance_3,p:{alpha:0.031}},{t:this.instance_2,p:{alpha:1}},{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{alpha:0.031}}]},2).to({state:[{t:this.instance_29,p:{alpha:0.031}},{t:this.instance_28,p:{alpha:0.031}},{t:this.instance_27,p:{alpha:0.031}},{t:this.instance_26,p:{alpha:0.031}},{t:this.instance_25,p:{alpha:0.031}},{t:this.instance_24,p:{alpha:0.031}},{t:this.instance_23,p:{alpha:0.031}},{t:this.instance_22,p:{alpha:0.031}},{t:this.instance_21,p:{alpha:0.031}},{t:this.instance_20,p:{alpha:0.031}},{t:this.instance_19,p:{alpha:0.031}},{t:this.instance_18,p:{alpha:0.102}},{t:this.instance_17,p:{alpha:0.75}},{t:this.instance_16,p:{alpha:0.25}},{t:this.instance_15,p:{alpha:0.031}},{t:this.instance_14,p:{alpha:0.031}},{t:this.instance_13,p:{alpha:0.031}},{t:this.instance_12,p:{alpha:0.031}},{t:this.instance_11,p:{alpha:0.5}},{t:this.instance_10,p:{alpha:0.031}},{t:this.instance_9,p:{alpha:1}},{t:this.instance_8,p:{alpha:1}},{t:this.instance_7,p:{alpha:1}},{t:this.instance_6,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_4,p:{alpha:1}},{t:this.instance_3,p:{alpha:0.031}},{t:this.instance_2,p:{alpha:1}},{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{alpha:0.031}}]},2).to({state:[{t:this.instance_29,p:{alpha:0.031}},{t:this.instance_28,p:{alpha:0.031}},{t:this.instance_27,p:{alpha:0.031}},{t:this.instance_26,p:{alpha:0.031}},{t:this.instance_25,p:{alpha:0.031}},{t:this.instance_24,p:{alpha:0.031}},{t:this.instance_23,p:{alpha:0.031}},{t:this.instance_22,p:{alpha:0.031}},{t:this.instance_21,p:{alpha:0.031}},{t:this.instance_20,p:{alpha:0.031}},{t:this.instance_19,p:{alpha:0.031}},{t:this.instance_18,p:{alpha:0.031}},{t:this.instance_17,p:{alpha:0.25}},{t:this.instance_16,p:{alpha:0.031}},{t:this.instance_15,p:{alpha:0.031}},{t:this.instance_14,p:{alpha:0.031}},{t:this.instance_13,p:{alpha:0.031}},{t:this.instance_12,p:{alpha:0.031}},{t:this.instance_11,p:{alpha:0.102}},{t:this.instance_10,p:{alpha:0.031}},{t:this.instance_9,p:{alpha:1}},{t:this.instance_8,p:{alpha:1}},{t:this.instance_7,p:{alpha:0.5}},{t:this.instance_6,p:{alpha:0.75}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_4,p:{alpha:1}},{t:this.instance_3,p:{alpha:0.031}},{t:this.instance_2,p:{alpha:1}},{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{alpha:1}}]},2).to({state:[{t:this.instance_29,p:{alpha:0.031}},{t:this.instance_28,p:{alpha:0.031}},{t:this.instance_27,p:{alpha:0.031}},{t:this.instance_26,p:{alpha:0.031}},{t:this.instance_25,p:{alpha:0.031}},{t:this.instance_24,p:{alpha:0.031}},{t:this.instance_23,p:{alpha:0.031}},{t:this.instance_22,p:{alpha:0.031}},{t:this.instance_21,p:{alpha:0.031}},{t:this.instance_20,p:{alpha:0.031}},{t:this.instance_19,p:{alpha:0.031}},{t:this.instance_18,p:{alpha:0.031}},{t:this.instance_17,p:{alpha:0.102}},{t:this.instance_16,p:{alpha:0.031}},{t:this.instance_15,p:{alpha:0.031}},{t:this.instance_14,p:{alpha:0.031}},{t:this.instance_13,p:{alpha:0.031}},{t:this.instance_12,p:{alpha:0.031}},{t:this.instance_11,p:{alpha:0.031}},{t:this.instance_10,p:{alpha:0.031}},{t:this.instance_9,p:{alpha:1}},{t:this.instance_8,p:{alpha:1}},{t:this.instance_7,p:{alpha:0.25}},{t:this.instance_6,p:{alpha:0.5}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_4,p:{alpha:0.75}},{t:this.instance_3,p:{alpha:1}},{t:this.instance_2,p:{alpha:1}},{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{alpha:1}}]},2).to({state:[{t:this.instance_29,p:{alpha:0.031}},{t:this.instance_28,p:{alpha:0.031}},{t:this.instance_27,p:{alpha:0.031}},{t:this.instance_26,p:{alpha:0.031}},{t:this.instance_25,p:{alpha:0.031}},{t:this.instance_24,p:{alpha:0.031}},{t:this.instance_23,p:{alpha:0.031}},{t:this.instance_22,p:{alpha:0.031}},{t:this.instance_21,p:{alpha:0.031}},{t:this.instance_20,p:{alpha:0.031}},{t:this.instance_19,p:{alpha:0.031}},{t:this.instance_18,p:{alpha:0.031}},{t:this.instance_17,p:{alpha:0.031}},{t:this.instance_16,p:{alpha:0.031}},{t:this.instance_15,p:{alpha:1}},{t:this.instance_14,p:{alpha:0.031}},{t:this.instance_13,p:{alpha:0.031}},{t:this.instance_12,p:{alpha:0.031}},{t:this.instance_11,p:{alpha:0.031}},{t:this.instance_10,p:{alpha:0.031}},{t:this.instance_9,p:{alpha:1}},{t:this.instance_8,p:{alpha:1}},{t:this.instance_7,p:{alpha:0.102}},{t:this.instance_6,p:{alpha:0.25}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_4,p:{alpha:0.5}},{t:this.instance_3,p:{alpha:1}},{t:this.instance_2,p:{alpha:1}},{t:this.instance_1,p:{alpha:0.75}},{t:this.instance,p:{alpha:1}}]},2).to({state:[{t:this.instance_29,p:{alpha:0.031}},{t:this.instance_28,p:{alpha:0.031}},{t:this.instance_27,p:{alpha:0.031}},{t:this.instance_26,p:{alpha:0.031}},{t:this.instance_25,p:{alpha:0.031}},{t:this.instance_24,p:{alpha:0.031}},{t:this.instance_23,p:{alpha:1}},{t:this.instance_22,p:{alpha:0.031}},{t:this.instance_21,p:{alpha:0.031}},{t:this.instance_20,p:{alpha:0.031}},{t:this.instance_19,p:{alpha:0.031}},{t:this.instance_18,p:{alpha:0.031}},{t:this.instance_17,p:{alpha:0.031}},{t:this.instance_16,p:{alpha:0.031}},{t:this.instance_15,p:{alpha:1}},{t:this.instance_14,p:{alpha:0.031}},{t:this.instance_13,p:{alpha:0.031}},{t:this.instance_12,p:{alpha:0.031}},{t:this.instance_11,p:{alpha:0.031}},{t:this.instance_10,p:{alpha:0.031}},{t:this.instance_9,p:{alpha:1}},{t:this.instance_8,p:{alpha:0.75}},{t:this.instance_7,p:{alpha:0.031}},{t:this.instance_6,p:{alpha:0.102}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_4,p:{alpha:0.25}},{t:this.instance_3,p:{alpha:1}},{t:this.instance_2,p:{alpha:1}},{t:this.instance_1,p:{alpha:0.5}},{t:this.instance,p:{alpha:1}}]},2).to({state:[{t:this.instance_29,p:{alpha:0.031}},{t:this.instance_28,p:{alpha:0.031}},{t:this.instance_27,p:{alpha:0.031}},{t:this.instance_26,p:{alpha:0.031}},{t:this.instance_25,p:{alpha:0.031}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_23,p:{alpha:1}},{t:this.instance_22,p:{alpha:0.031}},{t:this.instance_21,p:{alpha:0.031}},{t:this.instance_20,p:{alpha:0.031}},{t:this.instance_19,p:{alpha:0.031}},{t:this.instance_18,p:{alpha:0.031}},{t:this.instance_17,p:{alpha:0.031}},{t:this.instance_16,p:{alpha:0.031}},{t:this.instance_15,p:{alpha:1}},{t:this.instance_14,p:{alpha:0.031}},{t:this.instance_13,p:{alpha:0.031}},{t:this.instance_12,p:{alpha:0.031}},{t:this.instance_11,p:{alpha:0.031}},{t:this.instance_10,p:{alpha:0.031}},{t:this.instance_9,p:{alpha:1}},{t:this.instance_8,p:{alpha:0.5}},{t:this.instance_7,p:{alpha:0.031}},{t:this.instance_6,p:{alpha:0.031}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_4,p:{alpha:0.102}},{t:this.instance_3,p:{alpha:1}},{t:this.instance_2,p:{alpha:0.75}},{t:this.instance_1,p:{alpha:0.25}},{t:this.instance,p:{alpha:1}}]},2).to({state:[{t:this.instance_29,p:{alpha:0.031}},{t:this.instance_28,p:{alpha:0.031}},{t:this.instance_27,p:{alpha:0.031}},{t:this.instance_26,p:{alpha:0.031}},{t:this.instance_25,p:{alpha:0.031}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_23,p:{alpha:1}},{t:this.instance_22,p:{alpha:0.031}},{t:this.instance_21,p:{alpha:1}},{t:this.instance_20,p:{alpha:0.031}},{t:this.instance_19,p:{alpha:0.031}},{t:this.instance_18,p:{alpha:0.031}},{t:this.instance_17,p:{alpha:0.031}},{t:this.instance_16,p:{alpha:0.031}},{t:this.instance_15,p:{alpha:1}},{t:this.instance_14,p:{alpha:0.031}},{t:this.instance_13,p:{alpha:0.031}},{t:this.instance_12,p:{alpha:0.031}},{t:this.instance_11,p:{alpha:0.031}},{t:this.instance_10,p:{alpha:0.031}},{t:this.instance_9,p:{alpha:1}},{t:this.instance_8,p:{alpha:0.25}},{t:this.instance_7,p:{alpha:0.031}},{t:this.instance_6,p:{alpha:0.031}},{t:this.instance_5,p:{alpha:0.75}},{t:this.instance_4,p:{alpha:0.031}},{t:this.instance_3,p:{alpha:1}},{t:this.instance_2,p:{alpha:0.5}},{t:this.instance_1,p:{alpha:0.102}},{t:this.instance,p:{alpha:1}}]},2).to({state:[{t:this.instance_29,p:{alpha:0.031}},{t:this.instance_28,p:{alpha:1}},{t:this.instance_27,p:{alpha:0.031}},{t:this.instance_26,p:{alpha:0.031}},{t:this.instance_25,p:{alpha:0.031}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_23,p:{alpha:1}},{t:this.instance_22,p:{alpha:0.031}},{t:this.instance_21,p:{alpha:1}},{t:this.instance_20,p:{alpha:0.031}},{t:this.instance_19,p:{alpha:0.031}},{t:this.instance_18,p:{alpha:0.031}},{t:this.instance_17,p:{alpha:0.031}},{t:this.instance_16,p:{alpha:0.031}},{t:this.instance_15,p:{alpha:1}},{t:this.instance_14,p:{alpha:0.031}},{t:this.instance_13,p:{alpha:0.031}},{t:this.instance_12,p:{alpha:0.031}},{t:this.instance_11,p:{alpha:0.031}},{t:this.instance_10,p:{alpha:0.031}},{t:this.instance_9,p:{alpha:0.75}},{t:this.instance_8,p:{alpha:0.102}},{t:this.instance_7,p:{alpha:0.031}},{t:this.instance_6,p:{alpha:0.031}},{t:this.instance_5,p:{alpha:0.5}},{t:this.instance_4,p:{alpha:0.031}},{t:this.instance_3,p:{alpha:1}},{t:this.instance_2,p:{alpha:0.25}},{t:this.instance_1,p:{alpha:0.031}},{t:this.instance,p:{alpha:1}}]},2).to({state:[{t:this.instance_29,p:{alpha:0.031}},{t:this.instance_28,p:{alpha:1}},{t:this.instance_27,p:{alpha:0.031}},{t:this.instance_26,p:{alpha:1}},{t:this.instance_25,p:{alpha:0.031}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_23,p:{alpha:1}},{t:this.instance_22,p:{alpha:0.031}},{t:this.instance_21,p:{alpha:1}},{t:this.instance_20,p:{alpha:0.031}},{t:this.instance_19,p:{alpha:0.031}},{t:this.instance_18,p:{alpha:0.031}},{t:this.instance_17,p:{alpha:0.031}},{t:this.instance_16,p:{alpha:0.031}},{t:this.instance_15,p:{alpha:1}},{t:this.instance_14,p:{alpha:0.031}},{t:this.instance_13,p:{alpha:0.031}},{t:this.instance_12,p:{alpha:0.031}},{t:this.instance_11,p:{alpha:0.031}},{t:this.instance_10,p:{alpha:0.031}},{t:this.instance_9,p:{alpha:0.5}},{t:this.instance_8,p:{alpha:0.031}},{t:this.instance_7,p:{alpha:0.031}},{t:this.instance_6,p:{alpha:0.031}},{t:this.instance_5,p:{alpha:0.25}},{t:this.instance_4,p:{alpha:0.031}},{t:this.instance_3,p:{alpha:1}},{t:this.instance_2,p:{alpha:0.102}},{t:this.instance_1,p:{alpha:0.031}},{t:this.instance,p:{alpha:0.75}}]},2).to({state:[{t:this.instance_29,p:{alpha:0.031}},{t:this.instance_28,p:{alpha:1}},{t:this.instance_27,p:{alpha:1}},{t:this.instance_26,p:{alpha:1}},{t:this.instance_25,p:{alpha:0.031}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_23,p:{alpha:1}},{t:this.instance_22,p:{alpha:0.031}},{t:this.instance_21,p:{alpha:1}},{t:this.instance_20,p:{alpha:0.031}},{t:this.instance_19,p:{alpha:0.031}},{t:this.instance_18,p:{alpha:0.031}},{t:this.instance_17,p:{alpha:0.031}},{t:this.instance_16,p:{alpha:0.031}},{t:this.instance_15,p:{alpha:1}},{t:this.instance_14,p:{alpha:0.031}},{t:this.instance_13,p:{alpha:0.031}},{t:this.instance_12,p:{alpha:0.031}},{t:this.instance_11,p:{alpha:0.031}},{t:this.instance_10,p:{alpha:0.031}},{t:this.instance_9,p:{alpha:0.25}},{t:this.instance_8,p:{alpha:0.031}},{t:this.instance_7,p:{alpha:0.031}},{t:this.instance_6,p:{alpha:0.031}},{t:this.instance_5,p:{alpha:0.102}},{t:this.instance_4,p:{alpha:0.031}},{t:this.instance_3,p:{alpha:0.75}},{t:this.instance_2,p:{alpha:0.031}},{t:this.instance_1,p:{alpha:0.031}},{t:this.instance,p:{alpha:0.5}}]},2).to({state:[{t:this.instance_29,p:{alpha:0.031}},{t:this.instance_28,p:{alpha:1}},{t:this.instance_27,p:{alpha:1}},{t:this.instance_26,p:{alpha:1}},{t:this.instance_25,p:{alpha:0.031}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_23,p:{alpha:1}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_21,p:{alpha:1}},{t:this.instance_20,p:{alpha:0.031}},{t:this.instance_19,p:{alpha:0.031}},{t:this.instance_18,p:{alpha:0.031}},{t:this.instance_17,p:{alpha:0.031}},{t:this.instance_16,p:{alpha:0.031}},{t:this.instance_15,p:{alpha:0.75}},{t:this.instance_14,p:{alpha:0.031}},{t:this.instance_13,p:{alpha:0.031}},{t:this.instance_12,p:{alpha:0.031}},{t:this.instance_11,p:{alpha:0.031}},{t:this.instance_10,p:{alpha:0.031}},{t:this.instance_9,p:{alpha:0.102}},{t:this.instance_8,p:{alpha:0.031}},{t:this.instance_7,p:{alpha:0.031}},{t:this.instance_6,p:{alpha:0.031}},{t:this.instance_5,p:{alpha:0.031}},{t:this.instance_4,p:{alpha:0.031}},{t:this.instance_3,p:{alpha:0.5}},{t:this.instance_2,p:{alpha:0.031}},{t:this.instance_1,p:{alpha:0.031}},{t:this.instance,p:{alpha:0.25}}]},2).to({state:[{t:this.instance_29,p:{alpha:1}},{t:this.instance_28,p:{alpha:1}},{t:this.instance_27,p:{alpha:1}},{t:this.instance_26,p:{alpha:1}},{t:this.instance_25,p:{alpha:0.031}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_23,p:{alpha:0.75}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_21,p:{alpha:1}},{t:this.instance_20,p:{alpha:0.031}},{t:this.instance_19,p:{alpha:0.031}},{t:this.instance_18,p:{alpha:0.031}},{t:this.instance_17,p:{alpha:0.031}},{t:this.instance_16,p:{alpha:0.031}},{t:this.instance_15,p:{alpha:0.5}},{t:this.instance_14,p:{alpha:0.031}},{t:this.instance_13,p:{alpha:0.031}},{t:this.instance_12,p:{alpha:0.031}},{t:this.instance_11,p:{alpha:0.031}},{t:this.instance_10,p:{alpha:0.031}},{t:this.instance_9,p:{alpha:0.031}},{t:this.instance_8,p:{alpha:0.031}},{t:this.instance_7,p:{alpha:0.031}},{t:this.instance_6,p:{alpha:0.031}},{t:this.instance_5,p:{alpha:0.031}},{t:this.instance_4,p:{alpha:0.031}},{t:this.instance_3,p:{alpha:0.25}},{t:this.instance_2,p:{alpha:0.031}},{t:this.instance_1,p:{alpha:0.031}},{t:this.instance,p:{alpha:0.102}}]},2).to({state:[{t:this.instance_29,p:{alpha:1}},{t:this.instance_28,p:{alpha:1}},{t:this.instance_27,p:{alpha:1}},{t:this.instance_26,p:{alpha:1}},{t:this.instance_25,p:{alpha:0.031}},{t:this.instance_24,p:{alpha:0.75}},{t:this.instance_23,p:{alpha:0.5}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_21,p:{alpha:1}},{t:this.instance_20,p:{alpha:0.031}},{t:this.instance_19,p:{alpha:0.031}},{t:this.instance_18,p:{alpha:0.031}},{t:this.instance_17,p:{alpha:0.031}},{t:this.instance_16,p:{alpha:0.031}},{t:this.instance_15,p:{alpha:0.25}},{t:this.instance_14,p:{alpha:0.031}},{t:this.instance_13,p:{alpha:0.031}},{t:this.instance_12,p:{alpha:0.031}},{t:this.instance_11,p:{alpha:0.031}},{t:this.instance_10,p:{alpha:1}},{t:this.instance_9,p:{alpha:0.031}},{t:this.instance_8,p:{alpha:0.031}},{t:this.instance_7,p:{alpha:0.031}},{t:this.instance_6,p:{alpha:0.031}},{t:this.instance_5,p:{alpha:0.031}},{t:this.instance_4,p:{alpha:0.031}},{t:this.instance_3,p:{alpha:0.102}},{t:this.instance_2,p:{alpha:0.031}},{t:this.instance_1,p:{alpha:0.031}},{t:this.instance,p:{alpha:0.031}}]},2).to({state:[{t:this.instance_29,p:{alpha:1}},{t:this.instance_28,p:{alpha:1}},{t:this.instance_27,p:{alpha:1}},{t:this.instance_26,p:{alpha:1}},{t:this.instance_25,p:{alpha:0.031}},{t:this.instance_24,p:{alpha:0.5}},{t:this.instance_23,p:{alpha:0.25}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_21,p:{alpha:0.75}},{t:this.instance_20,p:{alpha:0.031}},{t:this.instance_19,p:{alpha:0.031}},{t:this.instance_18,p:{alpha:0.031}},{t:this.instance_17,p:{alpha:0.031}},{t:this.instance_16,p:{alpha:0.031}},{t:this.instance_15,p:{alpha:0.102}},{t:this.instance_14,p:{alpha:0.031}},{t:this.instance_13,p:{alpha:0.031}},{t:this.instance_12,p:{alpha:1}},{t:this.instance_11,p:{alpha:0.031}},{t:this.instance_10,p:{alpha:1}},{t:this.instance_9,p:{alpha:0.031}},{t:this.instance_8,p:{alpha:0.031}},{t:this.instance_7,p:{alpha:0.031}},{t:this.instance_6,p:{alpha:0.031}},{t:this.instance_5,p:{alpha:0.031}},{t:this.instance_4,p:{alpha:0.031}},{t:this.instance_3,p:{alpha:0.031}},{t:this.instance_2,p:{alpha:0.031}},{t:this.instance_1,p:{alpha:0.031}},{t:this.instance,p:{alpha:0.031}}]},2).to({state:[{t:this.instance_29,p:{alpha:1}},{t:this.instance_28,p:{alpha:0.75}},{t:this.instance_27,p:{alpha:1}},{t:this.instance_26,p:{alpha:1}},{t:this.instance_25,p:{alpha:0.031}},{t:this.instance_24,p:{alpha:0.25}},{t:this.instance_23,p:{alpha:0.102}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_21,p:{alpha:0.5}},{t:this.instance_20,p:{alpha:0.031}},{t:this.instance_19,p:{alpha:0.031}},{t:this.instance_18,p:{alpha:0.031}},{t:this.instance_17,p:{alpha:0.031}},{t:this.instance_16,p:{alpha:0.031}},{t:this.instance_15,p:{alpha:0.031}},{t:this.instance_14,p:{alpha:0.031}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_12,p:{alpha:1}},{t:this.instance_11,p:{alpha:0.031}},{t:this.instance_10,p:{alpha:1}},{t:this.instance_9,p:{alpha:0.031}},{t:this.instance_8,p:{alpha:0.031}},{t:this.instance_7,p:{alpha:0.031}},{t:this.instance_6,p:{alpha:0.031}},{t:this.instance_5,p:{alpha:0.031}},{t:this.instance_4,p:{alpha:0.031}},{t:this.instance_3,p:{alpha:0.031}},{t:this.instance_2,p:{alpha:0.031}},{t:this.instance_1,p:{alpha:0.031}},{t:this.instance,p:{alpha:0.031}}]},2).to({state:[{t:this.instance_29,p:{alpha:1}},{t:this.instance_28,p:{alpha:0.5}},{t:this.instance_27,p:{alpha:1}},{t:this.instance_26,p:{alpha:0.75}},{t:this.instance_25,p:{alpha:0.031}},{t:this.instance_24,p:{alpha:0.102}},{t:this.instance_23,p:{alpha:0.031}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_21,p:{alpha:0.25}},{t:this.instance_20,p:{alpha:0.031}},{t:this.instance_19,p:{alpha:0.031}},{t:this.instance_18,p:{alpha:0.031}},{t:this.instance_17,p:{alpha:0.031}},{t:this.instance_16,p:{alpha:0.031}},{t:this.instance_15,p:{alpha:0.031}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_12,p:{alpha:1}},{t:this.instance_11,p:{alpha:0.031}},{t:this.instance_10,p:{alpha:1}},{t:this.instance_9,p:{alpha:0.031}},{t:this.instance_8,p:{alpha:0.031}},{t:this.instance_7,p:{alpha:0.031}},{t:this.instance_6,p:{alpha:0.031}},{t:this.instance_5,p:{alpha:0.031}},{t:this.instance_4,p:{alpha:0.031}},{t:this.instance_3,p:{alpha:0.031}},{t:this.instance_2,p:{alpha:0.031}},{t:this.instance_1,p:{alpha:0.031}},{t:this.instance,p:{alpha:0.031}}]},2).to({state:[{t:this.instance_29,p:{alpha:1}},{t:this.instance_28,p:{alpha:0.25}},{t:this.instance_27,p:{alpha:0.75}},{t:this.instance_26,p:{alpha:0.5}},{t:this.instance_25,p:{alpha:0.031}},{t:this.instance_24,p:{alpha:0.031}},{t:this.instance_23,p:{alpha:0.031}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_21,p:{alpha:0.148}},{t:this.instance_20,p:{alpha:0.031}},{t:this.instance_19,p:{alpha:1}},{t:this.instance_18,p:{alpha:0.031}},{t:this.instance_17,p:{alpha:0.031}},{t:this.instance_16,p:{alpha:0.031}},{t:this.instance_15,p:{alpha:0.031}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_12,p:{alpha:1}},{t:this.instance_11,p:{alpha:0.031}},{t:this.instance_10,p:{alpha:1}},{t:this.instance_9,p:{alpha:0.031}},{t:this.instance_8,p:{alpha:0.031}},{t:this.instance_7,p:{alpha:0.031}},{t:this.instance_6,p:{alpha:0.031}},{t:this.instance_5,p:{alpha:0.031}},{t:this.instance_4,p:{alpha:0.031}},{t:this.instance_3,p:{alpha:0.031}},{t:this.instance_2,p:{alpha:0.031}},{t:this.instance_1,p:{alpha:0.031}},{t:this.instance,p:{alpha:0.031}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22,29,215.2,215.3);


(lib.events_schijf_wit = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path();
	this.instance.setTransform(102.3,92.5,1,1,0,0,0,102.3,92.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,204.6,185);


(lib.events_schijf = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path();
	this.instance.setTransform(102.3,92.5,1,1,0,0,0,102.3,92.5);
	this.instance.alpha = 0.4;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,204.6,185);


(lib.displays_transperant = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tekst_Display();
	this.instance.setTransform(31.1,7.2,1,1,0,0,0,31.1,7.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.1,21.9);


(lib.Display_schijf_wit = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_2();
	this.instance.setTransform(78.9,120.2,1,1,0,0,0,78.9,120.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,157.9,240.4);


(lib.Display_schijf = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_2();
	this.instance.setTransform(78.9,120.2,1,1,0,0,0,78.9,120.2);
	this.instance.alpha = 0.4;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,157.9,240.4);


(lib.BTN_software = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.software_schijf();
	this.instance.setTransform(126.4,68.1,1,1,0,0,0,126.4,68.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.BTN_print = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.print_schijf();
	this.instance.setTransform(102.3,92.5,1,1,0,0,0,102.3,92.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.BTN_online = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Online_schijf();
	this.instance.setTransform(78.9,120.2,1,1,0,0,0,78.9,120.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.BTN_events = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.events_schijf();
	this.instance.setTransform(102.3,92.5,1,1,0,0,0,102.3,92.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.BTN_displays = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Display_schijf();
	this.instance.setTransform(78.9,120.2,1,1,0,0,0,78.9,120.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;