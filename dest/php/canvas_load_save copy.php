<?php
session_start();
$member = $_SESSION["member_number"];
try{
    require_once("./connectBooks.php");
    $sql ="INSERT INTO `order_master` 
    (`order_number`, `member_number`, `order_point`, `order_time`, `product_images_url_front`,`product_images_url_back`,`receiver_name`,`receiver_address`,`shopping_status`) VALUES  
    (NULL, $member,100, now(),'','',:receiver_name,:receiver_address,0);
    ";
   
    $order_master = $pdo->prepare($sql);
    $order_master->bindValue(":receiver_name",$_POST["receiver_name"]);
    $order_master->bindValue(":receiver_address",$_POST["receiver_address"]);
    $order_master->execute();

}catch(PDOException $e){
    echo $e->getMessage();
    echo $e->getLine();
}
?>