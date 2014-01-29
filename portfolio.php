<!DOCTYPE html>
<html>
	<head>
		<title>Quince: Development, Digital, Print, Communications, Advertisement</title>
        
        <meta charset="utf-8">
		<link href="css/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
		<link href="css/print.css" media="print" rel="stylesheet" type="text/css" />
        <link href="css/colorbox.css" media="screen, projection" rel="stylesheet" type="text/css" />
		<!--[if IE]>
		<link href="css/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
		<![endif]-->
	</head>
	<body>

		<section id="section-home">
        	<img src="assets/img/prev.png" id="prevButton"/>
			<div id="backgrounds-home">
                <img id="background-print" src="assets/img/backgrounds/home_print.jpg" alt="Quince - Print" />
				<img id="background-software" style="display:none;" src="assets/img/backgrounds/home_software.jpg" alt="Quince - Software" />
				<img id="background-online" style="display:none;" src="assets/img/backgrounds/home_online.jpg" alt="Quince - Online" />
				<img id="background-displays" style="display:none;" src="assets/img/backgrounds/home_displays.jpg" alt="Quince - Displays" />
				<img id="background-events" style="display:none;" src="assets/img/backgrounds/home_events.jpg" alt="Quince - Events" />
                <img id="background-gallery" style="display:none;"/>
			</div>
            <img src="assets/img/next.png" id="nextButton"/>
			<div class="content">
				
                <canvas id="canvas" width="430" height="800"></canvas>
				<div id="gallery">
					
					<div id="gallery-image-container">
						<div id="gallery-images"></div>
					</div>
					
				</div>
			</div>
		</section>
		<section id="section-about">
		</section>
 		<section id="section-people">

		</section>
		<section id="section-contact">
			<div class="content">

			</div>
            <div id="map"></div>

		</section>

		<script src="assets/js/jquery-1.10.1.min.js"></script>
		<script src="assets/js/jquery.scrollTo-1.4.3.1-min.js"></script>
		<script src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
		<script src="assets/js/360-circle.js"></script>
		<script src="assets/js/gallery.js"></script>
		<script src="assets/js/profiles.js"></script>
		<script src="assets/js/map.js"></script>
        <script src="assets/js/cufon.js"></script>
        <script src="assets/js/Tahoma_400.font.js"></script>
        <script src="assets/js/jquery.colorbox-min.js"></script>
        <script src="http://code.createjs.com/easeljs-0.6.0.min.js"></script>
		<script src="http://code.createjs.com/tweenjs-0.4.0.min.js"></script>
        <script src="http://code.createjs.com/movieclip-0.6.0.min.js"></script>
   		<script src="assets/js/canvas.js"></script>
		<script src="assets/js/script.js"></script>
        
		<script>
			var _gaq = [
				['_setAccount', 'UA-1007198-3'],
				['_trackPageview']
			];
			(function (d, t) {
				var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
				g.src = ('https:' == location.protocol ? '//ssl' : '//www') + '.google-analytics.com/ga.js';
				s.parentNode.insertBefore(g, s)
			}(document, 'script'));
		</script>
	</body>
</html>
<?php
	function getIdFromUrl($url)
    {
     $url = preg_replace('/^https:\/\/www.facebook.com/', '', $url);
     $pos = strrpos($url, '/');
     if ($pos === false)
     {
      return false;
     }
     
     $id = trim(substr($url, $pos));
	 if(stripos($id,'?') > 0){
	 	 $id = trim(substr($id,0,stripos($id,'?')));
	 }
     if ( empty($id) )
     {
      return false;
     }
	 
	 
     
     return $id;
    }
?>
