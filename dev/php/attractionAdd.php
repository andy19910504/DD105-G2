<?php
try {
    require_once("./connectBooks.php");
    $sql = "
INSERT INTO `attractions`
 (`attraction_number`, `attraction_name`, 
  `attraction_address`, `attraction_information1`,
  `attraction_information2`, `attraction_photo1`, 
  `attraction_photo2`, `attraction_latitude`, 
  `attraction_longitude`, `attraction_status`) VALUES 
  (NULL, :attrName,:attrAddress, :attrInfo1, :attrInfo2, :attrPhoto1, :attrPhoto2, :attrLat,:attrLot, :attrStatus);
 ";

    $edit = $pdo->prepare($sql);
    // $edit->bindValue(":attrNum",$_POST["editNumber"]);
    $edit->bindValue(":attrName", $_POST["attrName"]);
    $edit->bindValue(":attrAddress", $_POST["attrAddress"]);
    $edit->bindValue(":attrInfo1", $_POST["attrInfo1"]);
    $edit->bindValue(":attrInfo2", $_POST["attrInfo2"]);
    $edit->bindValue(":attrPhoto1", $_POST["attrPhoto1"]);
    $edit->bindValue(":attrPhoto2", $_POST["attrPhoto2"]);
    $edit->bindValue(":attrLat", $_POST["attrLatitude"]);
    $edit->bindValue(":attrLot", $_POST["attrLongitude"]);
    $edit->bindValue(":attrStatus", $_POST["attrStatus"]);

    $edit->execute();

    echo "修改成功！";
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>
<?php

switch ($_FILES['attrPhoto1']['error']) {
    case 0:
        if (file_exists("../img/attractions") === false) {
            //make directory
            mkdir("../img/attractions");
        }
        $from = $_FILES['attrPhoto1']['tmp_name'];
        $to = "../img/attractions/{$_FILES['attrPhoto1']['name']}"; //images/smile.gif

        if (move_uploaded_file($from,$to )) {
            echo "上傳成功";
        } else {
            echo "拷貝失敗";
        }
        break;
    case 1:
        echo "上傳檔案太大, 不可超過", ini_get("upload_max_filesize"), "<br>"; // 取得ini配置的參數
        break;
    case 2:
        echo "上傳檔案太大, 不可超過{$_POST["MAX_FILE_SIZE"]}<br>"; // 取得設置的隱藏欄位資訊
        break;
    case 3:
        echo "上傳檔案不完整<br>";
        break;
    case 4:
        echo "未選檔案<br>";
        break;
    default:
        echo "error.....: ", $_FILES['attrPhoto1']['error'], "<br>"; // 發生的錯誤代碼
}
?>
<?php

switch ($_FILES['attrPhoto2']['error']) {
    case 0:
        if (file_exists("../img/attractions") === false) {
            //make directory
            mkdir("../img/attractions");
        }
        $from = $_FILES['attrPhoto2']['tmp_name'];
        $to = "../img/attractions/{$_FILES['attrPhoto2']['name']}"; //images/smile.gif

        if (move_uploaded_file($from,$to )) {
            echo "上傳成功";
        } else {
            echo "拷貝失敗";
        }
        break;
    case 1:
        echo "上傳檔案太大, 不可超過", ini_get("upload_max_filesize"), "<br>"; // 取得ini配置的參數
        break;
    case 2:
        echo "上傳檔案太大, 不可超過{$_POST["MAX_FILE_SIZE"]}<br>"; // 取得設置的隱藏欄位資訊
        break;
    case 3:
        echo "上傳檔案不完整<br>";
        break;
    case 4:
        echo "未選檔案<br>";
        break;
    default:
        echo "error.....: ", $_FILES['attrPhoto2']['error'], "<br>"; // 發生的錯誤代碼
}
?>