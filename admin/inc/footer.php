	<footer></footer>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
<script type="text/javascript">
	$(document).ready(function(){
	    $("#customer").autocomplete({
	        source:'inc/autocomplete_customers.php',
	        minLength: 2
	    });

	    $("#author").autocomplete({
	        source:'inc/autocomplete_authors.php',
	        minLength: 2
	    });

	    $("#tag").autocomplete({
	        source:'inc/autocomplete_tags.php',
	        minLength: 1
	    });

	});

</script>

</body>
</head>