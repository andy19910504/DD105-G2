<?php
try{
    require_once("connectBooks.php");
    // 顯示官方路線
    $sql = "select * from `routes` r 
    join `routes_list` l on(r.route_number = l.route_number) 
    join `attractions` a on(l.attraction_number =a.attraction_number)
    where  member_number is null;";
    select e.event_number,e.event_name,e.enroll_start_date,e.enroll_end_date,e.event_date,e.meeting_place,e.max_attendance,e.now_attendance,e.event_information,r.route_number,r.route_name,a.attraction_name
from event e
	join routes r on r.route_number= e.route_number
    join `routes_list` l on(r.route_number = l.route_number) 
    join `attractions` a on(l.attraction_number =a.attraction_number)
    where  member_number is null;

    $routes = $pdo->query($sql);
    $routesRow = $routes->fetchAll(PDO::FETCH_ASSOC);
    // echo json_encode($member);
   
    // echo $member;    
    // 顯示自訂路線
    $sql = "select * 
            from `routes` r
            join `custom_attraction_list` l on (r.route_number = l.route_number) 
            join `custom_attraction` a on (l.custom_attraction_number =a.custom_attraction_number)
            where  r.member_number =$member";
select * from event e
	join routes r on r.route_number= e.route_number
    join `custom_attraction_list` l on(r.route_number = l.route_number) 
    join `custom_attraction` a on(l.custom_attraction_number =a.custom_attraction_number);

    $custom = $pdo->query($sql);
    $custom ->execute();
    $custom->bindValue(":member_number",$member);
    $customRow = $custom->fetchAll(PDO::FETCH_ASSOC);

    

    echo json_encode(array('routeInfo' => $routesRow,'customInfo'=>$customRow));

}catch(PDOException $e){
    echo $e->getMessage();
    echo $e->getLine();
}
?>



