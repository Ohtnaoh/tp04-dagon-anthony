<?php
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
date_default_timezone_set('America/Lima');
require_once "vendor/autoload.php";

$isDevMode = true;
$config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/config/yaml"), $isDevMode);
$conn = array(
'host' => 'ec2-54-155-208-5.eu-west-1.compute.amazonaws.com',
'driver' => 'pdo_pgsql',
'user' => 'ggzuavlsrsrqth',
'password' => 'eb77b14ffe266ee78937a4554b91481c00d83246ccfa353dd9857b1da8a0e67b',
'dbname' => 'd6mh47odptuqca',
'port' => '5432'
);
$entityManager = EntityManager::create($conn, $config);