<?php
try {
    require_once("./connectMac.php");
    $sql = "select * from `game_quizzes` ";
    $tests = $pdo->query($sql);
    $testsRow = $tests->fetchAll(PDO::FETCH_ASSOC);
    echo $_POST['checkpointString'];
    echo json_encode($testsRow);
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>