-- Host: localhost    Database: fastshopping
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (3,'Jewelery','2020-10-14 19:03:59','2020-10-14 19:03:59'),(2,'Women Clothing','2020-10-14 19:03:59','2020-10-14 19:03:59'),(1,'Men Clothing','2020-10-14 19:03:59','2020-10-14 19:03:59');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'Mrs. Corene Effertz','495863','71639 Kelvin Plaza Suite 219\nArleneborough, KS 26264','673232323232','vromaguera@example.org','2020-10-14 19:03:59','2020-10-14 19:03:59'),(2,'Prof. Jace Anderson MD','8383832','724 Jess Key Suite 664\nEvetown, NJ 34189-4647','4444444444','kozey.baylee@example.com','2020-10-14 19:03:59','2020-10-14 19:03:59'),(3,'Hassan Turner DDS','486995','8281 Mertz Tunnel\nNicholemouth, WI 20436','8355656565','kuhn.lonny@example.org','2020-10-14 19:03:59','2020-10-14 19:03:59'),(4,'Ms. Katherine Jerde','4457728','4965 Leffler Wells\nWest Margret, WV 17550','1534545456','matilda62@example.com','2020-10-14 19:03:59','2020-10-14 19:03:59'),(5,'Gennaro Kovacek','138838','17664 Kuhic Dam\nCorneliusfort, CT 65599-5740','3333333333','customer_test@example.com','2020-10-14 19:03:59','2020-10-14 19:03:59');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- table `orderitems`
--

LOCK TABLES `orderitems` WRITE;
/*!40000 ALTER TABLE `orderitems` DISABLE KEYS */;
INSERT INTO `orderitems` VALUES (1,1,4,3,15.99,'2020-10-14 19:05:45','2020-10-14 19:05:45');
/*!40000 ALTER TABLE `orderitems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'rzwqzmxlrre',NULL,47.97,'2020-10-14 19:05:44','2020-10-14 19:05:44');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (3,1,'Mens Cotton Jacket','great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.',55.99,'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg','2020-10-14 19:03:59','2020-10-14 19:03:59'),(4,1,'Mens Casual Slim Fit','The color could be slightly different between on the screen and in practice.',15.99,'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg','2020-10-14 19:03:59','2020-10-14 19:03:59'),(5,3,'Legends Naga','From our Legends Collection, the Naga was inspired by the mythical water.',695.00,'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg','2020-10-14 19:03:59','2020-10-14 19:03:59'),(6,3,'Solid Gold Petite Micropave ','Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed',168.00,'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg','2020-10-14 19:03:59','2020-10-14 19:03:59'),(7,3,'White Gold Plated Princess','Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.',9.99,'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg','2020-10-14 19:03:59','2020-10-14 19:03:59'),(8,3,'Pierced Owl Rose Gold Plated','Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',10.99,'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg','2020-10-14 19:03:59','2020-10-14 19:03:59'),(9,2,'Jacket Winter Coats','Note:The Jackets is US standard size, Material: 100% Polyester',56.99,'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg','2020-10-14 19:03:59','2020-10-14 19:03:59'),(10,2,'Leather Jacket','Removable Hooded Faux Leather Jacket.',29.95,'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg','2020-10-14 19:03:59','2020-10-14 19:03:59'),(11,2,'Rain Jacket Women Windbreaker','Lightweight perfet for trip or casual wear.',39.99,'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg','2020-10-14 19:03:59','2020-10-14 19:03:59'),(12,2,'MBJ Women\'s Solid Short','95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach.',9.85,'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg','2020-10-14 19:03:59','2020-10-14 19:03:59'),(13,2,'Opna Women\'s Short Sleeve Moisture','100% Polyester, Machine wash, 100% cationic polyester interlock',7.95,'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg','2020-10-14 19:03:59','2020-10-14 19:03:59'),(14,2,'DANVOUY Womens T Shirt Casual Cotton','95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees.',12.99,'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg','2020-10-14 19:03:59','2020-10-14 19:03:59');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-14 14:12:17

