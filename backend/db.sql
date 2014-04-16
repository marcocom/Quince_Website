-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 16, 2014 at 01:53 PM
-- Server version: 5.5.25
-- PHP Version: 5.4.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `quince`
--

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `job` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `useFbImage` tinyint(1) DEFAULT NULL,
  `facebook` varchar(100) DEFAULT NULL,
  `linkedin` varchar(100) DEFAULT NULL,
  `mobile` varchar(100) DEFAULT NULL,
  `details` text,
  `section` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=483 ;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id`, `name`, `job`, `email`, `useFbImage`, `facebook`, `linkedin`, `mobile`, `details`, `section`) VALUES
(7, 'Martijn Thieme', NULL, 'martijn@quince.nl', 1, '\n      https://www.facebook.com/martijnt?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=2777140&locale=en_US&trk=tyah\n    ', '', '', 'Project leader'),
(9, 'Patrick Weijers', NULL, 'patrick@quince.nl', 0, '', '', '', '', 'Development'),
(11, 'Remco Schoos', NULL, 'remco@quince.nl', 0, '\n      https://www.facebook.com/schoos?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=9568252&locale=en_US&trk=tyah\n    ', '', '\n      Entrepreneur. Creating tangible things from abstract ideas. Gadget freak, technology enabled solutions. Making things practical. Playful. Making cool stuff work in retail. Enjoying the Quince team and colleagues. Proud to be Quince. Happy with the dedication of our colleagues. New stuff and new ideas are always popping in my head, always busy writing ideas down to use them whenever and wherever possible.\n Keywords: All of the above\n    ', 'Quince Retail Solutions'),
(19, 'Jeroen van Delft', NULL, 'jeroen@quince.nl', 1, '\n      https://www.facebook.com/jeroenvandelft?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=25128808&locale=en_US&trk=tyah\n    ', '', '\n      Transforming functional wishes of clients into working solutions, thatâ€™s the daily challenge for this long-time developer. He also programs stuff in his spare time, which resulted for instance in a neat film planner to accommodate a hobby he shares with several friends. One day he would really love to see the introduction of an actual Star Trek style replicator. Still being the practical guy: â€œThis will solve a lot of problems Ã¡nd save a lot of time.â€\n        Keywords: movies, technology, solutions\n    ', 'Development'),
(103, 'Mark Rondema', NULL, 'mark@quince.nl', 0, '', '\n      http://www.linkedin.com/profile/view?id=29007584&locale=en_US&trk=tyah\n    ', '', '\n      I''m the guy who fixes things. I''m the guy who makes magic from al kind of materials. But most of all I''m the guy who always keeps smiling :-)Â \n        Keywords: shooting pool, sailing, devising technical solutions\n    ', 'Traffic'),
(104, 'Robin Kooiker', NULL, 'robin@quince.nl', 1, '\n      https://www.facebook.com/robin.kooiker.5?fref=ts\n    ', '', '', '\n      My work at Quince includes devising and designing new campaigns and designing all kinds of things in 2D and 3D, ranging from touchdisplays to artwork. I like it so much, even in my spare time I design stuff. What inspires me is also about design, namely interior design and furniture design. But of course thereâ€™s more thatâ€™s important to me: Marieke, Daan and Melle, Ajax, watching movies at home, cooking. Quince has made me who I am as a designer and a person. Yes, the Quince shape is pretty much there (literal and figurativeJ).\n        Keywords: design, family, Quince\n    ', 'Design / DTP'),
(105, 'Charles Meijboom', NULL, 'charles@quince.nl', 1, '\n      https://www.facebook.com/charles.meijboom?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=8861802&locale=en_US&trk=tyah\n    ', '', '\n      This Quincer knows how to develop a complete campaign in no time. Loves to create and have fun, at the office and at home. Family man. Proud father of two. Care taker. Thinking up practical solutions. Typical Amsterdam humour. Superb karaoke singer. Dedication. Big heart. Keywords: Ajax, responsible, jokes\n    ', 'Design / DTP'),
(106, 'Sjoerd Liefting', NULL, 'sjoerd@quince.nl', 1, '\n      https://www.facebook.com/sjoerd.liefting?fref=ts\n    ', '\n      http://www.linkedin.com/pub/sjoerd-liefting/5/73a/865\n    ', '', '\n      A good visual tells me more than a thousand words. I love new, cool concepts, clean designs and open minded clients. When not at work I like to travel and see new places, bike around in the city, hang out on the beach, listen to new music, challenge myself in sports, have a good talk and laugh with friends and play with my always enthusiastic kids. Keywords: visual, new, play\n    ', 'Concept / Design'),
(109, 'Diederick Koekkoek', NULL, 'diederick@quince.nl', 1, '\n      https://www.facebook.com/diederick.koekkoek?fref=ts\n    ', '', '', '\n      My typical day at Quince usually starts with â€¦ â€˜mmm, wouldnâ€™t it be great/smart/fun/epic if â€¦â€™ then a lot of â€˜tiktiktiktikâ€¦ blablalablaâ€¦ tiktikâ€¦ &$@#*!... del del. Tik, blabla and hopefully Ahaaaa!â€™  \n        Keywords: curiosity, anomalies, synergy, wonder\n    ', 'Concept / Copy'),
(110, 'Frans Deckers', NULL, 'frans@quince.nl', 0, '', '\n      http://www.linkedin.com/profile/view?id=44760311&locale=en_US&trk=tyah\n    ', '', '\n      Graphic design, copy, user interface design, project management, storytelling, account management, coaching. Since I started at Quince in 2002, Iâ€™ve explored all my fields of interest. At Quince there are no limits in doing what you want to do. This made me into a creative with a unique set of skills. Just like my colleagues who feel like brothers and sisters to me. \n        With my fresh energy Iâ€™ll boost any campaign that is meant to cause a change; whether it is in the field of e-learning, branding or retail activation. Bang!\n        Keywords: leadership, freshness, making a difference\n    ', 'Digital CoÃ¶rdinator'),
(115, 'Coen Schaafsma', NULL, 'coen@quince.nl', 1, '\n      https://www.facebook.com/coen.schaafsma?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=30840735&locale=en_US&trk=tyah\n    ', '', '\n      Quince feels like a family business. That''s why we work so well together. To make a long story short: pride, expertise, work hard, nice work, inspiration, respect, learn, friendship, openness, honesty, trust, pleasure, unity, family, a smile and a cold beer.\n        Keywords: all of the above\n    ', 'Design / DTP'),
(131, 'David Peperkamp', NULL, 'david@quince.nl', 1, '\n      https://www.facebook.com/david.peperkamp?fref=ts\n    ', '', '', '\n      Quince is together and so am I. At the same time Quince is being yourself and so am I. To me it is also one big playground for creating beautiful things. To enter a room with a team and come out with something surprising. I love that. \n        My inspiration comes from the empty plan â€“ when thereâ€™s nothing yet. My work includes campaigns, brand IDâ€™s, retail activation, e-learning, displays and much more.\n        Keywords: challenge, inspire, innovate\n    ', 'Concept / Design'),
(136, 'Olaf Weijers', NULL, 'olaf@quince.nl', 0, '', '', '', '\n      Of my activities, which encompass executing all email communications for our clients within Quince, I like testing the best. Just breaking sites and tools apart and going over every option in detail.\n        Keywords: games (rpgâ€™s), Japan, friends\n    ', 'Development'),
(138, 'Sander Scherphuis', NULL, 'sander@quince.nl', 0, '\n      https://www.facebook.com/sander.scherphuis?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=60631940&locale=en_US&trk=tyah\n    ', '', '\n      Leader of the Quince pack. Passionate motivator. Event master. Entrepreneur with heart and soul. Proud dad. Someone you can count on. Always aims for the highest score in work and life. Creating impressive concepts and campaigns together makes him happy. Never gives up anddoesnâ€™t believe in â€˜cannotâ€™. Always respectful and truly playful. Loves to relax on the water. Key words: never stop learning\n    ', 'Director'),
(147, 'Ewout Thieme', NULL, 'ewout@quince.nl', 1, '\n      https://www.facebook.com/ewout.thieme?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=93738766&locale=en_US&trk=tyah\n    ', '', '\n      Has joined the Quince development team working as a Java/Groovy/Grails developer, building web and Android applications but also handling IT tasks that require Unix/Linux knowledge, acting as a bridge between the boundaries of development and system administration.\n        Enjoys playing and experimenting with bleeding edge technology, playing computer games, snowboarding, watching movies and listening to music.\n    ', 'Development'),
(153, 'Jessica Dekker', NULL, 'jessica@quince.nl', 1, '\n      https://www.facebook.com/jessica.dekker.39?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=152502742&locale=en_US&trk=tyah\n    ', '', '\n      During workdays dancing Queen Jessica is responsible for several accounts. And she always delivers her absolute best. In her spare time she loves to travel, have fun with friends and family, work out and of course dance, dance, dance. Preferably all night long. Key words: accurate, creativity, dedication\n    ', 'Project leader'),
(167, 'Tulay Kocaoglu', NULL, 'tulay@quince.nl', 1, '\n      https://www.facebook.com/tulay.amama?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=211547840&locale=nl_NL&trk=tyah\n    ', '', '\n      Hey! I am Tulay, digital designer. I design websites, e-mail templates, banners and so on. Recently Iâ€™ve started learning how to make videos in AfterEffects. Iâ€™m doing pretty well and enjoying it a lot. Animating is so much fun! Especially when you have created something yourself that comes alive. \n        Gaming is a great hobby of mine, both on pc or console. I am also a passionate Star Wars and kimono collector. Finally, I am a very creative kind of girl and in a good mood every single day.\n        Keywords: cats, kimonos, games\n    ', 'Digital design'),
(176, 'James Guy', NULL, 'james@quince.nl', 0, '\n      https://www.facebook.com/james.guy.967?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=6695332&locale=en_US&trk=tyah\n    ', '+31629497283', '\n      Passionate account manager who during week days is inspired by his colleagues and clients to create solutions for goals which are yet undefined â€¦ So Jamesâ€™ maxim â€œDoing the impossible by doing itâ€ is not that surprising. Neither that Mandela is his inspiration. On Saturdays he devotes his free time as a soccer team manager who guides young talented football players through the adventure called professional soccer. What does it mean to be a professional player? And what hurdles do these youngsters need to take?\n    ', 'Project leader'),
(195, 'Wout Niebuur', NULL, 'wout@quince.nl', 1, '\n      https://www.facebook.com/wout.niebuur?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=35419618&locale=en_US&trk=tyah\n    ', '', '\n      Work hard to play hard. Some people call me a deadline junky. I just like to make the impossible possible:-)\n        Keywords: work, play, work, play\n    ', 'Events'),
(199, 'Djamel de Ligt', NULL, 'djamel@quince.nl', 1, '\n      https://www.facebook.com/djameldeligt?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=4610113&trk=nav_responsive_tab_profile_pic\n    ', '+31624657437', '\n      Globe trotter, single fin surfer, music lover and trends connoisseur. Operates in print media but is also known to develop or co-create just about everything from logos to websites and full-blown campaigns. If not at Quince, you can find him in the North Sea at Scheveningen, or in his beloved California, surfing the Great Ocean or hanging around on the beach.\n        Keywords: surf dude, music, world\n    ', 'Concept / Design'),
(204, 'Solko Detmers', NULL, 'solko@quince.nl', 1, '\n      https://www.facebook.com/legologic?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=12041634&locale=en_US&trk=tyah\n    ', '+31612595906', '\n      Doing IT at Quince has been truly challenging over the last couple of years and has taught me to think outside of the box. My work is best described as helping out with all the technicalities in the background, thus enabling part of the creative processes within Quince and showcasing them to the world. My IT philosophy starts with enabling people to work in a pleasant working environment. it starts with peopleâ€™s needs and is supported with technical solutionsâ€¦ in that order!\n        Keywords: respect all living things, capture beauty or oddness using photography, personal growth\n    ', 'Datacenter / ICT'),
(207, 'Tjeerd van der Hulst', NULL, 'tjeerd@quince.nl', 0, '', '\n      http://www.linkedin.com/profile/view?id=15562487&locale=en_US&trk=tyah\n    ', '', '\n      Tjeerd is me. I love to play the guitar, draw funny stuff, cook, read, and after a few beers you might catch me trying to drive people crazy by doing card tricks. Nature never ceases to amaze me. I have a strong interest in the human mind and all its mysteries and love to ponder the ineffable.Â \n        At Quince I play around with all kinds of digital design and animation. In the meantime Iâ€™m actually an undercover field researcher of abnormal groups of crazy people in their own habitat.\n        Keywords: music, nature, imagination\n    ', 'Digital design'),
(224, 'Gabor Foldvari', NULL, 'gabor@quince.nl', 0, '', '\n      http://www.linkedin.com/profile/view?id=75219640&locale=en_US&trk=tyah\n    ', '', '\n      Living on the edge, Born to be Quincer, KPN for life\n        Keywords: nature, traveling, expat community\n    ', 'Development'),
(233, 'Jeffrey Schulz', NULL, 'jeffrey@quince.nl', 1, '\n      https://www.facebook.com/jeffrey.schulz.7?fref=ts\n    ', '', '', '\n      This well-organised and deadline driven Quincer loves to create for the creatives. With a smile on his face he juggles through the day to get every job done. And heâ€™s doing so successfully. So there must be some truth in Jeffreyâ€™s comparison: â€œTraffic is like juggling, making sure no ball will drop.â€Â  J\n        Key words: daughter, deadline, traffic\n    ', 'Traffic'),
(241, 'Daniel Levitton', NULL, 'daniel@quince.nl', 1, '\n      https://www.facebook.com/levitton?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=55936184&locale=en_US&trk=tyah\n    ', '', '\n      By day an all-round designer @ Quince. By night a DJ and party organizer. 24 hours per day a sporty man who loves design and loves to create beautiful things.\n        Key words: music, motorcycle, design, sport\n    ', 'Design / DTP'),
(242, 'Jeroen van der Horst', NULL, 'jeroenh@quince.nl', 1, '\n      https://www.facebook.com/jeroen.vanderhorst.90?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=36825708&locale=en_US&trk=tyah\n    ', '+31615642775', '\n      Hi! Because of my love and fascination for photography and film, I have founded Quince DOK, the photography and video subsidiary of Quince Amsterdam. We add more value to the retail and marketing solutions that Quince is known for. By deploying innovative techniques, different tools and a wide range of technical and creative experts we make even the craziest visual ideas reality.\n        Keywords: Quince DOK, photography, film\n    ', 'Project leader'),
(250, 'Frederik van Otterlo', NULL, 'frederik@quince.nl', 0, '', '\n      http://www.linkedin.com/profile/view?id=22831013&locale=en_US&trk=tyah\n    ', '', '\n      One of the original metal heads in the studio. Creates still images and animates them on request. Heâ€™s into snowboarding, wakeboarding and scuba diving and is reputed to know a thing or two about Kung Fu, but he refuses to call any of these sports extreme. A silly joke is never lost on him. He much appreciates telling one himself or enjoying someone elseâ€™s sense of silly humor.\n        Keywords: silly jokes, (frozen) water sports, metal music\n    ', 'Digital design'),
(252, 'GyÃ¶rgy Tolnay-KnefÃ©ly', NULL, 'gyuri@quince.hu', 1, '\n      https://www.facebook.com/Gypapa?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=23895378&locale=en_US&trk=tyah\n    ', '', '\n      Transparent and open minded. A dreamer, a leader, a thinker and a father who strives for better understanding of the world and itâ€™s problem behind the problems to make a change. A change that connects people! Next to Quince, he can easily be found on random playgrounds of Budapest with his kids or on a bike somewhere downtown. If you call, he wonâ€™t answer... but he will call you back!\nKeywords: lead, dream, think\n    ', 'Director Hungary'),
(254, 'Sander Sneek', NULL, 'sanders@quince.nl', 1, '\n      https://www.facebook.com/sander.sneek?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=13297711&locale=en_US&trk=tyah\n    ', '', '\n      I am an interactive developer who likes to tinker with new technologies / gadgets while listening to the best band ever: Underworld. Blowing off some steam with making music, wakeboarding, running and spending quality time with the fam :-).\n        Keywords: King Of Snake, family, technology, music\n    ', 'Digital / Development'),
(261, 'Ben De Dood', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(262, 'Eva Gransier', NULL, 'eva@quince.nl', 1, '\n      https://www.facebook.com/eva.gransier?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=32362420&locale=en_US&trk=tyah\n    ', '', '\n      Always busy, love parties and make people happy. It made so much sense to incorporate that in my work! At Quince Events each day is different except for the colleagues who are invariably super nice and crazy, but in a good way. I really appreciate the opportunities for self-development and the amount of self-responsibility at Quince, must be one of the many reasons I still love my job!\n        Keywords: shopping, organize, events\n    ', 'Event coÃ¶rdinator'),
(263, 'Martijn Bon', NULL, 'martijnb@quince.nl', 0, '', '', '', '\n      All-round happy worker. Always-studying-linguistic-healthy-eating-festival-tiger.\n        Keywords: 3D, print, digital, interaction design\n    ', 'Concept / Design'),
(265, 'Rene van Bakel', NULL, 'rene@quince.nl', 0, '', '\n      http://www.linkedin.com/profile/view?id=49775719&authType=NAME_SEARCH&authToken=RUAz&locale=e', '', '\n      Iâ€™m a web developer. In addition I often give advice in other project about possible solutions and I lead a number of projects. Colleagues tell me they think I am â€˜sweetâ€™ and â€˜caringâ€™. That must be the reason I donâ€™t shy from household chores, not even at Quince. My inspiration comes from my wife Amanda and my daughter Andrea, my natural curiosity about how things/people/animals work and from people who do what feels good, no matter what other people think.\n        Keywords: family, care, curiosity\n    ', 'Development'),
(268, 'Linda Lodewijk', NULL, 'linda@quince.nl', 1, '\n      https://www.facebook.com/linda.lodewijk.7?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=102394608&locale=en_US&trk=tyah\n    ', '', '\n      This Quince lady is good with words. She loves to write all sorts of copy, from ad campaigns and corporate texts to scripts and voice overs. Has a thing for vampires and Dutch sayings since childhood. Huge soft spot for ginger tomcats. Loves to be at the water(side) and watch movies. A city girl that finds rest in nature and being with loved ones. Playful and persistent nature. Curious, committed, old school rap.\n    ', 'Copy'),
(278, 'Lotte de Jong', NULL, 'lotte@quince.nl', 0, '\n      https://www.facebook.com/lotte.dejong.71?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=133013657&locale=en_US&trk=tyah\n    ', '', '\n      Working at Events is challenging to this born and raised Egmond beach babe, who nowadays enjoys living close to Beach South (Strand Zuid) in Amsterdam. â€œEach day is full of surprises, you never know what to expect. I make a lot of fun with my crazy colleagues and learn new things every single day â€¦ on the most various subjects.â€ J\n        Key words: cooking, festivals, friends\n    ', 'Event coÃ¶rdinator'),
(282, 'Vincent van der Laan', NULL, 'vincent@quinceretailsolutions.com', 0, '', '\n      http://www.linkedin.com/profile/view?id=5390579&locale=en_US&trk=tyah\n    ', '+31657934433', '\n      I love translating issues into goals and actions; bringing together online and offline strategy managed from one central system.\n        Keywords: people, cooking, new technology\n    ', 'Quince Retail Solutions'),
(319, 'Lisette Koot', NULL, 'lisette@quince.nl', 1, '\n      https://www.facebook.com/lkoot?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=72345720&locale=en_US&trk=tyah\n    ', '', '\n      Money, money, money â€¦\n        My work at Quince involves a lot of numbers and bills. And although my job description isnâ€™t well known by my colleagues, they do like it a lot when their salary gets paid in time.\n        Iâ€™m a real outdoor kind of Quincer enjoying (in no particular order) food, music, fun with friends, festivals, travelling, sporting â€¦ just doing something!!!\n        Reading good books relaxes me.\n        Key words: fun, finance, family\n    ', 'Finance'),
(320, 'Doruk Eker', NULL, 'doruk@quince.nl', 1, '\n      https://www.facebook.com/dorukeker?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=8730360&locale=en_US&trk=tyah\n    ', '+31642378582', '\n      I eat, drink, code, debug, research, try to inspire, be inspired, work out, chat and have funâ€¦  and all that under the same roof. I am the non-Dutch Amsterdammer working happily at Quince. I develop interactive experiences for online, offline and mobile.\n        Keywords: sports, music, art\n    ', 'Digital / Development'),
(321, 'marcelk', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(323, 'Miranda Kasius', NULL, 'miranda@quince.nl', 1, '\n      https://www.facebook.com/mirandakasius?fref=ts&ref=br_tf\n    ', '\n      http://www.linkedin.com/profile/view?id=224798130&locale=nl_NL&trk=tyah\n    ', '', '\n      My work at Quince? I can handle 56 countriesâ€¦ and still counting. Being the peanutbutter between the sandwich of our designers & developers and all these foreign countries makes me feel on top of the world! Inside and outside of the office I am a happy girl who loves to enjoy life! I like to spend my spare time being creative; cook & bake, play with make-up, make handmade stamps, create lampshades, face/bodypainting. You can make me happy with a themed dress-up party and a great glass of wine served with some nice food!\n        Keywords:Â happy, positive, YOLO!\n    ', 'Project leader'),
(324, 'sandersc', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(325, 'Jamel van Laarhoven', NULL, 'jamel@quince.nl', 1, '\n      https://www.facebook.com/jamel.vanlaarhoven?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=126038616&locale=en_US&trk=tyah\n    ', '', '\n      At Quince Events I manage projects from A to Z. I love to add details for the final  touch, am quite used to working in the weekends (comes with the job) and would rather skip the mornings if possible (which is not the case). In my spare time I like to kitesurf in the summer or snowboard in the winter. Work hard, play hard. Thatâ€™s what they say, right?\n        Keywords: hotel lobbies, cocktails, audio visual products\n    ', 'Event coÃ¶rdinator'),
(327, 'Theodoros Papadopoulos', NULL, 'theodoros@quince.nl', 0, '', '', '', '\n      This Greek guy is part of the Quince development team, participating in the technical design and implementation of various software projects. Loves doing the â€˜non common - non trivialâ€™, both in work and in life, when possible. Deep interest in history, philosophy, human development, engineering sciences and spiritual traditions globally.\n        Keywords: Know-the-natural-order\n    ', 'Development'),
(333, 'Julian Gallimore', NULL, 'julian@quince.nl', 1, '\n      https://www.facebook.com/julian.gallimore.5?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=73022006&locale=en_US&trk=tyah\n    ', '', '\n      I cannot tell you where I''m from, because I grew up a bit everywhere. What I can tell you is that I''m enthusiastic and passionate about new techniques and developments in programming. Here at Quince, I work a lot on interactive displays, developing our backend system that manages our interactive applications. I also do some front end development, creating mobile friendly web applications. Outside of work, my curiosity takes me to countries I haven''t seen yet. Besides that, I love watching movies and playing games, and on those few sunny days that we get here, nothing can stop me from being outdoors.\n        Key words: Development, games, outdoors\n    ', 'Digital / Development'),
(335, 'bartva', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(337, 'Benjamin Weijers', NULL, 'benjamin@quince.nl', 0, '', '\n      http://www.linkedin.com/profile/view?id=100119952&locale=en_US&trk=tyah2\n    ', '', '\n      Supporting, monitoring, testing all kinds of software related matters and improving workflow processes, thatâ€™s what gets Benjamin through the average Quince working day. Outside the office  this tall guy keeps the beaches and the waters  safe by acting as a lifeguard. Heâ€™s also a certified member of the Red Cross Events Team, so rest assured you can feel pretty safe with this guy around!\n        Keywords: improvements, helping each other, lighten the burden\n    ', 'Development'),
(338, 'Ryan van Esch', NULL, 'ryan@quince.nl', 1, '\n      https://www.facebook.com/ryan.vanesch.7?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=131375029&locale=en_US&trk=tyah\n    ', '', '\n      Iâ€™m versatile on every project big or small, from A to Z. Working in the inspiring Quince events team is like being busy with a hobby, which gives me a tremendous amount of positive energy. I have an eye for detail. Do it right or donâ€™t do it all. And in the meantime enjoy life! J\n        Keywords: teamwork, versatile, open minded, sport\n    ', 'Events'),
(339, 'guido', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(340, 'Joyce de Groot', NULL, 'joyce@quince.nl', 0, '', '\n      http://www.linkedin.com/profile/view?id=88668206&locale=en_US&trk=tyah\n    ', '', '\n      Good afternoon, this is Quince, Joyce speaking! How can I help you? This sporty-spice, multitasking Quince lady helps out on whatever job you have for her. And always with a happy face. In her free time she gets her kicks out of running, winter sports, salsa and exploring Amsterdam where she recently found a nice crib.\n        Key words: festivals, spider in the web, organising\n    ', 'Office'),
(341, 'GÃ¡bor Varga', NULL, 'gaborv@quince.hu', 1, '\n      https://www.facebook.com/gaborv?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=45978128&locale=en_US&trk=tyah\n    ', '+36703257181', '\n      Communicator, wine enthusiast, music lover and bit of a tech geek. At Quince, when heâ€™s not dealing with clients, heâ€™s out to meet new ones to co-create with. He enjoys riding his bike, having rosÃ© spritzers with friends and, last but not least, the industry he works in. In a few years he hopes to brew his own social craft beer, and once â€™old and wiseâ€™, do the same with wine.\nKeywords: communicate, tech, the good things in life \n    ', 'Client services / Business development'),
(344, 'zzp', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(346, 'Ralf Amama', NULL, 'ralf@quince.nl', 1, '\n      https://www.facebook.com/ralf.martin.amama?fref=ts\n    ', '\n      http://www.linkedin.com/profile/view?id=182627132&locale=nl_NL&trk=tyah\n    ', '', '\n      At Quince Iâ€™m a Jack of all trades. Helping out Events, taking care of office maintenance, stuff like that. Since my roots are from the creative side, I can also help out in the digital department.\n        Iâ€™m what you call a textbook geek. I like Star Wars, games, movies, comics, you name it! I also like ancient cultures and travelling, the more when these go together.\n        Keywords: geek culture, Ford Mustang, travel\n    ', 'Handy man'),
(349, 'Wouter Koot', NULL, 'wouter@quince.nl', 1, '\n      https://www.facebook.com/wouter.koot.3\n    ', '\n      http://www.linkedin.com/profile/view?id=96222067&locale=en_US&trk=tyah\n    ', '', '\n      Nice to meet you! Iâ€™m a proud member of the sales staff of Quince Retail Solutions. Have you seen our beautiful showroom yet? I love my work and making clients happy makes me happy. You can say Iâ€™m a real â€˜sports guyâ€™. Doing sports relaxes me and re-energies my battery, so I can get the best out of every day and the next.\nTo me a solid foundation is essential for personal development and growth. Keywords:  accurate, winter sports, friends\n    ', 'Project leader'),
(351, 'Jeffrey Kors', NULL, 'jeffreyk@quince.nl', 1, '\n      https://www.facebook.com/jeffrey.kors.3?fref=ts\n    ', '', '', '\n      Iâ€™m Jeffrey, intern at the Events team. I am learning a lot at Quince! My colleagues really involve me in everything and Iâ€™ve got acquainted with several parts of the Events business already. I help out building exhibition stands and have made a lot of great rides with the crew. I even baked pan cakes at an event. Also Iâ€™ve met a whole bunch of new, really nice people!\n        Keywords: soccer, Telstar, drinking beer with friends\n    ', 'Handy man'),
(352, 'Alexandru Chiritescu', NULL, 'alex@quince.nl', 0, '', '\n      http://www.linkedin.com/profile/view?id=49427598&locale=en_US&trk=tyah\n    ', '', '\n      What I like and do most of the time is creating software by writing code. I enjoy experimenting and learning new things all the time, as a way of improving who I am and what I do.\n        I''m a music addict, book reader and guitar playing novice. Curious by nature, I like socializing, exchanging ideas and straight answers. I believe that a warm and joyful attitude can make the world much better.\n        Keywords: learn, play, improve\n    ', 'Development'),
(353, 'Marco Comparato', NULL, 'marco@quince.nl', 0, '', '\n      http://www.linkedin.com/profile/view?id=96222067&locale=en_US&trk=tyah\n    ', '', '\n      Marco concepts, designs, and creates advanced interactive solutions, and is an evangelist for creative-technologies through Adobe, Google, and Open-Source tool-sets.Â  He is an American ex-pat from SF/LA/NYC.\n        \n    ', 'Concept / Design'),
(354, 'Raymond Schoos', NULL, 'raymond@quinceretailsolutions.com', 1, '\n      https://www.facebook.com/raymond.schoos?fref=ts\n    ', '\nhttp://www.linkedin.com/profile/view?id=127912798&authType=NAME_SEARCH&authToken=Hifi&locale=en_US&', '', '\n      Technology, itâ€™s all around me! Hi Iâ€™m Raymond, working for Quince Retail Solutions. Iâ€™m there to provide you the best customer experience possible!\n        Keywords: gadgets, freedom, website creation, new born baby, creativity\n    ', 'Quince Retail Solutions'),
(355, 'carla', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(356, 'gianluca', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(357, 'jan', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(358, 'ana', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(359, 'arjan', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(360, 'daan', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(361, 'guillermo', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(362, 'marcow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(363, 'noah', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(364, 'ruud', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(365, 'radouane', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(366, 'bartvk', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(367, 'sjoukje', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(368, 'floris', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(369, 'astrid', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(472, 'NULL', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12348 ;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`) VALUES
(108, 'Quince'),
(113, 'Samsung Benelux Corporate'),
(162, 'The Phone House'),
(214, 'Tommy Hilfiger'),
(233, 'Bauknecht'),
(257, 'Goodyear-Dunlop NL-BE'),
(270, 'KPN'),
(277, 'Apple'),
(289, 'HTC EMEA'),
(334, 'Alrec'),
(345, 'QYN'),
(360, 'Holland Casino AA hoofdkantoor Hoofddorp'),
(368, 'Quince HU'),
(370, 'MMD'),
(382, 'Kirkman Company'),
(440, 'Goodyear-Dunlop UK'),
(441, 'Platform Outsourcing Nederland'),
(451, 'Philips Consumer Lifestyle'),
(457, 'NAGA'),
(460, 'Media Markt & Saturn'),
(489, 'Setar'),
(499, 'Cambridge'),
(505, 'Stage Entertainment'),
(506, 'Nokia'),
(510, 'Green Hill'),
(511, 'ING Retail Nederland'),
(513, 'Whirlpool'),
(521, 'Philips TV / TP Vision Netherlands B.V.'),
(527, 'Korstjens Crossmedia Consultancy'),
(528, 'ID&T'),
(537, 'InVue Security Products'),
(538, 'Infopact'),
(547, 'Teradata Netherlands B.V.'),
(560, 'ABN-AMRO'),
(561, 'CTOUCH'),
(562, 'Bissell'),
(565, 'Quince Retail Solutions B.V. (QRS)'),
(568, 'Fox Sports'),
(577, 'Telfort'),
(579, 'Hema'),
(586, 'Nederland Schoon'),
(589, 'Scheer & Foppe'),
(590, 'Calvin Klein'),
(594, 'Intergamma'),
(595, 'Quince Platforms'),
(598, 'Holmatro'),
(599, 'VNU'),
(600, 'brandXtension BV'),
(602, 'Oxxio');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(100) DEFAULT NULL,
  `extension` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=96 ;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `type`, `extension`) VALUES
