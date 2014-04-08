<?php

if (preg_match ('/(?i)msie [4-7]/', $_SERVER['HTTP_USER_AGENT']))
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
        <meta name="keywords" content="amsterdam, holland, quince, quince technologies, quince amsterdam bv, dutch creative, holland print, online offline, web, web design, website design, graphic design, web engineering, website engineering, java, web consulting, web application, web development, web application development, e-commerce, interactive web, streaming video, interactive display unit, dcms, qrs content management system, content management, 3d development, web consulting, lamp, open source, Strategy, Concepting, Digital Media, Events, Print Media, Marcom Software Development, Digital Training, Interactive Displays">
        <meta name="description" language="US_en" content="A one-stop digital and retail activation agency and was founded in 1996. We take care of strategy, branding, print, interactive, production and software for major international brands in the Telecom, IT and Consumer Electronics industry.">
<!--        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0, target-densitydpi=device-dpi">-->
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <meta http-equiv="cleartype" content="on">
        <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1"/>
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
<!--                        <div class="cta-msg hidden-xs"><h5>scroll or drag from the right to see more <b>>></b></h5></div>-->
                        <div class="cta-msg">
                                <h5><? if (preg_match ('/(?i)msie 8/', $_SERVER['HTTP_USER_AGENT'])): ?>SCROLL TO <? endif ?>EXPLORE OUR WORLD<em></em></h5>
                        </div>
                        <div class="homepage">
                            <div class="intro-block">
                                <div class="left-side">
                                    <h1 class="static"><span>Quince</span> is</h1>
                                    <div class="imgs">
                                        <ul class="img-scroller">
                                            <li><img src="img/homepage/branding.jpg"></li>
                                            <li><img src="img/homepage/vr_gaming.jpg"></li>
                                            <li><img src="img/homepage/installations.jpg"></li>
                                            <li><img src="img/homepage/retail.jpg"></li>
                                            <li><img src="img/homepage/touch.jpg"></li>
                                            <li><img src="img/homepage/installations.jpg"></li>
                                            <li><img src="img/homepage/events.jpg"></li>
                                            <li><img src="img/homepage/web.jpg"></li>
                                            <li><img src="img/homepage/print.jpg"></li>
                                            <li><img src="img/homepage/mobile.jpg"></li>
                                            <li><img src="img/homepage/strategy.jpg"></li>
                                            <li><img src="img/homepage/retail.jpg"></li>
                                            <li><img src="img/homepage/elearning.jpg"></li>
                                        </ul>
                                    </div>
                                    <div class="texts">
                                        <ul class="txt-scroller">
                                            <li class="active"><h5>We are a one-stop digital and retail activation agency, founded in 1996. We provide strategy, branding, print, interactive, production and software for major international brands.</h5></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="words">
                                    <div class="spacer"></div>
                                    <ul>
                                        <li class="active"><h1>Branding</h1></li>
                                        <li><h1>Interactive</h1></li>
                                        <li><h1>Advertising</h1></li>
                                        <li><h1>Development</h1></li>
                                        <li><h1>Touch</h1></li>
                                        <li><h1>Displays</h1></li>
                                        <li><h1>Events</h1></li>
                                        <li><h1>Web</h1></li>
                                        <li><h1>Print</h1></li>
                                        <li><h1>Mobile</h1></li>
                                        <li><h1>Strategy</h1></li>
                                        <li><h1>Retail</h1></li>
                                        <li><h1>E-Learning</h1></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="preview hidden-md hidden-sm hidden-xs"></div>
                        </div>
                        <ul class="mosaic-container container"></ul>

                    </div>
                </div>
            </div>

            <div class="footer hidden-xs">
                <h6>Copyright 2014 All Rights Reserved</h6>
            </div>
        </div>

        <div class="sub-close-cta hidden-lg">
            <a href="#"><em class="icon"></em><h4>collapse / close</h4></a>
        </div>

        <div class="contact-content container subcontent sliding">
            <div class="content">
            <div class="scroller">
