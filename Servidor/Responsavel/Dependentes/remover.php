<?php
    /*#region Headers*/
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Method: GET');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Length: 0');
    header('Content-Type: text/plain');
    header('Content-Type: application/json');
    header('Character-Encoding: utf-8');
    /*#endregion*/

    /*#region Inicialização*/
    include 'conectar.php';

    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    /*#endregion*/

    /*#region Variavéis*/
    $Email = $_GET['phpEmail'];
    /*#endregion*/

    /*#region Banco de Dados*/
    $SQL = $PDO->query("UPDATE `usuario` SET `nm_email_responsavel` = null WHERE `nm_email_usuario` = '$Email'");
    /*#endregion*/

    //#region Enviar
    echo json_encode('Removeu');
    //#endregion
?>
