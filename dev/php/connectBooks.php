<!-- 登入資料庫金鑰 -->
<?php
	$dsn = "mysql:host=localhost;port=3306;dbname=member;charset=utf8";
	$user = "";
	$password = "";
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO( $dsn, $user, $password, $options);  
?>