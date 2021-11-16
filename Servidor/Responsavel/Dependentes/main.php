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

    $Erro = true;
    $foi = false;
    /*#endregion*/

    /*#region Banco de Dados*/
    if($Email != null)
    {
        $SQL = $PDO->query("SELECT `nm_usuario`, `nm_email_usuario`, TIMESTAMPDIFF(YEAR, `dt_nascimento_usuario`, NOW()) AS idade FROM `usuario` WHERE `nm_email_responsavel` = '$Email'");

        while($dados = $SQL->fetch())
        {
            $foi = true;

            $Resposta[] = array(
                'Nome' => $dados['nm_usuario'],
                'Email' => $dados['nm_email_usuario'],
                'Idade' => $dados['idade']
            );
        }
    }
    /*#endregion*/

    /*#region Envio*/
    if(!$foi)
    {
        $Resposta[] = array(
            'Erro' => $Erro
        );
    }

    echo json_encode($Resposta);
    /*#endregion*/
?>
