<?php

if (preg_match ('/(?i)msie [4-8]/', $_SERVER['HTTP_USER_AGENT']))
{
    include ('noie.php');
    exit;
}

?>
<!DOCTYPE HTML>
<html >
    <head>
        <!--http://hsmaker.com/harlemshake.asp?url=http://www.quince.nl -->

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Quince :: Welcome</title>
        <meta name="keywords" content="amsterdam, holland, quince, quince technologies, quince amsterdam bv, dutch creative, holland prin, online offline, web, web design, website design, graphic design, web engineering, website engineering, java, web consulting, web application, web development, web application development, e-commerce, interactive web, streaming video, interactive display unit, dcms, qrs content management system, content management, 3d development, web consulting, lamp, open source">
        <meta name="description" content="">
<!--        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0, target-densitydpi=device-dpi">-->
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <meta http-equiv="cleartype" content="on">
        <meta name="HandheldFriendly" content="True">

<!--        <link href='http://fonts.googleapis.com/css?family=Exo+2:400,700' rel='stylesheet' type='text/css'>-->
        <script type="text/javascript" src="//use.typekit.net/lef7vlr.js"></script>
        <script type="text/javascript">try{Typekit.load();}catch(e){}</script>

        <script type="text/javascript">
            (function() {
                var config = {
                    kitId: 'iqg2fbc',
                    scriptTimeout: 3000
                };
                var h=document.getElementsByTagName("html")[0];h.className+=" wf-loading";var t=setTimeout(function(){h.className=h.className.replace(/(\s|^)wf-loading(\s|$)/g," ");h.className+=" wf-inactive"},config.scriptTimeout);var tk=document.createElement("script"),d=false;tk.src='//use.typekit.net/'+config.kitId+'.js';tk.type="text/javascript";tk.async="true";tk.onload=tk.onreadystatechange=function(){var a=this.readyState;if(d||a&&a!="complete"&&a!="loaded")return;d=true;clearTimeout(t);try{Typekit.load(config)}catch(b){}};var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(tk,s)
            })();
        </script>

        <script type="text/javascript" src="js/lib/modernizr.custom.min.js"></script>
        <link rel="stylesheet" href="css/base.css">
    </head>
    <body>
        <div class="home-content">
            <div class="header">
                <ul>
                    <li><a class="toplink hidden-xs" id="people" href="#"><h5>PEOPLE</h5></a></li>
                    <li><a class="toplink" id="about" href="#"><h5>ABOUT US</h5></a></li>
                    <li><a class="toplink" id="jobs" href="#"><h5>JOBS</h5></a></li>
                    <li><a class="toplink" id="contact" href="#"><h5>CONTACT US</h5></a></li>
                </ul>
            </div>

            <div class="content">
                <div class="main-logo">
                    <img id="logo" src="img/logo.png">
                </div>
                <div class="nav">
                    <ul class="social">
                        <li class="facebook">
                            <a target="_blank" href="http://www.facebook.com/QuinceAmsterdam" data-portal="fb"  target="_blank">
                                <!--                            <img src="img/icon_fb.png">-->
                            </a>
                        </li>

                        <li class="twitter">
                            <a target="_blank" href="http://www.twitter.com/QuinceAmsterdam" data-portal="tw"  target="_blank">
                                <!--                            <img src="img/icon_twit.png">-->
                            </a>
                        </li>
                        <li class="linkedin">
                            <a target="_blank" href="http://www.linkedin.com/company/quince" data-portal="link"  target="_blank">
                                <!--                            <img src="img/icon_li.png">-->
                            </a>
                        </li>
                        <li class="pinterest">
                            <a target="_blank" href="http://www.pinterest.com/QuinceAmsterdam" data-portal="pin"  target="_blank">
                                <!--                            <img src="img/icon_pin.png">-->
                            </a>
                        </li>
                        <li class="youtube">
                            <a target="_blank" href="http://www.youtube.com/QuinceBV" data-portal="yt"  target="_blank">
                                <!--                            <img src="img/icon_yt.png">-->
                            </a>
                        </li>
                        <li class="vimeo">
                            <a target="_blank" href="http://vimeo.com/quinceamsterdam " data-portal="vim"  target="_blank">
                                <!--                            <img src="img/icon_vim.png">-->
                            </a>
                        </li>
                        <!--li class="gplus">
                            <a target="_blank" href="http://plus.google.com/QuinceAmsterdam" data-portal="gp"  target="_blank">
                                <img src="img/icon_gp.png">
                            </a>
                        </li-->
                        <!--li class="rss">
                            <a target="_blank" href="http://rss.quince.nl" data-portal="rss"  target="_blank">
                                <img src="img/icon_rss.png">
                            </a>
                        </li-->
                    </ul>
                    <!--ul class="refinement">
                        <li class="search">
                            <a href="#"></a>
                        </li>
                        <li class="timeline">
                            <a href="#"></a>
                        </li>
                        <li class="viewed">
                            <a href="#"></a>
                        </li>
                        <li class="clients">
                            <a href="#"></a>
                        </li>
                    </ul-->
                </div>
                <div id="slider-container">
                    <div class="scroller">
                        <ul class="mosaic-container container">

                            <li class="column col-style-2">
                                <!-- HALF-HEIGHT/DOUBLE-WIDTH TEXT(quote) w/ NO INFO -->
                                <div class="cell-d cell-box " data-row="1" data-col="1" data-sizex="2" data-sizey="1" id="0004">
                                        <div class="off-state">
                                            <h3>"Learn the rules like a pro, so you can break them like an artist." <em>-- Pablo Picasso</em></h3>
                                        </div>
                                    </div>

                                <!-- PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU -->
                                <div class="cell-a cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="1" data-sizey="2" data-client="123456" id="0001">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/10151869122070666.jpg"></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h3 class="title">EuroShop 2014, Düsseldorf</h3>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Remco Schoos</h5>
                                                    <h5 class="jobtitle">QRS Director<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>Quince Retail Solutions is currently attending ‘world’s leading retail trade fair’ EuroShop 2014, in Düsseldorf Germany. The guys are there to demonstrate how QRS digital in-store solutions can help boost retail business.</h5>
                                            </div>
                                            <a class="cta-text" target="_blank" href="https://www.facebook.com/photo.php?fbid=10151869122070666" >view &gt;&gt;</a>
                                            <div class="social"></div>
                                        </div>
                                    </div>
                                </div>


                                <!-- QUARTER-SIZED IMAGE w/ INFO -->
                                <div class="cell-b cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-row="1" data-col="1"  data-viewed="0000"  data-sizex="1" data-sizey="1" data-client="123456" id="0002">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/485896247268806842.jpg"></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h5 class="title">We are Quincers</h5>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Jeroen van der Horst</h5>
                                                    <h5 class="jobtitle">AV Director<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>These fruits are Quinces.</h5>
                                            </div>
                                            <a class="cta-text" target="_blank" href="http://www.pinterest.com/pin/485896247268806842" >read more &gt;&gt;</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU -->
                                <div class="cell-a cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="1" data-sizey="2" data-client="123456" id="0001">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/10151854263880666.jpg"></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h3 class="title">ABN Amro Word of Tennis Tournament</h3>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Sander Sneek</h5>
                                                    <h5 class="jobtitle">Creative Technologist<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>Today none other than tennis legend Richard Krajicek played the Quince powered WTT Game live at the ABN AMRO World Tennis Tournament. </h5>
                                            </div>
                                            <div class="social"></div>
                                            <a class="cta-text" target="_blank" href="https://www.facebook.com/photo.php?fbid=10151854263880666" >read more &gt;&gt;</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- COLORED QUARTER-SIZED TEXT w/ NO INFO -->
                                <div class="cell-e cell-box" data-action="people" data-sizex="1" data-sizey="1" id="0005">
                                    <div class="off-state">
                                        <h3>Get to know us<br>click here to meet our friendly staff</h3>
                                    </div>
                                </div>

                                <!-- EMPTY CELL FOR EMPTY SPACES. ALWAYS QUARTER-SIZED -->
                                <!--                                <div class="cell-i cell-box " data-size="1" id="0009"></div>-->

                                <!-- QUARTER-SIZED IMAGE w/ INFO -->
                                <div class="cell-b cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="1" data-sizey="1" data-client="123456" id="0002">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/485896247268806828.jpg"></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h5 class="title">Behind the Scenes</h5>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Jeroen van der Horst</h5>
                                                    <h5 class="jobtitle">AV Director<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>It is our responsibility to take care of our environment. There's no actual small figures cleaning the the mess we leave behind.</h5>
                                            </div>
                                            <a class="cta-text" target="_blank" href="http://www.pinterest.com/pin/10151669526830666" >read more &gt;&gt;</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- VIDEO THUMBS. ALWAYS QUARTER-SIZED -->
                                <div class="cell-j cell-box" data-portal="vim" data-ref="43682084" data-sizex="1" data-sizey="1" id="0009">
                                    <div class="off-state">
                                        <img class="playbut" src="img/playbut.png">
                                        <img class="thumb" src="img/cells/vimeo/img_vimeo_8_66076503.jpg">
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h5 class="title">Helden van Hi Casefilm</h5>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Jeroen van der Horst</h5>
                                                    <h5 class="jobtitle"><em>AV Director</em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5></h5>
                                            </div>
                                            <a class="cta-text" href="#" >view &gt;&gt;</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- QUARTER-SIZED CLIENT-LOGO w/ NO INFO -->
                                <div class="cell-c cell-box" data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-sizex="1" data-sizey="1" data-client="123456" id="0003">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/cell-c_235x134_Samsung.jpg"></a>
                                    </div>
                                </div>

                            </li>


                            <li class="column col-style-0">
                                <!-- EMPTY CELL FOR EMPTY SPACES. ALWAYS QUARTER-SIZED -->
                                <div class="cell-i cell-box " data-size="1" id="0009"></div>
                                <div class="cell-i cell-box " data-size="1" id="0009"></div>

                                <!-- PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU -->
                                <div class="cell-a cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="1" data-sizey="2" data-client="123456" id="0001">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/cell-a_235x272_FoxSport.jpg "></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h3 class="title">Fox Top Scorers</h3>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">David Peperkamp</h5>
                                                    <h5 class="jobtitle">Creative Director<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>Fox Sports required a multi-media campaign of print posters and website for their Top-Scorers program.</h5>
                                            </div>
                                            <div class="social"></div>
                                        </div>
                                    </div>
                                </div>

                                <!-- COLORED QUARTER-SIZED TEXT w/ NO INFO -->
                                <div class="cell-e cell-box" data-action="" data-sizex="1" data-sizey="1" id="0005">
                                    <div class="off-state">
                                        <h3>Real People<br>Real Passion<br>Real Action</h3>
                                    </div>
                                </div>

                                <!-- QUARTER-SIZED CLIENT-LOGO w/ NO INFO -->
                                <div class="cell-c cell-box" data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-sizex="1" data-sizey="1" data-client="123456" id="0003">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/cell-c_235x134_HollandCasino.png"></a>
                                    </div>
                                </div>

                                <!-- FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!  -->
                                <div class="cell-f cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="2" data-sizey="2" data-client="123456" id="0006">
                                    <div class="off-state flexslider">
                                        <!--div class="nameplate">
                                            <h5 class="title">Lorem Ipsum</h5>
                                            <h5>Lorem ispum dolor sit amet, consequtor aleph amet.</h5>
                                        </div-->
                                        <ul class="slides">
                                            <li><img src="img/cells/campaign_stacks/img_campstack_0013_samsung_display-1.jpg"></li>
                                            <li><img src="img/cells/campaign_stacks/img_campstack_0012_samsung_display-2.jpg"></li>
                                            <li><img src="img/cells/campaign_stacks/img_campstack_0011_samsung_display-3.jpg"></li>
                                            <li><img src="img/cells/campaign_stacks/img_campstack_0010_samsung_display-4.jpg"></li>
                                        </ul>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h3 class="title">Samsung "Shop in shop"</h3>
                                            <div class="article">
                                                <h5>Samsung sought to create a personalized "premium" brand experience with in their various third-party retail environments. We took care of the branding and executed an extensive photo-shoot to bring life into what can sometimes be a cold technical shopping experience.</h5>
                                            </div>
                                            <div class="social"></div>
                                        </div>
                                    </div>
                                </div>

                                <!-- QUARTER-SIZED IMAGE w/ INFO -->
                                <div class="cell-b cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-row="1" data-col="1"  data-viewed="0000"  data-sizex="1" data-sizey="1" data-client="123456" id="0002">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/10151411931875666.jpg"></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h5 class="title">Quince Football</h5>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Lisette Koot</h5>
                                                    <h5 class="jobtitle">Human Resources Director<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>Our team wins, no matter what the final score. <a href="#">&#35;Quince</a></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- VIDEO THUMBS. ALWAYS QUARTER-SIZED -->
                                <div class="cell-j cell-box" data-portal="vim" data-ref="38566969" data-sizex="1" data-sizey="1" id="0009">
                                    <div class="off-state">
                                        <img class="playbut" src="img/playbut.png">
                                        <img class="thumb" src="img/cells/vimeo/img_vimeo_1_38566969.jpg">
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Tjeerd van Hulst</h5>
                                                    <h5 class="jobtitle"><em>AV Designer</em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>Quince IDU has developed a holographic presentation showing the highlights of the new Samsung Solid State Drive 830 Series.</h5>
                                            </div>
                                            <a class="cta-text" href="#" >view &gt;&gt;</a>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li class="column col-style-1">
                                <!-- PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU -->
                                <div class="cell-a cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="1" data-sizey="2" data-client="123456" id="0001">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/cell-a_235x272_HC_Vakantie.jpg"></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h3 class="title">Holland Casino Vakantie</h3>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Coen Schaafma</h5>
                                                    <h5 class="jobtitle">Art Director<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>A fresh and bright visual alternative approach to, the more commonly mature and luxurious, casino aesthetic.</h5>
                                            </div>
                                            <div class="social"></div>
                                        </div>
                                    </div>
                                </div>

                                <!-- VIDEO THUMBS. ALWAYS QUARTER-SIZED -->
                                <div class="cell-j cell-box" data-portal="vim" data-ref="85926446" data-sizex="1" data-sizey="1" id="0009">
                                    <div class="off-state">
                                        <img class="playbut" src="img/playbut.png">
                                        <img class="thumb" src="img/cells/vimeo/img_vimeo_0_82293470.jpg">
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Joyce Groot</h5>
                                                    <h5 class="jobtitle"><em>Project Leader</em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>From all of us at Quince, we wish you happy holidays and all the best for 2014!</h5>
                                            </div>
                                            <a class="cta-text" href="#" >view &gt;&gt;</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- COLORED QUARTER-SIZED TEXT w/ NO INFO -->
                                <div class="cell-e cell-box" data-action="jobs" data-sizex="1" data-sizey="1" id="0005">
                                    <div class="off-state">
                                        <h3>Quince is hiring<br>Click here if you’re up for the challenge</h3>
                                    </div>
                                </div>

                                <!-- FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!  -->
                                <div class="cell-f cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="2" data-sizey="2" data-client="123456" id="0006">
                                    <div class="off-state flexslider">