(3, 'image/jpeg', 'jpg'),
(4, 'image/jpeg', 'jpg'),
(5, 'image/jpeg', 'jpg'),
(6, 'image/jpeg', 'jpg'),
(7, 'image/jpeg', 'jpg'),
(8, 'image/jpeg', 'jpg'),
(9, 'image/jpeg', 'jpg'),
(10, 'image/jpeg', 'jpg'),
(11, 'image/jpeg', 'jpg'),
(12, 'image/jpeg', 'jpg'),
(13, 'image/jpeg', 'jpg'),
(14, 'image/jpeg', 'jpg'),
(15, 'image/jpeg', 'jpg'),
(16, 'image/jpeg', 'jpg'),
(17, 'image/jpeg', 'jpg'),
(18, 'image/jpeg', 'jpg'),
(19, 'image/jpeg', 'jpg'),
(20, 'image/jpeg', 'jpg'),
(21, 'image/jpeg', 'jpg'),
(22, 'image/jpeg', 'jpg'),
(23, 'image/jpeg', 'jpg'),
(24, 'image/jpeg', 'jpg'),
(25, 'image/jpeg', 'jpg'),
(26, 'image/jpeg', 'jpg'),
(27, 'image/jpeg', 'jpg'),
(28, 'image/jpeg', 'jpg'),
(29, 'image/jpeg', 'jpg'),
(30, 'image/jpeg', 'jpg'),
(31, 'image/jpeg', 'jpg'),
(32, 'image/jpeg', 'jpg'),
(33, 'image/jpeg', 'jpg'),
(34, 'image/jpeg', 'jpg'),
(35, 'image/jpeg', 'jpg'),
(36, 'image/jpeg', 'jpg'),
(37, 'image/jpeg', 'jpg'),
(38, 'image/jpeg', 'jpg'),
(39, 'image/jpeg', 'jpg'),
(40, 'image/jpeg', 'jpg'),
(41, 'image/jpeg', 'jpg'),
(42, 'image/jpeg', 'jpg'),
(43, 'image/jpeg', 'jpg'),
(44, 'image/jpeg', 'jpg'),
(45, 'image/jpeg', 'jpg'),
(46, 'image/jpeg', 'jpg'),
(47, 'image/jpeg', 'jpg'),
(48, 'image/jpeg', 'jpg'),
(49, 'image/jpeg', 'jpg'),
(50, 'image/jpeg', 'jpg'),
(51, 'image/jpeg', 'jpg'),
(52, 'image/jpeg', 'jpg'),
(53, 'image/jpeg', 'jpg'),
(54, 'image/jpeg', 'jpg'),
(55, 'image/jpeg', 'jpg'),
(56, 'image/jpeg', 'jpg'),
(57, 'image/jpeg', 'jpg'),
(58, 'image/jpeg', 'jpg'),
(59, 'image/jpeg', 'jpg'),
(60, 'image/jpeg', 'jpg'),
(61, 'image/jpeg', 'jpg'),
(62, 'image/jpeg', 'jpg'),
(63, 'image/jpeg', 'jpg'),
(64, 'image/jpeg', 'jpg'),
(65, 'image/jpeg', 'jpg'),
(66, 'image/jpeg', 'jpg'),
(67, 'image/jpeg', 'jpg'),
(68, 'image/jpeg', 'jpg'),
(69, 'image/jpeg', 'jpg'),
(70, 'image/jpeg', 'jpg'),
(71, 'image/jpeg', 'jpg'),
(72, 'image/jpeg', 'jpg'),
(73, 'image/jpeg', 'jpg'),
(74, 'image/jpeg', 'jpg'),
(75, 'image/jpeg', 'jpg'),
(76, 'image/jpeg', 'jpg'),
(77, 'image/jpeg', 'jpg'),
(78, 'image/jpeg', 'jpg'),
(79, 'image/jpeg', 'jpg'),
(80, 'image/jpeg', 'jpg'),
(81, 'image/jpeg', 'jpg'),
(82, 'image/jpeg', 'jpg'),
(83, 'image/jpeg', 'jpg'),
(84, 'image/jpeg', 'jpg'),
(85, 'image/jpeg', 'jpg'),
(86, 'image/jpeg', 'jpg'),
(87, 'image/jpeg', 'jpg'),
(88, 'image/jpeg', 'jpg'),
(89, 'image/jpeg', 'jpg'),
(90, 'image/jpeg', 'jpg'),
(91, 'image/jpeg', 'jpg'),
(92, 'image/jpeg', 'jpg'),
(93, 'image/jpeg', 'jpg'),
(94, 'image/jpeg', 'jpg'),
(95, 'image/jpeg', 'jpg');

