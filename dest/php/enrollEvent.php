<?php
try{
    require_once("./connectBooks.php");
    
    $sql="INSERT INTO `event_record` 
    (`event_number`, `member_number`, `enroll_date`) VALUES
    (:enroll_event_number, :member_number,now()) ;
    UPDATE `event` SET now_attendance=now_attendance+1  WHERE event_number =:enroll_event_number;";


    $event_record = $pdo->prepare($sql);
    $event_record->bindValue(":enroll_event_number",$_POST["enroll_event_number"]);
    $event_record->bindValue(":member_number",$_POST["member_number"]);
    // $event_record->bindValue(":enroll_date",$_POST["enroll_date"]);
    $event_record->execute();
    


}catch(PDOException $e){
    echo $e->getMessage();
    echo $e->getLine();
}
?>