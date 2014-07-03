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
            z-index:0;
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
            z-index: 3;
            width: 800px;
        }

        .info{
            display:block;
            margin: 20px auto 5px;
            width: 680px;
            z-index:2;
            position: relative;
        }

        .info ul li{
            float:left;
            background:#E4E4E4;
            width:300px;
            height:auto;
            min-height:270px;
            margin-right:20px;
            padding:0 5px 5px 10px;


            opacity:0.9;

            filter:alpha(opacity=90);

            /* works for IE 8. */
            -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";

        }
        .info ul li h3{
            font-size: 150%;
            margin: 10px 0 0 0;
        }
        .info ul li .address{
            display:block;
            margin: 10px 0;
        }
        .info ul li .address h5{
            color:black;
            line-height: 1.2em;
            margin: 0;

        }
        .info ul li .address a{
            font-weight:400;
            color:#0172b4;
        }

        .info ul li a h5{
            margin: 0;
            line-height: 1em;
        }

        .info ul li .legal-info{
            margin-top:10px;
        }
        .info ul li .legal-info h6{
            color:#5a5a5a;
            line-height: 1.5em;
            word-break:auto;
            margin:0;
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

        <div class="info">
<!--            <h1>Contact Information</h1>-->
            <ul>
                <li class="contact-section" id="contact-amsterdam">
                    <h3>Quince Amsterdam B.V.</h3>
                    <a class="address" target="_blank" href="https://maps.google.nl/maps?q=Assumburg+73+1081+GB+Amsterdam+the+Netherlands&daddr=Assumburg+73,+1081+GB+Amsterdam&hnear=0x47c60a0b845ef23b:0x79090fe2330b7586,Assumburg+73,+1081+GB+Amsterdam&gl=nl&t=h&z=16">
                        <h5>Assumburg 73</h5>
                        <h5>1081 GB Amsterdam</h5>
                        <h5>The Netherlands</h5><img src="img/googlemaps_pin.png">

                    </a>
                    <a href="tel:0031203471000"><h5>T +31 (0)20 347 1000</h5></a>
                    <a href="tel:0031203471005"><h5>F +31 (0)20 347 1005</h5></a>
                    <a href="mailto:info@quince.nl"><h5>info@quince.nl</h5></a>

                    <div class="legal-info">
                        <h6>Chamber of commerce: 30180491</h6>
                        <h6>VAT number: 810801152.B.01</h6>
                        <h6>IBAN: NL15DEUT0319822893 </h6>
                        <h6>Swift: DEUTNL2N</h6>
                        <h6><a href="assets/pdf/Quince_Terms_and_Conditions.pdf">Terms and conditions</a></h6>
                    </div>
                </li>
                <li class="contact-section" id="contact-budapest">
                    <h3>Quince Hungary Kft.</h3>
                    <a class="address" target="_blank" href="https://maps.google.nl/maps?q=Marcius+15.+t%C3%A9r+1+1056+Budapest+Hungary&hl=en&ie=UTF8&sll=47.737938,18.557968&sspn=0.53613,1.338959&t=h&gl=nl&hnear=1056+Budapest,+V.+ker%C3%BClet,+M%C3%A1rcius+15.+t%C3%A9r+1,+Hungary&z=17">
                        <h5>Marcius 15. tér 1 [4th floor]</h5>
                        <h5>1056 Budapest</h5>
                        <h5>Hungary</h5><img src="img/googlemaps_pin.png">
                    </a>

                    <a href="tel:003618149694"><h5>T +36 1 814 9694</h5></a>
                    <a href="mailto:info@quince.hu"><h5>info@quince.hu</h5></a>

                    <div class="legal-info">
                        <h6>Chamber of commerce: 01-09-863566</h6>
                        <h6>VAT number: 13597986-2-41</h6>
                        <h6>Unicredit Bank Zrt.</h6>
                        <h6>IBAN: HU621091800100000026-40920010</h6>
                        <h6>Swift: BACXHUHB</h6>
                        <h6><a href="assets/pdf/Quince_Terms_and_Conditions.pdf">Terms and conditions</a></h6>
                    </div>
                </li>
                <div class="clear"></div>
            </ul>
        </div>
        <div class="children"><img src="img/children.jpg" ></div>
    </div>
</body>
</html>