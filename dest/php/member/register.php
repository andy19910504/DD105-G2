<?php
try {
    require_once("connectBooks.php");
    $acc=$_POST["register_acc"];
    $nam=$_POST["register_nam"];
    $email=$_POST["register_email"];
    $psw=$_POST["register_psw"];
    $sql = "insert into `member`(member_name,member_account,member_password,member_email)
            values(:name,:account,:password,:email) ";
    $newma = $pdo->prepare($sql);
    $newma->bindvalue(":name",$nam);
    $newma->bindvalue(":account",$acc);
    $newma->bindvalue(":password",$email);
    $newma->bindvalue(":password",$psw);
    $newma->execute();
    if($newma->rowCount()==1){ 
    // header("Location:../../backMember.html?aaa"); 
    header("Location:../../index.html"); 
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>
