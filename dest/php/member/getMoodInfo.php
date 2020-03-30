<?php
try {
    require_once("connectBooks.php");
    $memNum=$_GET["number"];
    $sql = "select * from`posts` where member_number=:memNum ORDER BY `posts`.`post_number` DESC;";
    $moodinfo = $pdo->prepare($sql);
    $moodinfo->bindvalue(":memNum",$memNum);
    $moodinfo->execute();

    $moodinfoRow = $moodinfo->fetchAll(PDO::FETCH_ASSOC);


    $sql = "select a.post_number,count(comment_number) comment_total from `posts`a join `comment`b on(a.post_number=b.post_number) where a.member_number=:memNum group by a.post_number order by a.post_number desc;";
    $moodinfocomment = $pdo->prepare($sql);
    $moodinfocomment->bindvalue(":memNum",$memNum);
    $moodinfocomment->execute();

    $moodinfocommentRow = $moodinfocomment->fetchAll(PDO::FETCH_ASSOC);








    $sql = "select * FROM `routes`a join `routes_list`b on(a.route_number=b.route_number) group by a.route_number";
    $moodlineoff = $pdo->prepare($sql);
    $moodlineoff->execute();

    $moodlineoffRow = $moodlineoff->fetchAll(PDO::FETCH_ASSOC);

    $sql = "select * FROM `routes`a join `custom_attraction_list`b on(a.route_number=b.route_number) where a.member_number =:memNum group by a.route_number";
    $moodlinecus = $pdo->prepare($sql);
    $moodlinecus->bindvalue(":memNum",$memNum);
    $moodlinecus->execute();

    $moodlinecusRow = $moodlinecus->fetchAll(PDO::FETCH_ASSOC);



        echo json_encode(array("moodinfoRow"=>$moodinfoRow,"moodlineoffRow"=>$moodlineoffRow,"moodlinecusRow"=>$moodlinecusRow,"moodinfocommentRow"=>$moodinfocommentRow));
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>
