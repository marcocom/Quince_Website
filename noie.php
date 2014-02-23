
<!DOCTYPE HTML>
<html>
<head>
    <style type="text/css">
        body{
            margin:0;
            background-color:white;
            font-size:0.8em;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        a,
        td,
        th,
        label,
        input,
        li,
        .datepicker-dropdown {
        //font-family:                      $fontFamilyBase;
            font-family: 'Helvetica', 'Arial', sans-serif;
            color:#5a5a5a;
            font-weight:200;

            -ms-word-break: break-word;
            word-break: break-word;

        // Non standard for webkit
        //word-break: break-word;

            -webkit-hyphens: auto;
            -moz-hyphens: auto;
            hyphens: auto;
            text-align:left;
        }
        a:visited,
        a:link,
        a:hover
        {
            text-decoration:none;
            line-height:125%;
        }
        h1{
            font-size:300%;
        }
        h2{
            font-size:250%;
        }
        h3{
            font-size:200%;
        }
        h4{
            font-size:150%;
        }
        h5{
            font-size:100%;
        }
        h6{
            font-size:75%;
        }
        em{
            text-emphasis-style:              none;
            font-style:                       normal;
        }
        ul{
            list-style-type:                  none;
            margin:                           0;
            padding:                          0;
        }
        body{
            width:100%;
            height:100%;
            background-color:#FFF;
        }
        #content{
            width: 100%;
            height: 100%;
            margin:10px auto 0;
            position:relative;
        }
        #logo{
            width:100px;
            height:auto;
            display:block;
            margin:10px 0 0 10px;
            position:relative;
            float:left;
        }
        #content div.text-blocks{
            width:60%;
            min-width:420px;
            display:inline-block;
            position:relative;
            margin:30px 0 0 20px;

        }
        #content div.text-blocks h2,
        #content div.text-blocks h4,
        #content div.text-blocks h5{

            line-height:110%;
            margin:5px 0 0 0;
        }
        #content div.text-blocks h5{
            font-weight:400;
            margin-top:20px;
            color:#0172b4;
        }
        #content div.text-blocks h5 a{
            color:#0172b4;
        }
        #content div.text-blocks h5 a:hover{
            color:#000000;
        }
        #content .children{
            display: block;
            position: fixed;
            bottom: 0;
            width:100%;
            height:auto;
        }
        #content .children img{
            width:900px;
            height:auto;
            margin: 0 auto;
            display:block;
        }
        #content .main-copy{
            display: block;
            position: relative;
            margin: 5% auto 0;
            z-index: 5;
            width: 800px;
        }
    </style>
</head>
<body>

    <div id="content">
        <div class="main-copy"><img id="logo" src="img/logo.png">
        <div class="text-blocks">
            <h2>It's really (really) time to upgrade your browser.</h2>
            <h4>Let's get your browser updated for both safety, as well as your ability to view our website!</h4>
            <h5><a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie" target="_blank">Click here to get started >></a></h5>
        </div></div>
        <div class="children"><img src="img/children.jpg" ></div>
    </div>
</body>
</html>