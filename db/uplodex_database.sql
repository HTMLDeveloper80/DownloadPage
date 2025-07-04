-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Lip 04, 2025 at 01:48 PM
-- Wersja serwera: 10.4.28-MariaDB
-- Wersja PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `uplodex_database`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `password`) VALUES
(2, 'hihi@gmail.com', 'hihi', '$2y$10$0ZwrYwz2VLuFSqpIRo/EUuVlbVt3ngv.tHrHHiD8kJNLknzuYrgYW'),
(3, 'czesc@gmail.com', 'czesc', '$2y$10$Qojvi0rGx8dHyNtgpp46He.A2IZsCePiKjbTAGGOxcE2rHVBe4td2'),
(4, 'Mordor@gmail.com', 'Mordor', '$2y$10$AJPmyo/8fqGSWjwTrBTKSeSxfqlLk/W0VUqreDNCFOJtc7eJyJKKu'),
(5, 'MackowatyJakub123@gmail.com', 'MackowatyJakub123', '$2y$10$iKYhydppKM.NnXos7ZBPQekFiLvWHIJuRaVTLN2L/Ko7uF.Bnspyq'),
(6, 'maciej@gmail.com', 'Maciej', '$2y$10$PF2E6bcLN298kBlMOeu4jeFtIvexiMVcG7WbeoOvbzMieV6un5a96'),
(7, 'jakub@gmail.com', 'Jakub', '$2y$10$B4AHH5GUtmfk/5PeOI8wMexLv/1ztHXcU8K9gEvJ1627wu/R2my9.'),
(8, 'maciejek@gmail.com', 'Maciejek', '$2y$10$fRXu5DTNWPWBRp.VeLKUpekJlLIM1Vckvp1gdvX.R.InRAQqr7T..'),
(9, 'oskarini@gmail.com', 'Oskarini', '$2y$10$KHx5OGF/fQYKI/KscNp89eqVWlKBKAqYrdn5NaIiDUMOH4h8qily.');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
