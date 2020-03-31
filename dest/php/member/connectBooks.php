<?php
$dsn = "mysql:host=localhost;port=3306;dbname=dd105g2;charset=utf8";
<<<<<<< HEAD
// $user = "dd105g2";
// $password = "dd105g2";
$user = "root";
$password = "root0000";
=======
$user = "dd105g2";
$password = "dd105g2";
// $user = "root";
// $password = "0000";
>>>>>>> 539dba2f4dc4f1cf7a323173141522a9c57f3c41
$options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
$pdo = new PDO($dsn, $user, $password, $options);
?>