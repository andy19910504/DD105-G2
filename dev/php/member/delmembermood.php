<?php
try {
<<<<<<< HEAD
    require_once("./connectBooks.php");
    $number=$_GET["number"];
    $sql = "delete from `mood` where mood_number=:number";
=======
    require_once("connectBooks.php");
    $number=$_GET["number"];
    $sql = "delete from `posts` where post_number=:number";
>>>>>>> 539dba2f4dc4f1cf7a323173141522a9c57f3c41

    $delmood = $pdo->prepare($sql);
    $delmood->bindvalue(":number",$number);
    $delmood->execute();
    if($delmood->rowCount() == 1){
        echo "刪除心情成功";
    }else{
        echo "刪除心情失敗";
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>
