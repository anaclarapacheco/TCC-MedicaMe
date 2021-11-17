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
        $SQL = $PDO->query("SET time_zone = '-03:00'");
        $SQL = $PDO->query("SELECT * FROM vw_MedicamentosDia WHERE Previsão > current_timestamp() AND `nm_email_usuario` = '$Email' AND DATE(Previsão) = current_date() ORDER BY Previsão ASC");
        
        while($dados = $SQL->fetch())
        {
            $foi = true;

            $Resposta[] = array(
                'Previsao' => $dados['Previsão'],
                'Nome' => $dados['nm_medicamento'],
                'Dosagem' => $dados['qt_dosagem_medicamento'],
                'FormaFarmaceutica' => $dados['cd_forma_farmaceutica']
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
