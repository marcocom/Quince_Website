<?php
include 'inc/connectdb.php';
include 'inc/edititem_db.php';
include 'inc/header.php';
include 'inc/nav.php';
?>

	<section class="container clearhack" >
		<header class="formheader">
			<h1>Edit Item: <?php echo $getid ?></h1>
		</header>
		<article>
		<form name="postprojects" action="<?php echo "itemeditor.php?id=". $item['id'] ?>" method="POST" enctype="multipart/form-data">
		<input type="hidden" name="itemid" value="<?php echo $item['id'] ?>">
			<div class="inputblock">
				<label>Project Title</label>
				<input type="text" name="title" value="<?php echo $item['title'] ?>">
			</div>

			<div class="inputblock">
				<label>Type</label>
				<select name="type">
					<?php
					$resultType =  mysql_query("SELECT type, name FROM types");
						while($row = mysql_fetch_assoc( $resultType )) { 
							$select = '';
							if( $item['type'] === $row['type']){
								$select = 'selected';
							}

	        				echo '<option value="'.$row['type'].'" '.$select.' >' . $row['name'] . '</option>' . "\n";   
						}
					?>
				</select>
			</div>

			<div class="inputblock">
				<label>Text</label>
				<textarea name="textarea"  rows="10" cols="50"><?php echo $item['text'] ?></textarea>
			</div>

			<div class="inputblock portal clearhack">
				<label>Portal</label>
				<select name="portal">
					<option value="fb" <?php if ($item['portal'] == 'fb') {echo 'selected';} ?> >Facebook</option>
					<option value="tw" <?php if ($item['portal'] == 'tw') {echo 'selected';} ?> >Twitter</option>
					<option value="link" <?php if ($item['portal'] == 'link') {echo 'selected';} ?> >Linkedin</option>
					<option value="pin" <?php if ($item['portal'] == 'pin') {echo 'selected';} ?> >Pinterest</option>
					<option value="yt" <?php if ($item['portal'] == 'yt') {echo 'selected';} ?>>Youtube</option>
					<option value="vim" <?php if ($item['portal'] == 'vim') {echo 'selected';} ?>>Vimeo</option>
				</select>
			</div>

			<div class="inputblock">
				<label>Client</label>
				<!-- <select name="customer">
					<option>Choos a customer...</option>
					<?php
						// while($row = mysql_fetch_assoc( $resultClient )) { 
	     				// echo '<option value="'.$row['id'].'">' . $row['name'] . '</option>' . "\n";   
						// }
					?>
				</select> -->
				<input type="text" id="customer" name="customer" value="<?php echo $item['customer'] ?>">
			</div>

			<div class="inputblock">
				<label>Date</label>
				<input type="text" name="date" value="<?php echo $item['date'] ?>">
			</div>

			<div class="inputblock">
				<label>Url</label>
				<input type="text" name="url" value="<?php echo $item['url'] ?>">
			</div>

			<div class="inputblock">
				<label>Author</label>
				<!-- <select name="author">
					<option>Choose authors...</option>
					<?php
						// while($row = mysql_fetch_assoc( $resultAuthor )) { 
	     				//   echo '<option value="'.$row['id'].'">' . $row['name'] . '</option>' . "\n";   
						// }
					?>
				</select> -->
				<input type="text" id="author" name="author" value="<?php echo $item['author'] ?>">
			</div>

			<div class="inputblock"> 
				<button type="submit" name="post_submit">Edit Item</button>
				<div id="formerror"></div>
			</div>
		</form>
		</article>

		<aside id="advanceoption">
			

		</aside>
		

	</section>
<?php
include 'inc/footer.php';
?>