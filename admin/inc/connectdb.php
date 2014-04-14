<?php
// echo var_dump($_POST);

$host="localhost"; // Host name 
$username="quince"; // Mysql username
$password=null; // Mysql password
$db_name="quince"; // Database name 

// Connect to server and select database.
mysql_connect("$host", "$username", "$password")or die("cannot connect"); 
mysql_select_db("$db_name")or die("cannot select DB"); 
?>