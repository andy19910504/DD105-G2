<?php
try{
    require_once("./connectBooks.php");
    $sql ="INSERT INTO `event` 
    (`event_number`, `route_number`, `origin_member_number`, `event_name`, `enroll_start_date`,`enroll_end_date`,`event_date`,`meeting_place`,`min_attendance`,`max_attendance`,`event_information`,`event_cover_url`,`event_status`) VALUES  
    (NULL, :route_number, :origin_member_number, :event_name, now(),:event_date-2,:event_date,:meeting_place,1,:max_attendance,:event_information,:event_cover_url,1);
    ";
   
    $events = $pdo->prepare($sql);
    $events->bindValue(":route_number",$_POST["route_number"]);
    $events->bindValue(":origin_member_number",$_POST["origin_member_number"]);
    $events->bindValue(":event_date",$_POST["event_date"]);
    $events->bindValue(":meeting_place",$_POST["meeting_place"]);
    $events->bindValue(":max_attendance",$_POST["max_attendance"]);
    $events->bindValue(":event_information",$_POST["event_information"]);
    $events->bindValue(":event_cover_url",$_POST["event_cover_url"]);
    $events->execute();
    
    echo "成功發起了", $events->rowCount(), "個揪團";

}catch(PDOException $e){
    echo $e->getMessage();
}
?>