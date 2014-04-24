<?php
include ('inc/connectdb.php');
include 'inc/editauthor_db.php';
include 'inc/uploadimgauthor.php';
include 'inc/header.php';
include 'inc/nav.php';
?>

	<section class="container clearhack" >
		<article>
		<form id="postauthors" name="postauthors" action="<?php echo "authoreditor.php?id=". $_GET['id'] ?>" method="POST" enctype="multipart/form-data">

				<div class="inputblock">
					<label>Author name</label>
					<input type="text" name="authorname" value="<?php echo $author['name'] ?>">
				</div>

				<div class="inputblock classid">
					<label>Author ID</label>
					<input type="text" name="authorid" value="<?php echo $author['id'] ?>">
				</div>

				<div class="inputblock">
					<label>Author section</label>
					<input type="text" name="authorsection" value="<?php echo $author['section'] ?>">
				</div>

				<div class="inputblock">
					<label>Quince email</label>
					<input type="text" name="authoremail" value="<?php echo $author['email'] ?>">
				</div>

				<div class="inputblock">
					<label>Facebook ID</label>
					<input type="text" name="authorfacebook" value="<?php echo $author['facebook']  ?>">
				</div>

				<div class="inputblock">
					<label>Linkedin</label>
					<input type="text" name="authorlinkedin" value="<?php echo $author['linkedin'] ?>">
				</div>

				<div class="inputblock">
					<label>Use Facebook Image <span>(if NO, image must be added below)</span></label>
					<label class="radioFacebook"> Yes 
						<input type="radio" name="usefbimage" value="1">
					</lable>
					<label class="radioFacebook"> No 
						<input type="radio" name="usefbimage" value="0">
					</lable>
				</div>

				<div class="inputblock">
					<label>Upload Images <span>(235x272px)</span></label>
			    	<input type="file" name="files[]" />
				</div>

				<div class="inputblock">
					<label>Details</label>
					<textarea name="authordetails"  rows="10" cols="50" ><?php echo $author['details'] ?></textarea>
				</div>

				<div class="inputblock"> 
					<button type="submit" name="author_submit">edit author</button>
					<div id="formerror"></div>
				</div>
			</form>
		</article>

		<aside id="advanceoption">

			<div class="addinfo">
				<table>
					<?php
					$resultAuthor =  mysql_query("SELECT id, name, useFbImage FROM authors");
				while($row = mysql_fetch_array($resultAuthor)){   //Creates a loop to loop through results
				echo "<tr>".
						"<td>" . $row['useFbImage'] . "</td>".
						"<td>" . $row['name'] . "</td>".
						'<td><a href="authoreditor.php?id=' . $row["id"] .'"' . '>edit</a></td>'.
						'<td><a href="?action=deleteAuthor&id='.$row['id'].'">delete</a>'.'</td>'.
						"</tr>";  //$row['index'] the index here is a field name
				}
			?>

				</table>
			</div>

		</aside>
		

	</section>
<?php
include 'inc/footer.php';
?>