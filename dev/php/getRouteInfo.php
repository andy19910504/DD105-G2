<?php
try {
    require_once("connectBooks.php");
    $sql = "select * from `routes` r join `routes_list` l on(r.route_number = l.route_number) join `attractions` a on(l.attraction_number =a.attraction_number)";
    $attractions = $pdo->query($sql);

    $attrRow = $attractions->fetchAll(PDO::FETCH_ASSOC);

    $arr = array();
    $arrA = array();
    $arrB = array();
    $arrC = array();
    $arrD = array();
    $arrE = array();
    $arrF = array();

    $x0 = 0;
    $x1 = 0;
    $x2 = 0;
    $x3 = 0;
    $x4 = 0;
    $x5 = 0;
    $x6 = 0;

    foreach ($attrRow as $key => $val) {
        $one[$key] = $val['route_number'];
        $two[$key] = $val['route_name'];
        $three[$key] = $val['route_information'];
        $four[$key] = $val['route_photo'];
        $five[$key] = $val['attraction_name'];
        $six[$key] = $val['route_status'];
        $seven[$key] = $val['member_number'];

        if (array_search($one[$key], $arr) == false) {
            $x0++;
            $arr[$x0] = $one[$key];
        }

        if (array_search($two[$key], $arrA) == false) {
            $x1++;
            $arrA[$x1] = $two[$key];
        }
        if (array_search($three[$key], $arrB) == false) {
            $x2++;
            $arrB[$x2] = $three[$key];
        }
        if (array_search($four[$key], $arrC) == false) {
            $x3++;
            $arrC[$x3] = $four[$key];
        }
        if (array_search($five[$key], $arrD) == false) {
            $x4++;
            $arrD[$x4] = $five[$key];
        }
        if (array_search($six[$key], $arrE) == false) {
            $x5++;
            $arrE[$x5] = $six[$key];
        }
        if (array_search($six[$key], $arrF) == false) {
            $x6++;
            $arrF[$x6] = $seven[$key];
        }
    }


    echo json_encode(array('route_number' => $arr, 'route_name' => $arrA, 'route_information' => $arrB, 'route_photo' => $arrC, 'attraction_name' => $arrD, 'route_status' => $arrE, 'member_number' => $arrF));
} catch (PDOException $e) {
    echo $e->getMessage();
}
