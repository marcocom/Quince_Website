<?php

$tag = isset($_POST['tag']) ? $_POST['tag'] : '';
$my_data=mysql_real_escape_string($tag);
$resultSearchAuthors = mysql_query("SELECT name FROM authors WHERE name LIKE '%$my_data%' ORDER BY name ");

echo mysql_error();

if ($resultSearchAuthors) {
	while($row=mysqli_fetch_array($resultSearchAuthors)){
		echo $row['name']."\n";
	}
}
?>