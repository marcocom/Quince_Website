<?php

include ('inc/connectdb.php');

//$query = "SELECT * FROM items";
$query = "SELECT items.id as id, items.type as type, customers.name as customer, items.title as title, items.url as url, items.comment as comment, items.date as date, authors.name as author
		FROM (items LEFT JOIN customers ON customers.id = items.customer) LEFT JOIN authors ON authors.id = items.author";

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
					<th>comment</th>
					<th>date</th>
					<th>author</th>
					<th>edit</th>
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
						"<td>" . $row['comment'] . "</td>".
						"<td>" . $row['date'] . "</td>".
						"<td>" . $row['author'] . "</td>".
						'<td><a href="update.php?id=' . $row["id"] .'"' . '>update</a></td>'.
						"</tr>";  //$row['index'] the index here is a field name
				}
			?>
			</tbody>
			
		</table>
	</section>

</body>
</head>