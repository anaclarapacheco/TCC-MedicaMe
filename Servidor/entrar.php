<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Method: POST');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Length: 0');
    header('Content-Type: text/plain');
    header('Content-Type: application/json');
    header('Character-Encoding: utf-8');

    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    $email = $data['phpEmail'];
    $senha = $data['phpSenha'];

    $usuarios[] = array(
        'Email' => $email,
        'Senha' => $senha,
    );

    echo json_encode($usuarios);
?>