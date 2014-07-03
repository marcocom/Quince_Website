# ************************************************************
# Sequel Pro SQL dump
# Version 4135
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 127.0.0.1 (MySQL 5.5.37-0ubuntu0.12.04.1)
# Database: quince_site
# Generation Time: 2014-05-07 08:16:14 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table authors
# ------------------------------------------------------------

DROP TABLE IF EXISTS `authors`;

CREATE TABLE `authors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `job` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `useFbImage` tinyint(1) DEFAULT NULL,
  `facebook` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `linkedin` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `mobile` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `details` mediumtext CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `section` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;

INSERT INTO `authors` (`id`, `name`, `job`, `email`, `useFbImage`, `facebook`, `linkedin`, `mobile`, `details`, `section`)
VALUES
	(7,'Martijn Thieme','','martijn@quince.nl',1,'martijnt','http://www.linkedin.com/profile/view?id=2777140&locale=en_US&trk=tyah','','','Technical Director'),
	(9,'Patrick Weijers',NULL,'patrick@quince.nl',0,'','','','','Development'),
	(11,'Remco Schoos',NULL,'remco@quince.nl',0,'schoos','http://www.linkedin.com/profile/view?id=9568252&locale=en_US&trk=tyah','','Entrepreneur. Creating tangible things from abstract ideas. Gadget freak, technology enabled solutions. Making things practical. Playful. Making cool stuff work in retail. Enjoying the Quince team and colleagues. Proud to be Quince. Happy with the dedication of our colleagues. New stuff and new ideas are always popping in my head, always busy writing ideas down to use them whenever and wherever possible. Keywords: All of the above','Quince Retail Solutions'),
	(19,'Jeroen van Delft',NULL,'jeroen@quince.nl',1,'jeroenvandelft','http://www.linkedin.com/profile/view?id=25128808&locale=en_US&trk=tyah','','Transforming functional wishes of clients into working solutions, thats the daily challenge for this long-time developer. He also programs stuff in his spare time, which resulted for instance in a neat film planner to accommodate a hobby he shares with several friends. One day he would really love to see the introduction of an actual Star Trek style replicator. Still being the practical guy: â€œThis will solve a lot of problems Ã¡nd save a lot of time.â€?  Keywords: movies, technology, solutions','Development'),
	(103,'Mark Rondema',NULL,'mark@quince.nl',0,'','http://www.linkedin.com/profile/view?id=29007584&locale=en_US&trk=tyah','','I\'m the guy who fixes things. I\'m the guy who makes magic from al kind of materials. But most of all I\'m the guy who always keeps smiling :-)Â   Keywords: shooting pool, sailing, devising technical solutions','Traffic'),
	(104,'Robin Kooiker',NULL,'robin@quince.nl',1,'robin.kooiker','','','My work at Quince includes devising and designing new campaigns and designing all kinds of things in 2D and 3D, ranging from touchdisplays to artwork. I like it so much, even in my spare time I design stuff. What inspires me is also about design, namely interior design and furniture design. But of course theres more thats important to me: Marieke, Daan and Melle, Ajax, watching movies at home, cooking. Quince has made me who I am as a designer and a person. Yes, the Quince shape is pretty much there (literal and figurativeJ).  Keywords: design, family, Quince','Design / DTP'),
	(105,'Charles Meijboom',NULL,'charles@quince.nl',1,'charles.meijboom','http://www.linkedin.com/profile/view?id=8861802&locale=en_US&trk=tyah','','This Quincer knows how to develop a complete campaign in no time. Loves to create and have fun, at the office and at home. Family man. Proud father of two. Care taker. Thinking up practical solutions. Typical Amsterdam humour. Superb karaoke singer. Dedication. Big heart. Keywords: Ajax, responsible, jokes','Design / DTP'),
	(106,'Sjoerd Liefting',NULL,'sjoerd@quince.nl',1,'sjoerd.liefting','http://www.linkedin.com/pub/sjoerd-liefting/5/73a/865','','A good visual tells me more than a thousand words. I love new, cool concepts, clean designs and open minded clients. When not at work I like to travel and see new places, bike around in the city, hang out on the beach, listen to new music, challenge myself in sports, have a good talk and laugh with friends and play with my always enthusiastic kids. Keywords: visual, new, play','Concept / Design'),
	(109,'Diederick Koekkoek',NULL,'diederick@quince.nl',1,'diederick.koekkoek','','','My typical day at Quince usually starts with â€? â€˜mmm, wouldnt it be great/smart/fun/epic if â€? then a lot of â€˜tiktiktiktikâ€? blablalablaâ€? tiktikâ€? &$@#*!... del del. Tik, blabla and hopefully Ahaaaa!    Keywords: curiosity, anomalies, synergy, wonder','Concept / Copy'),
	(110,'Frans Deckers',NULL,'frans@quince.nl',0,'','http://www.linkedin.com/profile/view?id=44760311&locale=en_US&trk=tyah','','Graphic design, copy, user interface design, project management, storytelling, account management, coaching. Since I started at Quince in 2002, Ive explored all my fields of interest. At Quince there are no limits in doing what you want to do. This made me into a creative with a unique set of skills. Just like my colleagues who feel like brothers and sisters to me.   With my fresh energy Ill boost any campaign that is meant to cause a change; whether it is in the field of e-learning, branding or retail activation. Bang!  Keywords: leadership, freshness, making a difference','Digital CoÃ¶rdinator'),
	(115,'Coen Schaafsma',NULL,'coen@quince.nl',1,'coen.schaafsma','http://www.linkedin.com/profile/view?id=30840735&locale=en_US&trk=tyah','','Quince feels like a family business. That\'s why we work so well together. To make a long story short: pride, expertise, work hard, nice work, inspiration, respect, learn, friendship, openness, honesty, trust, pleasure, unity, family, a smile and a cold beer.  Keywords: all of the above','Design / DTP'),
	(131,'David Peperkamp',NULL,'david@quince.nl',1,'david.peperkamp','','','Quince is together and so am I. At the same time Quince is being yourself and so am I. To me it is also one big playground for creating beautiful things. To enter a room with a team and come out with something surprising. I love that.   My inspiration comes from the empty plan â€“ when theres nothing yet. My work includes campaigns, brand IDs, retail activation, e-learning, displays and much more.  Keywords: challenge, inspire, innovate','Concept / Design'),
	(136,'Olaf Weijers',NULL,'olaf@quince.nl',0,'','','','Of my activities, which encompass executing all email communications for our clients within Quince, I like testing the best. Just breaking sites and tools apart and going over every option in detail.  Keywords: games (rpgs), Japan, friends','Development'),
	(138,'Sander Scherphuis',NULL,'sander@quince.nl',0,'sander.scherphuis','http://www.linkedin.com/profile/view?id=60631940&locale=en_US&trk=tyah','','Leader of the Quince pack. Passionate motivator. Event master. Entrepreneur with heart and soul. Proud dad. Someone you can count on. Always aims for the highest score in work and life. Creating impressive concepts and campaigns together makes him happy. Never gives up anddoesnt believe in â€˜cannot. Always respectful and truly playful. Loves to relax on the water. Key words: never stop learning','Director'),
	(147,'Ewout Thieme',NULL,'ewout@quince.nl',1,'ewout.thieme','http://www.linkedin.com/profile/view?id=93738766&locale=en_US&trk=tyah','','Has joined the Quince development team working as a Java/Groovy/Grails developer, building web and Android applications but also handling IT tasks that require Unix/Linux knowledge, acting as a bridge between the boundaries of development and system administration.  Enjoys playing and experimenting with bleeding edge technology, playing computer games, snowboarding, watching movies and listening to music.','Development'),
	(153,'Jessica Dekker',NULL,'jessica@quince.nl',1,'jessica.dekker.39','http://www.linkedin.com/profile/view?id=152502742&locale=en_US&trk=tyah','','During workdays dancing Queen Jessica is responsible for several accounts. And she always delivers her absolute best. In her spare time she loves to travel, have fun with friends and family, work out and of course dance, dance, dance. Preferably all night long. Key words: accurate, creativity, dedication','Project leader'),
	(167,'Tulay Kocaoglu',NULL,'tulay@quince.nl',1,'tulay.amama','http://www.linkedin.com/profile/view?id=211547840&locale=nl_NL&trk=tyah','','Hey! I am Tulay, digital designer. I design websites, e-mail templates, banners and so on. Recently Ive started learning how to make videos in AfterEffects. Im doing pretty well and enjoying it a lot. Animating is so much fun! Especially when you have created something yourself that comes alive.   Gaming is a great hobby of mine, both on pc or console. I am also a passionate Star Wars and kimono collector. Finally, I am a very creative kind of girl and in a good mood every single day.  Keywords: cats, kimonos, games','Digital design'),
	(176,'James Guy',NULL,'james@quince.nl',0,'james.guy.967','http://www.linkedin.com/profile/view?id=6695332&locale=en_US&trk=tyah','+31629497283','Passionate account manager who during week days is inspired by his colleagues and clients to create solutions for goals which are yet undefined â€? So James maxim â€œDoing the impossible by doing itâ€? is not that surprising. Neither that Mandela is his inspiration. On Saturdays he devotes his free time as a soccer team manager who guides young talented football players through the adventure called professional soccer. What does it mean to be a professional player? And what hurdles do these youngsters need to take?','Project leader'),
	(195,'Wout Niebuur',NULL,'wout@quince.nl',1,'wout.niebuur','http://www.linkedin.com/profile/view?id=35419618&locale=en_US&trk=tyah','','Work hard to play hard. Some people call me a deadline junky. I just like to make the impossible possible:-)  Keywords: work, play, work, play','Events'),
	(199,'Djamel de Ligt',NULL,'djamel@quince.nl',1,'djameldeligt','http://www.linkedin.com/profile/view?id=4610113&trk=nav_responsive_tab_profile_pic','+31624657437','Globe trotter, single fin surfer, music lover and trends connoisseur. Operates in print media but is also known to develop or co-create just about everything from logos to websites and full-blown campaigns. If not at Quince, you can find him in the North Sea at Scheveningen, or in his beloved California, surfing the Great Ocean or hanging around on the beach.  Keywords: surf dude, music, world','Concept / Design'),
	(204,'Solko Detmers',NULL,'solko@quince.nl',1,'legologic','http://www.linkedin.com/profile/view?id=12041634&locale=en_US&trk=tyah','+31612595906','Doing IT at Quince has been truly challenging over the last couple of years and has taught me to think outside of the box. My work is best described as helping out with all the technicalities in the background, thus enabling part of the creative processes within Quince and showcasing them to the world. My IT philosophy starts with enabling people to work in a pleasant working environment. it starts with peoples needs and is supported with technical solutionsâ€? in that order!  Keywords: respect all living things, capture beauty or oddness using photography, personal growth','Datacenter / ICT'),
	(207,'Tjeerd van der Hulst',NULL,'tjeerd@quince.nl',0,'','http://www.linkedin.com/profile/view?id=15562487&locale=en_US&trk=tyah','','Tjeerd is me. I love to play the guitar, draw funny stuff, cook, read, and after a few beers you might catch me trying to drive people crazy by doing card tricks. Nature never ceases to amaze me. I have a strong interest in the human mind and all its mysteries and love to ponder the ineffable.Â   At Quince I play around with all kinds of digital design and animation. In the meantime Im actually an undercover field researcher of abnormal groups of crazy people in their own habitat.  Keywords: music, nature, imagination','Digital design'),
	(224,'Gabor Foldvari',NULL,'gabor@quince.nl',0,'','http://www.linkedin.com/profile/view?id=75219640&locale=en_US&trk=tyah','','Living on the edge, Born to be Quincer, KPN for life  Keywords: nature, traveling, expat community','Development'),
	(233,'Jeffrey Schulz',NULL,'jeffrey@quince.nl',1,'jeffrey.schulz.7','','','This well-organised and deadline driven Quincer loves to create for the creatives. With a smile on his face he juggles through the day to get every job done. And hes doing so successfully. So there must be some truth in Jeffreys comparison: â€œTraffic is like juggling, making sure no ball will drop.â€?Â  J  Key words: daughter, deadline, traffic','Traffic'),
	(241,'Daniel Levitton',NULL,'daniel@quince.nl',1,'levitton','http://www.linkedin.com/profile/view?id=55936184&locale=en_US&trk=tyah','','By day an all-round designer @ Quince. By night a DJ and party organizer. 24 hours per day a sporty man who loves design and loves to create beautiful things.  Key words: music, motorcycle, design, sport','Design / DTP'),
	(242,'Jeroen van der Horst',NULL,'jeroenh@quince.nl',1,'jeroen.vanderhorst.90','http://www.linkedin.com/profile/view?id=36825708&locale=en_US&trk=tyah','+31615642775','Hi! Because of my love and fascination for photography and film, I have founded Quince DOK, the photography and video subsidiary of Quince Amsterdam. We add more value to the retail and marketing solutions that Quince is known for. By deploying innovative techniques, different tools and a wide range of technical and creative experts we make even the craziest visual ideas reality.  Keywords: Quince DOK, photography, film','Project leader'),
	(250,'Frederik van Otterlo',NULL,'frederik@quince.nl',0,'','http://www.linkedin.com/profile/view?id=22831013&locale=en_US&trk=tyah','','One of the original metal heads in the studio. Creates still images and animates them on request. Hes into snowboarding, wakeboarding and scuba diving and is reputed to know a thing or two about Kung Fu, but he refuses to call any of these sports extreme. A silly joke is never lost on him. He much appreciates telling one himself or enjoying someone elses sense of silly humor.  Keywords: silly jokes, (frozen) water sports, metal music','Digital design'),
	(252,'Gyrgy Tolnay-Knefaly',NULL,'gyuri@quince.hu',1,'Gypapa','http://www.linkedin.com/profile/view?id=23895378&locale=en_US&trk=tyah','','Transparent and open minded. A dreamer, a leader, a thinker and a father who strives for better understanding of the world and its problem behind the problems to make a change. A change that connects people! Next to Quince, he can easily be found on random playgrounds of Budapest with his kids or on a bike somewhere downtown. If you call, he wont answer... but he will call you back!Keywords: lead, dream, think','Director Hungary'),
	(254,'Sander Sneek',NULL,'sanders@quince.nl',1,'sander.sneek','http://www.linkedin.com/profile/view?id=13297711&locale=en_US&trk=tyah','','I am an interactive developer who likes to tinker with new technologies / gadgets while listening to the best band ever: Underworld. Blowing off some steam with making music, wakeboarding, running and spending quality time with the fam :-).  Keywords: King Of Snake, family, technology, music','Digital / Development'),
	(261,'Ben De Dood','','bendd@quince.nl',1,'ben.dedood','',NULL,' Loves to write or edit text - whatever it takes to create better copy -, loves to read and has a penchant for live concerts, tattoos and strange facts. His favorite form of transportation is the bicycle, but in his mind this lifelong Trekkie with a dark sense of humour travels at warp speed to explore the universe. Keywords: rhetoric, books, outer space ','Senior copywriter'),
	(262,'Eva Gransier',NULL,'eva@quince.nl',1,'eva.gransier','http://www.linkedin.com/profile/view?id=32362420&locale=en_US&trk=tyah','','Always busy, love parties and make people happy. It made so much sense to incorporate that in my work! At Quince Events each day is different except for the colleagues who are invariably super nice and crazy, but in a good way. I really appreciate the opportunities for self-development and the amount of self-responsibility at Quince, must be one of the many reasons I still love my job!  Keywords: shopping, organize, events','Event coÃ¶rdinator'),
	(263,'Martijn Bon',NULL,'martijnb@quince.nl',0,'','','','All-round happy worker. Always-studying-linguistic-healthy-eating-festival-tiger.  Keywords: 3D, print, digital, interaction design','Concept / Design'),
	(265,'Rene van Bakel',NULL,'rene@quince.nl',0,'','http://www.linkedin.com/profile/view?id=49775719&authType=NAME_SEARCH&authToken=RUAz&locale=e','','Im a web developer. In addition I often give advice in other project about possible solutions and I lead a number of projects. Colleagues tell me they think I am â€˜sweet and â€˜caring. That must be the reason I dont shy from household chores, not even at Quince. My inspiration comes from my wife Amanda and my daughter Andrea, my natural curiosity about how things/people/animals work and from people who do what feels good, no matter what other people think.  Keywords: family, care, curiosity','Development'),
	(268,'Linda Lodewijk',NULL,'linda@quince.nl',1,'linda.lodewijk.7','http://www.linkedin.com/profile/view?id=102394608&locale=en_US&trk=tyah','','This Quince lady is good with words. She loves to write all sorts of copy, from ad campaigns and corporate texts to scripts and voice overs. Has a thing for vampires and Dutch sayings since childhood. Huge soft spot for ginger tomcats. Loves to be at the water(side) and watch movies. A city girl that finds rest in nature and being with loved ones. Playful and persistent nature. Curious, committed, old school rap.','Copy'),
	(278,'Lotte de Jong',NULL,'lotte@quince.nl',0,'lotte.dejong.71','http://www.linkedin.com/profile/view?id=133013657&locale=en_US&trk=tyah','','Working at Events is challenging to this born and raised Egmond beach babe, who nowadays enjoys living close to Beach South (Strand Zuid) in Amsterdam. â€œEach day is full of surprises, you never know what to expect. I make a lot of fun with my crazy colleagues and learn new things every single day â€? on the most various subjects.â€? J  Key words: cooking, festivals, friends','Event coÃ¶rdinator'),
	(282,'Vincent van der Laan',NULL,'vincent@quinceretailsolutions.com',0,'','http://www.linkedin.com/profile/view?id=5390579&locale=en_US&trk=tyah','+31657934433','I love translating issues into goals and actions; bringing together online and offline strategy managed from one central system.  Keywords: people, cooking, new technology','Quince Retail Solutions'),
	(319,'Lisette Koot',NULL,'lisette@quince.nl',1,'lkoot','http://www.linkedin.com/profile/view?id=72345720&locale=en_US&trk=tyah','','Money, money, money â€?  My work at Quince involves a lot of numbers and bills. And although my job description isnt well known by my colleagues, they do like it a lot when their salary gets paid in time.  Im a real outdoor kind of Quincer enjoying (in no particular order) food, music, fun with friends, festivals, travelling, sporting â€? just doing something!!!  Reading good books relaxes me.  Key words: fun, finance, family','Finance'),
	(320,'Doruk Eker',NULL,'doruk@quince.nl',1,'dorukeker','http://www.linkedin.com/profile/view?id=8730360&locale=en_US&trk=tyah','+31642378582','I eat, drink, code, debug, research, try to inspire, be inspired, work out, chat and have funâ€?  and all that under the same roof. I am the non-Dutch Amsterdammer working happily at Quince. I develop interactive experiences for online, offline and mobile.  Keywords: sports, music, art','Digital / Development'),
	(321,'Marcel Kors',NULL,'',0,'','',NULL,'',''),
	(323,'Miranda Kasius',NULL,'miranda@quince.nl',1,'mirandakasius','http://www.linkedin.com/profile/view?id=224798130&locale=nl_NL&trk=tyah','','My work at Quince? I can handle 56 countriesâ€? and still counting. Being the peanutbutter between the sandwich of our designers & developers and all these foreign countries makes me feel on top of the world! Inside and outside of the office I am a happy girl who loves to enjoy life! I like to spend my spare time being creative; cook & bake, play with make-up, make handmade stamps, create lampshades, face/bodypainting. You can make me happy with a themed dress-up party and a great glass of wine served with some nice food!  Keywords:Â happy, positive, YOLO!','Project leader'),
	(324,'sandersc',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(325,'Jamel van Laarhoven',NULL,'jamel@quince.nl',1,'jamel.vanlaarhoven','http://www.linkedin.com/profile/view?id=126038616&locale=en_US&trk=tyah','','At Quince Events I manage projects from A to Z. I love to add details for the final  touch, am quite used to working in the weekends (comes with the job) and would rather skip the mornings if possible (which is not the case). In my spare time I like to kitesurf in the summer or snowboard in the winter. Work hard, play hard. Thats what they say, right?  Keywords: hotel lobbies, cocktails, audio visual products','Event coÃ¶rdinator'),
	(327,'Theodoros Papadopoulos',NULL,'theodoros@quince.nl',0,'','','','This Greek guy is part of the Quince development team, participating in the technical design and implementation of various software projects. Loves doing the â€˜non common - non trivial, both in work and in life, when possible. Deep interest in history, philosophy, human development, engineering sciences and spiritual traditions globally.  Keywords: Know-the-natural-order','Development'),
	(333,'Julian Gallimore',NULL,'julian@quince.nl',1,'julian.gallimore.5','http://www.linkedin.com/profile/view?id=73022006&locale=en_US&trk=tyah','','I cannot tell you where I\'m from, because I grew up a bit everywhere. What I can tell you is that I\'m enthusiastic and passionate about new techniques and developments in programming. Here at Quince, I work a lot on interactive displays, developing our backend system that manages our interactive applications. I also do some front end development, creating mobile friendly web applications. Outside of work, my curiosity takes me to countries I haven\'t seen yet. Besides that, I love watching movies and playing games, and on those few sunny days that we get here, nothing can stop me from being outdoors.  Key words: Development, games, outdoors','Digital / Development'),
	(335,'Bart van Asperen','','bart@quince.nl',1,'rbvanasperen','',NULL,'My Quince shortlist consists of: design, production, 3D and learning all kinds of new stuff. The shortlist that typifies me personally includes (indoor) football, photography, reading, ex-Rotterdam, Feyenoord supporter and of course my wife Johanneke. Keywords: football, Rotterdam, design.','3D graphics designer'),
	(337,'Benjamin Weijers',NULL,'benjamin@quince.nl',0,'','http://www.linkedin.com/profile/view?id=100119952&locale=en_US&trk=tyah2','','Supporting, monitoring, testing all kinds of software related matters and improving workflow processes, thats what gets Benjamin through the average Quince working day. Outside the office  this tall guy keeps the beaches and the waters  safe by acting as a lifeguard. Hes also a certified member of the Red Cross Events Team, so rest assured you can feel pretty safe with this guy around!  Keywords: improvements, helping each other, lighten the burden','Development'),
	(338,'Ryan van Esch',NULL,'ryan@quince.nl',1,'ryan.vanesch.7','http://www.linkedin.com/profile/view?id=131375029&locale=en_US&trk=tyah','','Im versatile on every project big or small, from A to Z. Working in the inspiring Quince events team is like being busy with a hobby, which gives me a tremendous amount of positive energy. I have an eye for detail. Do it right or dont do it all. And in the meantime enjoy life! J  Keywords: teamwork, versatile, open minded, sport','Events'),
	(339,'Guido Porten',NULL,'guido@quince.nl',1,'guguiszm','',NULL,'','Creative director'),
	(340,'Joyce de Groot',NULL,'joyce@quince.nl',0,'','http://www.linkedin.com/profile/view?id=88668206&locale=en_US&trk=tyah','','Good afternoon, this is Quince, Joyce speaking! How can I help you? This sporty-spice, multitasking Quince lady helps out on whatever job you have for her. And always with a happy face. In her free time she gets her kicks out of running, winter sports, salsa and exploring Amsterdam where she recently found a nice crib.  Key words: festivals, spider in the web, organising','Office'),
	(341,'GÃ¡bor Varga',NULL,'gaborv@quince.hu',1,'gaborv','http://www.linkedin.com/profile/view?id=45978128&locale=en_US&trk=tyah','+36703257181','Communicator, wine enthusiast, music lover and bit of a tech geek. At Quince, when hes not dealing with clients, hes out to meet new ones to co-create with. He enjoys riding his bike, having rosÃ© spritzers with friends and, last but not least, the industry he works in. In a few years he hopes to brew his own social craft beer, and once old and wise, do the same with wine.Keywords: communicate, tech, the good things in life ','Client services / Business development'),
	(346,'Ralf Amama',NULL,'ralf@quince.nl',1,'ralf.martin.amama','http://www.linkedin.com/profile/view?id=182627132&locale=nl_NL&trk=tyah','','At Quince Im a Jack of all trades. Helping out Events, taking care of office maintenance, stuff like that. Since my roots are from the creative side, I can also help out in the digital department.  Im what you call a textbook geek. I like Star Wars, games, movies, comics, you name it! I also like ancient cultures and travelling, the more when these go together.  Keywords: geek culture, Ford Mustang, travel','Handy man'),
	(349,'Wouter Koot',NULL,'wouter@quince.nl',1,'wouter.koot.3','http://www.linkedin.com/profile/view?id=96222067&locale=en_US&trk=tyah','','Nice to meet you! Im a proud member of the sales staff of Quince Retail Solutions. Have you seen our beautiful showroom yet? I love my work and making clients happy makes me happy. You can say Im a real â€˜sports guy. Doing sports relaxes me and re-energies my battery, so I can get the best out of every day and the next.To me a solid foundation is essential for personal development and growth. Keywords:  accurate, winter sports, friends','Project leader'),
	(351,'Jeffrey Kors',NULL,'jeffreyk@quince.nl',1,'jeffrey.kors.3','','','Im Jeffrey, intern at the Events team. I am learning a lot at Quince! My colleagues really involve me in everything and Ive got acquainted with several parts of the Events business already. I help out building exhibition stands and have made a lot of great rides with the crew. I even baked pan cakes at an event. Also Ive met a whole bunch of new, really nice people!  Keywords: soccer, Telstar, drinking beer with friends','Handy man'),
	(352,'Alexandru Chiritescu','mobile software developer','alex@quince.nl',0,'','http://www.linkedin.com/profile/view?id=49427598&locale=en_US&trk=tyah','','What I like and do most of the time is creating software by writing code. I enjoy experimenting and learning new things, as a way of improving who I am and what I do.  I\'m a music addict, book reader and guitar playing novice. Curious by nature, I like socializing, exchanging ideas and straight answers. I believe that a warm and joyful attitude can make the world much better.  Keywords: learn, play, improve','development'),
	(354,'Raymond Schoos',NULL,'raymond@quinceretailsolutions.com',1,'raymond.schoos','http://www.linkedin.com/profile/view?id=127912798&authType=NAME_SEARCH&authToken=Hifi&locale=en_US&','','Technology, its all around me! Hi Im Raymond, working for Quince Retail Solutions. Im there to provide you the best customer experience possible!  Keywords: gadgets, freedom, website creation, new born baby, creativity','Quince Retail Solutions'),
	(355,'carla',NULL,NULL,0,NULL,NULL,NULL,NULL,NULL),
	(356,'Gianluca di Vincenzo',NULL,'',0,'','',NULL,'',''),
	(357,'Jan Vesely',NULL,'',0,'','',NULL,'','Development'),
	(358,'Ana Diez',NULL,'ana@quince.nl',1,'annie.diez.31â€Ž','',NULL,'','Traffic'),
	(359,'Arjan Korstjens',NULL,'',0,'','',NULL,'',''),
	(360,'daan',NULL,NULL,0,NULL,NULL,NULL,NULL,NULL),
	(361,'guillermo',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(362,'marcow',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(363,'Noah Moerkerken',NULL,'',0,'','',NULL,'',''),
	(364,'Ruud Kallenbach',NULL,'',0,'','',NULL,'',''),
	(365,'Radouane Aouragh','','radouane@quince.nl',0,'','',NULL,'I am very excited about new emerging technologies, both front-end and back-end.  ','Internship '),
	(366,'Bart van Kampen',NULL,'',0,'','',NULL,'','Events'),
	(367,'sjoukje',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(368,'Floris',NULL,'',0,'','',NULL,'',''),
	(369,'astrid',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table customers
# ------------------------------------------------------------

DROP TABLE IF EXISTS `customers`;

CREATE TABLE `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;

