<?php 
session_start();
if( isset($_SESSION["memId"])){//已登入
	$member = ["memNo"=>$_SESSION["memNo"],
			   "memId"=>$_SESSION["memId"],
               "memPsw"=>$_SESSION["memPsw"],
	 		   "memName"=>$_SESSION["memName"]];
	echo json_encode($member);
}else{
	echo "{}";
}
?>