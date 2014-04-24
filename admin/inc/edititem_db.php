<?php
$getid = (int) isset($_GET['id']) ? $_GET['id'] : '';
if (!empty($_POST['title'])) {
		// Get values from form 
		$itemid= (int) $_POST['itemid'];
		$title=mysql_real_escape_string($_POST['title']);
		$type=mysql_real_escape_string($_POST['type']);
		$text=mysql_real_escape_string($_POST['textarea']);
		$portal=mysql_real_escape_string($_POST['portal']);
		$customer= mysql_real_escape_string($_POST['customer']);
		$date=mysql_real_escape_string($_POST['date']);
		$url=mysql_real_escape_string( $_POST[ 'url' ] );
		$author=mysql_real_escape_string($_POST['author']);

		// Update data from items table
		$updateItems = "UPDATE items
				SET type = '$type', text = '$text', date = '$date', customer = '$customer', title = '$title', author = '$author', url = '$url', portal = '$portal'
				WHERE id=" . $itemid;

		$result = mysql_query($updateItems);


		// if successfully update data into database. 
		if($result){
			echo "successfully";
		}

		else {
			echo " ERROR: Post Form";
			echo mysql_error();
		}

}

$selectItems = mysql_query("SELECT * FROM items WHERE id=" . $getid);
$item = mysql_fetch_array($selectItems);


?>