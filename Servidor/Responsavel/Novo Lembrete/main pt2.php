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
    $DataInicial = $_GET['phpDataInicial'];
    $DataFinal = 'null';
    $Dias = $_GET['phpDias'];
    $Horas = $_GET['phpHoras'];
    $QuantidadeAtual = $_GET['phpQuantidadeAtual'];
    $QuantidadeMinima = $_GET['phpQuantidadeMinima'];
    $Email = $_GET['phpEmail'];

    $Erro = true;
    /*#endregion*/

    /*#region Banco de Dados*/
    if($DataInicial != null && $Horas != null && $QuantidadeAtual != null && $QuantidadeMinima != null && $Email != null)
    {
        //Código Máximo dos Agendamentos
        $SQL = $PDO->query("SELECT MAX(`cd_agendamento`) FROM `agendamento` WHERE `nm_email_usuario` = '$Email'");
        $MaxAgenda = $SQL->fetch()['MAX(`cd_agendamento`)'];

        //Código Medicamentos
        $SQL = $PDO->query("SELECT `cd_medicamento` FROM `agendamento` WHERE `cd_agendamento` = '$MaxAgenda'");
        $CodigoMedicamento = $SQL->fetch()['cd_medicamento'];

        //Dosagem
        $SQL = $PDO->query("SELECT `qt_dosagem_medicamento` FROM `agendamento` WHERE `cd_agendamento` = '$MaxAgenda'");
        $Dosagem = $SQL->fetch()['qt_dosagem_medicamento'];

        //Verificação de Combinação
        if($Dias != 'null')
        {
            $SQL = $PDO->query("SELECT DATE_ADD('$DataInicial', INTERVAL '$Dias' DAY) FROM `agendamento` WHERE `cd_agendamento` = '$MaxAgenda'");
            $DataFinal = $SQL->fetch()["DATE_ADD('$DataInicial', INTERVAL '$Dias' DAY)"];

            $SQL = $PDO->query("UPDATE `agendamento` SET `dt_inicio_agendamento` = '$DataInicial', `dt_final_agendamento` = '$DataFinal', `qt_dias_agendamento` = '$Dias', `qt_dosagem_medicamento` = '$Dosagem', `qt_medicamento_usuario` = '$QuantidadeAtual', `qt_horas_periodo_medicamento` = '$Horas', `qt_minima_medicamento_usuario` = '$QuantidadeMinima', `cd_situacao_agendamento` = 1 WHERE `cd_agendamento` = '$MaxAgenda'");
        }
        else if($DataFinal == 'null' && $Dias == 'null')
        {
            $SQL = $PDO->query("UPDATE `agendamento` SET `dt_inicio_agendamento` = '$DataInicial', `qt_dosagem_medicamento` = '$Dosagem', `qt_medicamento_usuario` = '$QuantidadeAtual', `qt_horas_periodo_medicamento` = '$Horas', `qt_minima_medicamento_usuario` = '$QuantidadeMinima', `cd_situacao_agendamento` = 1 WHERE `cd_agendamento` = '$MaxAgenda'");
        }
        else if($DataFinal != 'null')
        {
            $SQL = $PDO->query("UPDATE `agendamento` SET `dt_inicio_agendamento` = '$DataInicial', `dt_final_agendamento` = '$DataFinal', `qt_dias_agendamento` = null, `qt_dosagem_medicamento` = '$Dosagem', `qt_medicamento_usuario` = '$QuantidadeAtual', `qt_horas_periodo_medicamento` = '$Horas', `qt_minima_medicamento_usuario` = '$QuantidadeMinima', `cd_situacao_agendamento` = 1 WHERE `cd_agendamento` = '$MaxAgenda'");
        }

        //Código Máximo do Registro
        $SQL = $PDO->query("SELECT IFNULL(MAX(`cd_registro_agendamento`) + 1, 1) FROM `registro_agendamento`");
        $MaxRegistro = $SQL->fetch()['IFNULL(MAX(`cd_registro_agendamento`) + 1, 1)'];

        //Data Registro
        $SQL = $PDO->query("SELECT DATE_SUB('$DataInicial', INTERVAL `qt_horas_periodo_medicamento` HOUR) FROM `agendamento` WHERE `cd_agendamento` = '$MaxAgenda'");
        $DataRegistro = $SQL->fetch()["DATE_SUB('$DataInicial', INTERVAL `qt_horas_periodo_medicamento` HOUR)"];

        //Inserindo no Registro
        $SQL = $PDO->query("INSERT INTO `registro_agendamento` VALUES ('$MaxRegistro', '$DataRegistro', null, '$Email', '$CodigoMedicamento', '$MaxAgenda');");

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