<!--                <h1>Contact Information</h1>-->
                <ul class="items">
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
            </div>
        </div>

        <div class="jobs-content container subcontent sliding">
            <div class="content">
            <div class="scroller">
<!--                <h1>Jobs and Opportunities</h1>-->
                <ul class="items">
                    <li class="contact-section">
                        <a class="job" target="_blank" href="assets/pdf/quince_java_dev.pdf"><h3>All-around Java/Grails/Android Developer</h3></a>
                        <h4>As an <a target="_blank" href="assets/pdf/quince_java_dev.pdf">All-around Java/Grails/Android Developer</a> you will work on innovative e-learning solutions. Our platform, used by a number-one, leading telecom and consumer electronics brands, is actively being used by more than 100.000 users worldwide to keep their knowledge up-to-date. </h4>
                        <h5>Send your motivation and portfolio to <a href="mailto:jobs@quince.nl">jobs@quince.nl</a></h5>
                        <h5>Principals only.<br>Recruiters, do not contact Quince on behalf of your clients. This will not be appreciated.</h5>
                    </li>
                    <li class="contact-section">
                        <a class="job" target="_blank" href="assets/pdf/quince_fed.pdf"><h3>Front-end Developer</h3></a>
                        <h4>As a <a target="_blank" href="assets/pdf/quince_fed.pdf">Front-end Developer</a> you will work in the new department Retail Solutions, where touchscreen applications and interactive displays are designed and developed, controlled by an intelligent CMS. What you develop is often rolled-out worldwide, becoming tangible in shops and trade fairs.</h4>
                        <h5>Send your motivation and portfolio to <a href="mailto:jobs@quince.nl">jobs@quince.nl</a></h5>
                        <h5>Principals only.<br>Recruiters, do not contact Quince on behalf of your clients. This will not be appreciated.</h5>
                    </li>
                    <li class="contact-section">
                        <a class="job" target="_blank" href="assets/pdf/quince_java_dev.pdf"><h3>Technical Account Manager</h3></a>
                        <h4>As a <a target="_blank" href="assets/pdf/quince_accnt_mgr.pdf">Technical Account Manager</a> you will work with challenging projects for both Quince and Quince Retail Solutions developing interactive touch screen and digital signage applications (Windows and Android), controlled by an intelligent CMS. </h4>
                        <h5>Send your motivation and portfolio to <a href="mailto:jobs@quince.nl">jobs@quince.nl</a></h5>
                        <h5>Principals only.<br>Recruiters, do not contact Quince on behalf of your clients. This will not be appreciated.</h5>
                    </li>
                </ul>
            </div>
            </div>
        </div>

        <div class="about-content container subcontent">
            <div class="content">
