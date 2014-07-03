<?php
if(isset($_GET['e'])){
	$text = $_GET['e'];
	putenv('GDFONTPATH=' . realpath('.'));
	$font = 'tahoma';
	$img = imagecreatetruecolor(220 ,38);
	$imgEnvelope = imagecreatefrompng('../profile-email.png');
	$blue = imagecolorallocate ( $img , 153 , 153 , 153 );
	imagefill($img,0,0,$blue);
	imagecopy($img, $imgEnvelope,0,9,0,0,36,30);
	$white = imagecolorallocate ( $img , 255 , 255 , 255 );
	imagettftext ( $img , 10.5 , 0 , 47 , 28 , $white , $font , $text );
	imagepng($img);
}
?>
