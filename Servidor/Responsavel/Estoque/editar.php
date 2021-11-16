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
    $Agendamento = $_GET['phpCodigo'];
    $Quantidade = $_GET['phpQuantidade'];
    $Email = $_GET['phpEmail'];

    $Erro = true;
    /*#endregion*/

    /*#region Banco de Dados*/
    if($Email != null && $Agendamento != null && $Quantidade != null)
    {
        $SQL = $PDO->query("SELECT `qt_medicamento_usuario` FROM `agendamento` WHERE `cd_agendamento` = '$Agendamento'");
        $QuantidadeAtual = $SQL->fetch()['qt_medicamento_usuario'];
        $QuantidadeNova = $QuantidadeAtual + $Quantidade;

        $SQL = $PDO->query("UPDATE `agendamento` SET `qt_medicamento_usuario` = '$QuantidadeNova' WHERE `nm_email_usuario` = '$Email' AND `cd_agendamento` = '$Agendamento'");

        $Erro = false;
    }
    /*#endregion*/

    /*#region Envio*/
    $Resposta[] = array(
        'Erro' => $Erro
    );
    
    echo json_encode($Resposta);
    /*#endregion*/
?>
