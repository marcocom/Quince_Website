-- MySQL dump 10.13  Distrib 5.5.24, for Win32 (x86)
--
-- Host: localhost    Database: quince
-- ------------------------------------------------------
-- Server version	5.5.24-log

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
  `name` varchar(100) DEFAULT NULL,
  `job` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES (1,'Jeroen van Delft','Developer');
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'Quince Amsterdam'),(2,'HTC EMEA');
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'image/png');
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
INSERT INTO `itemImages` VALUES (3,1);
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
INSERT INTO `itemTags` VALUES (3,1),(3,2);
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
  CONSTRAINT `items_ibfk_3` FOREIGN KEY (`type`) REFERENCES `types` (`type`),
  CONSTRAINT `items_ibfk_1` FOREIGN KEY (`customer`) REFERENCES `customers` (`id`),
  CONSTRAINT `items_ibfk_2` FOREIGN KEY (`author`) REFERENCES `authors` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (3,'a','first item comment','2014-04-08 14:18:53',2,'This is the very first item','text for item 3',1,'http://www.quince.nl','portal 3','ref 3'),(5,'a',NULL,'2014-04-08 14:18:53',1,'test post a 5','text for item 5',1,NULL,'portal 5','ref 5'),(6,'a',NULL,'2014-04-08 14:18:53',1,'test post a 6','text for item 6',1,NULL,'portal 6','ref 6'),(7,'a',NULL,'2014-04-08 14:18:53',1,'test post a 7','text for item 7',1,NULL,'portal 7','ref 7'),(8,'a',NULL,'2014-04-08 14:18:53',1,'test post a 8','text for item 8',1,NULL,'portal 8','ref 8'),(9,'a',NULL,'2014-04-08 14:18:53',1,'test post a 9','text for item 9',1,NULL,'portal 9','ref 9'),(10,'a',NULL,'2014-04-08 14:18:53',1,'test post a 10','text for item 10',1,NULL,'portal 10','ref 10'),(11,'a',NULL,'2014-04-08 14:18:53',1,'test post a 11','text for item 11',1,NULL,'portal 11','ref 11'),(12,'a',NULL,'2014-04-08 14:18:53',1,'test post a 12','text for item 12',1,NULL,'portal 12','ref 12'),(13,'a',NULL,'2014-04-08 14:18:53',1,'test post a 13','text for item 13',1,NULL,'portal 13','ref 13'),(14,'a',NULL,'2014-04-08 14:18:53',1,'test post a 14','text for item 14',1,NULL,'portal 14','ref 14'),(15,'a',NULL,'2014-04-08 14:18:53',1,'test post a 15','text for item 15',1,NULL,'portal 15','ref 15'),(16,'a',NULL,'2014-04-08 14:18:53',1,'test post a 16','text for item 16',1,NULL,'portal 16','ref 16'),(17,'a',NULL,'2014-04-08 14:18:53',1,'test post a 17','text for item 17',1,NULL,'portal 17','ref 17'),(18,'a',NULL,'2014-04-08 14:18:53',1,'test post a 18','text for item 18',1,NULL,'portal 18','ref 18'),(19,'a',NULL,'2014-04-08 14:18:53',1,'test post a 19','text for item 19',1,NULL,'portal 19','ref 19'),(20,'a',NULL,'2014-04-08 14:18:53',1,'test post a 20','text for item 20',1,NULL,'portal 20','ref 20'),(21,'a',NULL,'2014-04-08 14:18:53',1,'test post a 21','text for item 21',1,NULL,'portal 21','ref 21'),(22,'a',NULL,'2014-04-08 14:18:53',1,'test post a 22','text for item 22',1,NULL,'portal 22','ref 22'),(23,'a',NULL,'2014-04-08 14:18:53',1,'test post a 23','text for item 23',1,NULL,'portal 23','ref 23'),(24,'a',NULL,'2014-04-08 14:18:53',1,'test post a 24','text for item 24',1,NULL,'portal 24','ref 24'),(25,'b',NULL,'2014-04-08 14:18:53',1,'test post b 25','text for item 25',1,NULL,'portal 25','ref 25'),(26,'b',NULL,'2014-04-08 14:18:53',1,'test post b 26','text for item 26',1,NULL,'portal 26','ref 26'),(27,'b',NULL,'2014-04-08 14:18:53',1,'test post b 27','text for item 27',1,NULL,'portal 27','ref 27'),(28,'b',NULL,'2014-04-08 14:18:53',1,'test post b 28','text for item 28',1,NULL,'portal 28','ref 28'),(29,'b',NULL,'2014-04-08 14:18:53',1,'test post b 29','text for item 29',1,NULL,'portal 29','ref 29'),(30,'b',NULL,'2014-04-08 14:18:53',1,'test post b 30','text for item 30',1,NULL,'portal 30','ref 30'),(31,'b',NULL,'2014-04-08 14:18:53',1,'test post b 31','text for item 31',1,NULL,'portal 31','ref 31'),(32,'b',NULL,'2014-04-08 14:18:53',1,'test post b 32','text for item 32',1,NULL,'portal 32','ref 32'),(33,'f',NULL,'2014-04-08 14:18:53',1,'test post f 33','text for item 33',1,NULL,'portal 33','ref 33'),(34,'f',NULL,'2014-04-08 14:18:53',1,'test post f 34','text for item 34',1,NULL,'portal 34','ref 34'),(35,'f',NULL,'2014-04-08 14:18:53',1,'test post f 35','text for item 35',1,NULL,'portal 35','ref 35');
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'one'),(2,'two');
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
  PRIMARY KEY (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES ('a'),('b'),('f');
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

-- Dump completed on 2014-04-09 21:56:31
