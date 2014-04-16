<?php
 
include ('connectdb.php');

$term = $_GET["term"];	
$query = mysql_query ("SELECT * FROM authors where name like '%".$term."%' order by name ");

 $json = array();
 
    while ($author=mysql_fetch_array ($query) ) {
         $json[] = array(
                    'value'=> $author["id"],
                    'label'=>$author["name"]
                        );
    }
 
 echo json_encode($json);
 
?>