<?php
try{
require_once("./connectBooks.php");
$sql="
INSERT INTO `attractions`
 (`attraction_number`, `attraction_name`, 
  `attraction_address`, `attraction_information1`,
  `attraction_information2`, `attraction_photo1`, 
  `attraction_photo2`, `attraction_latitude`, 
  `attraction_longitude`, `attraction_status`) VALUES 
  (NULL, :attrName,:attrAddress, :attrInfo1, :attrInfo2, :attrPhoto1, :attrPhoto2, :attrLat,:attrLot, :attrStatus);
 ";

$edit = $pdo->prepare($sql);
// $edit->bindValue(":attrNum",$_POST["editNumber"]);
$edit->bindValue(":attrName",$_POST["attrName"]);
$edit->bindValue(":attrAddress",$_POST["attrAddress"]);
$edit->bindValue(":attrInfo1",$_POST["attrInfo1"]);
$edit->bindValue(":attrInfo2",$_POST["attrInfo2"]);
$edit->bindValue(":attrPhoto1",$_POST["attrPhoto1"]);
$edit->bindValue(":attrPhoto2",$_POST["attrPhoto2"]);
$edit->bindValue(":attrLat",$_POST["attrLatitude"]);
$edit->bindValue(":attrLot",$_POST["attrLongitude"]);
$edit->bindValue(":attrStatus",$_POST["attrStatus"]);

$edit->execute();

echo "修改成功！";

}catch(PDOException $e){
    echo $e->getMessage();
}
