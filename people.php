<!DOCTYPE html>
<html>
	<head>
		<title>Quince: Development, Digital, Print, Communications, Advertisement</title>
        
        <meta charset="utf-8">
        <script type="text/javascript" src="//use.typekit.net/lef7vlr.js"></script>
        <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
        <script type="text/javascript">
            (function() {
                var config = {
                    kitId: 'iqg2fbc',
                    scriptTimeout: 3000
                };
                var h=document.getElementsByTagName("html")[0];h.className+=" wf-loading";var t=setTimeout(function(){h.className=h.className.replace(/(\s|^)wf-loading(\s|$)/g," ");h.className+=" wf-inactive"},config.scriptTimeout);var tk=document.createElement("script"),d=false;tk.src='//use.typekit.net/'+config.kitId+'.js';tk.type="text/javascript";tk.async="true";tk.onload=tk.onreadystatechange=function(){var a=this.readyState;if(d||a&&a!="complete"&&a!="loaded")return;d=true;clearTimeout(t);try{Typekit.load(config)}catch(b){}};var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(tk,s)
            })();
        </script>

		<link href="css/people/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
<!--        <link href="css/colorbox.css" media="screen, projection" rel="stylesheet" type="text/css" />-->
	</head>
	<body>
<!--    <h2 class="title">People</h2>-->
 		<section id="section-people">
			<div class="content">
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
                                    data-facebook="<?php echo $quincer->facebook;?>"
                                    data-linkedin="<?php echo $quincer->linkedin;?>"
                                    data-mobile="<?php echo $quincer->mobile;?>"
                                    data-text="<?php echo $quincer->details;?>"
                                    data-email="<?php echo $quincer->email;?>"
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

        <script type="text/javascript" src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<!--        <script src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>-->
        <script src="assets/js/gallery.js"></script>
        <script src="assets/js/profiles.js"></script>
<!--        <script src="assets/js/map.js"></script>-->
        <script src="assets/js/cufon.js"></script>
        <script src="assets/js/Tahoma_400.font.js"></script>
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
