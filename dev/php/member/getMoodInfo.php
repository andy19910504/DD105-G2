<?php
try {
<<<<<<< HEAD
    require_once("./connectBooks.php");
    $memNum=$_GET["number"];
    $sql = "select * from`mood` where member_number=:memNum  AND mood_status=1 ORDER BY `mood`.`mood_number` DESC;";
=======
    require_once("connectBooks.php");
    $memNum=$_GET["number"];
    $sql = "select * from`posts` where member_number=:memNum ORDER BY `posts`.`post_number` DESC;";
>>>>>>> 539dba2f4dc4f1cf7a323173141522a9c57f3c41
    $moodinfo = $pdo->prepare($sql);
    $moodinfo->bindvalue(":memNum",$memNum);
    $moodinfo->execute();

    $moodinfoRow = $moodinfo->fetchAll(PDO::FETCH_ASSOC);


<<<<<<< HEAD
    $sql = "select a.mood_number,count(message_number) comment_total from `mood`a join `mood_message`b on(a.mood_number=b.mood_number) where a.member_number=:memNum group by a.mood_number order by a.mood_number desc;";

=======
    $sql = "select a.post_number,count(comment_number) comment_total from `posts`a join `comment`b on(a.post_number=b.post_number) where a.member_number=:memNum group by a.post_number order by a.post_number desc;";
>>>>>>> 539dba2f4dc4f1cf7a323173141522a9c57f3c41
    $moodinfocomment = $pdo->prepare($sql);
    $moodinfocomment->bindvalue(":memNum",$memNum);
    $moodinfocomment->execute();

    $moodinfocommentRow = $moodinfocomment->fetchAll(PDO::FETCH_ASSOC);








<<<<<<< HEAD
    // $sql = "select * FROM `routes`a join `routes_list`b on(a.route_number=b.route_number) group by a.route_number";
    // $moodlineoff = $pdo->prepare($sql);
    // $moodlineoff->execute();

    // $moodlineoffRow = $moodlineoff->fetchAll(PDO::FETCH_ASSOC);

    // $sql = "select * FROM `routes`a join `custom_attraction_list`b on(a.route_number=b.route_number) where a.member_number =:memNum group by a.route_number";
    // $moodlinecus = $pdo->prepare($sql);
    // $moodlinecus->bindvalue(":memNum",$memNum);
    // $moodlinecus->execute();

    // $moodlinecusRow = $moodlinecus->fetchAll(PDO::FETCH_ASSOC);



        echo json_encode(array("moodinfoRow"=>$moodinfoRow,"moodinfocommentRow"=>$moodinfocommentRow));
=======
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
>>>>>>> 539dba2f4dc4f1cf7a323173141522a9c57f3c41
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>
