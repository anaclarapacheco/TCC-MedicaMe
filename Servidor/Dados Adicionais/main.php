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
    $Nome = $_GET['phpNome'];
    $Date = $_GET['phpData'];
    $Email = $_GET['phpEmail'];

    $Erro = true;
    /*#endregion*/

    /*#region Banco de Dados*/
    if($Nome != null & $Date != null & $Email != null)
    {
        $Erro = false;

        $PDO->query("UPDATE `usuario` SET `nm_usuario` = '$Nome', `dt_nascimento_usuario` = '$Date' WHERE `nm_email_usuario` = '$Email'");
    }
    /*#endregion*/

    /*#region Envio*/
    $Resposta[] = array(
        'Erro' => $Erro
    );

    echo json_encode($Resposta);
    /*#endregion*/
?>
