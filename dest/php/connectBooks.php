<?php
$dsn = "mysql:host=localhost;port=3306;dbname=dd105g2;charset=utf8";
// $user = "dd105g2";
// $password = "dd105g2";
$user = "root";
<<<<<<< HEAD
$password = "0000";
=======
$password = "liu841217";
>>>>>>> 2efa99b60925d4664bffeb7e04089abe07691e8c
$options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
$pdo = new PDO($dsn, $user, $password, $options);
?>