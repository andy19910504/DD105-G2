<?php
try {
    require_once("connectBooks.php");
    $number=$_POST["member_number"];
    $account=$_POST["member_account"];
    $password=$_POST["member_password"];
    $name=$_POST["member_name"];
    $email=$_POST["member_email"];
    // $photo=$_POST["photo"];
    $sql = "update `member` set member_account=:account,member_password=:password,member_name=:name,member_email=:email where member_number=:number";

    $upmemberinfo = $pdo->prepare($sql);
    $upmemberinfo->bindvalue(":number",$number);
    $upmemberinfo->bindvalue(":account",$account);
    $upmemberinfo->bindvalue(":password",$password);
    $upmemberinfo->bindvalue(":name",$name);
    $upmemberinfo->bindvalue(":email",$email);
    // $upmemberinfo->bindvalue(":photo",$photo);
    $upmemberinfo->execute();
    if($upmemberinfo->rowCount() == 1){
        echo "修改會員資料成功0";
        if($_FILES['photo_up']['error']==0){
            echo "修改會員資料成功1";
            //存不存在
		    if( file_exists("img/memberPhoto") === false){
			    //make directory
			    //新增資料夾
                mkdir("img/memberPhoto");		
            }
            $type=$_FILES["photo_up"]["type"];
            echo $type;
            $from = $_FILES['photo_up']['tmp_name'];
            $to = "images/memberPhoto/$number.$type";
            
            if(copy($from, $to)){
                echo "上傳成功00";

                }else{
                    echo "修改會員資料失敗11";
                }

        }else{
            echo $_FILES['photo_up']['error'];
        }
        // if($_FILES['photo_up']['error']==0){
        //     echo "修改會員資料成功1";
            //存不存在
		    // if( file_exists("img/member") === false){
			//     //make directory
			//     //新增資料夾
            //     mkdir("img/member");		
            // }
            // $type=$_FILES["photo_up"]["type"];
            // $from = $_FILES['photo_up']['tmp_name'];
            // $to = "images/member/$number.$type";
            // if(copy($from, $to)){
            //     echo "上傳成功00";
            //     $sql = "update `member` set member_photo=:photo where member_number=:number";
            //     $upmemberpho = $pdo->prepare($sql);
            //     $upmemberpho->bindvalue(":photo",$to);
            //     $upmemberpho->execute();
            //     if($upmemberinfo->rowCount() == 1){
            //         echo "修改會員資料成功11";
            //     }else{
            //         echo "修改會員資料失敗11";
            //     }

		    // }else{
			// echo "上傳失敗22";
		    // }
        // }else{
        //     echo "修改會員資料失敗22";
        // }

    }else{
        echo "修改會員資料失敗";
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>
