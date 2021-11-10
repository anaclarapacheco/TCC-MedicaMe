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
    $Codigo = $_GET['phpCodigo'];
    /*#endregion*/

    /*#region Banco de Dados*/
    if($Email != null && $Codigo != null)
    {
        $SQL = $PDO->query("SELECT * FROM `agendamento` a JOIN `medicamento` m ON (a.`cd_medicamento` = m.`cd_medicamento`) WHERE `nm_email_usuario` = '$Email' AND `cd_agendamento` = '$Codigo'");

        while($dados = $SQL->fetch())
        {
            $Resposta[] = array(
                'Nome' => $dados['nm_medicamento'],
                'FormaFarmaceutica' => $dados['cd_forma_farmaceutica'],
                'Dosagem' => $dados['qt_dosagem_medicamento'],
                'Descricao' => $dados['ds_recomendacao_medicamento'],
                'DataInicial' => $dados['dt_inicio_agendamento'],
                'DataFinal' => $dados['dt_final_agendamento'],
                'Dias' => $dados['qt_dias_agendamento'],
                'Horas' => $dados['qt_horas_periodo_medicamento'],
                'QuantidadeAtual' => $dados['qt_medicamento_usuario'],
                'QuantidadeMinima' => $dados['qt_minima_medicamento_usuario']
            );
        }
    }
    /*#endregion*/

    /*#region Envio*/
    echo json_encode($Resposta);
    /*#endregion*/
?>
