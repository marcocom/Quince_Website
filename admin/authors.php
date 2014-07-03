<?php
include ('inc/connectdb.php');
include 'inc/addauthor.php';
include 'inc/uploadimg_author.php';
include 'inc/header.php';
include 'inc/nav.php';
?>

	<section class="container clearhack home" >
		<header class="formheader">
			<h1>Post authors</h1>
		</header>
		<article>
		<form id="postauthors" name="postauthors" action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST" enctype="multipart/form-data">

				<div class="inputblock">
					<label>Author name</label>
					<input type="text" name="authorname" value="">
				</div>

				<div class="inputblock classid">
					<label>Author ID</label>
					<input type="text" name="authorid" value="">
				</div>

				<div class="inputblock">
					<label>Author section</label>
					<input type="text" name="authorsection" value="">
				</div>

				<div class="inputblock">
					<label>Author job</label>
					<input type="text" name="authortitle" value="">
				</div>

				<div class="inputblock">
					<label>Quince email</label>
					<input type="text" name="authoremail" value="">
				</div>

				

				<div class="inputblock">
					<label>Facebook ID</label>
					<input type="text" name="authorfacebook" value="">
				</div>

				<div class="inputblock">
					<label>Linkedin</label>
					<input type="text" name="authorlinkedin" value="">
				</div>

				<div class="inputblock">
					<label>Use Facebook Image <span>(image must be added below)</span></label>
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
					<textarea name="authordetails"  rows="10" cols="50"></textarea>
				</div>

				<div class="inputblock"> 
					<button type="submit" name="author_submit">add author</button>
					<div id="formerror"></div>
				</div>
			</form>
		</article>

		<aside id="advanceoption">

			<div class="addinfo">
				<table>
					<thead>
						<tr>
							<th>image</th>
							<th>name</th>
							<th>edit</th>
							<th>delet</th>
						</tr>
					</thead>

				<?php
				while($row = mysql_fetch_array($resultAuthor)){   //Creates a loop to loop through results
					$wishImg = "";
					if ($row['useFbImage'] == 0) {
						$wishImg = "LC";
					} else {
						$wishImg = "FB";
					}
				echo "<tr>".
						"<td>" . $wishImg . "</td>".
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