INSERT INTO `customers` (`id`, `name`)
VALUES
	(108,'Quince'),
	(113,'Samsung Benelux Corporate'),
	(162,'The Phone House'),
	(214,'Tommy Hilfiger'),
	(233,'Bauknecht'),
	(257,'Goodyear-Dunlop NL-BE'),
	(270,'KPN'),
	(277,'Apple'),
	(289,'HTC EMEA'),
	(334,'Alrec'),
	(345,'QYN'),
	(360,'Holland Casino AA hoofdkantoor Hoofddorp'),
	(368,'Quince HU'),
	(370,'MMD'),
	(382,'Kirkman Company'),
	(441,'Platform Outsourcing Nederland'),
	(451,'Philips Consumer Lifestyle'),
	(457,'NAGA'),
	(460,'Media Markt & Saturn'),
	(489,'Setar'),
	(499,'Cambridge'),
	(505,'Stage Entertainment'),
	(506,'Nokia'),
	(510,'Green Hill'),
	(511,'ING Retail Nederland'),
	(513,'Whirlpool'),
	(521,'Philips TV / TP Vision Netherlands B.V.'),
	(527,'Korstjens Crossmedia Consultancy'),
	(528,'ID&T'),
	(537,'InVue Security Products'),
	(538,'Infopact'),
	(547,'Teradata Netherlands B.V.'),
	(560,'ABN-AMRO'),
	(561,'CTOUCH'),
	(562,'Bissell'),
	(565,'Quince Retail Solutions B.V. (QRS)'),
	(568,'Fox Sports'),
	(573,'Loveland'),
	(577,'Telfort'),
	(579,'Hema'),
	(586,'Nederland Schoon'),
	(589,'Scheer & Foppe'),
	(590,'Calvin Klein'),
	(594,'Intergamma'),
	(595,'Quince Platforms'),
	(598,'Holmatro'),
	(599,'VNU'),
	(600,'brandXtension BV'),
	(602,'Oxxio');

