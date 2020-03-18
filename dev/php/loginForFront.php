<?php
try{
    require_once("./connectBooks.php");
    $sql ="select * from `member` where memId = :memId and memPsw = :memPsw";
    $member = $pdo->prepare($sql);
    $member->bindValue(":memId", $_POST["memId"]);
    $member->bindValue(":memPsw", $_POST["memPsw"]);
    $member->execute();

    if($member->rowCount()==0){
        echo "error";

    }else{
        $memRow = $member->fetch(PDO::FETCH_ASSOC);

        session_start();
        $_SESSION["memNo"] = $memRow["no"];
        $_SESSION["memId"] = $memRow["memId"];
        $_SESSION["memPsw"] = $memRow["memPsw"];
        $_SESSION["memName"] = $memRow["memName"];

        $member =["memNo"=>$_SESSION["memNo"],
                  "memId"=>$_SESSION["memId"],
                  "memPsw"=>$_SESSION["memPsw"],
                  "memName"=>$_SESSION["memName"]];
    
        echo json_encode($member);
    }
}catch(PDOException $e){
    echo $e->getMessage();
}
