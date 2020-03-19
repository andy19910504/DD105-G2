<?php
try {
    require_once("connectBooks.php");
    $name=$_POST["name"];
    $account=$_POST["account"];
    $password=$_POST["password"];
    $sql = "insert into `staff`(staff_name,staff_account,staff_password)
            values(:name,:account,:password) ";
    $newma = $pdo->prepare($sql);
    $newma->bindvalue(":name",$name);
    $newma->bindvalue(":account",$account);
    $newma->bindvalue(":password",$password);
    $newma->execute();
    if($newma->rowCount()==1){ 
    // header("Location:../../backMember.html?aaa"); 
    header("Location:../../backMember.html"); 
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>