/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table images
# ------------------------------------------------------------

DROP TABLE IF EXISTS `images`;

CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(100) CHARACTER SET latin1 DEFAULT NULL,
  `extension` varchar(10) CHARACTER SET latin1 DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;

INSERT INTO `images` (`id`, `type`, `extension`, `name`)
VALUES
	(3,'image/jpeg','jpg',NULL),
	(4,'image/jpeg','jpg',NULL),
	(5,'image/jpeg','jpg',NULL),
	(6,'image/jpeg','jpg',NULL),
	(7,'image/jpeg','jpg',NULL),
	(8,'image/jpeg','jpg',NULL),
	(9,'image/jpeg','jpg',NULL),
	(10,'image/jpeg','jpg',NULL),
	(11,'image/jpeg','jpg',NULL),
	(12,'image/jpeg','jpg',NULL),
	(13,'image/jpeg','jpg',NULL),
	(14,'image/jpeg','jpg',NULL),
	(15,'image/jpeg','jpg',NULL),
	(16,'image/jpeg','jpg',NULL),
	(17,'image/jpeg','jpg',NULL),
	(18,'image/jpeg','jpg',NULL),
	(19,'image/jpeg','jpg',NULL),
	(20,'image/jpeg','jpg',NULL),
	(21,'image/jpeg','jpg',NULL),
	(22,'image/jpeg','jpg',NULL),
	(23,'image/jpeg','jpg',NULL),
	(24,'image/jpeg','jpg',NULL),
	(25,'image/jpeg','jpg',NULL),
	(26,'image/jpeg','jpg',NULL),
	(28,'image/jpeg','jpg',NULL),
	(29,'image/jpeg','jpg',NULL),
	(30,'image/jpeg','jpg',NULL),
	(31,'image/jpeg','jpg',NULL),
	(32,'image/jpeg','jpg',NULL),
	(33,'image/jpeg','jpg',NULL),
	(34,'image/jpeg','jpg',NULL),
	(35,'image/jpeg','jpg',NULL),
	(36,'image/jpeg','jpg',NULL),
	(37,'image/jpeg','jpg',NULL),
	(38,'image/jpeg','jpg',NULL),
	(39,'image/jpeg','jpg',NULL),
	(40,'image/jpeg','jpg',NULL),
	(41,'image/jpeg','jpg',NULL),
	(42,'image/jpeg','jpg',NULL),
	(43,'image/jpeg','jpg',NULL),
	(44,'image/jpeg','jpg',NULL),
	(45,'image/jpeg','jpg',NULL),
	(46,'image/jpeg','jpg',NULL),
	(47,'image/jpeg','jpg',NULL),
	(48,'image/jpeg','jpg',NULL),
	(49,'image/jpeg','jpg',NULL),
	(50,'image/jpeg','jpg',NULL),
	(51,'image/jpeg','jpg',NULL),
	(52,'image/jpeg','jpg',NULL),
	(53,'image/jpeg','jpg',NULL),
	(54,'image/jpeg','jpg',NULL),
	(55,'image/jpeg','jpg',NULL),
	(56,'image/jpeg','jpg',NULL),
	(57,'image/jpeg','jpg',NULL),
	(58,'image/jpeg','jpg',NULL),
	(59,'image/jpeg','jpg',NULL),
	(60,'image/jpeg','jpg',NULL),
	(61,'image/jpeg','jpg',NULL),
	(62,'image/jpeg','jpg',NULL),
	(63,'image/jpeg','jpg',NULL),
	(64,'image/jpeg','jpg',NULL),
	(65,'image/jpeg','jpg',NULL),
	(66,'image/jpeg','jpg',NULL),
	(67,'image/jpeg','jpg',NULL),
	(68,'image/jpeg','jpg',NULL),
	(69,'image/jpeg','jpg',NULL),
	(70,'image/jpeg','jpg',NULL),
	(71,'image/jpeg','jpg',NULL),
	(72,'image/jpeg','jpg',NULL),
	(73,'image/jpeg','jpg',NULL),
	(74,'image/jpeg','jpg',NULL),
	(75,'image/jpeg','jpg',NULL),
	(76,'image/jpeg','jpg',NULL),
	(77,'image/jpeg','jpg',NULL),
	(78,'image/jpeg','jpg',NULL),
	(79,'image/jpeg','jpg',NULL),
	(80,'image/jpeg','jpg',NULL),
	(81,'image/jpeg','jpg',NULL),
	(82,'image/jpeg','jpg',NULL),
	(84,'image/jpeg','jpg',NULL),
	(85,'image/jpeg','jpg',NULL),
	(86,'image/jpeg','jpg',NULL),
	(87,'image/jpeg','jpg',NULL),
	(88,'image/jpeg','jpg',NULL),
	(89,'image/jpeg','jpg',NULL),
	(90,'image/jpeg','jpg',NULL),
	(91,'image/jpeg','jpg',NULL),
	(92,'image/jpeg','jpg',NULL),
	(93,'image/jpeg','jpg',NULL),
	(94,'image/jpeg','jpg',NULL),
	(95,'image/jpeg','jpg',NULL),
	(98,'image/png','png','Client-235x134-HTC.png'),
	(99,'image/jpeg','jpg','cell-474x272-IS-PRA-1.jpg'),
	(100,'image/jpeg','jpg','cell-474x272-IS-PRA-2.jpg'),
	(101,'image/jpeg','jpg','cell-474x272-IS-PRA-3.jpg'),
	(124,'image/jpeg','jpg','Client-235x134-Goodyear.jpg'),
	(129,'image/jpeg','jpg','Client-235x134-CTouch.jpg'),
	(130,'image/jpeg','jpg','Client-235x134-ABNAMRO.jpg'),
	(131,'image/jpeg','jpg','Client-235x134-MediaMarkt.jpg'),
	(132,'image/jpeg','jpg','Client-235x134-Green-Hill.jpg'),
	(133,'image/jpeg','jpg','Client-235x134-Gamma-nl.jpg'),
	(134,'image/jpeg','jpg','Client-235x134-Apple.jpg'),
	(135,'image/jpeg','jpg','Client-235x134-Tommy-Hilfiger.jpg'),
	(136,'image/jpeg','jpg','Client-235x134-Telfort.jpg'),
	(138,'image/jpeg','jpg','cell_470x268_vimeo-HTC.jpg'),
	(140,'image/jpeg','jpg','cell_233x270-FB-GreenHill-Dex1.jpg'),
	(141,'image/jpeg','jpg','Client-235x134-QRS.jpg'),
	(142,'image/jpeg','jpg','Client-235x134-Teradata.jpg'),
	(143,'image/jpeg','jpg','Client-235x134-loveland.jpg');

