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
    $DataFinal = 'null';
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
        $SQL = $PDO->query("SELECT MAX(`dt_registro_agendamento`) FROM `registro_agendamento` WHERE `cd_agendamento` = '$Codigo'");
        $Registro = $SQL->fetch()['MAX(`dt_registro_agendamento`)'];

        $SQL = $PDO->query("UPDATE `agendamento` SET `dt_inicio_agendamento` = '$DataInicial', `ds_recomendacao_medicamento` = '$Descricao', `qt_dosagem_medicamento` = '$Dosagem', `qt_horas_periodo_medicamento` = '$Horas', `qt_medicamento_usuario` = '$QuantidadeAtual', `qt_minima_medicamento_usuario` = '$QuantidadeMinima' WHERE `cd_agendamento` = '$Codigo'");

        if($Dias != 'null')
        {
            $SQL = $PDO->query("SELECT DATE_ADD('$DataInicial', INTERVAL '$Dias' DAY) FROM `agendamento` WHERE `cd_agendamento` = '$Codigo'");
            $DataFinal = $SQL->fetch()["DATE_ADD('$DataInicial', INTERVAL '$Dias' DAY)"];

            $SQL = $PDO->query("UPDATE `agendamento` SET `dt_final_agendamento` = '$DataFinal', `qt_dias_agendamento` = '$Dias' WHERE `cd_agendamento` = '$Codigo'");
        }
        else if($Dias == 'null')
        {
            $SQL = $PDO->query("UPDATE `agendamento` SET `dt_final_agendamento` = null, `qt_dias_agendamento` = null WHERE `cd_agendamento` = '$Codigo'");
        }

        $SQL = $PDO->query("SELECT `dt_final_agendamento` FROM `agendamento` WHERE `cd_agendamento` = '$Codigo'");
        $DataFinal = $SQL->fetch()["dt_final_agendamento"];

        if($DataFinal != null && $Registro > $DataFinal)
        {
            $SQL = $PDO->query("UPDATE `agendamento` SET `cd_situacao_agendamento` = 2 WHERE `cd_agendamento` = '$Codigo'");
        }
        else
        {
            $SQL = $PDO->query("UPDATE `agendamento` SET `cd_situacao_agendamento` = 1 WHERE `cd_agendamento` = '$Codigo'");
        }

        $SQL = $PDO->query("SELECT `cd_medicamento` FROM `agendamento` WHERE `cd_agendamento` = '$Codigo'");
        $CodigoMedicamento = $SQL->fetch()['cd_medicamento'];

        $SQL = $PDO->query("SELECT MIN(`cd_registro_agendamento`) FROM `registro_agendamento` WHERE `cd_agendamento` = '$Codigo'");
        $PrimeiroCodigo = $SQL->fetch()['MIN(`cd_registro_agendamento`)'];

        $SQL = $PDO->query("SELECT `ic_tomado_registro_agendamento` FROM `registro_agendamento` WHERE `cd_registro_agendamento` = $PrimeiroCodigo");
        $ICTomou = $SQL->fetch()['ic_tomado_registro_agendamento'];

        $SQL = $PDO->query("SELECT IFNULL(MAX(`cd_registro_agendamento`) + 1, 1) FROM `registro_agendamento`");
        $NovoRegistro = $SQL->fetch()['IFNULL(MAX(`cd_registro_agendamento`) + 1, 1)'];

        if($ICTomou == null)
        {
            $SQL = $PDO->query("SELECT DATE_SUB('$DataInicial', INTERVAL '$Horas' HOUR) FROM `agendamento` WHERE `cd_agendamento` = '$Codigo'");
            $DataRegistro = $SQL->fetch()["DATE_SUB('$DataInicial', INTERVAL '$Horas' HOUR)"];
        
            $SQL = $PDO->query("UPDATE `registro_agendamento` SET `dt_registro_agendamento` = '$DataRegistro', `ic_tomado_registro_agendamento` = null, `nm_email_usuario` = '$Email', `cd_medicamento` = '$CodigoMedicamento', `cd_agendamento` = '$Codigo' WHERE `cd_registro_agendamento` = '$PrimeiroCodigo'");
        }
        else
        {
            if($DataInicial > $Registro)
            {
                $SQL = $PDO->query("SELECT DATE_SUB('$DataInicial', INTERVAL '$Horas' HOUR) FROM `agendamento` WHERE `cd_agendamento` = '$Codigo'");
                $DataRegistro = $SQL->fetch()["DATE_SUB('$DataInicial', INTERVAL '$Horas' HOUR)"];
        
                $SQL = $PDO->query("INSERT INTO `registro_agendamento` VALUES ('$NovoRegistro', '$DataRegistro', null, '$Email', '$CodigoMedicamento', '$Codigo')");
            }
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
