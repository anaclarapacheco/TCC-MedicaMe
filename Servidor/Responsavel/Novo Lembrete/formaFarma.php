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

    /*#region Banco de Dados*/
    $SQL = $PDO->query("SELECT * FROM `forma_farmaceutica`");

    while($dados = $SQL->fetch())
    {
        $Resposta[] = array(
            'Codigo' => $dados['cd_forma_farmaceutica'],
            'Nome' => $dados['nm_forma_farmaceutica']
        );
    }
    /*#endregion*/

    /*#region Envio*/
    echo json_encode($Resposta);
    /*#endregion*/
?>
