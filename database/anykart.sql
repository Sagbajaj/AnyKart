-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: project
-- ------------------------------------------------------
-- Server version	8.0.19

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
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `user_id` int NOT NULL,
  `area` varchar(20) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `flat_no` int NOT NULL,
  `pin_code` varchar(20) DEFAULT NULL,
  `society_name` varchar(20) DEFAULT NULL,
  `state` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'PUNE','PUNE',101,'411027','RAMNAGAR','MAHARASHTRA'),(2,'PUNE','PUNE',102,'105012','RAMNAGAR','MAHARASHTRA'),(3,'PUNE','PUNE',103,'411027','RAMNAGAR','MAHARASHTRA'),(4,'PUNE','PUNE',104,'411027','RAMNAGAR','MAHARASHTRA'),(5,'PUNE','PUNE',105,'411027','RAMNAGAR','MAHARASHTRA'),(6,'PUNE','PUNE',106,'411027','RAMNAGAR','MAHARASHTRA'),(7,'PUNE','PUNE',107,'411027','RAMNAGAR','MAHARASHTRA'),(8,'PUNE','PUNE',108,'411027','RAMNAGAR','MAHARASHTRA'),(9,'pune','PUNE',109,'411027','RAMNAGAR','MAHARASHTRA'),(10,'PUNE','PUNE',110,'411027','RAMNAGAR','MAHARASHTRA');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(100) DEFAULT NULL,
  `discount` int NOT NULL,
  `final_price` double NOT NULL,
  `grams` int NOT NULL,
  `price` double NOT NULL,
  `product_id` int NOT NULL,
  `product_name` varchar(20) DEFAULT NULL,
  `qty` int NOT NULL,
  `rating` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'BOOKS'),(2,'MOBILES'),(3,'FASHION'),(4,'GROCERY'),(5,'SPORTS');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_address`
--

DROP TABLE IF EXISTS `order_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_address` (
  `id` int NOT NULL AUTO_INCREMENT,
  `area` varchar(20) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `flat_no` int NOT NULL,
  `order_id` int NOT NULL,
  `pin_code` varchar(20) DEFAULT NULL,
  `society_name` varchar(20) DEFAULT NULL,
  `state` varchar(20) DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_address`
--

