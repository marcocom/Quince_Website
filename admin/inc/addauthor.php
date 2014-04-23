<?php
if (!empty($_POST['authorname'])) {
    	$author_id = (int) $_POST['authorid'];
    	$author_name = mysql_real_escape_string($_POST['authorname']);
    	$author_section = mysql_real_escape_string($_POST['authorsection']);
    	$author_email = mysql_real_escape_string($_POST['authoremail']);
    	$author_fb = mysql_real_escape_string($_POST['authorfacebook']);
    	$author_linkedin = mysql_real_escape_string($_POST['authorlinkedin']);
    	$author_facebookImg = (int) $_POST['usefbimage'];
    	$author_details = mysql_real_escape_string($_POST['authordetails']);
    	//$author_ = mysql_real_escape_string($_POST['']);


		// Insert data into mysql 
		$sqlauthor="INSERT INTO authors ( id, name, email, useFbImage, facebook, linkedin, details, section ) 
					VALUES ( ".$author_id.",  
							'".$author_name."', 
							'".$author_email."', 
							".$author_facebookImg.", 
							'".$author_fb."', '".$author_linkedin."', '".$author_details."', '".$author_section."' )";
		$result=mysql_query($sqlauthor);

		if($result){
			echo " Successful: Author Form";

		}

		else {
			echo " ERROR: Author Form";
			echo mysql_error();
		}
    } 
?>