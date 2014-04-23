<?php
include ('inc/connectdb.php');
include 'inc/addauthor.php';
include 'inc/uploadimgauthor.php';
include 'inc/header.php';
include 'inc/nav.php';
?>

	<section class="container clearhack" >
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
					<label>Quince email</label>
					<input type="text" name="authoremail" value="">
				</div>

				

				<div class="inputblock">
					<label>Facebook</label>
					<input type="text" name="authorfacebook" value="">
				</div>

				<div class="inputblock">
					<label>Linkedin</label>
					<input type="text" name="authorlinkedin" value="">
				</div>

				<div class="inputblock">
					<label>Use Facebook Image</label>
					<label class="radioFacebook"> Yes 
						<input type="radio" name="usefbimage" value="1">
					</lable>
					<label class="radioFacebook"> No 
						<input type="radio" name="usefbimage" value="0">
					</lable>
				</div>

				<div class="inputblock">
					<label>Upload Images</label>
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
				<!-- <form action="" method="POST" >
					<label>Upload Images</label>
			    	<input type="file" name="files[]" />
			    	<input type="submit" value="upload">
				</form> -->
			</div>

		</aside>
		

	</section>
<?php
include 'inc/footer.php';
?>