/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table itemImages
# ------------------------------------------------------------

DROP TABLE IF EXISTS `itemImages`;

CREATE TABLE `itemImages` (
  `item` int(11) DEFAULT NULL,
  `image` int(11) DEFAULT NULL,
  KEY `item` (`item`),
  KEY `image` (`image`),
  CONSTRAINT `itemimages_ibfk_1` FOREIGN KEY (`item`) REFERENCES `items` (`id`),
  CONSTRAINT `itemimages_ibfk_2` FOREIGN KEY (`image`) REFERENCES `images` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `itemImages` WRITE;
/*!40000 ALTER TABLE `itemImages` DISABLE KEYS */;

INSERT INTO `itemImages` (`item`, `image`)
VALUES
	(841,3),
	(842,4),
	(843,5),
	(844,6),
	(845,7),
	(845,8),
	(845,9),
	(845,10),
	(845,11),
	(846,12),
	(847,13),
	(848,14),
	(849,15),
	(850,16),
	(851,17),
	(851,18),
	(851,19),
	(851,20),
	(851,21),
	(852,22),
	(853,23),
	(855,24),
	(856,25),
	(857,26),
	(859,28),
	(860,29),
	(860,30),
	(860,31),
	(860,32),
	(861,33),
	(862,34),
	(863,35),
	(864,36),
	(864,37),
	(864,38),
	(864,39),
	(864,40),
	(865,41),
	(866,42),
	(867,43),
	(868,44),
	(868,45),
	(868,46),
	(868,47),
	(870,48),
	(871,49),
	(872,50),
	(873,51),
	(873,52),
	(873,53),
	(873,54),
	(874,55),
	(875,56),
	(876,57),
	(877,58),
	(877,59),
	(877,60),
	(877,61),
	(877,62),
	(878,63),
	(879,64),
	(880,65),
	(881,66),
	(882,67),
	(882,68),
	(882,69),
	(882,70),
	(883,71),
	(884,72),
	(885,73),
	(886,74),
	(887,75),
	(887,76),
	(887,77),
	(887,78),
	(887,79),
	(888,80),
	(889,81),
	(890,82),
	(892,84),
	(892,85),
	(892,86),
	(892,87),
	(892,88),
	(893,89),
	(895,90),
	(896,91),
	(897,92),
	(898,93),
	(899,94),
	(900,95),
	(903,98),
	(905,99),
	(905,100),
	(905,101),
	(858,124),
	(923,129),
	(922,130),
	(921,131),
	(920,132),
	(919,133),
	(918,134),
	(924,135),
	(925,136),
	(927,138),
	(928,140),
	(891,141),
	(929,142),
	(930,143);

/*!40000 ALTER TABLE `itemImages` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table items
# ------------------------------------------------------------

DROP TABLE IF EXISTS `items`;

CREATE TABLE `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` char(1) CHARACTER SET latin1 DEFAULT NULL,
  `comment` varchar(100) CHARACTER SET latin1 DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `customer` int(11) DEFAULT NULL,
  `title` varchar(100) CHARACTER SET latin1 DEFAULT NULL,
  `text` text CHARACTER SET latin1,
  `author` int(11) DEFAULT NULL,
  `url` varchar(100) CHARACTER SET latin1 DEFAULT NULL,
  `portal` varchar(10) CHARACTER SET latin1 DEFAULT NULL,
  `ref` varchar(100) CHARACTER SET latin1 DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer` (`customer`),
  KEY `author` (`author`),
  KEY `type` (`type`),
  CONSTRAINT `items_ibfk_1` FOREIGN KEY (`customer`) REFERENCES `customers` (`id`),
  CONSTRAINT `items_ibfk_2` FOREIGN KEY (`author`) REFERENCES `authors` (`id`),
  CONSTRAINT `items_ibfk_3` FOREIGN KEY (`type`) REFERENCES `types` (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;

INSERT INTO `items` (`id`, `type`, `comment`, `date`, `customer`, `title`, `text`, `author`, `url`, `portal`, `ref`)
VALUES
	(841,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',565,'EuroShop 2014, Dusseldorf','Quince Retail Solutions is currently attending the world\'s leading retail trade fair EuroShop 2014, in DÃ?sseldorf Germany. The guys are there to demonstrate how QRS digital in-store solutions can help boost retail business.',11,'https://www.facebook.com/photo.php?fbid=10151869122070666','fb','10151869122070666'),
	(842,'b','QUARTER-SIZED IMAGE w/ INFO','2014-01-01 23:15:00',113,'','Yesterday we were shooting a movie at the Samsung sponsored â \"Coolste baan van Nederland\" (the coolest ice rink in the Netherlands).',261,'https://www.facebook.com/photo.php?fbid=10151880720175666','fb','10151880720175666'),
	(843,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',560,'ABN Amro Word of Tennis Tournament','Today none other than tennis legend Richard Krajicek played the Quince powered WTT Game live at the ABN AMRO World Tennis Tournament.',11,'https://www.facebook.com/photo.php?fbid=10151854263880666','fb','10151854263880666'),
	(844,'c',NULL,'2014-05-01 23:15:00',113,'Samsung','',242,'','Choose a p',''),
	(845,'f','HTC campaign-stack','2014-01-01 23:15:00',289,'HTC Specialist','Global trade communication platform in 26 languages where over  81.000 registered users in 56 countries continuously engage with HTC on product training & sales activation. Motivated by becoming a 5 star specialist by gaining stars and points to reach top ranked retail sales person of their country. Obviously Top ranked Retail wins rewards. Available on Desktop, mobile, App.',176,'','Choose a p',''),
	(846,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',568,'Fox Top Scorers','Fox Sports required a multi-media campaign of print posters and website for their Top-Scorers program.',131,'','fb',''),
	(847,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',113,'','Quince IDU has developed a holographic presentation showing the highlights of the new Samsung Solid State Drive 830 Series.',242,'','vim','38566969'),
	(848,'c',NULL,'2014-05-01 23:15:00',360,'Holland Casino','',242,'','Choose a p',''),
	(849,'b','QUARTER-SIZED IMAGE w/ INFO','2014-01-01 23:15:00',108,'We are Quincers','These fruits are Quinces.',242,'http://www.pinterest.com/pin/485896247268806842','pin','485896247268806842'),
	(850,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',270,'Helden van Hi Casefilm','',242,'','vim','66137605'),
	(851,'f','CTouch camp-stack','2014-01-01 23:15:00',561,'','',NULL,'','',''),
	(852,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',360,'Holland Casino Vakantie','A fresh and bright visual alternative approach to, the more commonly mature and luxurious, casino aesthetic.',115,'','fb',''),
	(853,'b','QUARTER-SIZED IMAGE w/ INFO','2014-01-01 23:15:00',586,'Behind the Scenes','It is our responsibility to take care of our environment. There\'s no actual small figures cleaning the the mess we leave behind.',242,'http://www.pinterest.com/pin/485896247268806828','pin','485896247268806828'),
	(855,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',108,'','From all of us at Quince, we wish you happy holidays and all the best for 2014!',242,'','vim','85926446'),
	(856,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',360,'Holland Casino Vakantie','A fresh and bright visual alternative approach to, the more commonly mature and luxurious, casino aesthetic.',115,'','fb',''),
	(857,'b','QUARTER-SIZED IMAGE w/ INFO','2014-01-01 23:15:00',108,'Jeffrey in Lingo','Last night Jeffrey and his brother Mitchel took part in the Dutch tv game show Lingo. ',261,'http://www.uitzendinggemist.nl/afleveringen/1391351','fb','10151817863075666'),
	(858,'c',NULL,'2014-01-01 23:15:00',257,'goodyear','',242,'','',NULL),
	(859,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',289,'Dreamoc content creation for HTC','Quince Interactive Display Units created a holographic Dreamoc presentation of the HTC Desire HD.',242,'','vim','39403822'),
	(860,'f','Samsung Camp-stack','2014-01-01 23:15:00',113,'Samsung \'Shop in shop\'','Samsung sought to create a personalized \'premium\' brand experience with in their various third-party retail environments. We took care of the branding and executed an extensive photo-shoot to bring life into what can sometimes be a cold technical shopping experience.',NULL,'','',''),
	(861,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',113,'Samsung \'Convergence\'','Samsung\'s retail needs a look that showcases the interoperability of its many products in your home.  This is our proposed new look.',199,'','fb',''),
	(862,'b','QUARTER-SIZED IMAGE w/ INFO','2014-01-01 23:15:00',108,'Welcome Jan','A new colleague has started at Quince Amsterdam. His name is Jan and he will be working as a software engineer.',319,'https://www.facebook.com/photo.php?fbid=10151669526830666','fb','10151669526830666'),
	(863,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',270,'HiJack','',242,'','vim','43682084'),
	(864,'f','Telefort camp-stack','2014-01-01 23:15:00',577,'','',NULL,'','',''),
	(865,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',108,'Supersoaker battle','Friday afternoon, sun, drinks and super soakers. What\'s not to like? Enjoy the summer weekend everyone!',242,'https://www.facebook.com/photo.php?fbid=10151480910580666','fb','10151480910580666'),
	(866,'b','QUARTER-SIZED IMAGE w/ INFO','2014-01-01 23:15:00',108,'The Quince band','Just when you thought the day could have used a bit more play next to all the work, the Quince band starts rehearsing...',340,'https://www.facebook.com/photo.php?fbid=10151731915295666','fb','10151731915295666'),
	(867,'c',NULL,'2014-01-01 23:15:00',568,'Fox sports','',242,'','',NULL),
	(868,'f','Samsung event camp-stack','2014-01-01 23:15:00',113,'Samsung Sensation','',NULL,'','',''),
	(869,'h','QUARTER-SIZED TEXT-BLOCK CELL w/ NO INFO & USER INFO IN OFF-STATE','2014-01-01 23:15:00',108,'Quince Rocks!','Just when you thought the day could have used a bit more play next to all the work, the Quince band starts rehearsing...',340,'https://www.facebook.com/photo.php?fbid=10151731915295666','fb','10151731915295666'),
	(870,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',565,'QRS Touch','Quince Interactive Retail Solutions has developed an interactive photo booth that has been in demand ever since its first release... ',242,'','vim','75781009'),
	(871,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',108,'Fred &amp; Daniel working the grill!','Today we were treated to delicious, yummy, good old fashioned hamburgers with everything on it for lunch. Kudos to chefs, Daniel and Frederik, for this very tasty initiative!',340,'https://www.facebook.com/photo.php?fbid=10151810418470666','fb','10151810418470666'),
	(872,'b','QUARTER-SIZED IMAGE w/ INFO','2014-01-01 23:15:00',108,'Love - take what you need','Somebody got creative and happily shared the result with her colleagues...',261,'https://www.facebook.com/photo.php?fbid=10151694285220666','fb','10151694285220666'),
	(873,'f','Millionaire-Fair Samsung camp-stack','2014-01-01 23:15:00',113,'','',NULL,'','',''),
	(874,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',113,'Oculus Rift Polyrider Promo','',254,'','vim','77117922'),
	(875,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',108,'Gamer\'s Delight','We cant wait to get our hands into the SDK and make this thing do magic!',199,'https://www.facebook.com/photo.php?fbid=10151553932155666','fb','10151553932155666'),
	(876,'b','QUARTER-SIZED IMAGE w/ INFO','2014-01-01 23:15:00',108,'Welcome Gian-Luca','He has been working at Quince for over a month now and for some unknown reason...',319,'https://www.facebook.com/photo.php?fbid=10151681522185666','fb','10151681522185666'),
	(877,'f','iTRE branding camp-stack','2014-01-01 23:15:00',108,'','',NULL,'','',''),
	(878,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',360,'Holland Casino Interactive Projection Mapping','',254,'','vim','60837705'),
	(879,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',108,'Lunch time!','What\'s cooking at Quince today? Thanks to Jamel we\'re having shwarma for lunch!',340,'https://www.facebook.com/photo.php?fbid=10151552064070666','fb','10151552064070666'),
	(880,'b','QUARTER-SIZED IMAGE w/ INFO','2014-01-01 23:15:00',108,'Hearing Voices','Recording a voice-over for another great Quince video production. It looks like this!',242,'https://www.facebook.com/photo.php?fbid=10151558387050666','fb','10151558387050666'),
	(881,'c',NULL,'2014-01-01 23:15:00',270,'Hi KPN','',242,'','',NULL),
	(882,'f','Samsung Galaxy S2 event camp-stack','2014-01-01 23:15:00',113,'','',NULL,'','',''),
	(883,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',113,'','All Samsung divisions were present at this business-to-business event, showing the latest smart solutions that make life more enjoyable.',242,'','vim','45238850'),
	(884,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',108,'Quince rebranding','',339,'https://www.facebook.com/photo.php?fbid=10151718746400666','fb','10151718746400666'),
	(885,'b','QUARTER-SIZED IMAGE w/ INFO','2014-01-01 23:15:00',108,'Quince Halloween 2013','One hellish party of the damned.',261,'https://www.facebook.com/photo.php?fbid=10151669657185666','fb','10151669657185666'),
	(886,'c',NULL,'2014-01-01 23:15:00',451,'Philips','',242,'','',NULL),
	(887,'f','Netherland Schoon camp-stack','2014-01-01 23:15:00',586,'','',NULL,'','',''),
	(888,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',113,'Samsung Galaxy S4 lancering event','',242,'','vim','66137688'),
	(889,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',108,'Baked Quince!','Baked Quince, it looks like this. Kudos to Theo for this very special treat!',327,'https://www.facebook.com/photo.php?fbid=10151647722395666','fb','10151647722395666'),
	(890,'b','QUARTER-SIZED IMAGE w/ INFO','2014-01-01 23:15:00',108,'Welcome Carla','She is doing an internship at Quince, helping out the development team as a part of her study in web development.',319,'https://www.facebook.com/photo.php?fbid=10151681614700666','fb','10151681614700666'),
	(891,'c',NULL,'2014-01-01 23:15:00',565,'QRS','',242,'','',NULL),
	(892,'f','Samsung beauty-pageant camp-stack','2014-01-01 23:15:00',113,'','',NULL,'','',''),
	(893,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',270,'','HiJack and making of Hi Commercial',242,'','vim','66137605'),
	(894,'h','QUARTER-SIZED TEXT-BLOCK CELL w/ NO INFO & USER INFO IN OFF-STATE','2014-01-01 23:15:00',108,'','Having some good old virtual Friday afternoon fun with the Oculus Rift virtual reality headset. Enjoy the weekend everyone!',254,'https://www.facebook.com/photo.php?fbid=10151553932155666','fb','10151553932155666'),
	(895,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',108,'','What\'s wrong with this Friday afternoon picture? Absolutely nothing. The good old yellow notes sessions are still an important part of the creative process.',340,'https://www.facebook.com/photo.php?fbid=10151493244935666','fb','10151493244935666'),
	(896,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',108,'Friday Afternoon Social!','What is wrong with this Friday afternoon picture? Absolutely nothing. The good old yellow notes sessions are still an important part of the creative process.',199,'https://www.facebook.com/photo.php?fbid=10151396704885666','fb','10151396704885666'),
	(897,'b','QUARTER-SIZED IMAGE w/ INFO','2014-01-01 23:15:00',108,'','We knew there was something missing at our coffee break this morning, but we did not have a clue what exactly. Gladly our birthday boy Julian did...',261,'https://www.facebook.com/photo.php?fbid=10151527655645666','fb','10151527655645666'),
	(898,'c',NULL,'2014-01-01 23:15:00',270,'KPN','',242,'','',NULL),
	(899,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',270,'Live Device Tables At KPN','How to get the most out of self-service on the shop floor. With Live Device Tables powered by Quince Interactive Display Units.',242,'','vim','43094863'),
	(900,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',113,'Samsung Smart Portal','An impression of a stylish touch screen application for in-store use, developed by Quince Amsterdam...',242,'','vim','41848307'),
	(903,'c',NULL,'2014-04-28 15:22:16',289,'HTC','',242,'','',NULL),
	(905,'f',NULL,'2014-04-28 15:47:50',451,'Philips Retail Academy','Support Philips trainers worldwide in training retail staff about Philips well-being products through state-of-the-art training materials with clear story-telling.\r\nThe Philips Retail Academy platform offers the opportunity to share,customize and download training materials in different formats: Flash, iOS and Android, Powerpoint and SCORM. Easily localized for any market, into any language while the state-of-the-art look &amp; feel consistent.',110,'','',NULL),
	(918,'c',NULL,'2014-04-30 21:37:18',277,'Apple','',242,'','Choose a p',NULL),
	(919,'c',NULL,'2014-04-30 21:40:43',594,'Gamma','',242,'','Choose a p',NULL),
	(920,'c',NULL,'2014-04-30 21:45:45',510,'Green Hill','',242,'','Choose a p',NULL),
	(921,'c',NULL,'2014-04-30 21:49:19',460,'Media Markt','',242,'','Choose a p',NULL),
	(922,'c',NULL,'2014-04-30 21:52:41',560,'ABNAMRO','',242,'','Choose a p',NULL),
	(923,'c',NULL,'2014-04-30 21:58:59',561,'CTOUCH','',242,'','Choose a p',NULL),
	(924,'c',NULL,'2014-04-30 22:14:54',214,'Tommy Hilfiger','',242,'','Choose a p',NULL),
	(925,'c',NULL,'2014-04-30 22:15:40',577,'Telfort','',242,'','Choose a p',NULL),
	(927,'j',NULL,'2014-05-01 18:58:05',289,'HTC Specialist Promo','Motivated by becoming a 5 star specialist by gaining stars and points to reach top ranked retail sales person of their country. Obviously Top ranked Retail wins rewards.',263,'','vim','87564222'),
	(928,'a',NULL,'2014-05-02 09:51:31',510,'Dex Elmont - European Champion 2014','Last weekend Green Hill Sport hero Dex Elmont became European Champion Judo and was awarded a gold medal at the championships in Montpellier. Dex was wearing a gi (that\'s a judo suit) which was designed by Quince. Obviously, just as Dex, we like this. A lot!',106,'https://www.facebook.com/photo.php?fbid=10151992236900666','fb',NULL),
	(929,'c',NULL,'2014-05-05 14:25:19',547,'Tera Data','',242,'','Choose a p',NULL),
	(930,'c',NULL,'2014-05-07 09:56:23',573,'Client logo Loveland ','',242,'','Choose a p',NULL);

/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table itemTags
# ------------------------------------------------------------

DROP TABLE IF EXISTS `itemTags`;

CREATE TABLE `itemTags` (
  `item` int(11) DEFAULT NULL,
  `tag` int(11) DEFAULT NULL,
  KEY `item` (`item`),
  KEY `tag` (`tag`),
  CONSTRAINT `itemtags_ibfk_1` FOREIGN KEY (`item`) REFERENCES `items` (`id`),
  CONSTRAINT `itemtags_ibfk_2` FOREIGN KEY (`tag`) REFERENCES `tags` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `itemTags` WRITE;
/*!40000 ALTER TABLE `itemTags` DISABLE KEYS */;

INSERT INTO `itemTags` (`item`, `tag`)
VALUES
	(841,1),
	(845,2),
	(905,3),
	(927,8),
	(927,6),
	(927,2),
	(927,7),
	(928,11),
	(928,12);

/*!40000 ALTER TABLE `itemTags` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table tags
# ------------------------------------------------------------

DROP TABLE IF EXISTS `tags`;

CREATE TABLE `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tag` varchar(50) CHARACTER SET latin1 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;

INSERT INTO `tags` (`id`, `tag`)
VALUES
	(1,'qrs'),
	(2,'htc'),
	(3,'Philips'),
	(4,'quince'),
	(6,'e-learning'),
	(7,'training'),
	(8,'vimeo'),
	(10,'Branding'),
	(11,'clothing'),
	(12,'rebranding');

/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table types
# ------------------------------------------------------------

DROP TABLE IF EXISTS `types`;

CREATE TABLE `types` (
  `type` char(1) CHARACTER SET latin1 NOT NULL DEFAULT '',
  `name` varchar(100) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;

INSERT INTO `types` (`type`, `name`)
VALUES
	('a','portrait-sized image w/ info clickthru'),
	('b','quarter-sized image w/ info'),
	('c','quarter-sized client-logo w/ no info'),
	('f','full-sized multi image-carousel (campaing stack)'),
	('h','quarter-sized text-block w/ no info'),
	('j','quarter-sized video player cell');

/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
