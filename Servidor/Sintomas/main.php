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
    $Sintoma = $_GET['phpSintoma'];

    $Erro = true;
    /*#endregion*/

    /*#region Banco de Dados*/
    if($Email != null & $Sintoma != null)
    {
        $SQL = $PDO->query("SELECT IFNULL(MAX(`cd_sintoma`) + 1, 1) FROM `sintoma`");
        $MaxSintoma = $SQL->fetch()['IFNULL(MAX(`cd_sintoma`) + 1, 1)'];
    
        $SQL = $PDO->query("SET time_zone = '-03:00'");
        $SQL = $PDO->query("INSERT INTO `sintoma` VALUES ('$MaxSintoma', '$Sintoma', current_timestamp())");
        $SQL = $PDO->query("INSERT INTO `usuario_has_sintoma` VALUES ('$Email', '$MaxSintoma')");

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
