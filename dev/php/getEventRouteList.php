<?php
try{
    require_once("connectBooks.php");
    // 顯示官方路線
    $sql = "select * from `routes` r 
    join `routes_list` l on(r.route_number = l.route_number) 
    join `attractions` a on(l.attraction_number =a.attraction_number)
    where  member_number is null;";
    
    $routes = $pdo->query($sql);
    $routesRow = $routes->fetchAll(PDO::FETCH_ASSOC);

    // 顯示自訂路線
    $sql = "select * 
            from `routes` r
            join `custom_attraction_list` l on(r.route_number = l.route_number) 
            join `custom_attraction` a on(l.custom_attraction_number =a.custom_attraction_number)
            where  r.member_number = :origin_member_number";

    $custom = $pdo->query($sql);
    $custom ->bindValue(":origin_member_number",$_POST['origin_member_number']);
    $custom ->execute();

    $customRow = $custom->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(array('routeInfo' => $routesRow,'customInfo'=>$customRow));

}catch(PDOException $e){
    echo $e->getMessage();
    echo $e->getLine();
}
?>