<!--                                        <h1>Lorem<br>Ipsum</h1>-->
                                        <ul class="slides">
                                            <li><img src="img/cells/campaign_stacks/img_campstack_0027_mf_vip_2008_1.jpg"></li>
                                            <li><img src="img/cells/campaign_stacks/img_campstack_0026_mf_vip_2008_2.jpg"></li>
                                            <li><img src="img/cells/campaign_stacks/img_campstack_0025_mf_vip_2008_3.jpg"></li>
                                            <li><img src="img/cells/campaign_stacks/img_campstack_0024_mf_vip_2008_4.jpg"></li>
                                        </ul>
                                    </div>
                                </div>

                                <!-- QUARTER-SIZED IMAGE w/ INFO -->
                                <div class="cell-b cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="1" data-sizey="1" data-client="123456" id="0002">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/10151817863075666.jpg"></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h5 class="title">Jeffrey in Lingo</h5>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Jeffrey Kors</h5>
                                                    <h5 class="jobtitle">Office Services<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>Last night Jeffrey and his brother Mitchel took part in the Dutch tv game show Lingo. </h5>
                                            </div>
                                            <a class="cta-text" target="_blank" href="http://www.uitzendinggemist.nl/afleveringen/1391351" >read more &gt;&gt;</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- QUARTER-SIZED TEXT-BLOCK CELL w/ NO INFO & USER INFO IN OFF-STATE -->
                                <div class="cell-h cell-box"  data-sizex="1" data-sizey="1" id="0008">
                                    <div class="on-state">
                                        <div class="author" id="12345">
                                            <a href="#">
                                                <h5 class="name">Joyce Groot</h5>
                                                <h5 class="jobtitle">Project Leader<em></em></h5>
                                            </a>
                                        </div>
                                        <div class="article">
                                            <h5><p>Just when you thought the day could have used a bit more play next to all the work, the Quince band starts rehearsing...</p></h5>
                                        </div>
                                        <a class="cta-text" target="_blank" href="https://www.facebook.com/photo.php?fbid=10151731915295666" >read more &gt;&gt;</a>
                                    </div>
                                </div>

                            </li>

                            <li class="column col-style-2">
                                <!-- EMPTY CELL FOR EMPTY SPACES. ALWAYS QUARTER-SIZED -->
                                <div class="cell-i cell-box " data-size="1" id="0009"></div>
                                <div class="cell-i cell-box " data-size="1" id="0009"></div>

                                <!-- PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU -->
                                <div class="cell-a cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="1" data-sizey="2" data-client="123456" id="0001">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/10151562998425666.jpg"></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