<!--                <h1>About Quince</h1>-->
                    <div class="about-section">
                        <h4>
                            <p>Quince is a one-stop digital and retail activation agency and was founded in 1996. We take care of strategy, branding, print, interactive, production and software for major international brands in the Telecom, IT and Consumer Electronics industry. </p>
                            <p>We are a unique, people-oriented company, which is reflected in loyal clients and a low staff turnover. Passion in your work, challenging yourself, taking responsibility, respect, having fun and exceeding expectations are core values.</p>
                            <p>Quince continuously invests in personal growth and in the latest technologies. More than 75 employees of various nationalities work at the headquarters in Amsterdam and at the Budapest office.</p>
                            <p>Our specialties: Strategy, Concepting, Digital Media, Events, Print Media, Marcom Software Development, Digital Training, Interactive Displays</p>
                        </h4>
                    </div>
            </div>
        </div>

        <div class="people-content container subcontent">
            <iframe src="people.php" class="content"></iframe>
        </div>



        <!-- ==================================TEMPLATES======================================== -->
        <script type="text/template" id="tpl-cell-a">
            <!-- PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU -->
            <div class="cell-a cell-box" data-portal="<%= Portal %>" data-ref="<%= Ref %>" data-date="<%= Date %>" data-viewed="<%= Viewed %>"  data-sizex="1" data-sizey="2" data-client="<%= Client %>" id="<%= Id %>">
                <div class="off-state">
                    <a href="#"><img src="<%= Image %>"></a>
                </div>
                <div class="on-state">
                    <div class="content">
                        <% if(Title && Title.length > 0){ %>
                        <h3 class="title"><%= Title %></h3>
                        <% } %>
                        <div class="author" id="<%= AuthorId %>">
                            <a href="#">
                                <h5 class="name"><%= Author %></h5>
                                <h5 class="jobtitle"><%= JobTitle %><em></em></h5>
                            </a>
                        </div>
                        <div class="article">
                            <h5><%= Article %></h5>
                        </div>
                        <% if(URL && URL.length > 0){ %>
                        <a class="cta-text" href="<%= URL %>" target="_blank" >read more &gt;&gt;</a>
                        <% } %>
                        <div class="social"></div>
                    </div>
                </div>
            </div>
        </script>

        <script type="text/template" id="tpl-cell-b">
            <!-- QUARTER-SIZED IMAGE w/ INFO -->
            <div class="cell-b cell-box" data-portal="<%= Portal %>" data-ref="<%= Ref %>" data-date="<%= Date %>" data-viewed="<%= Viewed %>"  data-sizex="1" data-sizey="1" data-client="<%= Client %>" id="<%= Id %>">
                <div class="off-state">
                    <a href="#"><img src="<%= Image %>"></a>
                </div>
                <div class="on-state">
                    <div class="content">
                        <% if(Title && Title.length > 0){ %>
                            <h3 class="title"><%= Title %></h3>
                        <% } %>
                        <div class="author" id="<%= AuthorId %>">
                            <a href="#">
                                <h5 class="name"><%= Author %></h5>
                                <h5 class="jobtitle"><%= JobTitle %><em></em></h5>
                            </a>
                        </div>
                        <div class="article">
                            <h5><%= Article %></h5>
                        </div>
                        <a class="cta-text" href="<%= URL %>" target="_blank" >read more &gt;&gt;</a>
                        <div class="social"></div>
                    </div>
                </div>
            </div>
        </script>

        <script type="text/template" id="tpl-cell-c">
            <!-- QUARTER-SIZED CLIENT-LOGO w/ NO INFO -->
            <div class="cell-c cell-box" data-portal="<%= Portal %>" data-ref="<%= Ref %>" data-date="<%= Date %>" data-viewed="<%= Viewed %>" data-sizex="1" data-sizey="1" data-client="<%= Client %>" id="<%= Id %>">
                <div class="off-state">
                    <a href="#"><img src="<%= Image %>"></a>
                </div>
            </div>
        </script>

        <script type="text/template" id="tpl-cell-d">
            <!-- HALF-HEIGHT/DOUBLE-WIDTH TEXT(Quotes) w/ NO INFO -->
            <div class="cell-d cell-box"  data-sizex="1" data-sizey="1" id="<%= Id %>">
                <div class="off-state">
                    <h3>"<%= Body %>" <em>-- <%= Credit %></em></h3>
                </div>
            </div>
        </script>

        <script type="text/template" id="tpl-cell-e">
            <!-- COLORED QUARTER-SIZED TEXT w/ NO INFO -->
            <div class="cell-e cell-box" data-action="<%= Action %>" data-sizex="1" data-sizey="1" id="<%= Id %>">
                <div class="off-state">
                    <h3>
                    <% for (var i=0; i < Sentences.length; i++){ %>
                        <%= Sentences[i] %></br>
                    <% } %>
                    </h3>
                </div>
            </div>
        </script>

        <script type="text/template" id="tpl-cell-f">
            <!-- FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!  -->
            <div class="cell-f cell-box" data-portal="<%= Portal %>" data-ref="<%= Ref %>" data-date="<%= Date %>" data-viewed="<%= Viewed %>"  data-sizex="2" data-sizey="2" data-client="<%= Client %>" id="<%= Id %>">
                <div class="off-state flexslider">
                    <ul class="slides">
                        <% for (var i=0; i < Image.length; i++) { %>
                            <li><img src="<%= Image[i] %>"></li>
                        <% } %>
                    </ul>
                </div>
                <% if(Article.length > 0){ %>
                <div class="on-state">
                    <div class="content">
                        <% if(Title && Title.length > 0){ %>
                            <h3 class="title"><%= Title %></h3>
                        <% } %>
                        <div class="article">
                            <h5><%= Article %></h5>
                        </div>
                        <div class="social"></div>
                    </div>
                </div>
                <% } %>
            </div>
            </div>
        </script>

        <script type="text/template" id="tpl-cell-g">
            <!-- LONG-IMAGE w/ NO INFO -->
            <div class="cell-g cell-box"  data-sizex="2" data-sizey="1" id="<%= Id %>">
                <div class="off-state">
                    <img src="<%= Image %>"">
                </div>
            </div>
        </script>

        <script type="text/template" id="tpl-cell-h">
            <!-- QUARTER-SIZED TEXT-BLOCK CELL w/ NO INFO & USER INFO IN OFF-STATE -->
            <div class="cell-h cell-box" data-sizex="1" data-sizey="1" id="<%= Id %>">
                <div class="on-state">
                    <div class="content">
                        <% if(Title && Title.length > 0){ %>
                            <h3 class="title"><%= Title %></h3>
                        <% } else { %>
                            <div class="author" id="<%= AuthorId %>">
                                <a href="#">
                                    <h5 class="name"><%= Author %></h5>
                                    <h5 class="jobtitle"><%= JobTitle %><em></em></h5>
                                </a>
                            </div>
                        <% } %>
                        <div class="article">
                            <h5><%= Article %></h5>
                        </div>
                        <a class="cta-text" href="<%= URL %>" target="_blank" >read more &gt;&gt;</a>
                        <div class="social"></div>
                    </div>
                </div>
            </div>
        </script>

        <script type="text/template" id="tpl-cell-i">
            <!-- EMPTY CELL FOR EMPTY SPACES. ALWAYS QUARTER-SIZED -->
            <div class="cell-i cell-box"  data-sizex="1" data-sizey="1" id="<%= Id %>">
        </script>

        <script type="text/template" id="tpl-cell-j">
            <!-- VIDEO THUMBS. ALWAYS QUARTER-SIZED -->
            <div class="cell-j cell-box"  data-portal="<%= Portal %>" data-ref="<%= Ref %>" data-date="<%= Date %>" data-viewed="<%= Viewed %>"  data-sizex="1" data-sizey="1" data-client="<%= Client %>" id="<%= Id %>">
                <div class="off-state">
                    <img class="playbut" src="img/playbut.png">
                    <img class="thumb" src="<%= Image %>">
                </div>
                <div class="on-state">
                    <div class="content">
                        <% if(Title && Title.length > 0){ %>
                            <h3 class="title"><%= Title %></h3>
                        <% } else { %>
                        <div class="author" id="<%= AuthorId %>">
                            <a href="#">
                                <h5 class="name"><%= Author %></h5>
                                <h5 class="jobtitle"><%= JobTitle %><em></em></h5>
                            </a>
                        </div>
                        <% } %>
                        <div class="article">
                            <h5><%= Article %></h5>
                        </div>
                        <a class="cta-text" href="#">view &gt;&gt;</a>
                        <div class="social"></div>
                    </div>
                </div>
            </div>
        </script>

        <script type="text/template" id="tpl-personnel">
            <!-- QUARTER-SIZED IMAGE w/ INFO -->
            <div class="cell-p cell-box" data-ref="<%= Ref %>" data-author="<%= AuthorId %>" data-sizex="1" data-sizey="1" id="<%= Id %>">
                <div class="off-state">
                    <a href="#"><img src="<%= Image %>"></a>
                </div>
                <div class="on-state">
                    <div class="content">
                        <% if(Title && Title.length > 0){ %>
                            <h3 class="title"><%= Title %></h3>
                        <% } %>
                        <div class="author" id="<%= AuthorId %>">
                            <a href="#">
                                <h5 class="name"><%= Author %></h5>
                                <h5 class="jobtitle"><%= JobTitle %><em></em></h5>
                            </a>
                        </div>
                        <div class="article">
                            <h5><%= Article %></h5>
                        </div>
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
