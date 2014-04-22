<?php
 
include ('connectdb.php');

$term = $_GET["term"];	
$query = mysql_query ("SELECT * FROM tags where tag like '%".$term."%' order by tag ");

 $json = array();
 
    while ($tag=mysql_fetch_array ($query) ) {
         $json[] = array(
                    'value'=> $tag["tag"],
                    'label'=> $tag["tag"]
                     );
    }
 
 echo json_encode($json);
 
?>