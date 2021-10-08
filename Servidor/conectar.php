<?php
    header("Access-Control-Allow-Origin: *");

    $pdo = new pdo("mysql:host=localhost;dbname=cadastro", "root", "root");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>