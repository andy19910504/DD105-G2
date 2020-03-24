<?php
try{
    require_once("connectBooks.php");
    $sql ="select er.event_report_number,er.event_number,e.origin_member_number,e.event_name,er.event_report_reason,er.event_report_status from event_report er join `event` e on er.event_number=e.event_number";
            
    $eventReport = $pdo->query($sql);
    $eventReportRow = $eventReport->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($eventReportRow);

}catch(PDOException $e){
    echo $e->getMessage();
    echo $e->getLine();
}
?>



