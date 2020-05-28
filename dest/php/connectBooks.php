<?php
$dsn = "mysql:host=localhost;port=3306;dbname=dd105g2;charset=utf8";
// $user = "dd105g2";
// $password = "dd105g2";
$user = "root";
<<<<<<< HEAD
$password = "0000";
=======
<<<<<<< HEAD
$password = "root0000";
=======
$password = "9527";
>>>>>>> 5a896343afad19de8bf6e90ab1efb97a1aae365d
>>>>>>> 8e1cf10ddbc64a6ff793ca01ad23b0229efb81d5
$options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
$pdo = new PDO($dsn, $user, $password, $options);
?>