<?php
try {
    require_once("./connectBooks.php");
    $memNum=$_GET["number"];
    $sql = "select * from `order_master` where member_number=:memNum ORDER BY `order_master`.`order_number` DESC";
    $orderinfo = $pdo->prepare($sql);
    $orderinfo->bindvalue(":memNum",$memNum);
    $orderinfo->execute();

    $orderRow = $orderinfo->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($orderRow);
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>
