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
    $DataInicial = $_GET['phpDataInicial'];
    $DataFinal = $_GET['phpDataFinal'];

    $Erro = true;
    $foi = false;
    /*#endregion*/

    /*#region Banco de Dados*/
    if($Email != null)
    {
        $SQL = $PDO->query("SELECT * FROM ((SELECT r.`dt_registro_agendamento`, m.`nm_medicamento`, m.`cd_forma_farmaceutica`, a.`qt_dosagem_medicamento`, r.`ic_tomado_registro_agendamento`, '' AS `dt_sintoma`, '' as `ds_sintoma` FROM `registro_agendamento` r JOIN `medicamento` m ON (r.`cd_medicamento` = m.`cd_medicamento`) JOIN `agendamento` a ON (r.`cd_agendamento` = a.`cd_agendamento`) WHERE r.`nm_email_usuario` = '$Email' AND r.`dt_registro_agendamento`) UNION ALL (SELECT '', '', '', '', '', s.`dt_sintoma`, s.`ds_sintoma` FROM `sintoma` s JOIN `usuario_has_sintoma` u ON (s.`cd_sintoma` = u.`cd_sintoma`) WHERE u.`nm_email_usuario` = '$Email')) AS t3 WHERE GREATEST(t3.`dt_registro_agendamento`, t3.`dt_sintoma`) BETWEEN '$DataInicial' AND DATE_ADD('$DataFinal', INTERVAL 1 DAY) ORDER BY GREATEST(t3.`dt_registro_agendamento`, t3.`dt_sintoma`) DESC");

        while($dados = $SQL->fetch())
        {
            $foi = true;

            if($dados['dt_registro_agendamento'] != null)
            {
                $Dia = substr($dados['dt_registro_agendamento'], 0, 10);
                $Horas = substr($dados['dt_registro_agendamento'], 11, -3);
                $Titulo = $dados['nm_medicamento'];
                $Situacao = $dados['ic_tomado_registro_agendamento'];
                $FormaFarmaceutica = $dados['cd_forma_farmaceutica'];
                $Dosagem = $dados['qt_dosagem_medicamento'];
            }
            else
            {
                $Dia = substr($dados['dt_sintoma'], 0, 10);
                $Horas = substr($dados['dt_sintoma'], 11, -3);
                $Titulo = $dados['ds_sintoma'];
                $Situacao = 'Sintomas';
                $FormaFarmaceutica = null;
                $Dosagem = null;

            }

            $Resposta[] = array(
                'Dia' => $Dia,
                'Horas' => $Horas,
                'Texto' => $Titulo,
                'Situacao' => $Situacao,
                'FormaFarma' => $FormaFarmaceutica,
                'Dosagem' => $Dosagem
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
