<?php
$dsn = "mysql:host=localhost;port=3306;dbname=dd105g2;charset=utf8";
// $user = "dd105g2";
// $password = "dd105g2";
$user = "root";
<<<<<<< HEAD
$password = "0000";

=======
$password = "9527";
>>>>>>> 5d6a6cca3f22aa167190e38efeb22b1eb646b1bd
$options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
$pdo = new PDO($dsn, $user, $password, $options);
?>