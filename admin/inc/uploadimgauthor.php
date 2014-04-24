<?php
if( isset($_FILES['files']) ){
    $errors= array();
	foreach( $_FILES['files']['tmp_name'] as $key => $tmp_name ){
		$img_name = $_FILES['files']['name'][$key];
		$img_size = $_FILES['files']['size'][$key];
		$img_tmp = $_FILES['files']['tmp_name'][$key];
		$img_type = $_FILES['files']['type'][$key];	

        $img_extension = pathinfo($img_name, PATHINFO_EXTENSION);

        if ( $img_size > 2097152 ){
			$errors[] = "File size must be less than 2 MB";
        }	

        $desired_dir = "../img/people/";

        // Upload img if author does not have facebook
        if ( empty($errors) === true && $author_facebookImg  === 0 )  {
            
            if ( is_dir($desired_dir) === false ){
                mkdir("$desired_dir", 0775);        // Create directory if it does not exist
            }

            if ( is_dir("$desired_dir/".$img_name) === false ){
                move_uploaded_file($img_tmp, $desired_dir . $author_id  .".". $img_extension );
            }
        }  
        
    } // end foreach

	
} // end if Files

    echo mysql_error();
    // var_dump($_FILES);

?>