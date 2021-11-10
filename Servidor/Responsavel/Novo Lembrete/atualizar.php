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
    $NomeMedicamento = $_GET['phpNomeMedicamento'];
    $FormaFarmaceutica = $_GET['phpFormaFarmaceutica'];
    $Descricao = $_GET['phpDescricao'];
    $Dosagem = $_GET['phpDosagem'];
    $DataInicial = $_GET['phpDataInicial'];
    $DataFinal = $_GET['phpDataFinal'];
    $Dias = $_GET['phpDias'];
    $Horas = $_GET['phpHoras'];
    $QuantidadeAtual = $_GET['phpQuantidadeAtual'];
    $QuantidadeMinima = $_GET['phpQuantidadeMinima'];
    $Email = $_GET['phpEmail'];
    $Codigo = $_GET['phpCodigo'];

    $Erro = true;
    /*#endregion*/

    /*#region Banco de Dados*/
    if($NomeMedicamento != null && $FormaFarmaceutica != null && $Dosagem != null && $Email != null && $DataInicial != null && $DataFinal != null && $Dias != null && $Horas != null && $QuantidadeAtual != null && $QuantidadeMinima != null && $Email != null)
    {
        //Registro
        $SQL = $PDO->query("SELECT MAX(`dt_registro_agendamento`) FROM `registro_agendamento` WHERE `cd_agendamento` = '$Codigo'");
        $Registro = $SQL->fetch()['MAX(`dt_registro_agendamento`)'];

        //Atualizar
        if($DataFinal == 'null' && $Dias == 'null')
        {
            $SQL = $PDO->query("UPDATE `agendamento` SET `dt_inicio_agendamento` = '$DataInicial', `dt_final_agendamento` = null, `qt_dias_agendamento` = null, `ds_recomendacao_medicamento` = '$Descricao', `qt_dosagem_medicamento` = '$Dosagem', `qt_horas_periodo_medicamento` = '$Horas', `qt_medicamento_usuario` = '$QuantidadeAtual', `qt_minima_medicamento_usuario` = '$QuantidadeMinima' WHERE `cd_agendamento` = '$Codigo'");
        }
        else if($DataFinal == 'null')
        {
            $SQL = $PDO->query("UPDATE `agendamento` SET `dt_inicio_agendamento` = '$DataInicial', `dt_final_agendamento` = null, `qt_dias_agendamento` = '$Dias', `ds_recomendacao_medicamento` = '$Descricao', `qt_dosagem_medicamento` = '$Dosagem', `qt_horas_periodo_medicamento` = '$Horas', `qt_medicamento_usuario` = '$QuantidadeAtual', `qt_minima_medicamento_usuario` = '$QuantidadeMinima' WHERE `cd_agendamento` = '$Codigo'");
        }
        else if($Dias == 'null')
        {
            $SQL = $PDO->query("UPDATE `agendamento` SET `dt_inicio_agendamento` = '$DataInicial', `dt_final_agendamento` = '$DataFinal', `qt_dias_agendamento` = null, `ds_recomendacao_medicamento` = '$Descricao', `qt_dosagem_medicamento` = '$Dosagem', `qt_horas_periodo_medicamento` = '$Horas', `qt_medicamento_usuario` = '$QuantidadeAtual', `qt_minima_medicamento_usuario` = '$QuantidadeMinima' WHERE `cd_agendamento` = '$Codigo'");
        }

        //Codigo do Medicamento
        $SQL = $PDO->query("SELECT `cd_medicamento` FROM `medicamento` WHERE `nm_medicamento` = '$NomeMedicamento' AND `cd_forma_farmaceutica` = '$FormaFarmaceutica'");
        $CodigoMedicamento = $SQL->fetch()['cd_medicamento'];

        //Codigo Máximo do Medicamento
        $SQL = $PDO->query("SELECT IFNULL(MAX(`cd_medicamento`) + 1, 1) FROM `medicamento`");
        $MaxMedicamento = $SQL->fetch()['IFNULL(MAX(`cd_medicamento`) + 1, 1)'];

        //Atualizando Nome e Forma Farmacêutica
        if($CodigoMedicamento == null)
        {
            $SQL = $PDO->query("INSERT INTO `medicamento` VALUES ('$MaxMedicamento', '$NomeMedicamento', '$FormaFarmaceutica')");
            $SQL = $PDO->query("UPDATE `agendamento` SET `cd_medicamento` = '$MaxMedicamento' WHERE `cd_agendamento` = '$Codigo'");
        }
        else
        {
            $SQL = $PDO->query("UPDATE `agendamento` SET `cd_medicamento` = '$CodigoMedicamento' WHERE `cd_agendamento` = '$Codigo'");
        }

        //Atualizando Data
        if($DataFinal == 'null' && $Dias != 'null')
        {
            //DataFinal
            $SQL = $PDO->query("SELECT DATE_ADD('$DataInicial', INTERVAL '$Dias' DAY) FROM `agendamento` WHERE `cd_agendamento` = '$Codigo'");
            $DataFinal = $SQL->fetch()["DATE_ADD('$DataInicial', INTERVAL '$Dias' DAY)"];

            $SQL = $PDO->query("UPDATE `agendamento` SET `dt_final_agendamento` = '$DataFinal', `qt_dias_agendamento` = '$Dias' WHERE `cd_agendamento` = '$Codigo'");
        }
        else if($DataFinal == 'null' && $Dias == 'null')
        {
            $SQL = $PDO->query("UPDATE `agendamento` SET `dt_inicio_agendamento` = null, `dt_final_agendamento` = null WHERE `cd_agendamento` = '$Codigo'");
        }
        else if($DataFinal != 'null')
        {
            $SQL = $PDO->query("UPDATE `agendamento` SET `dt_final_agendamento` = '$DataFinal', `qt_dias_agendamento` = null WHERE `cd_agendamento` = '$Codigo'");
        }

        if($Registro > $DataFinal)
        {
            $SQL = $PDO->query("UPDATE `agendamento` SET `cd_situacao_agendamento` = 2 WHERE `cd_agendamento` = '$Codigo'");
        }
        else
        {
            $SQL = $PDO->query("UPDATE `agendamento` SET `cd_situacao_agendamento` = 1 WHERE `cd_agendamento` = '$Codigo'");
        }

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
