-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: sportshop
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('302b5262-8e79-4367-814f-d678601bf1cd','Nike Zoom Vapor',900,'W butach Vapor 15 Elite FG zawładniesz boiskiem. Wykorzystaliśmy w nich poduszkę gazową Zoom Air, stworzoną specjalnie z myślą o piłce nożnej, oraz czepliwą fakturę na wierzchu','korkiVapor.jpg','2023-12-05 19:55:23.693','2023-12-05 19:56:03.010'),('67395c15-b3bb-41b7-9243-062013579239','Nike Merculial',250,'Buty Nike Mercurial Elite FG mają minimalistyczny wygląd i wykorzystują małą ilość materiałów, przyspieszając grę. Wkładka z amortyzacją zapewnia wygodę.','korkiVapor.jpg','2023-11-28 18:46:59.940','2023-12-06 13:07:51.284'),('bcc849f3-f445-46ca-80a2-2b725d219d35','Nike Tiempo',400,'Buty Nike Tiempo 3 powracają do swoich korzeni. Ponadczasowy fason wyróżnia się miękką kangurzą skórą, która pozwala czuć się pewnie podczas gry.','korkiVapor.jpg','2023-11-28 18:25:47.244','2023-12-06 13:05:16.728'),('ed6ec08b-066b-46cc-920e-ddbd69c7720a','Nike Hipervenom',550,'Buty piłkarskie na sztuczną nawierzchnię typu turf Nike Hypervenom PhantomX III Elite Dynamic Fit dla małych/dużych dzieci.','korkiVapor.jpg','2023-11-28 18:25:33.964','2023-12-06 13:04:10.393');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-06 19:03:06