LOCK TABLES `order_address` WRITE;
/*!40000 ALTER TABLE `order_address` DISABLE KEYS */;
INSERT INTO `order_address` VALUES (1,'PIMPRI','PUNE',302,1,'411027','SAILEELA','MAHARASHTRA',9);
/*!40000 ALTER TABLE `order_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `final_price` double NOT NULL,
  `grams` int NOT NULL,
  `product_name` varchar(20) DEFAULT NULL,
  `qty` int NOT NULL,
  `order_id` int NOT NULL,
  `customer_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKjyu2qbqt8gnvno9oe9j2s2ldk` (`order_id`),
  KEY `FKvvl8f3hc2im3lg5iwx63eb86` (`customer_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
INSERT INTO `order_details` VALUES (1,391.51,50,'Atomic Habits',1,1,9),(2,357.5,50,'Ikigai',1,1,9),(3,99,60,'Memory',1,1,9);
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `delivery_date` date DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `order_delivery_status` varchar(255) DEFAULT NULL,
  `total_price` double NOT NULL,
  `customer_id` int NOT NULL,
  `delivery_boy_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKsjfs85qf6vmcurlx43cnc16gy` (`customer_id`),
  KEY `FKl9v167i27vej7t3hgjhclt173` (`delivery_boy_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'2022-04-04','2022-04-01','PENDING',848.01,9,7);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `payment_date` date DEFAULT NULL,
  `payment_status` varchar(20) DEFAULT NULL,
  `payment_type` varchar(20) DEFAULT NULL,
  `delivery_boy_id` int NOT NULL,
  `order_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK5t7b4ycryfwbr1y25my4aq778` (`delivery_boy_id`),
  KEY `FKlouu98csyullos9k25tbpk4va` (`order_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,'2022-04-01','PAID','DEBIT',7,1);
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_image`
--

DROP TABLE IF EXISTS `product_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_image` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` longblob,
  `image_content_type` varchar(30) DEFAULT NULL,
  `product_name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_6tpf4oj5smuf9pv6hvns9s7qy` (`product_name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_image`
--

LOCK TABLES `product_image` WRITE;
/*!40000 ALTER TABLE `product_image` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(200) DEFAULT NULL,
  `discount` int NOT NULL,
  `final_price` double NOT NULL,
  `grams` int NOT NULL,
  `price` double NOT NULL,
  `product_name` varchar(100) DEFAULT NULL,
  `qty` int NOT NULL,
  `rating` int NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1cf90etcu98x1e6n9aks3tel3` (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Atomic Habits',51,391.51,50,799,'Atomic Habits',19,4,1),(2,'Ikigai: The Japanese secret to a long and happy life',35,357.5,50,550,'Ikigai',19,4,1),(3,'Memory: How To Develop, Train, And Use It',34,99,60,150,'Memory',19,4,1),(4,'Attitude Is Everything',31,137.31,11,199,'Attitude Is Everything',11,4,1),(5,'Redmi 9 (Sky Blue, 4GB RAM, 64GB Storage) | 2.3GHz Mediatek Helio G35 Octa core Processor',14,9459.14,80,10999,'Redmi 9',20,4,2),(6,'Oppo A16k (Midnight Black, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers',25,11992.5,80,15990,'Oppo A16k',25,4,2),(7,'OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage) with No Cost EMI/Additional Exchange Offers',19,17003.52,80,20992,'OPPO A74 5G',20,4,2),(8,'realme narzo 30 5G (Racing Silver, 6GB RAM, 128GB Storage) ',6,16919.06,120,17999,'realme narzo 30 5G',20,4,2),(9,'OPPO A31 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers',19,12951.9,100,15990,'OPPO A31',15,4,2),(10,'(Diamond Dazzle 6GB RAM 128 GB Storage) Slimmest (6.81mm) & Lightest (158g) 5G ',16,26879.16,90,31999,'Xiaomi 11 Lite NE 5G',20,4,2),(11,'Redmi Note 11T 5G (Matte Black 6GB RAM 128GB ROM) ',6,16919.06,91,17999,'Redmi Note 11T 5G',20,4,2),(12,'Mag Men\'s Cotton Kurta Pajama Set',68,799.68,30,2499,'Kurta Pajama',20,4,3),(13,'',78,373.78,60,1699,'Women\'s Kurta',20,4,3),(14,'Diverse Men\'s Regular Formal Shirt DiverseDiverse',50,899.5,60,1799,'Formal Shirt',10,4,3),(29,'SUGAR FREE PALLETS',0,50,50,50,'SUGAR FREE PALLETS',60,4,4),(16,'Men\'s Polyester Hooded Neck Hooded Sweatshirt',50,1999.5,30,3999,'Hooded Sweatshirt',30,4,3),(17,'Max Baby-Boy\'s Regular Jeans',10,359.1,70,399,'Regular Jeans',12,4,3),(18,'Unisex Cotton Hooded Neck Hoodie',68,799.68,110,2499,'Neck Hoodie',12,4,3),(19,'Koel By Lavie Women\'s Kyne Ring Md Satchel Handbag',68,1055.67,60,3299,'Satchel Handbag',15,4,3),(20,'SG Kashmir Willow Cricket Bat ( Size: Short Handle,Leather Ball )',10,1619.1,400,1799,'SG Kashmir Willow Cricket Bat',15,4,5),(21,'Raisco R716F Nylon Badminton Net (Blue)',20,624,330,780,'Raisco R716F Nylon Badminton Net',50,4,5),(22,'Nivia Graffiti Basketball - Size: 7',10,584.1,50,649,'Nivia Graffiti Basketball',10,4,5),(23,'Yonex Mavis 10 Nylon 6 Shuttlecocks',0,650,55,650,'Yonex Mavis 10 Nylon 6 Shuttlecocks',50,4,5),(24,'TRAWOC 80L Travel Backpack for Outdoor Sport Camp Hiking Trekking Bag Camping Rucksack HK007 (NAVYBLUE) 1 Year Warranty',50,25000,1000,50000,'TRAWOC 80L Travel Backpack',11,4,5),(25,'How to Win Friends and Influence People',50,125,30,250,'How to Win Friends and Influence People',11,4,1),(26,'The Art of Wor',10,90,30,100,'The Art of Wor',50,4,1),(27,'The Monk Who Sold His Ferrari',20,200,100,250,'The Monk Who Sold His Ferrari',50,4,1),(28,'Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!',30,350,50,500,'Rich Dad Poor Dad',22,4,1),(30,'SAFFOLA RICE BRAN OIL',0,390,3000,390,'SAFFOLA RICE BRAN OIL',55,4,4),(31,'24 Mantra Jowar Flour',0,200,500,200,'24 Mantra Jowar Flour',10,4,4),(32,'Good Life BESAN',0,40,500,40,'Good Life BESAN',60,4,4),(33,'ID NATURAL PANEER',0,89,200,89,'ID NATURAL PANEER',40,4,4),(34,'DECCAN ORGANIC RICE',0,90,1000,90,'DECCAN ORGANIC RICE',300,4,4),(35,'BRITTANIA BREAD',0,32,450,32,'BRITTANIA BREAD',50,4,4),(36,'D\'lecta CHEDDAR CHEESE',0,112,200,112,'D\'lecta CHEDDAR CHEESE',30,4,4),(37,'Sportneer Table Tennis Set,Red and Black Double-Sided Table Tennis Set of 2/4 Rackets and 4/8 Balls ',50,600,600,1200,'Sportneer Table Tennis Set',15,4,5);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supplied_products`
--

DROP TABLE IF EXISTS `supplied_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supplied_products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(100) DEFAULT NULL,
  `discount` int NOT NULL,
  `final_price` double NOT NULL,
  `grams` int NOT NULL,
  `price` double NOT NULL,
  `product_name` varchar(200) DEFAULT NULL,
  `qty` int NOT NULL,
  `rating` int NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKm2enqvctsqj62wj41j4m5vd2a` (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplied_products`
--

LOCK TABLES `supplied_products` WRITE;
/*!40000 ALTER TABLE `supplied_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `supplied_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supplier`
--

DROP TABLE IF EXISTS `supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supplier` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKs1dd5csqciyb73tm0vep2slsy` (`user_id`),
  KEY `FKahjlfwqkw2ky8kmupb5ingqg9` (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplier`
--

LOCK TABLES `supplier` WRITE;
/*!40000 ALTER TABLE `supplier` DISABLE KEYS */;
INSERT INTO `supplier` VALUES (1,3,1),(2,4,2),(3,10,5),(4,5,3),(5,6,4);
/*!40000 ALTER TABLE `supplier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(30) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_6dotkott2kjsp8vw4d0m25fb7` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'sagar@gmail.com','Sagar','Bajaj','1111','8888888888','ADMIN'),(2,'rohit@gmail.com','Rohit','Ombale','1111','8888888888','ADMIN'),(3,'sup1@gmail.com','Supplier','one','1111','8888888888','SUPPLIER'),(4,'sup2@gmail.com','Supplier','two','1111','8888888888','SUPPLIER'),(5,'sup3@gmail.com','Supplier','three','1111','8888888888','SUPPLIER'),(6,'sup4@gmail.com','Supplier','four','1111','8888888888','SUPPLIER'),(7,'deli1@gmail.com','Delivery','boy1','1111','8888888888','DELIVERY_BOY'),(8,'deli2@gmail.com','Delivery','boy2','1111','8888888888','DELIVERY_BOY'),(9,'cust1@gmail.com','Customer','one','1111','8888888888','CUSTOMER'),(10,'sup5@gmail.com','SUP5','FIVE','1111','8888888888','SUPPLIER');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-02 12:41:49