-- --------------------------------------------------------

--
-- Table structure for table `itemImages`
--

CREATE TABLE `itemImages` (
  `item` int(11) DEFAULT NULL,
  `image` int(11) DEFAULT NULL,
  KEY `item` (`item`),
  KEY `image` (`image`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemImages`
--

INSERT INTO `itemImages` (`item`, `image`) VALUES
(841, 3),
(842, 4),
(843, 5),
(844, 6),
(845, 7),
(845, 8),
(845, 9),
(845, 10),
(845, 11),
(846, 12),
(847, 13),
(848, 14),
(849, 15),
(850, 16),
(851, 17),
(851, 18),
(851, 19),
(851, 20),
(851, 21),
(852, 22),
(853, 23),
(855, 24),
(856, 25),
(857, 26),
(858, 27),
(859, 28),
(860, 29),
(860, 30),
(860, 31),
(860, 32),
(861, 33),
(862, 34),
(863, 35),
(864, 36),
(864, 37),
(864, 38),
(864, 39),
(864, 40),
(865, 41),
(866, 42),
(867, 43),
(868, 44),
(868, 45),
(868, 46),
(868, 47),
(870, 48),
(871, 49),
(872, 50),
(873, 51),
(873, 52),
(873, 53),
(873, 54),
(874, 55),
(875, 56),
(876, 57),
(877, 58),
(877, 59),
(877, 60),
(877, 61),
(877, 62),
(878, 63),
(879, 64),
(880, 65),
(881, 66),
(882, 67),
(882, 68),
(882, 69),
(882, 70),
(883, 71),
(884, 72),
(885, 73),
(886, 74),
(887, 75),
(887, 76),
(887, 77),
(887, 78),
(887, 79),
(888, 80),
(889, 81),
(890, 82),
(891, 83),
(892, 84),
(892, 85),
(892, 86),
(892, 87),
(892, 88),
(893, 89),
(895, 90),
(896, 91),
(897, 92),
(898, 93),
(899, 94),
(900, 95);

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` char(1) DEFAULT NULL,
  `comment` varchar(100) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `customer` int(11) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `text` text,
  `author` int(11) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `portal` varchar(10) DEFAULT NULL,
  `ref` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer` (`customer`),
  KEY `author` (`author`),
  KEY `type` (`type`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=901 ;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `type`, `comment`, `date`, `customer`, `title`, `text`, `author`, `url`, `portal`, `ref`) VALUES
(841, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 565, 'EuroShop 2014, Dusseldorf', 'Quince Retail Solutions is currently attending the world''s leading retail trade fairâ€™ EuroShop 2014, in DÃ¼sseldorf Germany. The guys are there to demonstrate how QRS digital in-store solutions can help boost retail business.', 11, 'https://www.facebook.com/photo.php?fbid=10151869122070666', 'fb', '10151869122070666'),
(842, 'b', 'QUARTER-SIZED IMAGE w/ INFO', '2014-01-01 23:15:00', 113, '', 'Yesterday we were shooting a movie at the Samsung sponsored â "Coolste baan van Nederland" (the coolest ice rink in the Netherlands).', 261, 'https://www.facebook.com/photo.php?fbid=10151880720175666', 'fb', '10151880720175666'),
(843, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 560, 'ABN Amro Word of Tennis Tournament', 'Today none other than tennis legend Richard Krajicek played the Quince powered WTT Game live at the ABN AMRO World Tennis Tournament.', 11, 'https://www.facebook.com/photo.php?fbid=10151854263880666', 'fb', '10151854263880666'),
(844, 'c', 'samsung', '2014-01-01 23:15:00', 113, '', '', NULL, '', '', ''),
(845, 'f', 'HTC campaign-stack', '2014-01-01 23:15:00', 289, 'HTC Specialist', 'Global trade communication platform in 26 languages where over  81.000 registered users in 56 countries continuously engage with HTC on product training & sales activation. Motivated by becoming a 5 star specialist by gaining stars and points to reach top ranked retail sales person of their country. Obviously Top ranked Retail wins rewards. Available on Desktop, mobile, App.', NULL, '', '', ''),
(846, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 568, 'Fox Top Scorers', 'Fox Sports required a multi-media campaign of print posters and website for their Top-Scorers program.', 131, '', 'fb', ''),
(847, 'j', 'VIDEO THUMBS. ALWAYS QUARTER-SIZED', '2014-01-01 23:15:00', 113, '', 'Quince IDU has developed a holographic presentation showing the highlights of the new Samsung Solid State Drive 830 Series.', 242, '', 'vim', '38566969'),
(848, 'c', 'holland casino', '2014-01-01 23:15:00', 360, '', '', NULL, '', '', ''),
(849, 'b', 'QUARTER-SIZED IMAGE w/ INFO', '2014-01-01 23:15:00', 108, 'We are Quincers', 'These fruits are Quinces.', 242, 'http://www.pinterest.com/pin/485896247268806842', 'pin', '485896247268806842'),
(850, 'j', 'VIDEO THUMBS. ALWAYS QUARTER-SIZED', '2014-01-01 23:15:00', 270, 'Helden van Hi Casefilm', '', 242, '', 'vim', '66137605'),
(851, 'f', 'CTouch camp-stack', '2014-01-01 23:15:00', 561, '', '', NULL, '', '', ''),
(852, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 360, 'Holland Casino Vakantie', 'A fresh and bright visual alternative approach to, the more commonly mature and luxurious, casino aesthetic.', 115, '', 'fb', ''),
(853, 'b', 'QUARTER-SIZED IMAGE w/ INFO', '2014-01-01 23:15:00', 586, 'Behind the Scenes', 'It is our responsibility to take care of our environment. There''s no actual small figures cleaning the the mess we leave behind.', 242, 'http://www.pinterest.com/pin/485896247268806828', 'pin', '485896247268806828'),
(855, 'j', 'VIDEO THUMBS. ALWAYS QUARTER-SIZED', '2014-01-01 23:15:00', 108, '', 'From all of us at Quince, we wish you happy holidays and all the best for 2014!', 242, '', 'vim', '85926446'),
(856, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 360, 'Holland Casino Vakantie', 'A fresh and bright visual alternative approach to, the more commonly mature and luxurious, casino aesthetic.', 115, '', 'fb', ''),
(857, 'b', 'QUARTER-SIZED IMAGE w/ INFO', '2014-01-01 23:15:00', 108, 'Jeffrey in Lingo', 'Last night Jeffrey and his brother Mitchel took part in the Dutch tv game show Lingo. ', 261, 'http://www.uitzendinggemist.nl/afleveringen/1391351', 'fb', '10151817863075666'),
(858, 'c', 'goodyear', '2014-01-01 23:15:00', 257, '', '', NULL, '', '', ''),
(859, 'j', 'VIDEO THUMBS. ALWAYS QUARTER-SIZED', '2014-01-01 23:15:00', 289, 'Dreamoc content creation for HTC', 'Quince Interactive Display Units created a holographic Dreamoc presentation of the HTC Desire HD.', 242, '', 'vim', '39403822'),
(860, 'f', 'Samsung Camp-stack', '2014-01-01 23:15:00', 113, 'Samsung ''Shop in shop''', 'Samsung sought to create a personalized ''premium'' brand experience with in their various third-party retail environments. We took care of the branding and executed an extensive photo-shoot to bring life into what can sometimes be a cold technical shopping experience.', NULL, '', '', ''),
(861, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 113, 'Samsung ''Convergence''', 'Samsung''s retail needs a look that showcases the interoperability of its many products in your home.  This is our proposed new look.', 199, '', 'fb', ''),
(862, 'b', 'QUARTER-SIZED IMAGE w/ INFO', '2014-01-01 23:15:00', 108, 'Welcome Jan', 'A new colleague has started at Quince Amsterdam. His name is Jan and he will be working as a software engineer.', 319, 'https://www.facebook.com/photo.php?fbid=10151669526830666', 'fb', '10151669526830666'),
(863, 'j', 'VIDEO THUMBS. ALWAYS QUARTER-SIZED', '2014-01-01 23:15:00', 270, 'HiJack', '', 242, '', 'vim', '43682084'),
(864, 'f', 'Telefort camp-stack', '2014-01-01 23:15:00', 577, '', '', NULL, '', '', ''),
(865, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 108, 'Supersoaker battle', 'Friday afternoon, sun, drinks and super soakers. What''s not to like? Enjoy the summer weekend everyone!', 242, 'https://www.facebook.com/photo.php?fbid=10151480910580666', 'fb', '10151480910580666'),
(866, 'b', 'QUARTER-SIZED IMAGE w/ INFO', '2014-01-01 23:15:00', 108, 'The Quince band', 'Just when you thought the day could have used a bit more play next to all the work, the Quince band starts rehearsing...', 340, 'https://www.facebook.com/photo.php?fbid=10151731915295666', 'fb', '10151731915295666'),
(867, 'c', 'Fox sports', '2014-01-01 23:15:00', 568, '', '', NULL, '', '', ''),
(868, 'f', 'Samsung event camp-stack', '2014-01-01 23:15:00', 113, 'Samsung Sensation', '', NULL, '', '', ''),
(869, 'h', 'QUARTER-SIZED TEXT-BLOCK CELL w/ NO INFO & USER INFO IN OFF-STATE', '2014-01-01 23:15:00', 108, 'Quince Rocks!', 'Just when you thought the day could have used a bit more play next to all the work, the Quince band starts rehearsing...', 340, 'https://www.facebook.com/photo.php?fbid=10151731915295666', 'fb', '10151731915295666'),
(870, 'j', 'VIDEO THUMBS. ALWAYS QUARTER-SIZED', '2014-01-01 23:15:00', 565, 'QRS Touch', 'Quince Interactive Retail Solutions has developed an interactive photo booth that has been in demand ever since its first release... ', 242, '', 'vim', '75781009'),
(871, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 108, 'Fred &amp; Daniel working the grill!', 'Today we were treated to delicious, yummy, good old fashioned hamburgers with everything on it for lunch. Kudos to chefs, Daniel and Frederik, for this very tasty initiative!', 340, 'https://www.facebook.com/photo.php?fbid=10151810418470666', 'fb', '10151810418470666'),
(872, 'b', 'QUARTER-SIZED IMAGE w/ INFO', '2014-01-01 23:15:00', 108, 'Love - take what you need', 'Somebody got creative and happily shared the result with her colleagues...', 261, 'https://www.facebook.com/photo.php?fbid=10151694285220666', 'fb', '10151694285220666'),
(873, 'f', 'Millionaire-Fair Samsung camp-stack', '2014-01-01 23:15:00', 113, '', '', NULL, '', '', ''),
(874, 'j', 'VIDEO THUMBS. ALWAYS QUARTER-SIZED', '2014-01-01 23:15:00', 113, 'Oculus Rift Polyrider Promo', '', 254, '', 'vim', '77117922'),
(875, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 108, 'Gamer''s Delight', 'We cant wait to get our hands into the SDK and make this thing do magic!', 199, 'https://www.facebook.com/photo.php?fbid=10151553932155666', 'fb', '10151553932155666'),
(876, 'b', 'QUARTER-SIZED IMAGE w/ INFO', '2014-01-01 23:15:00', 108, 'Welcome Gian-Luca', 'He has been working at Quince for over a month now and for some unknown reason...', 319, 'https://www.facebook.com/photo.php?fbid=10151681522185666', 'fb', '10151681522185666'),
(877, 'f', 'iTRE branding camp-stack', '2014-01-01 23:15:00', 108, '', '', NULL, '', '', ''),
(878, 'j', 'VIDEO THUMBS. ALWAYS QUARTER-SIZED', '2014-01-01 23:15:00', 360, 'Holland Casino Interactive Projection Mapping', '', 254, '', 'vim', '60837705'),
(879, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 108, 'Lunch time!', 'What''s cooking at Quince today? Thanks to Jamel we''re having shwarma for lunch!', 340, 'https://www.facebook.com/photo.php?fbid=10151552064070666', 'fb', '10151552064070666'),
(880, 'b', 'QUARTER-SIZED IMAGE w/ INFO', '2014-01-01 23:15:00', 108, 'Hearing Voices', 'Recording a voice-over for another great Quince video production. It looks like this!', 242, 'https://www.facebook.com/photo.php?fbid=10151558387050666', 'fb', '10151558387050666'),
(881, 'c', 'Hi KPN', '2014-01-01 23:15:00', 270, '', '', NULL, '', '', ''),
(882, 'f', 'Samsung Galaxy S2 event camp-stack', '2014-01-01 23:15:00', 113, '', '', NULL, '', '', ''),
(883, 'j', 'VIDEO THUMBS. ALWAYS QUARTER-SIZED', '2014-01-01 23:15:00', 113, '', 'All Samsung divisions were present at this business-to-business event, showing the latest smart solutions that make life more enjoyable.', 242, '', 'vim', '45238850'),
(884, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 108, 'Quince rebranding', '', 339, 'https://www.facebook.com/photo.php?fbid=10151718746400666', 'fb', '10151718746400666'),
(885, 'b', 'QUARTER-SIZED IMAGE w/ INFO', '2014-01-01 23:15:00', 108, 'Quince Halloween 2013', 'One hellish party of the damned.', 261, 'https://www.facebook.com/photo.php?fbid=10151669657185666', 'fb', '10151669657185666'),
(886, 'c', 'philips', '2014-01-01 23:15:00', 451, '', '', NULL, '', '', ''),
(887, 'f', 'Netherland Schoon camp-stack', '2014-01-01 23:15:00', 586, '', '', NULL, '', '', ''),
(888, 'j', 'VIDEO THUMBS. ALWAYS QUARTER-SIZED', '2014-01-01 23:15:00', 113, 'Samsung Galaxy S4 lancering event', '', 242, '', 'vim', '66137688'),
(889, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 108, 'Baked Quince!', 'Baked Quince, it looks like this. Kudos to Theo for this very special treat!', 327, 'https://www.facebook.com/photo.php?fbid=10151647722395666', 'fb', '10151647722395666'),
(890, 'b', 'QUARTER-SIZED IMAGE w/ INFO', '2014-01-01 23:15:00', 108, 'Welcome Carla', 'She is doing an internship at Quince, helping out the development team as a part of her study in web development.', 319, 'https://www.facebook.com/photo.php?fbid=10151681614700666', 'fb', '10151681614700666'),
(891, 'c', 'QRS', '2014-01-01 23:15:00', 565, '', '', NULL, '', '', ''),
(892, 'f', 'Samsung beauty-pageant camp-stack', '2014-01-01 23:15:00', 113, '', '', NULL, '', '', ''),
(893, 'j', 'VIDEO THUMBS. ALWAYS QUARTER-SIZED', '2014-01-01 23:15:00', 270, '', 'HiJack and making of Hi Commercial', 242, '', 'vim', '66137605'),
(894, 'h', 'QUARTER-SIZED TEXT-BLOCK CELL w/ NO INFO & USER INFO IN OFF-STATE', '2014-01-01 23:15:00', 108, '', 'Having some good old virtual Friday afternoon fun with the Oculus Rift virtual reality headset. Enjoy the weekend everyone!', 254, 'https://www.facebook.com/photo.php?fbid=10151553932155666', 'fb', '10151553932155666'),
(895, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 108, '', 'What''s wrong with this Friday afternoon picture? Absolutely nothing. The good old yellow notes sessions are still an important part of the creative process.', 340, 'https://www.facebook.com/photo.php?fbid=10151493244935666', 'fb', '10151493244935666'),
(896, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 108, 'Friday Afternoon Social!', 'What is wrong with this Friday afternoon picture? Absolutely nothing. The good old yellow notes sessions are still an important part of the creative process.', 199, 'https://www.facebook.com/photo.php?fbid=10151396704885666', 'fb', '10151396704885666'),
(897, 'b', 'QUARTER-SIZED IMAGE w/ INFO', '2014-01-01 23:15:00', 108, '', 'We knew there was something missing at our coffee break this morning, but we did not have a clue what exactly. Gladly our birthday boy Julian did...', 261, 'https://www.facebook.com/photo.php?fbid=10151527655645666', 'fb', '10151527655645666'),
(898, 'c', 'KPN', '2014-01-01 23:15:00', 270, '', '', NULL, '', '', ''),
(899, 'j', 'VIDEO THUMBS. ALWAYS QUARTER-SIZED', '2014-01-01 23:15:00', 270, 'Live Device Tables At KPN', 'How to get the most out of self-service on the shop floor. With Live Device Tables powered by Quince Interactive Display Units.', 242, '', 'vim', '43094863'),
(900, 'j', 'VIDEO THUMBS. ALWAYS QUARTER-SIZED', '2014-01-01 23:15:00', 113, 'Samsung Smart Portal', 'An impression of a stylish touch screen application for in-store use, developed by Quince Amsterdam...', 242, '', 'vim', '41848307');

-- --------------------------------------------------------

--
-- Table structure for table `itemTags`
--

CREATE TABLE `itemTags` (
  `item` int(11) DEFAULT NULL,
  `tag` int(11) DEFAULT NULL,
  KEY `item` (`item`),
  KEY `tag` (`tag`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tag` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `types`
--

CREATE TABLE `types` (
  `type` char(1) NOT NULL DEFAULT '',
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `types`
--

INSERT INTO `types` (`type`, `name`) VALUES
('a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU'),
('b', 'QUARTER-SIZED IMAGE w/ INFO'),
('c', 'QUARTER-SIZED CLIENT-LOGO w/ NO INFO '),
('f', 'FULL-SIZED MULTI IMAGE-CAROUSEL (CAMPAIGN STACK)'),
('h', 'QUARTER-SIZED TEXT-BLOCK CELL w/ NO INFO & USER INFO IN OFF-STATE'),
('j', 'QUARTER-SIZED VIDEO PLAYER CELL');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `itemImages`
--
ALTER TABLE `itemImages`
  ADD CONSTRAINT `itemimages_ibfk_1` FOREIGN KEY (`item`) REFERENCES `items` (`id`),
  ADD CONSTRAINT `itemimages_ibfk_2` FOREIGN KEY (`image`) REFERENCES `images` (`id`);

--
-- Constraints for table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`customer`) REFERENCES `customers` (`id`),
  ADD CONSTRAINT `items_ibfk_2` FOREIGN KEY (`author`) REFERENCES `authors` (`id`),
  ADD CONSTRAINT `items_ibfk_3` FOREIGN KEY (`type`) REFERENCES `types` (`type`);

--
-- Constraints for table `itemTags`
--
ALTER TABLE `itemTags`
  ADD CONSTRAINT `itemtags_ibfk_1` FOREIGN KEY (`item`) REFERENCES `items` (`id`),
  ADD CONSTRAINT `itemtags_ibfk_2` FOREIGN KEY (`tag`) REFERENCES `tags` (`id`);
