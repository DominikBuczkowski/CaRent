-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 27 Lut 2023, 00:08
-- Wersja serwera: 10.4.24-MariaDB
-- Wersja PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `carent`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `ciezarowe`
--

CREATE TABLE `ciezarowe` (
  `idciezarowe` int(11) NOT NULL,
  `marka` varchar(45) DEFAULT NULL,
  `model` varchar(45) DEFAULT NULL,
  `rocznik` int(11) DEFAULT NULL,
  `konie` int(11) DEFAULT NULL,
  `paliwo` varchar(45) DEFAULT NULL,
  `osie` int(11) DEFAULT NULL,
  `typ` varchar(45) DEFAULT NULL,
  `zdjecie` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `ciezarowe`
--

INSERT INTO `ciezarowe` (`idciezarowe`, `marka`, `model`, `rocznik`, `konie`, `paliwo`, `osie`, `typ`, `zdjecie`) VALUES
(1, 'Mercedes', 'TEST', 1999, 222, 'aaa', 2, 'laweta', 'test');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `news`
--

CREATE TABLE `news` (
  `idnews` int(11) NOT NULL,
  `tytul` varchar(45) DEFAULT NULL,
  `podtytul` varchar(45) DEFAULT NULL,
  `text` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `osobowe`
--

CREATE TABLE `osobowe` (
  `idosobowe` int(11) NOT NULL,
  `marka` varchar(45) DEFAULT NULL,
  `model` varchar(45) DEFAULT NULL,
  `rocznik` int(11) DEFAULT NULL,
  `miejsca` int(11) DEFAULT NULL,
  `paliwo` varchar(45) DEFAULT NULL,
  `konie` int(11) DEFAULT NULL,
  `cena` varchar(45) DEFAULT NULL,
  `typ` varchar(45) DEFAULT NULL,
  `zdjecie1` varchar(45) DEFAULT NULL,
  `zdjecie2` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `osobowe`
--

INSERT INTO `osobowe` (`idosobowe`, `marka`, `model`, `rocznik`, `miejsca`, `paliwo`, `konie`, `cena`, `typ`, `zdjecie1`, `zdjecie2`) VALUES
(1, 'BMW', 'M3', 1999, 4, 'Benzyna', 321, '2000', 'Sportowe', 'e36_1.png', 'e36_2.png'),
(2, 'Volkswagen', 'Touran', 2008, 5, 'Diesel', 140, '2300', 'Minivan', 'touran_1.png', 'touran_2.png'),
(3, 'Volkswagen', 'Polo', 2003, 5, 'Benzyna', 660, '5000', 'Sportowe', 'polo_1.png', 'polo_2.png'),
(4, 'Sebring', 'Citicar', 1975, 2, 'Elektryk', 6, '1500', 'Kompakt', 'citi_1.png', 'citi_2.png'),
(5, 'Ferrari', 'F40', 1989, 2, 'Benzyna', 478, '7200', 'Sportowe', 'f40_1.png', 'f40_2.png');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `ciezarowe`
--
ALTER TABLE `ciezarowe`
  ADD PRIMARY KEY (`idciezarowe`);

--
-- Indeksy dla tabeli `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`idnews`);

--
-- Indeksy dla tabeli `osobowe`
--
ALTER TABLE `osobowe`
  ADD PRIMARY KEY (`idosobowe`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `ciezarowe`
--
ALTER TABLE `ciezarowe`
  MODIFY `idciezarowe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT dla tabeli `news`
--
ALTER TABLE `news`
  MODIFY `idnews` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `osobowe`
--
ALTER TABLE `osobowe`
  MODIFY `idosobowe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
