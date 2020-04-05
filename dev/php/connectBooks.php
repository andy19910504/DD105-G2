<?php
$dsn = "mysql:host=localhost;port=3306;dbname=dd105g2;charset=utf8";
// $user = "dd105g2";
// $password = "dd105g2";
$user = "root";
<<<<<<< HEAD
$password = "root0000";
=======
$password = "9527";
>>>>>>> 5a896343afad19de8bf6e90ab1efb97a1aae365d
$options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
$pdo = new PDO($dsn, $user, $password, $options);
?>