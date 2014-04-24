<?php
$getid = (int) isset($_GET['id']) ? $_GET['id'] : '';
if (!empty($_POST['authorname'])) {
	$author_id = (int) $_POST['authorid'];
    $author_name = mysql_real_escape_string($_POST['authorname']);
    $author_section = mysql_real_escape_string($_POST['authorsection']);
    $author_email = mysql_real_escape_string($_POST['authoremail']);
    $author_fb = mysql_real_escape_string($_POST['authorfacebook']);
    $author_linkedin = mysql_real_escape_string($_POST['authorlinkedin']);
    $author_facebookImg = (int) (isset($_POST['usefbimage']) ? $_POST['usefbimage'] : '');
    $author_details = mysql_real_escape_string($_POST['authordetails']);
    //$author_ = mysql_real_escape_string($_POST['']);

    $updateAuthores = "UPDATE authors 
				SET id = $author_id, name = '$author_name', 
                email = '$author_email', facebook = '$author_fb', linkedin = '$author_linkedin', 
                details = '$author_details', section = '$author_section'";
				

     if( $author_facebookImg === 0 || $author_facebookImg === 1 ){
         $updateAuthores .= ", usefbimage = " .$author_facebookImg. " ";
     }

    $updateAuthores .= "WHERE id=" . $author_id;

	mysql_query($updateAuthores);
}

if ( isset($_GET['action']) && $_GET['action'] === 'deleteAuthor' ) {
    mysql_query( "DELETE FROM authors 
                  WHERE id=" . (int) $_GET['id']);

}	


if(empty($getid)) {
$author_id = (int) isset($_POST['authorid']) ? $_POST['authorid'] : '';	
$selectAuthors = mysql_query("SELECT * FROM authors WHERE id=" . $author_id);
$author = mysql_fetch_array($selectAuthors);
} else {
$selectAuthors = mysql_query("SELECT * FROM authors WHERE id=" . $getid);
$author = mysql_fetch_array($selectAuthors);
}

?>