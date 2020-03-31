<?php
try {
<<<<<<< HEAD
    require_once("./connectBooks.php");
=======
    require_once("connectBooks.php");
>>>>>>> 539dba2f4dc4f1cf7a323173141522a9c57f3c41
    $memNum=$_GET["number"];
    $sql = "select * from `order_master` where member_number=:memNum ORDER BY `order_master`.`order_number` DESC";
    $orderinfo = $pdo->prepare($sql);
    $orderinfo->bindvalue(":memNum",$memNum);
    $orderinfo->execute();

    $orderRow = $orderinfo->fetchAll(PDO::FETCH_ASSOC);

    $sql = "select * from `order_master` a join `order_list`b on( a.order_number=b.order_number) where member_number=:memNum";
    $orderlistinfo = $pdo->prepare($sql);
    $orderlistinfo->bindvalue(":memNum",$memNum);
    $orderlistinfo->execute();

    $orderlistRow = $orderlistinfo->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(array("memberorder"=>$orderRow,"memberorderlist"=>$orderlistRow));
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>
