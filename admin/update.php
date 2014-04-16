<?php

include ('inc/connectdb.php');
include ('inc/uploadimg.php');

$getid = (int) isset($_GET['id']) ? $_GET['id'] : '';

// add unlik to folder img
if( isset($_GET['action']) && $_GET['action'] === 'delete' ){
	$imgid = $_GET['img'];
	$selectimg = mysql_query("SELECT extension FROM images WHERE id=".$imgid);
	$row = mysql_fetch_assoc ($selectimg);
	mysql_query("DELETE FROM itemImages WHERE image=".$imgid);
	mysql_query("DELETE FROM images WHERE id=".$imgid);
	unlink('../img/cells/' . $imgid . '.' . $row['extension']);
}

// Retrieve data from database 
// $sql="SELECT images WHERE id=" . (int) $getid;
$sqljoin = "SELECT images.id AS imageid, images.extension AS imagex 
            FROM images

            INNER JOIN itemImages 
            ON images.id = itemImages.image

            where itemImages.item = " . (int) $getid;
$result = mysql_query($sqljoin);

$images = array ();

while ($row = mysql_fetch_assoc ($result)){
	$image = array ('id' => (int) $row['imageid'],
					'extension' => $row['imagex']);

	$images[] = $image;
}

if (!empty($_POST['tag'])) {
		$tag_name = mysql_real_escape_string($_POST['tag']);

		// doe query om te kijken of tag al bestaat
		$result = mysql_query('SELECT id FROM tags WHERE tag = "' . $tag_name . '"');
		$row = mysql_fetch_assoc ($result);

		// als hij nog niet bestaat
		if (!$row) {
			// voeg hem toe
			mysql_query('insert into tags (tag) values ("' . $tag_name . '")');
			// en gebruik het toegevoegde id
			$last_tagid = mysql_insert_id();
	
		} else {
			// gebruik zijn id
			$last_tagid = $row['id'];
		}

		$resultItemTag = mysql_query('SELECT tag FROM itemTags WHERE item = ' . $getid . ' AND tag = '.$last_tagid.'');
		$rowItemTag = mysql_fetch_assoc ($resultItemTag);

		if(!$rowItemTag) {
			// voeg itemTags regel toe met tagId		
			mysql_query("INSERT INTO itemTags (item, tag) VALUES ( '".$getid."','". $last_tagid."')");
		} 

        if (mysql_error ()) {
        	echo 'sql error: ' . mysql_error ();
        	exit ();
        }
}

include 'inc/header.php';
include 'inc/nav.php';

?>
	<section  class="container clearhack updatepage">
		<article>
			<table>
			<thead>
				<tr>
					<th>image</th>
					<th>extension</th>
					<th>preview</th>
					<th>delete</th>
				</tr>
			</thead>
			<tbody>
			<? foreach ($images as $image): ?>
				<tr>
						<td width="10%"><?= $image['id'] ?></td>
						<td width="10%"><?= $image['extension'] ?></td>
						<td width="70%"><img style="width: 50%; height: auto;" src="../img/cells/<?= $image['id'] ?>.<?= $image['extension'] ?>"></td>
						<td><a href="?id=<?= $getid ?>&action=delete&img=<?= $image['id'] ?>">Delete</a></td>
				</tr>
			<? endforeach ?>
			</tbody>
			
		</table>
		</article>
		

		<aside>
			<form action="" method="POST" enctype="multipart/form-data">
				<label>Upload Images</label>
			    <input type="file" name="files[]" />
			    <input type="submit" value="upload">
			</form>
		</aside>

		<aside>
			<form name="posttags" action="" method="POST">
				<div class="inputblock">
					<label>Item tag</label>
					<input type="text" name="tag" value="">
				</div>
	
				<div class="inputblock"> 
					<button type="submit" name="type_submit">add tag</button>
					<div id="formerror"></div>
				</div>
			</form>
		</aside>
	</section>

</body>
</head>