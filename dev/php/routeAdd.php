<?php
try {
    require_once("./connectBooks.php");
    $sql = "
    INSERT INTO `routes` 
    (`route_number`, `route_name`,
     `route_information`, `route_photo`,
     `route_status`, `member_number`) VALUES
    (NULL, :routeName, :routeInfo, :routePhoto, :routeStatus, NULL)
 ;";

    $edit = $pdo->prepare($sql);
    $edit->bindValue(":routeName", $_POST["routeName"]);
    $edit->bindValue(":routeInfo", $_POST["routeInfo"]);
    $edit->bindValue(":routePhoto", $_FILES["routePhoto"]['name']);
    // $edit->bindValue(":routeAttr", $_POST["routeAttr"]);
    $edit->bindValue(":routeStatus", $_POST["routeStatus"]);

    $edit->execute();

    echo "修改成功!";
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>

<?php
// 取得自動創號的key值
$num = $pdo->lastInsertId();

switch ($_FILES['routePhoto']['error']) {
    case 0:
        if (file_exists("../img/routes") === false) {
            //make directory
            mkdir("../img/routes");
        }
        $oldName1 = pathinfo($_FILES['routePhoto']['name']);
        $from = $_FILES['routePhoto']['tmp_name'];
        $newName1 = "route" . "{$num}.{$oldName1["extension"]}";
        $to = "../img/routes/$newName1";

        if (move_uploaded_file($from, $to)) {
            $sql = " update `routes` set `route_photo` = :imgName where route_number = $num ;";
            $changeName = $pdo->prepare($sql);
            $changeName->bindValue(":imgName", $newName1);
            $changeName->execute();
            echo "上傳成功";
        } else {
            echo "上傳失敗";
        }
        break;
    case 1:
        echo "上傳檔案太大, 不可超過", ini_get("upload_max_filesize"), "<br>"; // 取得ini配置的參數
        break;
    case 2:
        echo "上傳檔案不完整<br>";
        break;
    case 3:
        echo "未選檔案<br>";
        break;
    default:
        echo "error.....: ", $_FILES['routePhoto']['error'], "<br>"; // 發生的錯誤代碼
}
?>