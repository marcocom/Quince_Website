-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 14, 2014 at 11:54 AM
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=434 ;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id`, `name`, `job`) VALUES
(7, 'martijn', NULL),
(9, 'patrick', NULL),
(11, 'remco', NULL),
(19, 'jeroen', NULL),
(103, 'mark', NULL),
(104, 'robin', NULL),
(105, 'charles', NULL),
(106, 'sjoerd', NULL),
(109, 'diederick', NULL),
(110, 'frans', NULL),
(115, 'coen', NULL),
(123, 'Coen Schaafma', 'Art Director'),
(131, 'david', NULL),
(136, 'olaf', NULL),
(138, 'sander', NULL),
(147, 'ewout', NULL),
(153, 'jessica', NULL),
(167, 'tulay', NULL),
(176, 'james', NULL),
(195, 'wout', NULL),
(199, 'djamel', NULL),
(204, 'solko', NULL),
(207, 'tjeerd', NULL),
(224, 'gabor', NULL),
(233, 'jeffrey', NULL),
(234, 'Jeroen van der Horst', 'AV Director'),
(241, 'daniel', NULL),
(242, 'jeroenh', NULL),
(250, 'frederik', NULL),
(252, 'gyuri', NULL),
(254, 'sanders', NULL),
(261, 'bend', NULL),
(262, 'eva', NULL),
(263, 'martijnb', NULL),
(265, 'rene', NULL),
(268, 'linda', NULL),
(278, 'lotte', NULL),
(282, 'vincent', NULL),
(319, 'lisette', NULL),
(320, 'doruk', NULL),
(321, 'marcelk', NULL),
(323, 'miranda', NULL),
(324, 'sandersc', NULL),
(325, 'jamel', NULL),
(327, 'theodoros', NULL),
(333, 'julian', NULL),
(335, 'bartva', NULL),
(337, 'benjamin', NULL),
(338, 'ryan', NULL),
(339, 'guido', NULL),
(340, 'joyce', NULL),
(341, 'gaborv', NULL),
(344, 'zzp', NULL),
(346, 'ralf', NULL),
(349, 'wouter', NULL),
(350, 'adriaan', NULL),
(351, 'jeffreyk', NULL),
(352, 'alex', NULL),
(353, 'marco', NULL),
(354, 'raymond', NULL),
(355, 'carla', NULL),
(356, 'gianluca', NULL),
(357, 'jan', NULL),
(358, 'ana', NULL),
(359, 'arjan', NULL),
(360, 'daan', NULL),
(361, 'guillermo', NULL),
(362, 'marcow', NULL),
(363, 'noah', NULL),
(364, 'ruud', NULL),
(365, 'radouane', NULL),
(366, 'bartvk', NULL),
(367, 'sjoukje', NULL),
(368, 'floris', NULL),
(369, 'astrid', NULL);

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
(1, 'Customer 1'),
(108, 'Quince'),
(112, 'Samsung Benelux ITD: Algemeen'),
(113, 'Samsung Benelux Corporate'),
(150, 'Samsung Benelux TED'),
(151, 'Samsung Benelux AVD: TV'),
(162, 'The Phone House'),
(214, 'Tommy Hilfiger'),
(233, 'Bauknecht'),
(246, 'Samsung Benelux HAD'),
(257, 'Goodyear-Dunlop NL-BE'),
(270, 'KPN'),
(277, 'Apple'),
(289, 'HTC EMEA'),
(315, 'Samsung Benelux Service'),
(317, 'HTC Benelux'),
(334, 'Alrec'),
(338, 'Samsung Benelux ITD: Printing'),
(345, 'QYN'),
(346, 'HTC France'),
(351, 'Samsung Benelux ITD: Monitoren'),
(359, 'Samsung Benelux AVD: HES'),
(360, 'Holland Casino AA hoofdkantoor Hoofddorp'),
(368, 'Quince HU'),
(369, 'Samsung Benelux AVD: DSC'),
(370, 'MMD'),
(382, 'Kirkman Company'),
(410, 'Holland Casino Amsterdam'),
(411, 'Holland Casino Breda'),
(412, 'Holland Casino Eindhoven'),
(413, 'Holland Casino Enschede'),
(414, 'Holland Casino Groningen'),
(415, 'Holland Casino Leeuwarden'),
(416, 'Holland Casino Nijmegen'),
(417, 'Holland Casino Rotterdam'),
(418, 'Holland Casino Schiphol'),
(419, 'Holland Casino Scheveningen'),
(420, 'Holland Casino Utrecht'),
(421, 'Holland Casino Valkenburg'),
(422, 'Holland Casino Venlo'),
(423, 'Holland Casino Zandvoort'),
(440, 'Goodyear-Dunlop UK'),
(441, 'Platform Outsourcing Nederland'),
(450, 'Samsung Benelux ITD: Notebooks'),
(451, 'Philips Consumer Lifestyle'),
(457, 'NAGA'),
(460, 'Media Markt & Saturn'),
(489, 'Setar'),
(497, 'HTC Australia'),
(499, 'Cambridge'),
(505, 'Stage Entertainment'),
(506, 'Nokia'),
(510, 'Green Hill'),
(511, 'ING Retail Nederland'),
(513, 'Whirlpool'),
(518, 'HTC South Asia'),
(521, 'Philips TV / TP Vision Netherlands B.V.'),
(526, 'HTC UK'),
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
(575, 'HTC Canada'),
(576, 'HTC USA'),
(577, 'Telfort'),
(579, 'Hema'),
(586, 'Nederland Schoon'),
(587, 'HTC HQ (Taiwan)'),
(589, 'Scheer & Foppe'),
(590, 'Calvin Klein'),
(594, 'Intergamma'),
(595, 'Quince Platforms'),
(596, 'HTC Turkey'),
(598, 'Holmatro'),
(599, 'VNU'),
(600, 'brandXtension BV'),
(602, 'Oxxio'),
(12345, 'Customer 12345'),
(12346, 'NULL'),
(12347, 'NULL');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(100) DEFAULT NULL,
  `extension` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `type`, `extension`) VALUES
(1, 'image/png', NULL);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=781 ;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `type`, `comment`, `date`, `customer`, `title`, `text`, `author`, `url`, `portal`, `ref`) VALUES
(729, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 12345, 'Holland Casino Vakantie', 'A fresh and bright visual alternative approach to, the more commonly mature and luxurious, casino aesthetic.', 123, '', 'fb', ''),
(730, 'f', 'FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!', '2014-01-01 23:15:00', 12345, '', '', NULL, '', '', ''),
(731, 'f', 'FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!', '2014-01-01 23:15:00', 12345, '', '', NULL, '', '', ''),
(732, 'f', 'FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!', '2014-01-01 23:15:00', 12345, '', '', NULL, '', '', ''),
(733, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 12345, 'EuroShop 2014, DÃ¼sseldorf', 'Quince Retail Solutions is currently attending â€˜worldâ€™s leading retail trade fairâ€™ EuroShop 2014, in DÃ¼sseldorf Germany. The guys are there to demonstrate how QRS digital in-store solutions can help boost retail business.', 123, 'https://www.facebook.com/photo.php?fbid=10151869122070666', 'fb', '10151869122070666'),
(734, 'b', 'QUARTER-SIZED IMAGE w/ INFO', '2014-01-01 23:15:00', NULL, 'We are Quincers', 'These fruits are Quinces.', 234, 'http://www.pinterest.com/pin/485896247268806842', 'pin', '485896247268806842'),
(735, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 12345, 'ABN Amro Word of Tennis Tournament', 'Today none other than tennis legend Richard Krajicek played the Quince powered WTT Game live at the ABN AMRO World Tennis Tournament.', 123, 'https://www.facebook.com/photo.php?fbid=10151854263880666', 'fb', '10151854263880666'),
(736, 'b', 'QUARTER-SIZED IMAGE w/ INFO', '2014-01-01 23:15:00', NULL, 'Behind the Scenes', 'It is our responsibility to take care of our environment. There''s no actual small figures cleaning the the mess we leave behind.', 234, 'https://www.facebook.com/photo.php?fbid=10151669526830666', 'fb', '485896247268806828'),
(737, 'j', 'VIDEO THUMBS. ALWAYS QUARTER-SIZED', '2014-01-01 23:15:00', 12345, 'Helden van Hi Casefilm<', '', 123, '', 'vim', '43682084'),
(738, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 12345, 'Fox Top Scorers', 'Fox Sports required a multi-media campaign of print posters and website for their Top-Scorers program.', 123, '', 'fb', ''),
(739, 'b', 'QUARTER-SIZED IMAGE w/ INFO', '2014-01-01 23:15:00', NULL, 'Quince Football', 'Our team wins, no matter what the final score.', 234, 'https://www.facebook.com/photo.php?fbid=', 'fb', '10151411931875666'),
(740, 'j', 'VIDEO THUMBS. ALWAYS QUARTER-SIZED', '2014-01-01 23:15:00', 12345, '', 'Quince IDU has developed a holographic presentation showing the highlights of the new Samsung Solid State Drive 830 Series.', 123, '', 'vim', '38566969'),
(741, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 12345, 'Holland Casino Vakantie', 'A fresh and bright visual alternative approach to, the more commonly mature and luxurious, casino aesthetic.', 123, '', 'fb', ''),
(742, 'j', 'VIDEO THUMBS. ALWAYS QUARTER-SIZED', '2014-01-01 23:15:00', 12345, '', 'From all of us at Quince, we wish you happy holidays and all the best for 2014!', 123, '', 'vim', '85926446'),
(743, 'j', 'VIDEO THUMBS. ALWAYS QUARTER-SIZED', '2014-01-01 23:15:00', 12345, 'Dreamoc content creation for HTC', 'Quince Interactive Display Units created a holographic Dreamoc presentation of the HTC Desire HD.', 123, '', 'vim', '39403822'),
(744, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 12345, '', 'There are lots and lots of things you can design with 3D design software. But one thing thatâ€™s just not possible on screen is getting a feel for the actual product...', 123, 'https://www.facebook.com/photo.php?fbid=10151562998425666', 'fb', '10151562998425666'),
(745, 'b', 'QUARTER-SIZED IMAGE w/ INFO', '2014-01-01 23:15:00', NULL, 'Jeffrey in Lingo', 'Last night Jeffrey and his brother Mitchel took part in the Dutch tv game show Lingo. ', 234, 'http://www.uitzendinggemist.nl/afleveringen/1391351', 'fb', '10151817863075666'),
(746, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 12345, '', 'Whatâ€™s wrong with this Friday afternoon picture? Absolutely nothing. The good old yellow notes sessions are still an important part of the creative process.', 123, 'https://www.facebook.com/photo.php?fbid=10151493244935666', 'fb', '10151493244935666'),
(747, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 12345, 'Friday Afternoon Social!', 'Whatâ€™s wrong with this Friday afternoon picture? Absolutely nothing. The good old yellow notes sessions are still an important part of the creative process.', 123, 'https://www.facebook.com/photo.php?fbid=10151396704885666', 'fb', '10151396704885666'),
(748, 'b', 'QUARTER-SIZED IMAGE w/ INFO', '2014-01-01 23:15:00', NULL, '', 'We knew there was something missing at our coffee break this morning, but we didnâ€™t have a clue what exactly. Gladly our birthday boy Julian did...', 234, 'https://www.facebook.com/photo.php?fbid=10151527655645666', 'fb', '10151527655645666'),
(749, 'c', 'QUARTER-SIZED CLIENT-LOGO w/ NO INFO ', '2014-01-01 23:15:00', 1, '', '', NULL, '', '', ''),
(750, 'j', 'VIDEO THUMBS. ALWAYS QUARTER-SIZED', '2014-01-01 23:15:00', 12345, 'Live Device Tables At KPN', 'How to get the most out of self-service on the shop floor. With Live Device Tables powered by Quince Interactive Display Units.', 123, '', 'vim', '43094863'),
(751, 'j', 'VIDEO THUMBS. ALWAYS QUARTER-SIZED', '2014-01-01 23:15:00', 12345, 'Samsung Smart Portal', 'An impression of a stylish touch screen application for in-store use, developed by Quince Amsterdam...', 123, '', 'vim', '41848307'),
(752, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 12345, 'Baked Quince!', 'Baked Quince, it looks like this. Kudos to Theo for this very special treat!', 123, 'https://www.facebook.com/photo.php?fbid=10151647722395666', 'fb', '10151647722395666'),
(753, 'b', 'QUARTER-SIZED IMAGE w/ INFO', '2014-01-01 23:15:00', NULL, 'Welcome Carla', 'Sheâ€™s doing an internship at Quince, helping out the development team as a part of her study in web development.', 234, 'https://www.facebook.com/photo.php?fbid=10151681614700666', 'fb', '10151681614700666'),
(754, 'c', 'QUARTER-SIZED CLIENT-LOGO w/ NO INFO ', '2014-01-01 23:15:00', 1, '', '', NULL, '', '', ''),
(755, 'f', 'FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!', '2014-01-01 23:15:00', 12345, '', '', NULL, '', '', ''),
(756, 'j', 'VIDEO THUMBS. ALWAYS QUARTER-SIZED', '2014-01-01 23:15:00', 12345, '', 'HiJack and making of Hi Commercial', 123, 'http://www.test.com', 'vim', '66137605'),
(757, 'h', 'QUARTER-SIZED TEXT-BLOCK CELL w/ NO INFO & USER INFO IN OFF-STATE', '2014-01-01 23:15:00', NULL, '', 'Having some good old virtual Friday afternoon fun with the Oculus Rift virtual reality headset. Enjoy the weekend everyone!', 123, 'https://www.facebook.com/photo.php?fbid=10151553932155666', 'fb', '10151553932155666'),
(758, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 12345, 'Quince rebranding', '', 123, 'https://www.facebook.com/photo.php?fbid=10151718746400666', 'fb', '10151718746400666'),
(759, 'b', 'QUARTER-SIZED IMAGE w/ INFO', '2014-01-01 23:15:00', NULL, 'Quince Halloween 2013', 'One hellish party of the damned.', 234, 'https://www.facebook.com/photo.php?fbid=10151669657185666', 'fb', '10151669657185666'),
(760, 'c', 'QUARTER-SIZED CLIENT-LOGO w/ NO INFO ', '2014-01-01 23:15:00', 1, '', '', NULL, '', '', ''),
(761, 'f', 'FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!', '2014-01-01 23:15:00', 12345, 'Lorem Ipsum Dolor', 'Lorem ipsum dolor sit amet. consequtor locum like latin aleph.', NULL, '', '', ''),
(762, 'j', 'VIDEO THUMBS. ALWAYS QUARTER-SIZED', '2014-01-01 23:15:00', 12345, '', '', 123, '', 'vim', '66137688'),
(763, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 12345, 'Lunch time!', 'Whatâ€™s cooking at Quince today? Thanks to Jamel weâ€™re having shwarma for lunch!', 123, 'https://www.facebook.com/photo.php?fbid=10151552064070666', 'fb', '10151552064070666'),
(764, 'b', 'QUARTER-SIZED IMAGE w/ INFO', '2014-01-01 23:15:00', NULL, 'Hearing Voices', 'Recording a voice-over for another great Quince video production. It looks like this!', 234, 'https://www.facebook.com/photo.php?fbid=10151558387050666', 'fb', '10151558387050666'),
(765, 'c', 'QUARTER-SIZED CLIENT-LOGO w/ NO INFO ', '2014-01-01 23:15:00', 1, '', '', NULL, '', '', ''),
(766, 'f', 'FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!', '2014-01-01 23:15:00', 12345, '', '', NULL, '', '', ''),
(767, 'j', 'VIDEO THUMBS. ALWAYS QUARTER-SIZED', '2014-01-01 23:15:00', 12345, '', 'All Samsung divisions were present at this business-to-business event, showing the latest smart solutions that make life more enjoyable.', 123, '', 'vim', '45238850'),
(768, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 12345, 'Gamer''s Delight', 'Having some good old virtual Friday afternoon fun with the new Oculus Rift virtual reality headset. We cant wait to get our hands into the SDK and make this thing do magic!', 123, 'https://www.facebook.com/photo.php?fbid=10151553932155666', 'fb', '10151553932155666'),
(769, 'b', 'QUARTER-SIZED IMAGE w/ INFO', '2014-01-01 23:15:00', NULL, 'Welcome Gian-Luca', 'Heâ€™s been working at Quince for over a month now and for some unknown reason...', 234, 'https://www.facebook.com/photo.php?fbid=10151681522185666', 'fb', '10151681522185666'),
(770, 'f', 'FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!', '2014-01-01 23:15:00', 12345, '', '', NULL, '', '', ''),
(771, 'j', 'VIDEO THUMBS. ALWAYS QUARTER-SIZED', '2014-01-01 23:15:00', 12345, 'Holland Casino Interactive Projection Mapping', 'Lorem ipsum dolor sit amet. consequtor locum like latin aleph.', 123, 'http://www.test.com', 'vim', '60837705'),
(772, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 12345, 'Fred &amp; Daniel working the grill!', 'Today we were treated to delicious, yummy, good old fashioned hamburgers with everything on it for lunch. Kudos to chefs, Daniel and Frederik, for this very tasty initiative!', 123, 'https://www.facebook.com/photo.php?fbid=10151810418470666', 'fb', '10151810418470666'),
(773, 'b', 'QUARTER-SIZED IMAGE w/ INFO', '2014-01-01 23:15:00', NULL, 'Love - take what you need', 'Somebody got creative and happily shared the result with her colleagues...', 234, 'https://www.facebook.com/photo.php?fbid=10151694285220666', 'fb', '10151694285220666'),
(774, 'f', 'FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!', '2014-01-01 23:15:00', 12345, '', '', NULL, '', '', ''),
(775, 'j', 'VIDEO THUMBS. ALWAYS QUARTER-SIZED', '2014-01-01 23:15:00', 12345, '', '', 123, 'http://www.test.com', 'vim', '77117922'),
(776, 'a', 'PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU', '2014-01-01 23:15:00', 12345, 'Supersoaker battle', 'Friday afternoon, sun, drinks and super soakers. What''s not to like? Enjoy the summer weekend everyone!', 123, 'https://www.facebook.com/photo.php?fbid=10151480910580666', 'fb', '10151480910580666'),
(777, 'b', 'QUARTER-SIZED IMAGE w/ INFO', '2014-01-01 23:15:00', NULL, 'The Quince band', 'Just when you thought the day could have used a bit more play next to all the work, the Quince band starts rehearsing...', 234, 'https://www.facebook.com/photo.php?fbid=10151731915295666', 'fb', '10151731915295666'),
(778, 'f', 'FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!', '2014-01-01 23:15:00', 12345, 'Samsung ''Shop in shop''', 'Samsung sought to create a personalized ''premium'' brand experience with in their various third-party retail environments. We took care of the branding and executed an extensive photo-shoot to bring life into what can sometimes be a cold technical shopping experience.', NULL, '', '', ''),
(779, 'h', 'QUARTER-SIZED TEXT-BLOCK CELL w/ NO INFO & USER INFO IN OFF-STATE', '2014-01-01 23:15:00', NULL, 'Lorem Ipsum Dolor', 'Just when you thought the day could have used a bit more play next to all the work, the Quince band starts rehearsing...', 123, 'https://www.facebook.com/photo.php?fbid=10151731915295666', 'fb', '10151731915295666'),
(780, 'j', 'VIDEO THUMBS. ALWAYS QUARTER-SIZED', '2014-01-01 23:15:00', 12345, 'Lorem Ipsum Dolor', 'Quince Interactive Retail Solutions has developed an interactive photo booth that has been in demand ever since its first release... ', 123, '', 'vim', '75781009');

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
