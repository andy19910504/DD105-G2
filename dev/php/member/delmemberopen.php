<?php
try {
<<<<<<< HEAD
    require_once("./connectBooks.php");
=======
    require_once("connectBooks.php");
>>>>>>> 539dba2f4dc4f1cf7a323173141522a9c57f3c41
    $number=$_GET["number"];
    $sql = "delete from `event` where event_number=:number";

    $delopen = $pdo->prepare($sql);
    $delopen->bindvalue(":number",$number);
    $delopen->execute();
    if($delopen->rowCount() == 1){
        echo "刪除成功";
    }else{
        echo "刪除失敗";
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>
