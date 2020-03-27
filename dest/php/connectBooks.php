<?php
$dsn = "mysql:host=localhost;port=3306;dbname=dd105g2;charset=utf8";
// $user = "dd105g2";
// $password = "dd105g2";
$user = "root";
<<<<<<< HEAD
$password = "0000";
=======
$password = "9527";
>>>>>>> 1999dc9ce60fb09f137823926612c848da9b7268
$options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
$pdo = new PDO($dsn, $user, $password, $options);
?>