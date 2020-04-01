<?php
try {
<<<<<<< HEAD
    require_once("./connectBooks.php");
=======
    require_once("connectBooks.php");
>>>>>>> 539dba2f4dc4f1cf7a323173141522a9c57f3c41
    $number=$_GET["number"];
    $sql = "delete from `custom_attraction_list` where route_number=:number ";

    $delmem = $pdo->prepare($sql);
    $delmem->bindvalue(":number",$number);
    $delmem->execute();
    $sql = "delete from `routes` where route_number=:number ";

    $delmemline = $pdo->prepare($sql);
    $delmemline->bindvalue(":number",$number);
    $delmemline->execute();
    if($delmemline->rowCount() == 1){
        echo "刪除路線成功";
    }else{
        echo "刪除路線失敗";
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>
