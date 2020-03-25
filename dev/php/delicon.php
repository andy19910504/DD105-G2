<?php
try {
    require_once("connectBooks.php");
    $number=$_GET["number"];
    $sql = "delete from `mem_product` where customized_product_number=:number ";
    $delicon = $pdo->prepare($sql);
    $delicon->bindvalue(":number",$number);
    $delicon->execute();
    if($delicon->rowCount() == 1){
        echo "刪除貼圖成功";
    }else{
        echo "刪除貼圖失敗";
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>

