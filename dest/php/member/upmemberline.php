<?php
try {
    require_once("connectBooks.php");
    $number=$_GET["number"];
    $title=$_GET["title"];
    $word=$_GET["word"];
    $sql = "update `routes` set route_name=:title,route_information=:word where route_number=:number";

    $upmemberline = $pdo->prepare($sql);
    $upmemberline->bindvalue(":number",$number);
    $upmemberline->bindvalue(":title",$title);
    $upmemberline->bindvalue(":word",$word);
    $upmemberline->execute();
    if($upmemberline->rowCount() == 1){
        echo "修改路線成功";
    }else{
        echo "修改路線失敗";
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>
