<?php
    try{
    require_once("./connectBooks.php");

    $sql="
    UPDATE `member` SET `member_point` = :memPoint WHERE `member`.`member_number` = :memNum
    ";

    $memInfo = json_decode($_POST['memInfo']);

    $memPoint = (int)$memInfo[1] + 300;
    $edit = $pdo->prepare($sql);
    $edit->bindValue(":routeNumber",$_POST["route_number"]);
    $edit->bindValue(":memNum", (int)$memInfo[0]);

    $edit->execute();

    echo "獲得點數300點！";

    }catch(PDOException $e){
        echo $e->getMessage();
    }
?>