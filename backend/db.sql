-- MySQL dump 10.13  Distrib 5.6.12, for Win64 (x86_64)
--
-- Host: localhost    Database: quince
-- ------------------------------------------------------
-- Server version	5.6.12-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `authors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `job` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=472 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES (123,'Remco Schoos','QRS Director'),(234,'Ben De Dood','Creative Copywriter'),(453,'',''),(454,'','HTC Specialist'),(455,'',''),(456,'',''),(457,'',''),(458,'',''),(459,'',''),(460,'',''),(461,'',''),(462,'',''),(463,'',''),(464,'',''),(465,'',''),(466,'',''),(467,'',''),(468,'',''),(469,'',''),(470,'',''),(471,'','');
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12348 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'Customer 1'),(108,'Quince'),(112,'Samsung Benelux ITD: Algemeen'),(113,'Samsung Benelux Corporate'),(150,'Samsung Benelux TED'),(151,'Samsung Benelux AVD: TV'),(162,'The Phone House'),(214,'Tommy Hilfiger'),(233,'Bauknecht'),(246,'Samsung Benelux HAD'),(257,'Goodyear-Dunlop NL-BE'),(270,'KPN'),(277,'Apple'),(289,'HTC EMEA'),(315,'Samsung Benelux Service'),(317,'HTC Benelux'),(334,'Alrec'),(338,'Samsung Benelux ITD: Printing'),(345,'QYN'),(346,'HTC France'),(351,'Samsung Benelux ITD: Monitoren'),(359,'Samsung Benelux AVD: HES'),(360,'Holland Casino AA hoofdkantoor Hoofddorp'),(368,'Quince HU'),(369,'Samsung Benelux AVD: DSC'),(370,'MMD'),(382,'Kirkman Company'),(410,'Holland Casino Amsterdam'),(411,'Holland Casino Breda'),(412,'Holland Casino Eindhoven'),(413,'Holland Casino Enschede'),(414,'Holland Casino Groningen'),(415,'Holland Casino Leeuwarden'),(416,'Holland Casino Nijmegen'),(417,'Holland Casino Rotterdam'),(418,'Holland Casino Schiphol'),(419,'Holland Casino Scheveningen'),(420,'Holland Casino Utrecht'),(421,'Holland Casino Valkenburg'),(422,'Holland Casino Venlo'),(423,'Holland Casino Zandvoort'),(440,'Goodyear-Dunlop UK'),(441,'Platform Outsourcing Nederland'),(450,'Samsung Benelux ITD: Notebooks'),(451,'Philips Consumer Lifestyle'),(457,'NAGA'),(460,'Media Markt & Saturn'),(489,'Setar'),(497,'HTC Australia'),(499,'Cambridge'),(505,'Stage Entertainment'),(506,'Nokia'),(510,'Green Hill'),(511,'ING Retail Nederland'),(513,'Whirlpool'),(518,'HTC South Asia'),(521,'Philips TV / TP Vision Netherlands B.V.'),(526,'HTC UK'),(527,'Korstjens Crossmedia Consultancy'),(528,'ID&T'),(537,'InVue Security Products'),(538,'Infopact'),(547,'Teradata Netherlands B.V.'),(560,'ABN-AMRO'),(561,'CTOUCH'),(562,'Bissell'),(565,'Quince Retail Solutions B.V. (QRS)'),(568,'Fox Sports'),(575,'HTC Canada'),(576,'HTC USA'),(577,'Telfort'),(579,'Hema'),(586,'Nederland Schoon'),(587,'HTC HQ (Taiwan)'),(589,'Scheer & Foppe'),(590,'Calvin Klein'),(594,'Intergamma'),(595,'Quince Platforms'),(596,'HTC Turkey'),(598,'Holmatro'),(599,'VNU'),(600,'brandXtension BV'),(602,'Oxxio'),(12345,'Customer 12345'),(12346,'NULL'),(12347,'NULL');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(100) DEFAULT NULL,
  `extension` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (3,'image/jpeg','jpg'),(4,'image/jpeg','jpg'),(5,'image/jpeg','jpg'),(6,'image/jpeg','jpg'),(7,'image/jpeg','jpg'),(8,'image/jpeg','jpg'),(9,'image/jpeg','jpg'),(10,'image/jpeg','jpg'),(11,'image/jpeg','jpg'),(12,'image/jpeg','jpg'),(13,'image/jpeg','jpg'),(14,'image/jpeg','jpg'),(15,'image/jpeg','jpg'),(16,'image/jpeg','jpg'),(17,'image/jpeg','jpg'),(18,'image/jpeg','jpg'),(19,'image/jpeg','jpg'),(20,'image/jpeg','jpg'),(21,'image/jpeg','jpg'),(22,'image/jpeg','jpg'),(23,'image/jpeg','jpg'),(24,'image/jpeg','jpg'),(25,'image/jpeg','jpg'),(26,'image/jpeg','jpg'),(27,'image/jpeg','jpg'),(28,'image/jpeg','jpg'),(29,'image/jpeg','jpg'),(30,'image/jpeg','jpg'),(31,'image/jpeg','jpg'),(32,'image/jpeg','jpg'),(33,'image/jpeg','jpg'),(34,'image/jpeg','jpg'),(35,'image/jpeg','jpg'),(36,'image/jpeg','jpg'),(37,'image/jpeg','jpg'),(38,'image/jpeg','jpg'),(39,'image/jpeg','jpg'),(40,'image/jpeg','jpg'),(41,'image/jpeg','jpg'),(42,'image/jpeg','jpg'),(43,'image/jpeg','jpg'),(44,'image/jpeg','jpg'),(45,'image/jpeg','jpg'),(46,'image/jpeg','jpg'),(47,'image/jpeg','jpg'),(48,'image/jpeg','jpg'),(49,'image/jpeg','jpg'),(50,'image/jpeg','jpg'),(51,'image/jpeg','jpg'),(52,'image/jpeg','jpg'),(53,'image/jpeg','jpg'),(54,'image/jpeg','jpg'),(55,'image/jpeg','jpg'),(56,'image/jpeg','jpg'),(57,'image/jpeg','jpg'),(58,'image/jpeg','jpg'),(59,'image/jpeg','jpg'),(60,'image/jpeg','jpg'),(61,'image/jpeg','jpg'),(62,'image/jpeg','jpg'),(63,'image/jpeg','jpg'),(64,'image/jpeg','jpg'),(65,'image/jpeg','jpg'),(66,'image/jpeg','jpg'),(67,'image/jpeg','jpg'),(68,'image/jpeg','jpg'),(69,'image/jpeg','jpg'),(70,'image/jpeg','jpg'),(71,'image/jpeg','jpg'),(72,'image/jpeg','jpg'),(73,'image/jpeg','jpg'),(74,'image/jpeg','jpg'),(75,'image/jpeg','jpg'),(76,'image/jpeg','jpg'),(77,'image/jpeg','jpg'),(78,'image/jpeg','jpg'),(79,'image/jpeg','jpg'),(80,'image/jpeg','jpg'),(81,'image/jpeg','jpg'),(82,'image/jpeg','jpg'),(83,'image/jpeg','jpg'),(84,'image/jpeg','jpg'),(85,'image/jpeg','jpg'),(86,'image/jpeg','jpg'),(87,'image/jpeg','jpg'),(88,'image/jpeg','jpg'),(89,'image/jpeg','jpg'),(90,'image/jpeg','jpg'),(91,'image/jpeg','jpg'),(92,'image/jpeg','jpg'),(93,'image/jpeg','jpg'),(94,'image/jpeg','jpg'),(95,'image/jpeg','jpg');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `itemImages`
--

DROP TABLE IF EXISTS `itemImages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `itemImages` (
  `item` int(11) DEFAULT NULL,
  `image` int(11) DEFAULT NULL,
  KEY `item` (`item`),
  KEY `image` (`image`),
  CONSTRAINT `itemimages_ibfk_1` FOREIGN KEY (`item`) REFERENCES `items` (`id`),
  CONSTRAINT `itemimages_ibfk_2` FOREIGN KEY (`image`) REFERENCES `images` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `itemImages`
--

LOCK TABLES `itemImages` WRITE;
/*!40000 ALTER TABLE `itemImages` DISABLE KEYS */;
INSERT INTO `itemImages` VALUES (841,3),(842,4),(843,5),(844,6),(845,7),(845,8),(845,9),(845,10),(845,11),(846,12),(847,13),(848,14),(849,15),(850,16),(851,17),(851,18),(851,19),(851,20),(851,21),(852,22),(853,23),(855,24),(856,25),(857,26),(858,27),(859,28),(860,29),(860,30),(860,31),(860,32),(861,33),(862,34),(863,35),(864,36),(864,37),(864,38),(864,39),(864,40),(865,41),(866,42),(867,43),(868,44),(868,45),(868,46),(868,47),(870,48),(871,49),(872,50),(873,51),(873,52),(873,53),(873,54),(874,55),(875,56),(876,57),(877,58),(877,59),(877,60),(877,61),(877,62),(878,63),(879,64),(880,65),(881,66),(882,67),(882,68),(882,69),(882,70),(883,71),(884,72),(885,73),(886,74),(887,75),(887,76),(887,77),(887,78),(887,79),(888,80),(889,81),(890,82),(891,83),(892,84),(892,85),(892,86),(892,87),(892,88),(893,89),(895,90),(896,91),(897,92),(898,93),(899,94),(900,95);
/*!40000 ALTER TABLE `itemImages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `itemTags`
--

DROP TABLE IF EXISTS `itemTags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `itemTags` (
  `item` int(11) DEFAULT NULL,
  `tag` int(11) DEFAULT NULL,
  KEY `item` (`item`),
  KEY `tag` (`tag`),
  CONSTRAINT `itemtags_ibfk_1` FOREIGN KEY (`item`) REFERENCES `items` (`id`),
  CONSTRAINT `itemtags_ibfk_2` FOREIGN KEY (`tag`) REFERENCES `tags` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `itemTags`
--

LOCK TABLES `itemTags` WRITE;
/*!40000 ALTER TABLE `itemTags` DISABLE KEYS */;
/*!40000 ALTER TABLE `itemTags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
  KEY `type` (`type`),
  CONSTRAINT `items_ibfk_1` FOREIGN KEY (`customer`) REFERENCES `customers` (`id`),
  CONSTRAINT `items_ibfk_2` FOREIGN KEY (`author`) REFERENCES `authors` (`id`),
  CONSTRAINT `items_ibfk_3` FOREIGN KEY (`type`) REFERENCES `types` (`type`)
) ENGINE=InnoDB AUTO_INCREMENT=901 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (841,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',12345,'EuroShop 2014, DÃ¼sseldorf','Quince Retail Solutions is currently attending â€˜worldâ€™s leading retail trade fairâ€™ EuroShop 2014, in DÃ¼sseldorf Germany. The guys are there to demonstrate how QRS digital in-store solutions can help boost retail business.',123,'https://www.facebook.com/photo.php?fbid=10151869122070666','fb','10151869122070666'),(842,'b','QUARTER-SIZED IMAGE w/ INFO','2014-01-01 23:15:00',NULL,'','Yesterday we were shooting a movie at the Samsung sponsored â€˜Coolste baan van Nederlandâ€™ (the coolest ice rink in the Netherlands).',234,'https://www.facebook.com/photo.php?fbid=10151880720175666','fb','10151880720175666'),(843,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',12345,'ABN Amro Word of Tennis Tournament','Today none other than tennis legend Richard Krajicek played the Quince powered WTT Game live at the ABN AMRO World Tennis Tournament.',123,'https://www.facebook.com/photo.php?fbid=10151854263880666','fb','10151854263880666'),(844,'c','QUARTER-SIZED CLIENT-LOGO w/ NO INFO ','2014-01-01 23:15:00',1,'','',NULL,'','',''),(845,'f','FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!','2014-01-01 23:15:00',12345,'','Global trade communication platform in 26 languages where over  81.000 registered users in 56 countries continuously engage with HTC on product training & sales activation. Motivated by becoming a 5 star specialist by gaining stars and points to reach top ranked retail sales person of their country. Obviously Top ranked Retail wins rewards. Available on Desktop, mobile, App.',NULL,'','',''),(846,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',12345,'Fox Top Scorers','Fox Sports required a multi-media campaign of print posters and website for their Top-Scorers program.',123,'','fb',''),(847,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',12345,'','Quince IDU has developed a holographic presentation showing the highlights of the new Samsung Solid State Drive 830 Series.',123,'','vim','38566969'),(848,'c','QUARTER-SIZED CLIENT-LOGO w/ NO INFO ','2014-01-01 23:15:00',1,'','',NULL,'','',''),(849,'b','QUARTER-SIZED IMAGE w/ INFO','2014-01-01 23:15:00',NULL,'We are Quincers','These fruits are Quinces.',234,'http://www.pinterest.com/pin/485896247268806842','pin','485896247268806842'),(850,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',12345,'Helden van Hi Casefilm','',123,'','vim','66137605'),(851,'f','FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!','2014-01-01 23:15:00',12345,'','',NULL,'','',''),(852,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',12345,'Holland Casino Vakantie','A fresh and bright visual alternative approach to, the more commonly mature and luxurious, casino aesthetic.',123,'','fb',''),(853,'b','QUARTER-SIZED IMAGE w/ INFO','2014-01-01 23:15:00',NULL,'Behind the Scenes','It is our responsibility to take care of our environment. There\'s no actual small figures cleaning the the mess we leave behind.',234,'http://www.pinterest.com/pin/485896247268806828','fb','485896247268806828'),(854,'c','QUARTER-SIZED CLIENT-LOGO w/ NO INFO ','2014-01-01 23:15:00',1,'','',NULL,'','',''),(855,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',12345,'','From all of us at Quince, we wish you happy holidays and all the best for 2014!',123,'','vim','85926446'),(856,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',12345,'Holland Casino Vakantie','A fresh and bright visual alternative approach to, the more commonly mature and luxurious, casino aesthetic.',123,'','fb',''),(857,'b','QUARTER-SIZED IMAGE w/ INFO','2014-01-01 23:15:00',NULL,'Jeffrey in Lingo','Last night Jeffrey and his brother Mitchel took part in the Dutch tv game show Lingo. ',234,'http://www.uitzendinggemist.nl/afleveringen/1391351','fb','10151817863075666'),(858,'c','QUARTER-SIZED CLIENT-LOGO w/ NO INFO ','2014-01-01 23:15:00',1,'','',NULL,'','',''),(859,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',12345,'Dreamoc content creation for HTC','Quince Interactive Display Units created a holographic Dreamoc presentation of the HTC Desire HD.',123,'','vim','39403822'),(860,'f','FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!','2014-01-01 23:15:00',12345,'Samsung \'Shop in shop\'','Samsung sought to create a personalized \'premium\' brand experience with in their various third-party retail environments. We took care of the branding and executed an extensive photo-shoot to bring life into what can sometimes be a cold technical shopping experience.',NULL,'','',''),(861,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',12345,'Samsung \'Convergence\'','Samsung\'s retail needs a look that showcases the interoperability of its many products in your home.  This is our proposed new look.',123,'','fb',''),(862,'b','QUARTER-SIZED IMAGE w/ INFO','2014-01-01 23:15:00',NULL,'Welcome Jan','A new colleague has started at Quince Amsterdam. His name is Jan and he will be working as a software engineer.',234,'https://www.facebook.com/photo.php?fbid=10151669526830666','fb','10151669526830666'),(863,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',12345,'HiJack','',123,'','vim','43682084'),(864,'f','FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!','2014-01-01 23:15:00',12345,'','',NULL,'','',''),(865,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',12345,'Supersoaker battle','Friday afternoon, sun, drinks and super soakers. What\'s not to like? Enjoy the summer weekend everyone!',123,'https://www.facebook.com/photo.php?fbid=10151480910580666','fb','10151480910580666'),(866,'b','QUARTER-SIZED IMAGE w/ INFO','2014-01-01 23:15:00',NULL,'The Quince band','Just when you thought the day could have used a bit more play next to all the work, the Quince band starts rehearsing...',234,'https://www.facebook.com/photo.php?fbid=10151731915295666','fb','10151731915295666'),(867,'c','QUARTER-SIZED CLIENT-LOGO w/ NO INFO ','2014-01-01 23:15:00',1,'','',NULL,'','',''),(868,'f','FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!','2014-01-01 23:15:00',12345,'Samsung Sensation','',NULL,'','',''),(869,'h','QUARTER-SIZED TEXT-BLOCK CELL w/ NO INFO & USER INFO IN OFF-STATE','2014-01-01 23:15:00',NULL,'Quince Rocks!','Just when you thought the day could have used a bit more play next to all the work, the Quince band starts rehearsing...',123,'https://www.facebook.com/photo.php?fbid=10151731915295666','fb','10151731915295666'),(870,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',12345,'QRS Touch','Quince Interactive Retail Solutions has developed an interactive photo booth that has been in demand ever since its first release... ',123,'','vim','75781009'),(871,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',12345,'Fred &amp; Daniel working the grill!','Today we were treated to delicious, yummy, good old fashioned hamburgers with everything on it for lunch. Kudos to chefs, Daniel and Frederik, for this very tasty initiative!',123,'https://www.facebook.com/photo.php?fbid=10151810418470666','fb','10151810418470666'),(872,'b','QUARTER-SIZED IMAGE w/ INFO','2014-01-01 23:15:00',NULL,'Love - take what you need','Somebody got creative and happily shared the result with her colleagues...',234,'https://www.facebook.com/photo.php?fbid=10151694285220666','fb','10151694285220666'),(873,'f','FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!','2014-01-01 23:15:00',12345,'','',NULL,'','',''),(874,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',12345,'','',123,'http://www.test.com','vim','77117922'),(875,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',12345,'Gamer\'s Delight','Having some good old virtual Friday afternoon fun with the new Oculus Rift virtual reality headset. We cant wait to get our hands into the SDK and make this thing do magic!',123,'https://www.facebook.com/photo.php?fbid=10151553932155666','fb','10151553932155666'),(876,'b','QUARTER-SIZED IMAGE w/ INFO','2014-01-01 23:15:00',NULL,'Welcome Gian-Luca','Heâ€™s been working at Quince for over a month now and for some unknown reason...',234,'https://www.facebook.com/photo.php?fbid=10151681522185666','fb','10151681522185666'),(877,'f','FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!','2014-01-01 23:15:00',12345,'','',NULL,'','',''),(878,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',12345,'Holland Casino Interactive Projection Mapping','',123,'','vim','60837705'),(879,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',12345,'Lunch time!','Whatâ€™s cooking at Quince today? Thanks to Jamel weâ€™re having shwarma for lunch!',123,'https://www.facebook.com/photo.php?fbid=10151552064070666','fb','10151552064070666'),(880,'b','QUARTER-SIZED IMAGE w/ INFO','2014-01-01 23:15:00',NULL,'Hearing Voices','Recording a voice-over for another great Quince video production. It looks like this!',234,'https://www.facebook.com/photo.php?fbid=10151558387050666','fb','10151558387050666'),(881,'c','QUARTER-SIZED CLIENT-LOGO w/ NO INFO ','2014-01-01 23:15:00',1,'','',NULL,'','',''),(882,'f','FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!','2014-01-01 23:15:00',12345,'','',NULL,'','',''),(883,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',12345,'','All Samsung divisions were present at this business-to-business event, showing the latest smart solutions that make life more enjoyable.',123,'','vim','45238850'),(884,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',12345,'Quince rebranding','',123,'https://www.facebook.com/photo.php?fbid=10151718746400666','fb','10151718746400666'),(885,'b','QUARTER-SIZED IMAGE w/ INFO','2014-01-01 23:15:00',NULL,'Quince Halloween 2013','One hellish party of the damned.',234,'https://www.facebook.com/photo.php?fbid=10151669657185666','fb','10151669657185666'),(886,'c','QUARTER-SIZED CLIENT-LOGO w/ NO INFO ','2014-01-01 23:15:00',1,'','',NULL,'','',''),(887,'f','FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!','2014-01-01 23:15:00',12345,'Lorem Ipsum Dolor','',NULL,'','',''),(888,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',12345,'','',123,'','vim','66137688'),(889,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',12345,'Baked Quince!','Baked Quince, it looks like this. Kudos to Theo for this very special treat!',123,'https://www.facebook.com/photo.php?fbid=10151647722395666','fb','10151647722395666'),(890,'b','QUARTER-SIZED IMAGE w/ INFO','2014-01-01 23:15:00',NULL,'Welcome Carla','Sheâ€™s doing an internship at Quince, helping out the development team as a part of her study in web development.',234,'https://www.facebook.com/photo.php?fbid=10151681614700666','fb','10151681614700666'),(891,'c','QUARTER-SIZED CLIENT-LOGO w/ NO INFO ','2014-01-01 23:15:00',1,'','',NULL,'','',''),(892,'f','FULL-SIZED IMAGE-CAROUSEL. w/ NO INFO  --  ONLY ONE LARGE SCROLL PER PARENT LIST OBJECT!!!','2014-01-01 23:15:00',12345,'','',NULL,'','',''),(893,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',12345,'','HiJack and making of Hi Commercial',123,'http://www.test.com','vim','66137605'),(894,'h','QUARTER-SIZED TEXT-BLOCK CELL w/ NO INFO & USER INFO IN OFF-STATE','2014-01-01 23:15:00',NULL,'','Having some good old virtual Friday afternoon fun with the Oculus Rift virtual reality headset. Enjoy the weekend everyone!',123,'https://www.facebook.com/photo.php?fbid=10151553932155666','fb','10151553932155666'),(895,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',12345,'','Whatâ€™s wrong with this Friday afternoon picture? Absolutely nothing. The good old yellow notes sessions are still an important part of the creative process.',123,'https://www.facebook.com/photo.php?fbid=10151493244935666','fb','10151493244935666'),(896,'a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU','2014-01-01 23:15:00',12345,'Friday Afternoon Social!','Whatâ€™s wrong with this Friday afternoon picture? Absolutely nothing. The good old yellow notes sessions are still an important part of the creative process.',123,'https://www.facebook.com/photo.php?fbid=10151396704885666','fb','10151396704885666'),(897,'b','QUARTER-SIZED IMAGE w/ INFO','2014-01-01 23:15:00',NULL,'','We knew there was something missing at our coffee break this morning, but we didnâ€™t have a clue what exactly. Gladly our birthday boy Julian did...',234,'https://www.facebook.com/photo.php?fbid=10151527655645666','fb','10151527655645666'),(898,'c','QUARTER-SIZED CLIENT-LOGO w/ NO INFO ','2014-01-01 23:15:00',1,'','',NULL,'','',''),(899,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',12345,'Live Device Tables At KPN','How to get the most out of self-service on the shop floor. With Live Device Tables powered by Quince Interactive Display Units.',123,'','vim','43094863'),(900,'j','VIDEO THUMBS. ALWAYS QUARTER-SIZED','2014-01-01 23:15:00',12345,'Samsung Smart Portal','An impression of a stylish touch screen application for in-store use, developed by Quince Amsterdam...',123,'','vim','41848307');
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tag` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `types`
--

DROP TABLE IF EXISTS `types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `types` (
  `type` char(1) NOT NULL DEFAULT '',
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES ('a','PORTRAIT-SIZED IMAGE w/ INFO CLICKTHRU'),('b','QUARTER-SIZED IMAGE w/ INFO'),('c','QUARTER-SIZED CLIENT-LOGO w/ NO INFO '),('f','FULL-SIZED MULTI IMAGE-CAROUSEL (CAMPAIGN STACK)'),('h','QUARTER-SIZED TEXT-BLOCK CELL w/ NO INFO & USER INFO IN OFF-STATE'),('j','QUARTER-SIZED VIDEO PLAYER CELL');
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-04-14 12:26:35
