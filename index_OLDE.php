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
		<nav>
        	<div id="navbg"></div>
			<div class="content">
				<a data-element="home" class="logo scrolling-link off-screen-text">quince</a>
				<a data-element="home" class="scrolling-link about">about</a>
				<a data-element="people" class="scrolling-link">people</a>
				<a data-element="contact" class="scrolling-link contact-link">contact</a>
				<a href="http://www.linkedin.com/company/quince" class="linkedin off-screen-text" target="linkedin">linkedin</a>
				<a href="https://www.facebook.com/QuinceAmsterdam" class="facebook off-screen-text" target="facebook">facebook</a>
				<div class="clear"></div>
			</div>
		</nav>

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
			<div class="content">
				<h3>Quince, a priceless agency.</h3>
				<p>Quince believes in the potential of each individual. That everybody is free and encouraged to improve their personal skills and to grow as a person.</p>

				<h3>We focus on co-creating great work.</h3>
				<p>Quince works through an ‘Agile’ approach for each project. A mixed team of our departments co-create together with our clients.</p>
				<p>The Quince approach works. We keep surprising our clients, ourselves and Quince as a whole. With solutions that are beautiful and effective, showing us we out did ourselves again.</p>

				<h3>Smart. Playful. Zero ego. Hands on.</h3>
				<a data-element="about" class="more-selector scrolling-link">
					<img src="assets/img/more.png">
				</a>
			</div>
		</section>
 		<section id="section-people">
			<div class="content">
				<h2>People</h2>
                <?php
                    
                    $people = new SimpleXMLElement(file_get_contents('data/people.xml'));
                    foreach($people->quincer as $quincer){
                        
                        
                        if($quincer->useFBImage == 'yes'){
                            $fb_user_id = getIdFromUrl($quincer->facebook);
                            $imageURL = 'https://graph.facebook.com' . $fb_user_id . '/picture?width=186&height=130';
                        } else {
                            $imageURL = $quincer->image;
                        }                        
                        
                        ?>
                            <div    class="profile-pic"
                                    title="<?php echo $quincer->name;?>"
                                    data-name="<?php echo $quincer->name;?>"
                                    data-department="<?php echo $quincer->section;?>"
                                    data-email="<?php echo $quincer->email;?>"
                                    data-facebook="<?php echo $quincer->facebook;?>"
                                    data-linkedin="<?php echo $quincer->linkedin;?>"
                                    data-mobile="<?php echo $quincer->mobile;?>"
                                    data-text="<?php echo $quincer->details;?>"
                                    <?php
										if($imageURL != ''){
											?>
                                            	style="background:url(<?php echo $imageURL;?>)"
                                            <?php
										}
									?>></div>            
                        <?php
                    }
                ?>
				<div class="clear"></div>
			</div>
		</section>
		<section id="section-contact">
			<div class="content">
            	<h1>Contact information</h1>
				<div id="contact-sections">
					<div class="contact-section" id="contact-amsterdam">
						<h3>Quince Amsterdam B.V.</h3>
						<span>Assumburg 73</span><br />
						<span>1081 GB Amsterdam</span><br />
						<span>the Netherlands</span><br />
						<a href="tel:+31203471000">T +31 (0)20 347 1000</a><br />
                        <a href="mailto:info@quince.nl">info@quince.nl</a><br />

						<div class="legal-info">
							<span>Chamber of commerce: 30180491</span><br />
							<span>VAT number: 8108.01.152.B.01</span><br />
							<span>Rabobank: 3937.78.177</span><br />
							<span>IBAN: NL74RABO0393778177 </span><br />
							<span>Swift: RABONL2U</span><br />
						</div>
					</div>
					<div class="contact-section" id="contact-budapest">
						<h3>Quince Hungary Kft.</h3>
						<span>Marcius 15. t&eacute;r 1 [4th floor]</span><br />
						<span>1056 Budapest</span><br />
						<span>Hungary</span><br />
						<a href="tel:+3618149694">T +36 1 814 9694</a><br />
                        <a href="mailto:info@quince.hu">info@quince.hu</a><br />

						<div class="legal-info">
							<span>Chamber of commerce: 01-09-863566</span><br />
							<span>VAT number: 13597986-2-42</span><br />
							<span>HVB Bank Zrt.; Bankaccount: <br />
								10918001-00000026-40920003</span><br />
							<span>IBAN: HU621091800100000026-40920010</span><br />
							<span>Swift: BACXHUHB</span><br />
						</div>
					</div>
                    <div class="contact-section" id="social-media">
						<h3>Social Media</h3>
						<a href="https://www.facebook.com/QuinceAmsterdam" class="facebook" target="_blank">facebook</a>
                        <a href="http://www.linkedin.com/company/31702" class="linkedin" target="_blank">LinkedIn</a>
					</div>
                    <div class="contact-section" id="job-opportunities">
						<h3>Job Opportunities</h3>
                        <br />
                        <span><a class="job" target="_blank" href="assets/pdf/Quince_Front-end-Developer.pdf">Front-end Developer</a></span><br /><br />
						<span>Quince is always looking for talent in the Amsterdam and Budapest offices.</span><br /><br />
						<span>Send your motivation and portofolio to <a href="mailto:jobs@quince.nl">jobs@quince.nl</a></span>
						<br />
						<br />
						<a target="_blank" href="assets/pdf/Quince_Terms_and_Conditions.pdf">Terms and Conditions</a>
					</div>
                    
					<!--<div class="contact-section" id="contact-athens">-->
					<!--<h3>Quince Greece</h3>-->
					<!--<span>XXX</span><br />-->
					<!--<span>XXX</span><br />-->
					<!--<span>Greece</span><br />-->
					<!--<a href="tel:+3618149694">T XXX</a>-->
					<!--<br />-->

					<!--<div class="legal-info">-->
					<!--<span>Chamber of commerce: </span><br />-->
					<!--<span>VAT number: </span><br />-->
					<!--<span>Bank account: </span><br />-->
					<!--<span>IBAN: </span><br />-->
					<!--<span>Swift: </span><br />-->
					<!--</div>-->
					<!--</div>-->
					<div class="clear"></div>
				</div>
			</div>
			<div id="map"></div>

		</section>

		<section id="section-footer">
        	<div class="content">
	        	<img src="assets/img/logos.png"/>
            </div>
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
