<?php
try {
<<<<<<< HEAD
    require_once("./connectBooks.php");
=======
    require_once("connectBooks.php");
>>>>>>> 539dba2f4dc4f1cf7a323173141522a9c57f3c41
    $memNum=$_GET["number"];
    $sql = "select * from `member` where member_number=:memNum ";
    $memberinfo = $pdo->prepare($sql);
    $memberinfo->bindvalue(":memNum",$memNum);
    $memberinfo->execute();

    $memberRow = $memberinfo->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($memberRow);
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>
