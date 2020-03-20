<?php
try{
    require_once("./connectBooks2.php");
    $sql ="select * from event order by enroll_start_date desc";
    
    
   
    $event = $pdo->query($sql);
    
    $eventRow = $event->fetchAll(PDO::FETCH_ASSOC);
    //送出json字串
    echo json_encode($eventRow);

}catch(PDOException $e){
    echo $e->getMessage();
    echo $e->getLine();
}
?>