<!--                                            <h3 class="title">Lorem Ipsum Dolor Sit Amet</h3>-->
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Ben De Dood</h5>
                                                    <h5 class="jobtitle">Creative Copywriter<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>There are lots and lots of things you can design with 3D design software. But one thing that’s just not possible on screen is getting a feel for the actual product...</h5>
                                            </div>
                                            <a class="cta-text" target="_blank" href="https://www.facebook.com/photo.php?fbid=10151562998425666" >view &gt;&gt;</a>
                                            <div class="social"></div>
                                        </div>
                                    </div>
                                </div>

                                <!-- VIDEO THUMBS. ALWAYS QUARTER-SIZED -->
                                <div class="cell-j cell-box" data-portal="vim" data-ref="39403822" data-sizex="1" data-sizey="1" id="0009">
                                    <div class="off-state">
                                        <img class="playbut" src="img/playbut.png">
                                        <img class="thumb" src="img/cells/vimeo/img_vimeo_2_39403822.jpg">
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h3 class="title">Dreamoc content creation for HTC</h3>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Jeroen van der Horst</h5>
                                                    <h5 class="jobtitle"><em>AV Director</em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>Quince Interactive Display Units created a holographic Dreamoc presentation of the HTC Desire HD.</h5>
                                            </div>
                                            <a class="cta-text" href="#" >view &gt;&gt;</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU -->
                                <div class="cell-a cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="1" data-sizey="2" data-client="123456" id="0001">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/cell-a_235x272_Samsung_Convergence.jpg"></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h3 class="title">Samsung 'Convergence'</h3>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Djamel de Ligt</h5>
                                                    <h5 class="jobtitle">Art Director<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>Samsung's retail needs a look that showcases the interoperability of its many products in your home.  This is our proposed new look.</h5>
                                            </div>
                                            <div class="social"></div>
                                        </div>
                                    </div>
                                </div>

                                <!-- COLORED QUARTER-SIZED TEXT w/ NO INFO -->
                                <div class="cell-e cell-box" data-action="about" data-sizex="1" data-sizey="1" id="0005">
                                    <div class="off-state">
                                        <h3>Who we are<br>click here to find out</h3>
                                    </div>
                                </div>

                                <!-- EMPTY CELL FOR EMPTY SPACES. ALWAYS QUARTER-SIZED -->
                                <!--                                <div class="cell-i cell-box " data-size="1" id="0009"></div>-->

                                <!-- QUARTER-SIZED IMAGE w/ INFO -->
                                <div class="cell-b cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="1" data-sizey="1" data-client="123456" id="0002">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/10151669526830666.jpg"></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h5 class="title">Welcome Jan</h5>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Lisette Koot</h5>
                                                    <h5 class="jobtitle">Human Resources Manager<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>A new colleague has started at Quince Amsterdam. His name is Jan and he will be working as a software engineer. </h5>
                                            </div>
                                            <a class="cta-text" target="_blank" href="https://www.facebook.com/photo.php?fbid=10151669526830666" >read more &gt;&gt;</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- VIDEO THUMBS. ALWAYS QUARTER-SIZED -->
                                <div class="cell-j cell-box" data-portal="vim" data-ref="43682084" data-sizex="1" data-sizey="1" id="0009">
                                    <div class="off-state">
                                        <img class="playbut" src="img/playbut.png">
                                        <img class="thumb" src="img/cells/vimeo/img_vimeo_5_43682084.jpg">
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Jeroen van der Horst</h5>
                                                    <h5 class="jobtitle"><em>AV Director</em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5></h5>
                                            </div>
                                            <a class="cta-text" href="#" >view &gt;&gt;</a>
                                        </div>
                                    </div>
                                </div>

                            </li>



                            <li class="column col-style-0">
                                <!-- LONG-IMAGE w/ NO INFO -->
                                <div class="cell-g cell-box"  data-sizex="2" data-sizey="1" id="0007">
                                    <div class="off-state">
                                        <img src="img/cells/cell_g_1.jpg">
                                    </div>
                                </div>

                                <!-- PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU -->
                                <div class="cell-a cell-box " data-portal="fb" data-value="10151480910580666" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="1" data-sizey="2" data-client="123456" id="0001">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/10151480910580666.jpg"></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h3 class="title">Supersoaker battle</h3>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Jeroen van der Horst</h5>
                                                    <h5 class="jobtitle">AV Director<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>Friday afternoon, sun, drinks and super soakers. What's not to like? Enjoy the summer weekend everyone! <a href="#">&#35;Quince</a></h5>
                                            </div>
                                            <a class="cta-text" target="_blank" href="https://www.facebook.com/photo.php?fbid=10151480910580666" >read more &gt;&gt;</a>
                                            <div class="social"></div>
                                        </div>
                                    </div>
                                </div>

                                <!-- COLORED QUARTER-SIZED TEXT w/ NO INFO -->
                                <div class="cell-e cell-box" action="about" data-sizex="1" data-sizey="1" id="0005">
                                    <div class="off-state">
                                        <h3>A team photo has many portraits, but only one story.</h3>
                                    </div>
                                </div>

                                <!-- QUARTER-SIZED CLIENT-LOGO w/ NO INFO -->
                                <div class="cell-c cell-box" data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-sizex="1" data-sizey="1" data-client="123456" id="0003">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/cell-c_235x134_FOXsports.jpg"></a>
                                    </div>
                                </div>

                                <!-- FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!  -->
                                <div class="cell-f cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="2" data-sizey="2" data-client="123456" id="0006">
                                    <div class="off-state flexslider">
                                        <!--                                        <h1>Lorem<br>Ipsum</h1>-->
                                        <ul class="slides">
                                            <li><img src="img/cells/campaign_stacks/img_campstack_4_itre-1.jpg"></li>
                                            <li><img src="img/cells/campaign_stacks/img_campstack_3_itre-2.jpg"></li>
                                            <li><img src="img/cells/campaign_stacks/img_campstack_2_itre-3.jpg"></li>
                                            <li><img src="img/cells/campaign_stacks/img_campstack_1_itre-4.jpg"></li>
                                            <li><img src="img/cells/campaign_stacks/img_campstack_0_itre-5.jpg"></li>
                                        </ul>
                                    </div>
                                </div>

                                <!-- QUARTER-SIZED IMAGE w/ INFO -->
                                <div class="cell-b cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-row="1" data-col="1"  data-viewed="0000"  data-sizex="1" data-sizey="1" data-client="123456" id="0002">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/10151731915295666.jpg"></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h5 class="title">The Quince band</h5>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Joyce Groot</h5>
                                                    <h5 class="jobtitle">Project Leader<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>Just when you thought the day could have used a bit more play next to all the work, the Quince band starts rehearsing...</a></h5>
                                            </div>
                                            <a class="cta-text" target="_blank" href="https://www.facebook.com/photo.php?fbid=10151731915295666" >read more &gt;&gt;</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- VIDEO THUMBS. ALWAYS QUARTER-SIZED -->
                                <div class="cell-j cell-box" data-portal="vim" data-ref="75781009" data-sizex="1" data-sizey="1" id="0009">
                                    <div class="off-state">
                                        <img class="playbut" src="img/playbut.png">
                                        <img class="thumb" src="img/cells/vimeo/img_vimeo_12_75781009.jpg">
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Joyce Groot</h5>
                                                    <h5 class="jobtitle"><em>Project Leader</em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>Quince Interactive Retail Solutions has developed an interactive photo booth that has been in demand ever since its first release... </h5>
                                            </div>
                                            <a class="cta-text" href="#" >view &gt;&gt;</a>
                                        </div>
                                    </div>
                                </div>

                            </li>

                            <li class="column col-style-1">
                                <!-- PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU -->
                                <div class="cell-a cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="1" data-sizey="2" data-client="123456" id="0001">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/10151810418470666.jpg"></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h3 class="title">Fred &amp; Daniel working the grill!</h3>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Joyce Groot</h5>
                                                    <h5 class="jobtitle">Project Leader<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>Today we were treated to delicious, yummy, good old fashioned hamburgers with everything on it for lunch. Kudos to chefs, Daniel and Frederik, for this very tasty initiative!</h5>
                                            </div>
                                            <a class="cta-text" target="_blank" href="https://www.facebook.com/photo.php?fbid=10151810418470666" >view &gt;&gt;</a>
                                            <!--div class="social"></div-->
                                        </div>
                                    </div>
                                </div>

                                <!-- EMPTY CELL FOR EMPTY SPACES. ALWAYS QUARTER-SIZED -->
                                <!--                                <div class="cell-i cell-box " data-size="1" id="0009"></div>-->

                                <!-- VIDEO THUMBS. ALWAYS QUARTER-SIZED -->
                                <div class="cell-j cell-box" data-portal="vim" data-ref="77117922" data-sizex="1" data-sizey="1" id="0009">
                                    <div class="off-state">
                                        <img class="playbut" src="img/playbut.png">
                                        <img class="thumb" src="img/cells/vimeo/img_vimeo_13_77117922.jpg">
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Sander Sneek</h5>
                                                    <h5 class="jobtitle"><em>Creative Technologist</em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5></h5>
                                            </div>
                                            <!--a class="cta-text" target="_blank" href="https://www.facebook.com/photo.php?fbid=" >view &gt;&gt;</a-->
                                            <a class="cta-text" href="#" >view &gt;&gt;</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- COLORED QUARTER-SIZED TEXT w/ NO INFO -->
                                <div class="cell-e cell-box" data-action="jobs" data-sizex="1" data-sizey="1" id="0005">
                                    <div class="off-state">
                                        <h3>Quince is hiring.<br>Click here if you’re up for the challenge.</h3>
                                    </div>
                                </div>

                                <!-- FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!  -->
                                <div class="cell-f cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="2" data-sizey="2" data-client="123456" id="0006">
                                    <div class="off-state flexslider">
                                        <!--                                        <h1>Lorem<br>Ipsum</h1>-->
                                        <ul class="slides">
                                            <li><img src="img/cells/campaign_stacks/img_campstack_0033_samsung_galaxy_1.jpg"></li>
                                            <li><img src="img/cells/campaign_stacks/img_campstack_0032_samsung_galaxy_2.jpg"></li>
                                            <li><img src="img/cells/campaign_stacks/img_campstack_0031_samsung_galaxy_3.jpg"></li>
                                            <li><img src="img/cells/campaign_stacks/img_campstack_0028_samsung_galaxy_6.jpg"></li>
                                        </ul>
                                    </div>
                                </div>

                                <!-- EMPTY CELL FOR EMPTY SPACES. ALWAYS QUARTER-SIZED -->
                                <!--                                <div class="cell-i cell-box " data-size="1" id="0009"></div>-->

                                <!-- QUARTER-SIZED IMAGE w/ INFO -->
                                <div class="cell-b cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="1" data-sizey="1" data-client="123456" id="0002">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/10151694285220666.jpg"></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h5 class="title">Love - take what you need</h5>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Miranda Kasius</h5>
                                                    <h5 class="jobtitle">Project Manager<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>Somebody got creative and happily shared the result with her colleagues...</h5>
                                            </div>
                                            <a class="cta-text" target="_blank" href="https://www.facebook.com/photo.php?fbid=10151694285220666" >read more &gt;&gt;</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- LONG-IMAGE w/ NO INFO -->
                                <div class="cell-g cell-box"  data-sizex="2" data-sizey="1" id="0007">
                                    <div class="off-state">
                                        <img src="img/cells/cell_g_2.jpg">
                                    </div>
                                </div>

                            </li>

                            <li class="column col-style-2">
                                <!-- EMPTY CELL FOR EMPTY SPACES. ALWAYS QUARTER-SIZED -->
                                <div class="cell-i cell-box " data-size="1" id="0009"></div>
                                <div class="cell-i cell-box " data-size="1" id="0009"></div>

                                <!-- PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU -->
                                <div class="cell-a cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="1" data-sizey="2" data-client="123456" id="0001">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/10151553932155666.jpg"></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h3 class="title">Gamer's Delight</h3>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Djamel de Ligt</h5>
                                                    <h5 class="jobtitle">Art Director<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>Having some good old virtual Friday afternoon fun with the new Oculus Rift virtual reality headset. We cant wait to get our hands into the SDK and make this thing do magic!</h5>
                                            </div>
                                            <a class="cta-text" target="_blank" href="https://www.facebook.com/photo.php?fbid=10151553932155666" >view &gt;&gt;</a>
                                            <div class="social"></div>
                                        </div>
                                    </div>
                                </div>

                                <!-- VIDEO THUMBS. ALWAYS QUARTER-SIZED -->
                                <div class="cell-j cell-box" data-portal="vim" data-ref="60837705" data-sizex="1" data-sizey="1" id="0009">
                                    <div class="off-state">
                                        <img class="playbut" src="img/playbut.png">
                                        <img class="thumb" src="img/cells/vimeo/img_vimeo_7_60837705.jpg">
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h3 class="title">Holland Casino Interactive Projection Mapping</h3>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Jeroen van der Horst</h5>
                                                    <h5 class="jobtitle"><em>AV Director</em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5></h5>
                                            </div>
                                            <a class="cta-text" href="#" >view &gt;&gt;</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU -->
                                <div class="cell-a cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="1" data-sizey="2" data-client="123456" id="0001">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/10151552064070666.jpg"></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h3 class="title">Lunch time!</h3>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Joyce Groot</h5>
                                                    <h5 class="jobtitle">Project Leader<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>What’s cooking at Quince today? Thanks to Jamel we’re having shawarma for lunch!</h5>
                                            </div>
                                            <a class="cta-text" target="_blank" href="https://www.facebook.com/photo.php?fbid=10151552064070666" >view &gt;&gt;</a>
                                            <div class="social"></div>
                                        </div>
                                    </div>
                                </div>

                                <!-- COLORED QUARTER-SIZED TEXT w/ NO INFO -->
                                <div class="cell-e cell-box" data-action="" data-sizex="1" data-sizey="1" id="0005">
                                    <div class="off-state">
                                        <h3>Real People,<br>Real Passion,<br>Real Action!</h3>
                                    </div>
                                </div>

                                <!-- EMPTY CELL FOR EMPTY SPACES. ALWAYS QUARTER-SIZED -->
                                <!--                                <div class="cell-i cell-box " data-size="1" id="0009"></div>-->

                                <!-- QUARTER-SIZED IMAGE w/ INFO -->
                                <div class="cell-b cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="1" data-sizey="1" data-client="123456" id="0002">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/10151558387050666.jpg"></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h5 class="title">Hearing Voices</h5>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Jeroen van der Horst</h5>
                                                    <h5 class="jobtitle">AV Director<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>Recording a voice-over for another great Quince video production. It looks like this!</h5>
                                            </div>
                                            <a class="cta-text" target="_blank" href="https://www.facebook.com/photo.php?fbid=10151558387050666" >read more &gt;&gt;</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- VIDEO THUMBS. ALWAYS QUARTER-SIZED -->
                                <div class="cell-j cell-box" data-portal="vim" data-ref="45238850" data-sizex="1" data-sizey="1" id="0009">
                                    <div class="off-state">
                                        <img class="playbut" src="img/playbut.png">
                                        <img class="thumb" src="img/cells/vimeo/img_vimeo_6_45238850.jpg">
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Ryan van Esch</h5>
                                                    <h5 class="jobtitle"><em>Project Manager</em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>All Samsung divisions were present at this business-to-business event, showing the latest smart solutions that make life more enjoyable. </h5>
                                            </div>
                                            <a class="cta-text" href="#" >view &gt;&gt;</a>
                                        </div>
                                    </div>
                                </div>

                            </li>



                            <li class="column col-style-0">
                                <!-- HALF-HEIGHT/DOUBLE-WIDTH TEXT(Quotes) w/ NO INFO -->
                                <div class="cell-d cell-box" data-size="2" id="0004">
                                    <div class="off-state">
                                        <h3>"You can’t wait for inspiration, you have to go after it with a club" <em>-- Jack London</em></h3>
                                    </div>
                                </div>

                                <!-- PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU -->
                                <div class="cell-a cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="1" data-sizey="2" data-client="123456" id="0001">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/10151718746400666.jpg"></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h3 class="title">Quince rebranding</h3>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Guido Porten</h5>
                                                    <h5 class="jobtitle">Creative Director<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5></h5>
                                            </div>
                                            <a class="cta-text" target="_blank" href="https://www.facebook.com/photo.php?fbid=10151718746400666" >read more &gt;&gt;</a>
                                            <!--div class="social"></div-->
                                        </div>
                                    </div>
                                </div>

                                <!-- QUARTER-SIZED IMAGE w/ INFO -->
                                <div class="cell-b cell-box" data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000"  data-sizex="1" data-sizey="1" data-client="123456" id="0002">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/10151681522185666.jpg"></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h5 class="title">Welcome Gian-Luca</h5>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Lisette Koot</h5>
                                                    <h5 class="jobtitle">Human Resources Director<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>He’s been working at Quince for over a month now and for some unknown reason...</h5>
                                            </div>
                                            <a class="cta-text" target="_blank" href="https://www.facebook.com/photo.php?fbid=10151681522185666" >read more &gt;&gt;</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- QUARTER-SIZED CLIENT-LOGO w/ NO INFO -->
                                <div class="cell-c cell-box" data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-sizex="1" data-sizey="1" data-client="123456" id="0003">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/cell-c_235x134_KPN.jpg"></a>
                                    </div>
                                </div>

                                <!-- FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!  -->
                                <div class="cell-f cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="2" data-sizey="2" data-client="123456" id="0006">
                                    <div class="off-state flexslider">
                                        <!--                                        <h1>Lorem<br>Ipsum</h1>-->
                                        <ul class="slides">
                                            <li><img src="img/cells/campaign_stacks/img_campstack_9_kenniswijzer_nl_schoon01.jpg"></li>
                                            <li><img src="img/cells/campaign_stacks/img_campstack_8_kenniswijzer_nl_schoon02.jpg"></li>
                                            <li><img src="img/cells/campaign_stacks/img_campstack_7_kenniswijzer_nl_schoon03.jpg"></li>
                                            <li><img src="img/cells/campaign_stacks/img_campstack_6_kenniswijzer_nl_schoon04.jpg"></li>
                                            <li><img src="img/cells/campaign_stacks/img_campstack_5_kenniswijzer_nl_schoon05.jpg"></li>
                                        </ul>
                                    </div>
                                </div>

                                <!-- QUARTER-SIZED IMAGE w/ INFO -->
                                <div class="cell-b cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-row="1" data-col="1"  data-viewed="0000"  data-sizex="1" data-sizey="1" data-client="123456" id="0002">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/10151669657185666.jpg"></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h5 class="title">Quince Halloween 2013</h5>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Jeffrey Schulz</h5>
                                                    <h5 class="jobtitle">Traffic Services Manager<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>One hellish party of the damned.</h5>
                                            </div>
                                            <a class="cta-text" target="_blank" href="https://www.facebook.com/photo.php?fbid=10151669657185666" >read more &gt;&gt;</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- VIDEO THUMBS. ALWAYS QUARTER-SIZED -->
                                <div class="cell-j cell-box" data-portal="vim" data-ref="66137688" data-sizex="1" data-sizey="1" id="0009">
                                    <div class="off-state">
                                        <img class="playbut" src="img/playbut.png">
                                        <img class="thumb" src="img/cells/vimeo/img_vimeo_11_66137688.jpg">
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Remco Schoos</h5>
                                                    <h5 class="jobtitle"><em>Director, QRS</em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5></h5>
                                            </div>
                                            <a class="cta-text" href="#" >view &gt;&gt;</a>
                                        </div>
                                    </div>
                                </div>

                            </li>

                            <li class="column col-style-1">
                                <!-- PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU -->
                                <div class="cell-a cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="1" data-sizey="2" data-client="123456" id="0001">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/10151647722395666.jpg"></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h3 class="title">Bake Quince!</h3>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Theo Popadopoulos</h5>
                                                    <h5 class="jobtitle">Senior Developer<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>Baked Quince, it looks like this. Kudos to Theo for this very special treat! <a href="#">&#35;Quince</a></h5>
                                            </div>
                                            <a class="cta-text" target="_blank" href="https://www.facebook.com/photo.php?fbid=10151647722395666" >view &gt;&gt;</a>
                                            <div class="social"></div>
                                        </div>
                                    </div>
                                </div>

                                <!-- EMPTY CELL FOR EMPTY SPACES. ALWAYS QUARTER-SIZED -->
                                <!--                                <div class="cell-i cell-box " data-size="1" id="0009"></div>-->

                                <!-- VIDEO THUMBS. ALWAYS QUARTER-SIZED -->
                                <div class="cell-j cell-box" data-portal="vim" data-ref="66137605" data-sizex="1" data-sizey="1" id="0009">
                                    <div class="off-state">
                                        <img class="playbut" src="img/playbut.png">
                                        <img class="thumb" src="img/cells/vimeo/img_vimeo_9_66137605.jpg">
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Sander Sneek</h5>
                                                    <h5 class="jobtitle"><em>Creative Technologist</em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>HiJack and making of Hi Commercial</h5>
                                            </div>
                                            <a class="cta-text" href="#" >view &gt;&gt;</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- COLORED QUARTER-SIZED TEXT w/ NO INFO -->
                                <div class="cell-e cell-box" data-action="contact" data-sizex="1" data-sizey="1" id="0005">
                                    <div class="off-state">
                                        <h3>Space to think.<br>click here to find our locations.</h3>
                                    </div>
                                </div>

                                <!-- FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!  -->
                                <div class="cell-f cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="2" data-sizey="2" data-client="123456" id="0006">
                                    <div class="off-state flexslider">
                                        <!--                                        <h1>Lorem<br>Ipsum</h1>-->
                                        <ul class="slides">
                                            <li><img src="img/cells/campaign_stacks/img_campstack_0023_mf_vip_2008_5.jpg"></li>
                                            <li><img src="img/cells/campaign_stacks/img_campstack_0022_mf_vip_2008_6.jpg"></li>
                                            <li><img src="img/cells/campaign_stacks/img_campstack_0021_mf_vip_2008_7.jpg"></li>
                                            <li><img src="img/cells/campaign_stacks/img_campstack_0020_mf_vip_2008_8.jpg"></li>
                                            <li><img src="img/cells/campaign_stacks/img_campstack_0019_mf_vip_2008_9.jpg"></li>
                                        </ul>
                                    </div>
                                </div>

                                <!-- EMPTY CELL FOR EMPTY SPACES. ALWAYS QUARTER-SIZED -->
                                <!--                                <div class="cell-i cell-box " data-size="1" id="0009"></div>-->

                                <!-- QUARTER-SIZED IMAGE w/ INFO -->
                                <div class="cell-b cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="1" data-sizey="1" data-client="123456" id="0002">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/10151681614700666.jpg"></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h5 class="title">Welcome Carla</h5>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Lisette Koot</h5>
                                                    <h5 class="jobtitle">Human Resource Manager<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>She’s doing an internship at Quince, helping out the development team as a part of her study in web development. </h5>
                                            </div>
                                            <a class="cta-text" target="_blank" href="https://www.facebook.com/photo.php?fbid=10151681614700666" >read more &gt;&gt;</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- QUARTER-SIZED TEXT-BLOCK CELL w/ NO INFO & USER INFO IN OFF-STATE -->
                                <div class="cell-h cell-box"  data-sizex="1" data-sizey="1" id="0008">
                                    <div class="on-state">
                                        <div class="author" id="12345">
                                            <a href="#">
                                                <h5 class="name">Sander Sneek</h5>
                                                <h5 class="jobtitle">Creative Technologist<em></em></h5>
                                            </a>
                                        </div>
                                        <div class="article">
                                            <h5><p>Having some good old virtual Friday afternoon fun with the Oculus Rift virtual reality headset. Enjoy the weekend everyone!</p></h5>
                                        </div>
                                        <a class="cta-text" target="_blank" href="https://www.facebook.com/photo.php?fbid=10151553932155666" >read more &gt;&gt;</a>
                                    </div>
                                </div>
                            </li>

                            <li class="column col-style-2">
                                <!-- EMPTY CELL FOR EMPTY SPACES. ALWAYS QUARTER-SIZED -->
                                <div class="cell-i cell-box " data-size="1" id="0009"></div>
                                <div class="cell-i cell-box " data-size="1" id="0009"></div>

                                <!-- PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU -->
                                <div class="cell-a cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="1" data-sizey="2" data-client="123456" id="0001">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/10151493244935666.jpg"></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Joyce Groot</h5>
                                                    <h5 class="jobtitle">Project Leader<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>What’s wrong with this Friday afternoon picture? Absolutely nothing. The good old yellow notes sessions are still an important part of the creative process. </h5>
                                            </div>
                                            <a class="cta-text" target="_blank" href="https://www.facebook.com/photo.php?fbid=10151493244935666" >view &gt;&gt;</a>
                                            <div class="social"></div>
                                        </div>
                                    </div>
                                </div>

                                <!-- VIDEO THUMBS. ALWAYS QUARTER-SIZED -->
                                <div class="cell-j cell-box" data-portal="vim" data-ref="43094863" data-sizex="1" data-sizey="1" id="0009">
                                    <div class="off-state">
                                        <img class="playbut" src="img/playbut.png">
                                        <img class="thumb" src="img/cells/vimeo/img_vimeo_4_43094863.jpg">
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h3 class="title">Live Device Tables At KPN</h3>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Martijn Bon</h5>
                                                    <h5 class="jobtitle"><em>Creative Director</em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>How to get the most out of self service on the shop floor. With Live Device Tables powered by Quince Interactive Display Units.</h5>
                                            </div>
                                            <a class="cta-text" href="#" >view &gt;&gt;</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU -->
                                <div class="cell-a cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="1" data-sizey="2" data-client="123456" id="0001">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/10151396704885666.jpg"></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <h3 class="title">Friday Afternoon Social!</h3>
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Joyce Groot</h5>
                                                    <h5 class="jobtitle">Project Leader<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>Friday afternoon, sun, drinks and super soakers. What's not to like? Enjoy the summer weekend everyone!</h5>
                                            </div>
                                            <a class="cta-text" target="_blank" href="https://www.facebook.com/photo.php?fbid=10151396704885666" >view &gt;&gt;</a>
                                            <div class="social"></div>
                                        </div>
                                    </div>
                                </div>

                                <!-- COLORED QUARTER-SIZED TEXT w/ NO INFO -->
                                <div class="cell-e cell-box" data-action="" data-sizex="1" data-sizey="1" id="0005">
                                    <div class="off-state">
                                        <h3>Real People,<br>Real Passion,<br>Real Action!</h3>
                                    </div>
                                </div>

                                <!-- QUARTER-SIZED IMAGE w/ INFO -->
                                <div class="cell-b cell-box " data-portal="fb" data-value="CMS_ID_HERE" data-date="00000" data-viewed="0000" data-row="1" data-col="1"  data-sizex="1" data-sizey="1" data-client="123456" id="0002">
                                    <div class="off-state">
                                        <a href="#"><img src="img/cells/10151527655645666.jpg"></a>
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h5 class="name">Joyce Groot</h5>
                                                    <h5 class="jobtitle">Project Leader<em></em></h5>
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>We knew there was something missing at our coffee break this morning, but we didn’t have a clue what exactly. Gladly our birthday boy Julian did</h5>
                                            </div>
                                            <a class="cta-text" target="_blank" href="https://www.facebook.com/photo.php?fbid=10151527655645666" >view &gt;&gt;</a>
                                            <div class="social"></div>
                                        </div>
                                    </div>
                                </div>

                                <!-- VIDEO THUMBS. ALWAYS QUARTER-SIZED -->
                                <div class="cell-j cell-box" data-portal="vim" data-ref="41848307" data-sizex="1" data-sizey="1" id="0009">
                                    <div class="off-state">
                                        <img class="playbut" src="img/playbut.png">
                                        <img class="thumb" src="img/cells/vimeo/img_vimeo_3_41848307.jpg">
                                    </div>
                                    <div class="on-state">
                                        <div class="content">
                                            <div class="author" id="12345">
                                                <a href="#">
                                                    <h3 class="title">Samsung Smart Portal</h3>
