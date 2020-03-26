<?php
try {
    require_once("connectBooks.php");
    $point=$_GET["point"];
    $url=$_GET["url"];
    $sql = "insert into `mem_product`(customized_product_point,customized_product_url)
            values(:point,:url)";
    $newicon = $pdo->prepare($sql);
    $newicon->bindvalue(":point",$point);
    $newicon->bindvalue(":url",$url);
    $newicon->execute();
    if($newicon->rowCount() == 1){
        echo "新增貼圖成功";
    }else{
        echo "新增貼圖失敗";
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>
