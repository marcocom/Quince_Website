<?php
 
include ('connectdb.php');

$term = $_GET["term"];	
$query = mysql_query ("SELECT * FROM customers where name like '%".$term."%' order by name ");

 $json = array();
 
    while ($customer=mysql_fetch_array ($query) ) {
         $json[] = array(
                    'value'=> $customer["id"],
                    'label'=>$customer["name"]." - ".$customer["id"]
                     );
    }
 
 echo json_encode($json);
 
?>