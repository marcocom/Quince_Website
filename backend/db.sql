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
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `job` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
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
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'Quince Amsterdam');
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
  `type` int(11) DEFAULT NULL,
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
  CONSTRAINT `items_ibfk_3` FOREIGN KEY (`type`) REFERENCES `types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (3,1,'first item comment','2014-04-02 14:20:36',1,'This is the very first item',NULL,1,'http://www.quince.nl',NULL,NULL),(5,1,NULL,NULL,1,'test post a 5',NULL,1,NULL,NULL,NULL),(6,1,NULL,NULL,1,'test post a 6',NULL,1,NULL,NULL,NULL),(7,1,NULL,NULL,1,'test post a 7',NULL,1,NULL,NULL,NULL),(8,1,NULL,NULL,1,'test post a 8',NULL,1,NULL,NULL,NULL),(9,1,NULL,NULL,1,'test post a 9',NULL,1,NULL,NULL,NULL),(10,1,NULL,NULL,1,'test post a 10',NULL,1,NULL,NULL,NULL),(11,1,NULL,NULL,1,'test post a 11',NULL,1,NULL,NULL,NULL),(12,1,NULL,NULL,1,'test post a 12',NULL,1,NULL,NULL,NULL),(13,1,NULL,NULL,1,'test post a 13',NULL,1,NULL,NULL,NULL),(14,1,NULL,NULL,1,'test post a 14',NULL,1,NULL,NULL,NULL),(15,1,NULL,NULL,1,'test post a 15',NULL,1,NULL,NULL,NULL),(16,1,NULL,NULL,1,'test post a 16',NULL,1,NULL,NULL,NULL),(17,1,NULL,NULL,1,'test post a 17',NULL,1,NULL,NULL,NULL),(18,1,NULL,NULL,1,'test post a 18',NULL,1,NULL,NULL,NULL),(19,1,NULL,NULL,1,'test post a 19',NULL,1,NULL,NULL,NULL),(20,1,NULL,NULL,1,'test post a 20',NULL,1,NULL,NULL,NULL),(21,1,NULL,NULL,1,'test post a 21',NULL,1,NULL,NULL,NULL),(22,1,NULL,NULL,1,'test post a 22',NULL,1,NULL,NULL,NULL),(23,1,NULL,NULL,1,'test post a 23',NULL,1,NULL,NULL,NULL),(24,1,NULL,NULL,1,'test post a 24',NULL,1,NULL,NULL,NULL),(25,2,NULL,NULL,1,'test post b 25',NULL,1,NULL,NULL,NULL),(26,2,NULL,NULL,1,'test post b 26',NULL,1,NULL,NULL,NULL),(27,2,NULL,NULL,1,'test post b 27',NULL,1,NULL,NULL,NULL),(28,2,NULL,NULL,1,'test post b 28',NULL,1,NULL,NULL,NULL),(29,2,NULL,NULL,1,'test post b 29',NULL,1,NULL,NULL,NULL),(30,2,NULL,NULL,1,'test post b 30',NULL,1,NULL,NULL,NULL),(31,2,NULL,NULL,1,'test post b 31',NULL,1,NULL,NULL,NULL),(32,2,NULL,NULL,1,'test post b 32',NULL,1,NULL,NULL,NULL),(33,3,NULL,NULL,1,'test post f 33',NULL,1,NULL,NULL,NULL),(34,3,NULL,NULL,1,'test post f 34',NULL,1,NULL,NULL,NULL),(35,3,NULL,NULL,1,'test post f 35',NULL,1,NULL,NULL,NULL);
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
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` char(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES (1,'a'),(2,'b'),(3,'f');
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

-- Dump completed on 2014-04-08 13:08:44
