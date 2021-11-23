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
    $Situacao = $_GET['phpSituacao'];
    $Agendamento = $_GET['phpCodigo'];
    $Email = $_GET['phpEmail'];

    $Erro = true;
    /*#endregion*/

    /*#region Banco de Dados*/
    if($Situacao != null && $Agendamento != null && $Email != null)
    {
        $Erro = false;

        //Código Máximo do Registro
        $SQL = $PDO->query("SELECT IFNULL(MAX(`cd_registro_agendamento`) + 1, 1) FROM `registro_agendamento`");
        $MaxRegistro = $SQL->fetch()['IFNULL(MAX(`cd_registro_agendamento`) + 1, 1)'];

        //Código do Medicamento
        $SQL = $PDO->query("SELECT `cd_medicamento` FROM `agendamento` WHERE `cd_agendamento` = '$Agendamento'");
        $CodigoMedicamento = $SQL->fetch()['cd_medicamento'];

        //Data Tegistro
        $SQL = $PDO->query("SET time_zone = '-03:00'");
        $SQL = $PDO->query("SELECT current_timestamp()");
        $DataRegistro = $SQL->fetch()['current_timestamp()'];

        //Registro Agendamento
        $SQL = $PDO->query("INSERT INTO `registro_agendamento` VALUES ('$MaxRegistro', '$DataRegistro', '$Situacao', '$Email', '$CodigoMedicamento', '$Agendamento')");
        $SQL = $PDO->query("DELETE FROM `registro_agendamento` WHERE `ic_tomado_registro_agendamento` IS NULL AND `cd_agendamento` = '$Agendamento'");

        if($Situacao == 'Tomou.')
        {
            //Tipo do Medicamento
            $SQL = $PDO->query("SELECT m.`cd_forma_farmaceutica` FROM `agendamento` a JOIN `medicamento` m ON (a.`cd_medicamento` = m.`cd_medicamento`) WHERE a.`cd_agendamento` = '$Agendamento'");
            $TipoMedicamento = $SQL->fetch()['cd_forma_farmaceutica'];

            //Dosagem
            $SQL = $PDO->query("SELECT `qt_dosagem_medicamento` FROM `agendamento` WHERE `cd_agendamento` = '$Agendamento'");
            $Dosagem = $SQL->fetch()['qt_dosagem_medicamento'];

            //Medicamento Usuário
            $SQL = $PDO->query("SELECT `qt_medicamento_usuario` FROM `agendamento` WHERE `cd_agendamento` = '$Agendamento'");
            $MedicamentoUsuario = $SQL->fetch()['qt_medicamento_usuario'];

            //Atualizar Agendamento
            if($TipoMedicamento == 2)
            {
                $SQL = $PDO->query("UPDATE `agendamento` SET `qt_medicamento_usuario` = f_CalcGotas('$Dosagem', '$MedicamentoUsuario') WHERE `cd_agendamento` = '$Agendamento'");
            }
            else
            {
                $SQL = $PDO->query("UPDATE `agendamento` SET `qt_medicamento_usuario` = f_CalcMedic('$Dosagem', '$MedicamentoUsuario') WHERE `cd_agendamento` = '$Agendamento'");
            }
        }

        //Medicamento Usuário
        $SQL = $PDO->query("SELECT `qt_medicamento_usuario` FROM `agendamento` WHERE `cd_agendamento` = '$Agendamento'");
        $NovaQuantidade = $SQL->fetch()['qt_medicamento_usuario'];

        //Medicamento Usuário
        $SQL = $PDO->query("SELECT `qt_minima_medicamento_usuario` FROM `agendamento` WHERE `cd_agendamento` = '$Agendamento'");
        $MedicamentoMinimo = $SQL->fetch()['qt_minima_medicamento_usuario'];

        //Notificação
        if($MedicamentoMinimo > $NovaQuantidade)
        {
            $Erro = 'Notificar';
        }

        //Data Final
        $SQL = $PDO->query("SELECT `dt_final_agendamento` FROM `agendamento` WHERE `cd_agendamento` = '$Agendamento'");
        $DataFinal = $SQL->fetch()['dt_final_agendamento'];

        //Atualizar Agendamento
        if($DataFinal != null && $DataRegistro > $DataFinal)
        {
            $SQL = $PDO->query("UPDATE `agendamento` SET `cd_situacao_agendamento` = 2 WHERE `cd_agendamento` = '$Agendamento'");
        }
    }
    /*#endregion*/

    /*#region Envio*/
    $Resposta[] = array(
        'Erro' => $Erro
    );

    echo json_encode($Resposta);
    /*#endregion*/
?>
