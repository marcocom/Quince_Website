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
	        				echo '<option value="'.$row['id'].'">' . $row['name'] . '</option>' . "\n";   
						}
					?>
				</select>
			</div>

			<div class="inputblock">
				<label>Comment</label>
				<textarea name="comment"  rows="10" cols="50"></textarea>
			</div>

			<div class="inputblock">
				<label>Client</label>
				<select name="customer">
					<option>Choos a customer...</option>
					<?php
						while($row = mysql_fetch_assoc( $resultClient )) { 
	        			echo '<option value="'.$row['id'].'">' . $row['name'] . '</option>' . "\n";   
						}
					?>
				</select>
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
				<select name="author">
					<option>Choose authors...</option>
					<?php
						while($row = mysql_fetch_assoc( $resultAuthor )) { 
	        				echo '<option value="'.$row['id'].'">' . $row['name'] . '</option>' . "\n";   
						}
					?>
				</select>
			</div>

			<div class="inputblock"> 
				<button type="submit" name="post_submit">Post</button>
				<div id="formerror"></div>
			</div>
		</form>
		</article>

		<aside>
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
		</aside>

		<aside>
		<form id="postauthors" name="postauthors" action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST">

			<div class="inputblock">
				<label>Author name</label>
				<input type="text" name="authorname" value="">
			</div>

			<div class="inputblock classid">
				<label>Author ID</label>
				<input type="text" name="authorid" value="">
			</div>

			<div class="inputblock">
				<label>Author job title</label>
				<input type="text" name="authorjob" value="">
			</div>

			<div class="inputblock"> 
				<button type="submit" name="author_submit">add author</button>
				<div id="formerror"></div>
			</div>
		</form>
		</aside>

		<aside>
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
		</aside>
		

	</section>
	<footer></footer>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<!-- <script type="text/javascript" src="js/jquery-autocomplete.min.js"></script>
 --><!--  $(document).ready(function(){
  $("#tag").autocomplete({
  	source:'inc/autocomplete.php', 
	minLength:2
  });
 }); -->


</body>
</head>