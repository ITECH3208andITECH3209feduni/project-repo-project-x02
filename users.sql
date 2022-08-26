-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 26, 2022 at 03:25 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employability`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `create_datetime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `occupation` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `create_datetime`, `occupation`, `email`) VALUES
(131, '30385522', '52bb003669af44a5a2241654a8d23b98', '2022-07-31 20:02:09', 'student', 'm18176587@gmail.com'),
(132, '30385', '147b06b8dae3d9db86b04908fd18e17d', '2022-07-31 21:31:54', 'teacher', 'suki@gmail.com'),
(133, '303938327', 'ff7d335e7f5e1b0ac6aed5cfd33d6240', '2022-08-03 15:36:09', 'student', 'md@gmail.com'),
(134, 'suraj', '147b06b8dae3d9db86b04908fd18e17d', '2022-08-04 16:57:07', 'engineer', 'suraj@gmail.com'),
(135, 'PRATIK', '2b0716e06cee35da61619bc15043f3ef', '2022-08-09 02:41:48', 'doctor', 'pratik@gmail.com'),
(136, 'smaeer', '52bb003669af44a5a2241654a8d23b98', '2022-08-09 20:02:02', 'engineer', 'sameer@gmail.com'),
(137, 'suraj1233', 'ee9f98b1b9201f92e62fc254224e2e3e', '2022-08-09 21:04:40', 'student', 'suraj123@gmail.com'),
(138, 'Muhammad123', '52bb003669af44a5a2241654a8d23b98', '2022-08-09 21:06:41', 'student', 'muhammad123@gmail.com'),
(139, 'muhammad829', '52bb003669af44a5a2241654a8d23b98', '2022-08-09 22:07:05', 'teacher', 'muhammad829@gmail.com'),
(140, 'abcd', '147b06b8dae3d9db86b04908fd18e17d', '2022-08-09 22:09:10', 'student', 'abcd@gmail.com'),
(141, 'j', '147b06b8dae3d9db86b04908fd18e17d', '2022-08-09 22:43:04', 'teacher', 'j@gmail.com'),
(142, 'abcde', '2b0716e06cee35da61619bc15043f3ef', '2022-08-10 21:50:31', 'engineer', 'abcde@gmail.com'),
(143, 'muhammad786', '147b06b8dae3d9db86b04908fd18e17d', '2022-08-12 19:01:29', 'engineer', 'm786@gmail.com'),
(144, '2711928`', '147b06b8dae3d9db86b04908fd18e17d', '2022-08-12 19:53:37', 'engineer', '82@gmail.com'),
(145, 'md786', '52bb003669af44a5a2241654a8d23b98', '2022-08-14 20:18:22', 'student', 'md7861@gmail.com'),
(146, 'Anirudh', '2b0716e06cee35da61619bc15043f3ef', '2022-08-16 21:08:40', 'teacher', 'anirudh@gmail.com'),
(147, 'Anirudh Phadke', '147b06b8dae3d9db86b04908fd18e17d', '2022-08-16 21:24:29', 'student', 'ani123@gmail.com'),
(148, 'muhammad', '147b06b8dae3d9db86b04908fd18e17d', '2022-08-16 18:03:40', 'teacher', 'md1@gmail.com');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
