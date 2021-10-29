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
    $Nome = null;
    $Date = null;
    $Erro = 'true';
    /*#endregion*/

    /*#region Banco de Dados*/
    $SQL = $PDO->query("SELECT `nm_usuario`, `dt_nascimento_usuario` FROM `usuario` WHERE `nm_email_usuario` = '$Email'");

    while($dados = $SQL->fetch())
    {
        if($dados['nm_usuario'] != null)
        {
            $Erro = 'false';

            $Nome = $dados['nm_usuario'];
            $Date = $dados['dt_nascimento_usuario'];
        }
    }
    /*#endregion*/

    /*#region Envio*/
    $Usuario[] = array(
        'Erro' => $Erro,
        'Nome' => $Nome,
        'Data' => $Date
    );

    echo json_encode($Usuario);
    /*#endregion*/
?>
