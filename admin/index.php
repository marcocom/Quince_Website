<?php
include 'inc/insert.php';
include 'inc/header.php';
include 'inc/nav.php';
?>

	<section class="container clearhack" >
		<article>
		<form name="postprojects" action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST" enctype="multipart/form-data">
			<div class="inputblock">
				<label>Project Title</label>
				<input type="text" name="title" value="">
			</div>

			<div class="inputblock">
				<label>Type</label>
				<select name="type">
					<option>Choose a type...</option>
					<?php
						while($row = mysql_fetch_assoc( $resultType )) { 
	        				echo '<option value="'.$row['type'].'">' . $row['name'] . '</option>' . "\n";   
						}
					?>
				</select>
			</div>

			<div class="inputblock">
				<label>Text</label>
				<textarea name="textarea"  rows="10" cols="50"></textarea>
			</div>

			<div class="inputblock portal clearhack">
				<label>Portal</label>
				<select name="portal">
					<option>Choose a portal...</option>
					<option value="fb">Facebook</option>
					<option value="tw">Twitter</option>
					<option value="link">Linkedin</option>
					<option value="pin">Pinterest</option>
					<option value="yt">Youtube</option>
					<option value="vim">Vimeo</option>
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
				<input type="text" id="customer" name="customer">
			</div>

			<div class="inputblock">
				<label>Date</label>
				<input type="text" name="date" value="<?php echo date("Y-m-d H:i:s"); ; ?>">
			</div>

			<div class="inputblock">
				<label>Url</label>
				<input type="text" name="url" value="">
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
				<input type="text" id="author" name="author">
			</div>

			<div class="inputblock"> 
				<button type="submit" name="post_submit">Post</button>
				<div id="formerror"></div>
			</div>
		</form>
		</article>

		<aside id="advanceoption">
			<div class="addinfo">
			<form id="postcustomers" name="postcustomers" action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST">

				<div class="inputblock">
					<label>Customer name</label>
					<input type="text" name="customername" value="">
				</div>

				<div class="inputblock classid">
					<label>Customer ID</label>
					<input type="text" name="customerid" value="">
				</div>

				<div class="inputblock"> 
					<button type="submit" name="customer_submit">add customer</button>
					<div id="formerror"></div>
				</div>
			</form>
			</div>

			<div class="addinfo">
			<form name="posttypes" action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST">

				<div class="inputblock">
					<label>Type character</label>
					<input type="text" name="typecharacter" value="">
				</div>

				<div class="inputblock">
					<label>Type Name</label>
					<input type="text" name="typename" value="">
				</div>

				<div class="inputblock"> 
					<button type="submit" name="type_submit">add type</button>
					<div id="formerror"></div>
				</div>
			</form>
			</div>

		</aside>
		

	</section>
<?php
include 'inc/footer.php';
?>