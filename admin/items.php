<?php

include ('inc/connectdb.php');

if ( isset($_GET['action']) && $_GET['action'] === 'deleteItem' ) {
	mysql_query("DELETE FROM itemTags WHERE item=". (int) $_GET['id']);
	mysql_query("DELETE FROM itemImages WHERE item=". (int) $_GET['id']);
    mysql_query( "DELETE FROM items WHERE id=" . (int) $_GET['id']);
}

//$query = "SELECT * FROM items";
$query = "SELECT items.id as id, items.type as type, customers.name as customer, items.title as title, 
		items.url as url, items.text as text, items.date as date, authors.name as author
		FROM (items LEFT JOIN customers ON customers.id = items.customer) 
		LEFT JOIN authors ON authors.id = items.author ORDER BY items.id DESC";
$result = mysql_query($query);

// $queryjoin = "SELECT customers.name as customerName FROM customer
//             LEFT JOIN items 
//             ON customers.id = items.customer";
// mysql_query($queryjoin);

// $queryjoin = "SELECT authors.name as authorsName FROM authors
//             INNER JOIN items 
//             ON authors.name = items.author";
// mysql_query($queryjoin);

include 'inc/header.php';
include 'inc/nav.php';

?>
	<section  class="container clearhack">
		<table id="box-table-a">
			<thead>
				<tr>
					<th>id</th>
					<th>type</th>
					<th>customer</th>
					<th>title</th>
					<th>url</th>
					<th>text</th>
					<th>date</th>
					<th>author</th>
					<th>edit</th>
					<th>update</th>
					<th>delete</th>
				</tr>
			</thead>
			<tbody>
				<?php
				while($row = mysql_fetch_array($result)){   //Creates a loop to loop through results
				echo "<tr>".
						"<td>" . $row['id'] . "</td>".
						"<td>" . $row['type'] . "</td>".
						"<td>" . $row['customer'] . "</td>".
						"<td>" . $row['title'] . "</td>".
						"<td>" . $row['url'] . "</td>".
						"<td>" . $row['text'] . "</td>".
						"<td>" . $row['date'] . "</td>".
						"<td>" . $row['author'] . "</td>".
						'<td><a href="itemeditor.php?id=' . $row["id"] .'"' . '>edit</a></td>'.
						'<td><a href="update.php?id=' . $row["id"] .'"' . '>update</a></td>'.
						'<td><a href="?action=deleteItem&id='.$row['id'].'">delete</a>'.'</td>'.
						"</tr>";  //$row['index'] the index here is a field name
				}
			?>
			</tbody>
			
		</table>
	</section>

</body>
</head>