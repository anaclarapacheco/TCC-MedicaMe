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
        $SQL = $PDO->query("SELECT m.`nm_medicamento`, a.`ds_recomendacao_medicamento`, a.`cd_agendamento`, m.`cd_forma_farmaceutica`, IFNULL(DATE(a.`dt_final_agendamento`), 'Sem data prevista') AS `dt_final_agendamento` FROM `agendamento` a JOIN `medicamento` m ON (a.`cd_medicamento` = m.`cd_medicamento`) WHERE `nm_email_usuario` = '$Email'");

        while($dados = $SQL->fetch())
        {
            $foi = true;

            $Resposta[] = array(
                'Nome' => $dados['nm_medicamento'],
                'Descricao' => $dados['ds_recomendacao_medicamento'],
                'Agendamento' => $dados['cd_agendamento'],
                'FormaFarmaceutica' => $dados['cd_forma_farmaceutica'],
                'DataFinal' => $dados['dt_final_agendamento']
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
