<?php
$dsn = "mysql:host=localhost;port=3306;dbname=books;charset=utf8";
$user = "root";
$password = "9527";
$options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
$pdo = new PDO($dsn, $user, $password, $options);
?>