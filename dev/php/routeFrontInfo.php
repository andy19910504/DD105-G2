<?php
try {
    require_once("./connectBooks.php");
    // 顯示選擇的路線
    $sql = "select * from `routes` r 
    join `routes_list` l on(r.route_number = l.route_number) 
    join `attractions` a on(l.attraction_number =a.attraction_number)
    where  route_name = :routeName
    group by r.route_number order by r.route_number
    ;";

    $edit = $pdo->prepare($sql);
    $edit->bindValue(":attrName", $_POST["routeName"]);
    
    $edit->execute();

    // 顯示選擇的路線景點
    $sql = "select * from `routes_list` l  
            join `attractions` a on(l.attraction_number =a.attraction_number)
            ;";
    $attractions = $pdo->query($sql);
    $attrRow = $attractions->fetchAll(PDO::FETCH_ASSOC);

    $arrA = array();
    $arrB = array();
    $x = 0;
    $y = 0;
    foreach ($attrRow as $key => $val) {
        $routeNum[$key] = $val['route_number'];
        $attrName[$key] = $val['attraction_name'];
        if (array_search($routeNum[$key], $arrA) == false) {
            $x++;
            $arrA[$x] = $routeNum[$key];
        }
        if (array_search($attrName[$key], $arrB) == false) {
            $y++;
            $arrB[$x] = $attrName[$key];
        }
    }

    echo json_encode(array('attractions' => $attrRow, 'routeInfo' => $routesRow,'customInfo'=>$customRow));
} catch (PDOException $e) {
    echo $e->getMessage();
}

?>