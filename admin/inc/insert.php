<?php 

include ('connectdb.php');

$resultClient =  mysql_query("SELECT id, name FROM customers");
$resultAuthor =  mysql_query("SELECT id, name FROM authors ORDER BY name ASC");
$resultType =  mysql_query("SELECT type, name FROM types");

    if ( !empty($_POST['title']) ) {
		// Get values from form 
		$title = mysql_real_escape_string($_POST['title']);
		$type = mysql_real_escape_string($_POST['type']);
		$text = mysql_real_escape_string($_POST['textarea']);
		$portal = mysql_real_escape_string($_POST['portal']);
		$customer = mysql_real_escape_string($_POST['customer']);
		$date = mysql_real_escape_string($_POST['date']);
		$url = mysql_real_escape_string( $_POST[ 'url' ] );
		$red = mysql_real_escape_string( $_POST[ 'ref' ] );
		$author = mysql_real_escape_string($_POST['author']);

		// Insert data into mysql 
		$sqlproject = "INSERT INTO items ( type, text, date, customer, title, author, url, portal, ref ) VALUES ('".$type."', '".htmlentities($text, ENT_QUOTES)."', '".$date."', " . $customer . ", '".htmlentities($title, ENT_QUOTES)."', '".$author."', '".$url."', '".$portal."', '".$ref."' )";
		$result = mysql_query($sqlproject);

		if ( $result ) {
			ob_start();
			$itemid = mysql_insert_id();
			// header('Location: http://preview.quince.nl/admin/update.php?id=' . $itemid);
			header('Location: http://localhost/~imredo/website/admin/update.php?id=' . $itemid);
			ob_end_flush();
		} else {
			echo "ERROR: Post Form";
			echo mysql_error();
		}

    } 

    if ( !empty($_POST['customername']) ) {
		$customer_name = mysql_real_escape_string($_POST['customername']);
		$customer_id = mysql_real_escape_string($_POST['customerid']);

		// Insert data into mysql 
		$sqlcostumer = "INSERT INTO customers ( id, name ) VALUES ( '" . $customer_id . "', '" . $customer_name . "')";
		$result = mysql_query($sqlcostumer);

		if ( $result ){
			echo " Successful: Costumer Form";
		} else {
			echo " ERROR: Costumer Form";
			echo mysql_error();
		}

    } 

    if  ( !empty($_POST['typecharacter']) ) {
		$type_char = mysql_real_escape_string($_POST['typecharacter']);
		$type_name = mysql_real_escape_string($_POST['typename']);

		// Insert data into mysql 
		$sqltype = "INSERT INTO types ( type, name ) VALUES ( '" . $type_char . "', '" . $type_name . "')";
		$result = mysql_query($sqltype);

		if($result){
			echo " Successful: Type Form";
		} else {
			echo " ERROR: Type Form";
			echo mysql_error();
		}
    }
 ?>