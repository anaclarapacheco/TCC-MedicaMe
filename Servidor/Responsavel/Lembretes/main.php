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
    $Nome = null;
    $Descricao = null;
    $QuantidadeDosagem = null;
    $Date = null;
    /*#endregion*/

    /*#region Banco de Dados*/
    if($Email != null)
    {
        $SQL = $PDO->query("SELECT `m.nm_medicamento`, `a.ds_recomendacao_medicamento`, `a.qt_dosagem_medicamento`, IFNULL(CONCAT('Até o dia ', DATE(`a.dt_final_agendamento`)), 'Sem data prevista') AS `dt_final_agendamento` FROM `agendamento a` JOIN `medicamento m` ON (`a.cd_medicamento` = `m.cd_medicamento)` WHERE `a.nm_email_usuario` = '$Email'");

        while($dados = $SQL->fetch())
        {
            $Erro = false;

            $Resposta[] = array(
                'Erro' => false,
                'Nome' => $Nome,
                'Descrição' => $Descricao,
                'Quantidade de Dosagem' => $QuantidadeDosagem,
                'Data Final' => $Date
            );
        }
    }
    /*#endregion*/

    /*#region Envio*/
    echo json_encode($Resposta);
    /*#endregion*/
?>
