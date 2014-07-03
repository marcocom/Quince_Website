<?php
if(isset($_FILES['files'])){
    $errors= array();
	foreach($_FILES['files']['tmp_name'] as $key => $tmp_name ){
		$img_name = $_FILES['files']['name'][$key];
		$img_size =$_FILES['files']['size'][$key];
		$img_tmp =$_FILES['files']['tmp_name'][$key];
		$img_type=$_FILES['files']['type'][$key];

        if($img_size > 2097152){
            $errors[] = 'File size must be less than 2 MB';
        }	

        $img_extentsion = pathinfo($img_name, PATHINFO_EXTENSION);

        if ( $typeResult['type'] == "f" && $imageResult['count'] < 10 ) {

            $query = "INSERT INTO images (type, extension, name) VALUES ('".$img_type."', '".$img_extentsion."', '".$img_name."'); "; 
            
        } else if ( $typeResult['type'] == "a" || $typeResult['type'] == "b" || $typeResult['type'] == "c" || $typeResult['type'] == "j" && $imageResult['count'] <= 0 ) {

            $query = "INSERT INTO images (type, extension, name) VALUES ('".$img_type."', '".$img_extentsion."', '".$img_name."'); "; 

        } else {
            echo "Max images on this Item type (".  $typeResult['type'] . ") is " . $imageResult['count']; 
            return false;       
        }

        

        $desired_dir="../img/cells/";
        if ( empty($errors) === true ){
            mysql_query($query);
            $last_imgid = mysql_insert_id();

            if ( is_dir($desired_dir) === false ){
                mkdir("$desired_dir", 0777);		// Create directory if it does not exist
            }

            if ( is_dir("$desired_dir/".$img_name) === false ){
                move_uploaded_file($img_tmp, $desired_dir . $last_imgid  .".". $img_extentsion );
            }

        } else {
                print_r($errors);
        }
    }

	if ( empty($error) ){
        $itemid = $_GET['id'];
        $query="INSERT INTO itemImages (item, image) VALUES ( $itemid, $last_imgid )";
        mysql_query($query);
		echo "Success";
	}
}
?>

