<?php
try {
    require_once("connectBooks.php");
    $sql = "select * from `routes` r join `routes_list` l on(r.route_number = l.route_number) join `attractions` a on(l.attraction_number =a.attraction_number)";
    $attractions = $pdo->query($sql);

    $attrRow = $attractions->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($attrRow);
} catch (PDOException $e) {
    echo $e->getMessage();
}