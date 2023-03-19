-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 19-03-2023 a las 19:13:44
-- Versión del servidor: 8.0.32-0ubuntu0.20.04.2
-- Versión de PHP: 7.4.3-4ubuntu2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `clinica`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ctl_departamentos`
--

CREATE TABLE `ctl_departamentos` (
  `id` int UNSIGNED NOT NULL,
  `nombre` varchar(40) COLLATE utf8mb3_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `ctl_departamentos`
--

INSERT INTO `ctl_departamentos` (`id`, `nombre`) VALUES
(1, 'Ahuachapán'),
(2, 'Santa Ana'),
(3, 'Sonsonate'),
(4, 'La Libertad'),
(5, 'Chalatenango'),
(6, 'San Salvador'),
(7, 'Cuscatlán'),
(8, 'La Paz'),
(9, 'Cabañas'),
(10, 'San Vicente'),
(11, 'Usulután'),
(12, 'Morazán'),
(13, 'San Miguel'),
(14, 'La Unión');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ctl_generos`
--

CREATE TABLE `ctl_generos` (
  `id` int UNSIGNED NOT NULL,
  `nombre` varchar(20) COLLATE utf8mb3_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `ctl_generos`
--

INSERT INTO `ctl_generos` (`id`, `nombre`) VALUES
(1, 'Masculino'),
(2, 'Femenino');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ctl_modulos`
--

CREATE TABLE `ctl_modulos` (
  `id` bigint UNSIGNED NOT NULL,
  `nombre` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `url` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `icon` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `name` varchar(25) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `ctl_modulos`
--

INSERT INTO `ctl_modulos` (`id`, `nombre`, `url`, `icon`, `name`) VALUES
(1, 'Pacientes', '/patients/list', 'users', 'patients-list');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ctl_municipios`
--

CREATE TABLE `ctl_municipios` (
  `id` int UNSIGNED NOT NULL,
  `nombre` varchar(50) COLLATE utf8mb3_spanish2_ci NOT NULL,
  `departamento_id` int UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `ctl_municipios`
--

INSERT INTO `ctl_municipios` (`id`, `nombre`, `departamento_id`) VALUES
(1, 'Ahuachapán', 1),
(2, 'Jujutla', 1),
(3, 'Atiquizaya', 1),
(4, 'Concepción de Ataco', 1),
(5, 'El Refugio', 1),
(6, 'Guaymango', 1),
(7, 'Apaneca', 1),
(8, 'San Francisco Menéndez', 1),
(9, 'San Lorenzo', 1),
(10, 'San Pedro Puxtla', 1),
(11, 'Tacuba', 1),
(12, 'Turín', 1),
(13, 'Candelaria de la Frontera', 2),
(14, 'Chalchuapa', 2),
(15, 'Coatepeque', 2),
(16, 'El Congo', 2),
(17, 'El Porvenir', 2),
(18, 'Masahuat', 2),
(19, 'Metapán', 2),
(20, 'San Antonio Pajonal', 2),
(21, 'San Sebastián Salitrillo', 2),
(22, 'Santa Ana', 2),
(23, 'Santa Rosa Guachipilín', 2),
(24, 'Santiago de la Frontera', 2),
(25, 'Texistepeque', 2),
(26, 'Acajutla', 3),
(27, 'Armenia', 3),
(28, 'Caluco', 3),
(29, 'Cuisnahuat', 3),
(30, 'Izalco', 3),
(31, 'Juayúa', 3),
(32, 'Nahuizalco', 3),
(33, 'Nahulingo', 3),
(34, 'Salcoatitán', 3),
(35, 'San Antonio del Monte', 3),
(36, 'San Julián', 3),
(37, 'Santa Catarina Masahuat', 3),
(38, 'Santa Isabel Ishuatán', 3),
(39, 'Santo Domingo de Guzmán', 3),
(40, 'Sonsonate', 3),
(41, 'Sonzacate', 3),
(42, 'Alegría', 11),
(43, 'Berlín', 11),
(44, 'California', 11),
(45, 'Concepción Batres', 11),
(46, 'El Triunfo', 11),
(47, 'Ereguayquín', 11),
(48, 'Estanzuelas', 11),
(49, 'Jiquilisco', 11),
(50, 'Jucuapa', 11),
(51, 'Jucuarán', 11),
(52, 'Mercedes Umaña', 11),
(53, 'Nueva Granada', 11),
(54, 'Ozatlán', 11),
(55, 'Puerto El Triunfo', 11),
(56, 'San Agustín', 11),
(57, 'San Buenaventura', 11),
(58, 'San Dionisio', 11),
(59, 'San Francisco Javier', 11),
(60, 'Santa Elena', 11),
(61, 'Santa María', 11),
(62, 'Santiago de María', 11),
(63, 'Tecapán', 11),
(64, 'Usulután', 11),
(65, 'Carolina', 13),
(66, 'Chapeltique', 13),
(67, 'Chinameca', 13),
(68, 'Chirilagua', 13),
(69, 'Ciudad Barrios', 13),
(70, 'Comacarán', 13),
(71, 'El Tránsito', 13),
(72, 'Lolotique', 13),
(73, 'Moncagua', 13),
(74, 'Nueva Guadalupe', 13),
(75, 'Nuevo Edén de San Juan', 13),
(76, 'Quelepa', 13),
(77, 'San Antonio del Mosco', 13),
(78, 'San Gerardo', 13),
(79, 'San Jorge', 13),
(80, 'San Luis de la Reina', 13),
(81, 'San Miguel', 13),
(82, 'San Rafael Oriente', 13),
(83, 'Sesori', 13),
(84, 'Uluazapa', 13),
(85, 'Arambala', 12),
(86, 'Cacaopera', 12),
(87, 'Chilanga', 12),
(88, 'Corinto', 12),
(89, 'Delicias de Concepción', 12),
(90, 'El Divisadero', 12),
(91, 'El Rosario (Morazán)', 12),
(92, 'Gualococti', 12),
(93, 'Guatajiagua', 12),
(94, 'Joateca', 12),
(95, 'Jocoaitique', 12),
(96, 'Jocoro', 12),
(97, 'Lolotiquillo', 12),
(98, 'Meanguera', 12),
(99, 'Osicala', 12),
(100, 'Perquín', 12),
(101, 'San Carlos', 12),
(102, 'San Fernando (Morazán)', 12),
(103, 'San Francisco Gotera', 12),
(104, 'San Isidro (Morazán)', 12),
(105, 'San Simón', 12),
(106, 'Sensembra', 12),
(107, 'Sociedad', 12),
(108, 'Torola', 12),
(109, 'Yamabal', 12),
(110, 'Yoloaiquín', 12),
(111, 'La Unión', 14),
(112, 'San Alejo', 14),
(113, 'Yucuaiquín', 14),
(114, 'Conchagua', 14),
(115, 'Intipucá', 14),
(116, 'San José', 14),
(117, 'El Carmen (La Unión)', 14),
(118, 'Yayantique', 14),
(119, 'Bolívar', 14),
(120, 'Meanguera del Golfo', 14),
(121, 'Santa Rosa de Lima', 14),
(122, 'Pasaquina', 14),
(123, 'Anamoros', 14),
(124, 'Nueva Esparta', 14),
(125, 'El Sauce', 14),
(126, 'Concepción de Oriente', 14),
(127, 'Polorós', 14),
(128, 'Lislique', 14),
(129, 'Antiguo Cuscatlán', 4),
(130, 'Chiltiupán', 4),
(131, 'Ciudad Arce', 4),
(132, 'Colón', 4),
(133, 'Comasagua', 4),
(134, 'Huizúcar', 4),
(135, 'Jayaque', 4),
(136, 'Jicalapa', 4),
(137, 'La Libertad', 4),
(138, 'Santa Tecla', 4),
(139, 'Nuevo Cuscatlán', 4),
(140, 'San Juan Opico', 4),
(141, 'Quezaltepeque', 4),
(142, 'Sacacoyo', 4),
(143, 'San José Villanueva', 4),
(144, 'San Matías', 4),
(145, 'San Pablo Tacachico', 4),
(146, 'Talnique', 4),
(147, 'Tamanique', 4),
(148, 'Teotepeque', 4),
(149, 'Tepecoyo', 4),
(150, 'Zaragoza', 4),
(151, 'Agua Caliente', 5),
(152, 'Arcatao', 5),
(153, 'Azacualpa', 5),
(154, 'Cancasque', 5),
(155, 'Chalatenango', 5),
(156, 'Citalá', 5),
(157, 'Comapala', 5),
(158, 'Concepción Quezaltepeque', 5),
(159, 'Dulce Nombre de María', 5),
(160, 'El Carrizal', 5),
(161, 'El Paraíso', 5),
(162, 'La Laguna', 5),
(163, 'La Palma', 5),
(164, 'La Reina', 5),
(165, 'Las Vueltas', 5),
(166, 'Nueva Concepción', 5),
(167, 'Nueva Trinidad', 5),
(168, 'Nombre de Jesús', 5),
(169, 'Ojos de Agua', 5),
(170, 'Potonico', 5),
(171, 'San Antonio de la Cruz', 5),
(172, 'San Antonio Los Ranchos', 5),
(173, 'San Fernando (Chalatenango)', 5),
(174, 'San Francisco Lempa', 5),
(175, 'San Francisco Morazán', 5),
(176, 'San Ignacio', 5),
(177, 'San Isidro Labrador', 5),
(178, 'Las Flores', 5),
(179, 'San Luis del Carmen', 5),
(180, 'San Miguel de Mercedes', 5),
(181, 'San Rafael', 5),
(182, 'Santa Rita', 5),
(183, 'Tejutla', 5),
(184, 'Cojutepeque', 7),
(185, 'Candelaria', 7),
(186, 'El Carmen (Cuscatlán)', 7),
(187, 'El Rosario (Cuscatlán)', 7),
(188, 'Monte San Juan', 7),
(189, 'Oratorio de Concepción', 7),
(190, 'San Bartolomé Perulapía', 7),
(191, 'San Cristóbal', 7),
(192, 'San José Guayabal', 7),
(193, 'San Pedro Perulapán', 7),
(194, 'San Rafael Cedros', 7),
(195, 'San Ramón', 7),
(196, 'Santa Cruz Analquito', 7),
(197, 'Santa Cruz Michapa', 7),
(198, 'Suchitoto', 7),
(199, 'Tenancingo', 7),
(200, 'Aguilares', 6),
(201, 'Apopa', 6),
(202, 'Ayutuxtepeque', 6),
(203, 'Cuscatancingo', 6),
(204, 'Ciudad Delgado', 6),
(205, 'El Paisnal', 6),
(206, 'Guazapa', 6),
(207, 'Ilopango', 6),
(208, 'Mejicanos', 6),
(209, 'Nejapa', 6),
(210, 'Panchimalco', 6),
(211, 'Rosario de Mora', 6),
(212, 'San Marcos', 6),
(213, 'San Martín', 6),
(214, 'San Salvador', 6),
(215, 'Santiago Texacuangos', 6),
(216, 'Santo Tomás', 6),
(217, 'Soyapango', 6),
(218, 'Tonacatepeque', 6),
(219, 'Zacatecoluca', 8),
(220, 'Cuyultitán', 8),
(221, 'El Rosario (La Paz)', 8),
(222, 'Jerusalén', 8),
(223, 'Mercedes La Ceiba', 8),
(224, 'Olocuilta', 8),
(225, 'Paraíso de Osorio', 8),
(226, 'San Antonio Masahuat', 8),
(227, 'San Emigdio', 8),
(228, 'San Francisco Chinameca', 8),
(229, 'San Pedro Masahuat', 8),
(230, 'San Juan Nonualco', 8),
(231, 'San Juan Talpa', 8),
(232, 'San Juan Tepezontes', 8),
(233, 'San Luis La Herradura', 8),
(234, 'San Luis Talpa', 8),
(235, 'San Miguel Tepezontes', 8),
(236, 'San Pedro Nonualco', 8),
(237, 'San Rafael Obrajuelo', 8),
(238, 'Santa María Ostuma', 8),
(239, 'Santiago Nonualco', 8),
(240, 'Tapalhuaca', 8),
(241, 'Cinquera', 9),
(242, 'Dolores', 9),
(243, 'Guacotecti', 9),
(244, 'Ilobasco', 9),
(245, 'Jutiapa', 9),
(246, 'San Isidro (Cabañas)', 9),
(247, 'Sensuntepeque', 9),
(248, 'Tejutepeque', 9),
(249, 'Victoria', 9),
(250, 'Apastepeque', 10),
(251, 'Guadalupe', 10),
(252, 'San Cayetano Istepeque', 10),
(253, 'San Esteban Catarina', 10),
(254, 'San Ildefonso', 10),
(255, 'San Lorenzo', 10),
(256, 'San Sebastián', 10),
(257, 'San Vicente', 10),
(258, 'Santa Clara', 10),
(259, 'Santo Domingo', 10),
(260, 'Tecoluca', 10),
(261, 'Tepetitán', 10),
(262, 'Verapaz', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ctl_perfiles_roles`
--

CREATE TABLE `ctl_perfiles_roles` (
  `perfil_id` bigint UNSIGNED NOT NULL,
  `rol_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `ctl_perfiles_roles`
--

INSERT INTO `ctl_perfiles_roles` (`perfil_id`, `rol_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(2, 1),
(2, 2),
(2, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ctl_perfils`
--

CREATE TABLE `ctl_perfils` (
  `id` bigint UNSIGNED NOT NULL,
  `nombre` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `ctl_perfils`
--

INSERT INTO `ctl_perfils` (`id`, `nombre`) VALUES
(1, 'Administrador'),
(2, 'Secretaria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ctl_roles`
--

CREATE TABLE `ctl_roles` (
  `id` bigint UNSIGNED NOT NULL,
  `nombre` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `modulo_id` bigint UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `ctl_roles`
--

INSERT INTO `ctl_roles` (`id`, `nombre`, `modulo_id`) VALUES
(1, 'ROL_PATIENTS_VIEW_LIST', 1),
(2, 'ROL_PATIENTS_VIEW_DETAIL', 1),
(3, 'ROL_PATIENTS_ADD', 1),
(4, 'ROL_PATIENTS_UPDATE', 1),
(5, 'ROL_PATIENTS_CHANGE_STATUS', 1),
(6, 'ROL_PATIENTS_SCHEDULE', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ctl_tipo_contacto`
--

CREATE TABLE `ctl_tipo_contacto` (
  `id` int UNSIGNED NOT NULL,
  `nombre` varchar(35) COLLATE utf8mb3_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `ctl_tipo_contacto`
--

INSERT INTO `ctl_tipo_contacto` (`id`, `nombre`) VALUES
(1, 'Movil'),
(2, 'Telefono'),
(3, 'Correo Electronico');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ctl_tipo_documento`
--

CREATE TABLE `ctl_tipo_documento` (
  `id` int UNSIGNED NOT NULL,
  `nombre` varchar(35) COLLATE utf8mb3_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `ctl_tipo_documento`
--

INSERT INTO `ctl_tipo_documento` (`id`, `nombre`) VALUES
(1, 'DUI'),
(2, 'NIT'),
(3, 'Pasaporte'),
(4, 'Otro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int NOT NULL,
  `timestamp` bigint NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mnt_configuracion`
--

CREATE TABLE `mnt_configuracion` (
  `id` bigint UNSIGNED NOT NULL,
  `nombre` varchar(20) COLLATE utf8mb3_spanish2_ci NOT NULL,
  `valor` varchar(30) COLLATE utf8mb3_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `mnt_configuracion`
--

INSERT INTO `mnt_configuracion` (`id`, `nombre`, `valor`) VALUES
(1, 'PACIENT_CURRENT', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mnt_pacientes`
--

CREATE TABLE `mnt_pacientes` (
  `id` bigint UNSIGNED NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `direccion` text COLLATE utf8mb3_spanish2_ci NOT NULL,
  `numero_expendiente` varchar(20) COLLATE utf8mb3_spanish2_ci NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `genero_id` int UNSIGNED DEFAULT NULL,
  `persona_id` bigint UNSIGNED DEFAULT NULL,
  `municipio_id` int UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `mnt_pacientes`
--

INSERT INTO `mnt_pacientes` (`id`, `fecha_nacimiento`, `direccion`, `numero_expendiente`, `created_at`, `updated_at`, `genero_id`, `persona_id`, `municipio_id`) VALUES
(1, '1990-06-06', 'Canton San Antonio, Villa El Carmen.', '00001-2023', '2023-03-18 23:33:26.000000', '2023-03-18 23:33:54.130478', 1, 1, 186);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mnt_pacientes_contactos`
--

CREATE TABLE `mnt_pacientes_contactos` (
  `id` bigint NOT NULL,
  `numero_contacto` varchar(50) COLLATE utf8mb3_spanish2_ci NOT NULL,
  `paciente_id` bigint UNSIGNED DEFAULT NULL,
  `tipo_contacto_id` int UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `mnt_pacientes_contactos`
--

INSERT INTO `mnt_pacientes_contactos` (`id`, `numero_contacto`, `paciente_id`, `tipo_contacto_id`) VALUES
(1, '78583294', 1, 2),
(2, '23015370', 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mnt_pacientes_documentos`
--

CREATE TABLE `mnt_pacientes_documentos` (
  `id` bigint NOT NULL,
  `numero_documento` varchar(25) COLLATE utf8mb3_spanish2_ci NOT NULL,
  `paciente_id` bigint UNSIGNED DEFAULT NULL,
  `documento_id` int UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `mnt_pacientes_documentos`
--

INSERT INTO `mnt_pacientes_documentos` (`id`, `numero_documento`, `paciente_id`, `documento_id`) VALUES
(1, '04299854-0', 1, 1),
(2, '0521-060690-101-4', 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mnt_personas`
--

CREATE TABLE `mnt_personas` (
  `id` bigint UNSIGNED NOT NULL,
  `nombre` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `apellido` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `mnt_personas`
--

INSERT INTO `mnt_personas` (`id`, `nombre`, `apellido`) VALUES
(1, 'Edwin', 'Melara');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mnt_usuarios`
--

CREATE TABLE `mnt_usuarios` (
  `id` bigint UNSIGNED NOT NULL,
  `usuario` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `password` text CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `persona_id` bigint UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `mnt_usuarios`
--

INSERT INTO `mnt_usuarios` (`id`, `usuario`, `password`, `persona_id`) VALUES
(3, 'administrador', '$2b$10$cPx9Lsb.OYniNyzb1jqrCe50kTjyAl5.QJhbneIMH0CeBO.qvEr56', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mnt_usuario_perfils`
--

CREATE TABLE `mnt_usuario_perfils` (
  `usuario_id` bigint UNSIGNED NOT NULL,
  `perfil_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `mnt_usuario_perfils`
--

INSERT INTO `mnt_usuario_perfils` (`usuario_id`, `perfil_id`) VALUES
(3, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ctl_departamentos`
--
ALTER TABLE `ctl_departamentos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ctl_generos`
--
ALTER TABLE `ctl_generos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ctl_modulos`
--
ALTER TABLE `ctl_modulos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_2d8f5cf02faaa4b93d6ead07e0` (`url`);

--
-- Indices de la tabla `ctl_municipios`
--
ALTER TABLE `ctl_municipios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_01e324c351834e7eea0993db539` (`departamento_id`);

--
-- Indices de la tabla `ctl_perfiles_roles`
--
ALTER TABLE `ctl_perfiles_roles`
  ADD PRIMARY KEY (`perfil_id`,`rol_id`),
  ADD KEY `IDX_0e6d2bd64a2a4b19e126e68ec2` (`perfil_id`),
  ADD KEY `IDX_99d2f888414d70afaa0ea2d739` (`rol_id`);

--
-- Indices de la tabla `ctl_perfils`
--
ALTER TABLE `ctl_perfils`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ctl_roles`
--
ALTER TABLE `ctl_roles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_3d1be120851559d95ee574beb13` (`modulo_id`);

--
-- Indices de la tabla `ctl_tipo_contacto`
--
ALTER TABLE `ctl_tipo_contacto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ctl_tipo_documento`
--
ALTER TABLE `ctl_tipo_documento`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mnt_configuracion`
--
ALTER TABLE `mnt_configuracion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mnt_pacientes`
--
ALTER TABLE `mnt_pacientes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `REL_d821e9a79286c42e202ba20212` (`genero_id`),
  ADD UNIQUE KEY `REL_a173dda32fa3e6d170dcad1040` (`persona_id`),
  ADD UNIQUE KEY `REL_72dc22f6dd8d3be604093dc9fb` (`municipio_id`);

--
-- Indices de la tabla `mnt_pacientes_contactos`
--
ALTER TABLE `mnt_pacientes_contactos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_98f0aacd5868836625a9a87e10b` (`paciente_id`),
  ADD KEY `FK_879f5ba278aeda0782a508923a6` (`tipo_contacto_id`);

--
-- Indices de la tabla `mnt_pacientes_documentos`
--
ALTER TABLE `mnt_pacientes_documentos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_cd898fffe319eca6d0a40f53b3e` (`paciente_id`),
  ADD KEY `FK_bfcefd741e0999875b0cc0a51b9` (`documento_id`);

--
-- Indices de la tabla `mnt_personas`
--
ALTER TABLE `mnt_personas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mnt_usuarios`
--
ALTER TABLE `mnt_usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_7ffd1fd539d779b9981654521c` (`usuario`),
  ADD UNIQUE KEY `REL_52b4bc606ed4509eccbc96d05d` (`persona_id`);

--
-- Indices de la tabla `mnt_usuario_perfils`
--
ALTER TABLE `mnt_usuario_perfils`
  ADD PRIMARY KEY (`usuario_id`,`perfil_id`),
  ADD KEY `IDX_6e09c8cf1177ca6c3b533b89f3` (`usuario_id`),
  ADD KEY `IDX_8023d77b67c6ba0331db892b00` (`perfil_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ctl_departamentos`
--
ALTER TABLE `ctl_departamentos`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `ctl_generos`
--
ALTER TABLE `ctl_generos`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `ctl_modulos`
--
ALTER TABLE `ctl_modulos`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `ctl_municipios`
--
ALTER TABLE `ctl_municipios`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=263;

--
-- AUTO_INCREMENT de la tabla `ctl_perfils`
--
ALTER TABLE `ctl_perfils`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `ctl_roles`
--
ALTER TABLE `ctl_roles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `ctl_tipo_contacto`
--
ALTER TABLE `ctl_tipo_contacto`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `ctl_tipo_documento`
--
ALTER TABLE `ctl_tipo_documento`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mnt_configuracion`
--
ALTER TABLE `mnt_configuracion`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `mnt_pacientes`
--
ALTER TABLE `mnt_pacientes`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `mnt_pacientes_contactos`
--
ALTER TABLE `mnt_pacientes_contactos`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `mnt_pacientes_documentos`
--
ALTER TABLE `mnt_pacientes_documentos`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `mnt_personas`
--
ALTER TABLE `mnt_personas`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `mnt_usuarios`
--
ALTER TABLE `mnt_usuarios`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ctl_municipios`
--
ALTER TABLE `ctl_municipios`
  ADD CONSTRAINT `FK_01e324c351834e7eea0993db539` FOREIGN KEY (`departamento_id`) REFERENCES `ctl_departamentos` (`id`);

--
-- Filtros para la tabla `ctl_perfiles_roles`
--
ALTER TABLE `ctl_perfiles_roles`
  ADD CONSTRAINT `FK_0e6d2bd64a2a4b19e126e68ec2c` FOREIGN KEY (`perfil_id`) REFERENCES `ctl_perfils` (`id`),
  ADD CONSTRAINT `FK_99d2f888414d70afaa0ea2d7396` FOREIGN KEY (`rol_id`) REFERENCES `ctl_roles` (`id`);

--
-- Filtros para la tabla `ctl_roles`
--
ALTER TABLE `ctl_roles`
  ADD CONSTRAINT `FK_3d1be120851559d95ee574beb13` FOREIGN KEY (`modulo_id`) REFERENCES `ctl_modulos` (`id`);

--
-- Filtros para la tabla `mnt_pacientes`
--
ALTER TABLE `mnt_pacientes`
  ADD CONSTRAINT `FK_72dc22f6dd8d3be604093dc9fbd` FOREIGN KEY (`municipio_id`) REFERENCES `ctl_municipios` (`id`),
  ADD CONSTRAINT `FK_a173dda32fa3e6d170dcad1040e` FOREIGN KEY (`persona_id`) REFERENCES `mnt_personas` (`id`),
  ADD CONSTRAINT `FK_d821e9a79286c42e202ba202126` FOREIGN KEY (`genero_id`) REFERENCES `ctl_generos` (`id`);

--
-- Filtros para la tabla `mnt_pacientes_contactos`
--
ALTER TABLE `mnt_pacientes_contactos`
  ADD CONSTRAINT `FK_879f5ba278aeda0782a508923a6` FOREIGN KEY (`tipo_contacto_id`) REFERENCES `ctl_tipo_contacto` (`id`),
  ADD CONSTRAINT `FK_98f0aacd5868836625a9a87e10b` FOREIGN KEY (`paciente_id`) REFERENCES `mnt_pacientes` (`id`);

--
-- Filtros para la tabla `mnt_pacientes_documentos`
--
ALTER TABLE `mnt_pacientes_documentos`
  ADD CONSTRAINT `FK_bfcefd741e0999875b0cc0a51b9` FOREIGN KEY (`documento_id`) REFERENCES `ctl_tipo_documento` (`id`),
  ADD CONSTRAINT `FK_cd898fffe319eca6d0a40f53b3e` FOREIGN KEY (`paciente_id`) REFERENCES `mnt_pacientes` (`id`);

--
-- Filtros para la tabla `mnt_usuarios`
--
ALTER TABLE `mnt_usuarios`
  ADD CONSTRAINT `FK_52b4bc606ed4509eccbc96d05d1` FOREIGN KEY (`persona_id`) REFERENCES `mnt_personas` (`id`);

--
-- Filtros para la tabla `mnt_usuario_perfils`
--
ALTER TABLE `mnt_usuario_perfils`
  ADD CONSTRAINT `FK_6e09c8cf1177ca6c3b533b89f3b` FOREIGN KEY (`usuario_id`) REFERENCES `mnt_usuarios` (`id`),
  ADD CONSTRAINT `FK_8023d77b67c6ba0331db892b002` FOREIGN KEY (`perfil_id`) REFERENCES `ctl_perfils` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
