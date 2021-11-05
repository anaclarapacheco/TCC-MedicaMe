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
    $Email = $_GET['phpEmail'];

    $Erro = true;
    $foi = false;
    /*#endregion*/

    /*#region Banco de Dados*/
    if($NomeMedicamento != null || $FormaFarmaceutica != null || $Descricao != null || $Dosagem != null || $Email != null)
    {
        //Código Máximo dos Agendamentos
        $SQL = $PDO->query("SELECT IFNULL(MAX(`cd_agendamento`) + 1, 1) FROM `agendamento`");
        $MaxAgenda = $SQL->fetch()['IFNULL(MAX(`cd_agendamento`) + 1, 1)'];

        //Código Máximo dos Medicamentos
        $SQL = $PDO->query("SELECT IFNULL(MAX(`cd_medicamento`) + 1, 1) FROM `medicamento`");
        $MaxMedicamento = $SQL->fetch()['IFNULL(MAX(`cd_medicamento`) + 1, 1)'];

        //Verificação de combinação
        $SQL = $PDO->query("SELECT `cd_medicamento` FROM `medicamento` WHERE `nm_medicamento` = '$NomeMedicamento' AND `cd_forma_farmaceutica` = '$FormaFarmaceutica'");

        while($dados = $SQL->fetch())
        {
            $foi = true;
            $CodigoMedicamento = $dados['cd_medicamento'];
        }

        if(!$foi)
        {
            $SQL = $PDO->query("INSERT INTO `medicamento` VALUES ('$MaxMedicamento', '$NomeMedicamento', '$FormaFarmaceutica')");
            $SQL = $PDO->query("INSERT INTO `agendamento` VALUES ('$Email', '$MaxMedicamento', '$MaxAgenda', null, null, null, '$Descricao', '$Dosagem', null, null, null, 1)");
        }
        else
        {
            $SQL = $PDO->query("INSERT INTO `agendamento` VALUES ('$Email', '$CodigoMedicamento', '$MaxAgenda', null, null, null, '$Descricao', '$Dosagem', null, null, null, 1)");
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
