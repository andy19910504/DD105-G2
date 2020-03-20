<?php
$dsn = "mysql:host=localhost;port=3306;dbname=dd105g2;charset=utf8";
<<<<<<< HEAD
<<<<<<< HEAD
=======
// $user = "dd105g2";
// $password = "dd105g2";
>>>>>>> origin/master
$user = "root";
$password = "0000";
=======
// $user = "dd105g2";
// $password = "dd105g2";
$user = "root";
$password = "9527";
>>>>>>> 950b7b6c89b7c66461aeec924cab6ab0feb278d2
$options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
$pdo = new PDO($dsn, $user, $password, $options);
?>