<!--                                                    <h5 class="name">Bart Van Asperen</h5>-->
<!--                                                    <h5 class="jobtitle"><em>Art Director</em></h5>-->
                                                </a>
                                            </div>
                                            <div class="article">
                                                <h5>An impression of a stylish touch screen application for in-store use, developed by Quince Amsterdam...</h5>
                                            </div>
                                            <a class="cta-text" href="#" >view &gt;&gt;</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <div class="footer hidden-xs">
                <h6>Copyright 2014 All Rights Reserved</h6>
            </div>
        </div>

        <div class="sub-close-cta">
            <a href="#"><em class="icon"></em><h4>collapse / close</h4></a>
        </div>

        <div class="contact-content container subcontent">
            <div class="content">
                <h1>Contact Information</h1>
                <ul>
                    <li class="contact-section" id="contact-amsterdam">
                        <h3>Quince Amsterdam B.V.</h3>
                        <a class="address" target="_blank" href="https://maps.google.nl/maps?q=Assumburg+73+1081+GB+Amsterdam+the+Netherlands&daddr=Assumburg+73,+1081+GB+Amsterdam&hnear=0x47c60a0b845ef23b:0x79090fe2330b7586,Assumburg+73,+1081+GB+Amsterdam&gl=nl&t=h&z=16">
                            <h5>Assumburg 73</h5>
                            <h5>1081 GB Amsterdam</h5>
                            <h5>the Netherlands</h5><img src="img/googlemaps_pin.png">

                        </a>
                        <a href="tel:0031203471000"><h5>T +31 (0)20 347 1000</h5></a>
                        <a href="tel:0031203471005"><h5>F +31 (0)20 347 1005</h5></a>
                        <a href="mailto:info@quince.nl"><h5>info@quince.nl</h5></a>

                        <div class="legal-info">
                            <h6>Chamber of commerce: 30180491</h6>
                            <h6>VAT number: 810801152.B.01</h6>
                            <h6>IBAN: NL15DEUT0319822893 </h6>
                            <h6>Swift: DEUTNL2N</h6>
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
                        </div>
                    </li>

                    <!--<div class="contact-section" id="contact-athens">-->
                    <!--<h3>Quince Greece</h3>-->
                    <!--<span>XXX</span><br />-->
                    <!--<span>XXX</span><br />-->
                    <!--<span>Greece</span><br />-->
                    <!--<a href="tel:+3618149694">T XXX</a>-->
                    <!--<br />-->

                    <!--<div class="legal-info">-->
                    <!--<span>Chamber of commerce: </span><br />-->
                    <!--<span>VAT number: </span><br />-->
                    <!--<span>Bank account: </span><br />-->
                    <!--<span>IBAN: </span><br />-->
                    <!--<span>Swift: </span><br />-->
                    <!--</div>-->
                    <!--</div>-->
                    <div class="clear"></div>
                </ul>
            </div>
        </div>

        <div class="jobs-content container subcontent">
            <div class="content">
                <h1>Jobs and Opportunities</h1>
                <ul>
                    <li class="contact-section">
                        <a class="job" target="_blank" href="assets/pdf/quince_java_dev.pdf"><h3>All-around Java/Grails/Android Developer</h3></a>
                        <h4>As an All-around Java/Grails/Android developer you will work on innovative e-learning solutions. Our platform, used by a number-one, leading telecom and consumer electronics brands, is actively being used by more than 100.000 users worldwide to keep their knowledge up-to-date. </h4>
                        <h5>Send your motivation and portfolio to <a href="mailto:jobs@quince.nl">jobs@quince.nl</a></h5>
                        <h5><a target="_blank" href="assets/pdf/Quince_Terms_and_Conditions.pdf">Terms and Conditions</a></h5>
                    </li>
                    <li class="contact-section">
                        <a class="job" target="_blank" href="assets/pdf/quince_fed.pdf"><h3>Front-end Developer</h3></a>
                        <h4>As a Front-end Developer you will work in the new department Retail Solutions, where touchscreen applications and interactive displays are designed and developed, controlled by an intelligent CMS. What you develop is often rolled-out worldwide, becoming tangible in shops and trade fairs.</h4>
                        <h5>Send your motivation and portfolio to <a href="mailto:jobs@quince.nl">jobs@quince.nl</a></h5>
                        <h5><a target="_blank" href="assets/pdf/Quince_Terms_and_Conditions.pdf">Terms and Conditions</a></h5>
                    </li>
                    <div class="clear"></div>
                </ul>
            </div>
        </div>

        <div class="about-content container subcontent">
            <div class="content">
                <h1>About Quince</h1>
                <ul>
                    <li class="about-section">
                        <h4>
                            <p>Quince is a one-stop digital and retail activation agency and was founded in 1996. We take care of strategy, branding, print, interactive, production and software for major international brands from the Telecom, IT and Consumer Electronics industry. </p>
                            <p>We are a unique, people-oriented company, which is reflected in loyal clients and a low staff turnover. Passion in your work, challenging yourself, taking responsibility, respect, having fun and exceeding expectations are core values.</p>
                            <p>Quince continuously invests in personal growth and in the latest technologies. More than 75 employees of various nationalities work at the headquarters in Amsterdam and at the Budapest office.</p>
                            <p>Our specialties: Strategy, Concepting, Digital Media, Events, Print Media, Marcom Software Development, Digital Training, Interactive Displays</p>
                        </h4>
                    </li>
                </ul>
            </div>
        </div>

        <div class="people-content container subcontent">
            <iframe src="people.php" class="content"></iframe>
        </div>



        <!-- ==================================TEMPLATES======================================== -->
        <!-- PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU -->
        <script type="text/template" id="tpl-cell-a">
            <div class="cell-a cell-box" data-portal="<%= Portal %>" data-ref="<%= Ref %>" data-date="<%= Date %>" data-viewed="<%= Viewed %>"  data-sizex="<%= SizeX %>" data-sizey="<%= SizeY %>" data-client="<%= Client %>" id="<%= Id %>">
                <div class="off-state">
                    <a href="#"><img src="<%= Image %>"></a>
                </div>
                <div class="on-state">
                    <div class="content">
                        <h3 class="title"><%= Title %></h3>
                        <div class="author" id="<%= AuthorId %>">
                            <a href="#">
                                <h5 class="name"><%= Author %></h5>
                                <h5 class="jobtitle"><%= JobTitle %><em></em></h5>
                            </a>
                        </div>
                        <div class="article">
                            <h5><%= Article %></h5>
                        </div>
                        <a class="cta-text" href="<%= URL %>" >read more &gt;&gt;</a>
                        <div class="social"></div>
                    </div>
                </div>
            </div>
        </script>

        <!-- QUARTER-SIZED IMAGE w/ INFO -->
        <script type="text/template" id="tpl-cell-b">
            <div class="cell-b cell-box" data-portal="<%= Portal %>" data-ref="<%= Ref %>" data-date="<%= Date %>" data-viewed="<%= Viewed %>"  data-sizex="<%= SizeX %>" data-sizey="<%= SizeY %>" data-client="<%= Client %>" id="<%= Id %>">
                <div class="off-state">
                    <a href="#"><img src="<%= Image %>"></a>
                </div>
                <div class="on-state">
                    <div class="content">
                        <h3 class="title"><%= Title %></h3>
                        <div class="author" id="<%= AuthorId %>">
                            <a href="#">
                                <h5 class="name"><%= Author %></h5>
                                <h5 class="jobtitle"><%= JobTitle %><em></em></h5>
                            </a>
                        </div>
                        <div class="article">
                            <h5><%= Article %></h5>
                        </div>
                        <a class="cta-text" href="<%= URL %>" >read more &gt;&gt;</a>
                        <div class="social"></div>
                    </div>
                </div>
            </div>
        </script>

        <!-- QUARTER-SIZED CLIENT-LOGO w/ NO INFO -->
        <script type="text/template" id="tpl-cell-c">
            <div class="cell-c cell-box" data-portal="<%= Portal %>" data-ref="<%= Ref %>" data-date="<%= Date %>" data-viewed="<%= Viewed %>" data-sizex="<%= SizeX %>" data-sizey="<%= SizeY %>" data-client="<%= Client %>" id="<%= Id %>">
                <div class="off-state">
                    <a href="#"><img src="<%= Image %>"></a>
                </div>
            </div>
        </script>

        <!-- HALF-HEIGHT/DOUBLE-WIDTH TEXT(Quotes) w/ NO INFO -->
        <script type="text/template" id="tpl-cell-d">
            <div class="cell-d cell-box"  data-sizex="1" data-sizey="1" id="<%= Id %>">
                <div class="off-state">
                    <h3>"<%= Body %>" <em>-- <%= Credit %></em></h3>
                </div>
            </div>
        </script>

        <!-- COLORED QUARTER-SIZED TEXT w/ NO INFO -->
        <script type="text/template" id="tpl-cell-e">
            <div class="cell-e cell-box" data-action="<%= Action %>" data-sizex="1" data-sizey="1" id="<%= Id %>">
                <div class="off-state">
                    <h3>lorem ipsum.<br>dolor sit.<br>amet consequtor.</h3>
                    <% for (var i=0; i < Sentences.length; i++){ %>
                        <%= Sentences[i] %></br>
                    <% } %>
                </div>
            </div>
        </script>

        <!-- FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!  -->
        <script type="text/template" id="tpl-cell-f">
            <div class="cell-f cell-box" data-portal="<%= Portal %>" data-ref="<%= Ref %>" data-date="<%= Date %>" data-viewed="<%= Viewed %>"  data-sizex="<%= SizeX %>" data-sizey="<%= SizeY %>" data-client="<%= Client %>" id="<%= Id %>">
                <div class="off-state flexslider">
                    <ul class="slides">
                        <% for (var i=0; i < Image.length; i++) { %>
                            <li><img src="<%= Image[i] %>"></li>
                        <% } %>
                    </ul>
                </div>
            </div>
        </script>

        <!-- LONG-IMAGE w/ NO INFO -->
        <script type="text/template" id="tpl-cell-g">
            <div class="cell-g cell-box"  data-sizex="<%= SizeX %>" data-sizey="<%= SizeY %>" id="<%= Id %>">
                <div class="off-state">
                    <img src="<%= Image %>">
                </div>
            </div>
        </script>

        <!-- QUARTER-SIZED TEXT-BLOCK CELL w/ NO INFO & USER INFO IN OFF-STATE -->
        <script type="text/template" id="tpl-cell-h">
            <div class="cell-h cell-box" data-sizex="<%= SizeX %>" data-sizey="<%= SizeY %>" id="<%= Id %>">
                <div class="on-state">
                    <div class="content">
                        <div class="author" id="<%= AuthorId %>">
                            <a href="#">
                                <h5 class="name"><%= Author %></h5>
                                <h5 class="jobtitle"><%= JobTitle %><em></em></h5>
                            </a>
                        </div>
                        <div class="article">
                            <h5><%= Article %></h5>
                        </div>
                        <a class="cta-text" href="<%= URL %>" >read more &gt;&gt;</a>
                        <div class="social"></div>
                    </div>
                </div>
            </div>
        </script>

        <!-- EMPTY CELL FOR EMPTY SPACES. ALWAYS QUARTER-SIZED -->
        <script type="text/template" id="tpl-cell-i">
            <div class="cell-i cell-box"  data-sizex="1" data-sizey="1" id="<%= Id %>">
        </script>

        <!-- VIDEO THUMBS. ALWAYS QUARTER-SIZED -->
        <script type="text/template" id="tpl-cell-j">
            <div class="cell-j cell-box"  data-portal="<%= Portal %>" data-ref="<%= Ref %>" data-date="<%= Date %>" data-viewed="<%= Viewed %>"  data-sizex="<%= SizeX %>" data-sizey="<%= SizeY %>" data-client="<%= Client %>" id="<%= Id %>">
                <div class="off-state">
                    <img class="playbut" src="img/playbut.png">
                    <img class="thumb" src="<%= Image %>">
                </div>
                <div class="on-state">
                    <div class="content">
                        <div class="author" id="<%= AuthorId %>">
                            <a href="#">
                                <h5 class="name"><%= Author %></h5>
                                <h5 class="jobtitle"><%= JobTitle %><em></em></h5>
                            </a>
                        </div>
                        <div class="article">
                            <h5><%= Article %></h5>
                        </div>
                        <a class="cta-text" href="<%= URL %>" >view &gt;&gt;</a>
                        <div class="social"></div>
                    </div>
                </div>
            </div>
        </script>




        <!--        <script>window.jQuery || document.write('<script type="text/javascript" src="js/lib/jquery-1.10.2.js"><\/script>')</script>-->
        <script type="text/javascript" src="http://code.jquery.com/jquery-1.10.2.min.js"></script>

<!--        <script type="text/javascript" src="js/main.js"></script>-->
        <script type="text/javascript" src="js/loader.js"></script>

    </body>
</html>
<?php
function getIdFromUrl($url)
{
    $url = preg_replace('/^https:\/\/www.facebook.com/', '', $url);
    $pos = strrpos($url, '/');
    if ($pos === false)
    {
        return false;
    }

    $id = trim(substr($url, $pos));
    if(stripos($id,'?') > 0){
        $id = trim(substr($id,0,stripos($id,'?')));
    }
    if ( empty($id) )
    {
        return false;
    }



    return $id;
}
?>