<?php
try {
    require_once("./connectBooks.php");
    $sql = "
    INSERT INTO `routes` 
    (`route_number`, `route_name`,
     `route_information`, `route_photo`,
     `route_status`, `member_number`) VALUES
    (NULL, ':routeName', ':routeInfo', ':routePhoto', ':routeStatus', NULL)
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
// // 取得自動創號的key值
// $num = $pdo->lastInsertId();

// switch ($_FILES['attrPhoto1']['error']) {
//     case 0:
//         if (file_exists("../img/attractions") === false) {
//             //make directory
//             mkdir("../img/attractions");
//         }
//         $oldName1 = pathinfo($_FILES['attrPhoto1']['name']);
//         $from = $_FILES['attrPhoto1']['tmp_name'];
//         $newName1 ="attr"."{$num}-1.{$oldName1["extension"]}";
//         $to = "../img/attractions/$newName1";

//         if (move_uploaded_file($from, $to)) {
// 			$sql = " update `attractions` set `attraction_photo1` = :imgName where attraction_number = $num ;";
// 			$changeName = $pdo->prepare($sql);
// 			$changeName -> bindValue(":imgName", $newName1);
// 			$changeName -> execute();
//             echo "上傳成功";
//         } else {
//             echo "上傳失敗";
//         }
//         break;
//     case 1:
//         echo "上傳檔案太大, 不可超過", ini_get("upload_max_filesize"), "<br>"; // 取得ini配置的參數
//         break;
//     case 2:
//         echo "上傳檔案不完整<br>";
//         break;
//     case 3:
//         echo "未選檔案<br>";
//         break;
//     default:
//         echo "error.....: ", $_FILES['attrPhoto1']['error'], "<br>"; // 發生的錯誤代碼
// }
?>