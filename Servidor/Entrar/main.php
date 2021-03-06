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
    $Senha = $_GET['phpSenha'];

    $Erro = true;
    $TipoUsuario = null;
    /*#endregion*/

    /*#region Banco de Dados*/
    if($Email != null & $Senha != null)
    {
        $SQL = $PDO->query("SELECT * FROM `usuario` WHERE `nm_email_usuario` = '$Email' And `nm_senha_usuario` = MD5('$Senha')");

        while($dados = $SQL->fetch())
        {
            $Erro = false;

            if($dados['nm_email_responsavel'] == null)
            {
                $TipoUsuario = 'Responsavel';
            }
            else
            {
                $TipoUsuario = 'Dependente';
            }
        }
    }
    /*#endregion*/

    /*#region Envio*/
    $Resposta[] = array(
        'Erro' => $Erro,
        'Tipo Usuario' => $TipoUsuario
    );

    echo json_encode($Resposta);
    /*#endregion*/
?>
