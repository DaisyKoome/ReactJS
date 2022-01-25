-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 25, 2022 at 03:29 AM
-- Server version: 8.0.27-0ubuntu0.20.04.1
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `CRUDDatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `movie_reviews`
--

CREATE TABLE `movie_reviews` (
  `id` int NOT NULL,
  `movieName` varchar(200) NOT NULL,
  `movieReview` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `movie_reviews`
--

INSERT INTO `movie_reviews` (`id`, `movieName`, `movieReview`) VALUES
(1, 'princess switch', 'great movie'),
(2, 'dont look up', 'trendy'),
(3, 'Inception', 'good movie'),
(4, 'home alone', 'funny'),
(7, 'gemini man', 'witty'),
(8, 'robinhood', 'epic');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movie_reviews`
--
ALTER TABLE `movie_reviews`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movie_reviews`
--
ALTER TABLE `movie_reviews`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
