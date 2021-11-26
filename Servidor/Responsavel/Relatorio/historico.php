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
        $index = 0;
        $LetraAtual = '';
        $SQL = $PDO->query("SELECT DISTINCT(m.`nm_medicamento`), f.`cd_forma_farmaceutica` FROM `medicamento` m JOIN `agendamento` a ON (m.`cd_medicamento` = a.`cd_medicamento`) JOIN `forma_farmaceutica` f ON (m.`cd_forma_farmaceutica` = f.`cd_forma_farmaceutica`) JOIN `registro_agendamento` r ON (a.`cd_agendamento` = r.`cd_agendamento`) WHERE a.`nm_email_usuario` = '$Email' GROUP BY r.`cd_agendamento` ORDER BY m.`nm_medicamento` ASC");

        while($dados = $SQL->fetch())
        {
            $foi = true;

            if($index > 0 && $LetraAtual != substr($dados['nm_medicamento'], 0, 1))
            {
                $LetraAtual = substr($dados['nm_medicamento'], 0, 1);

                $Resposta[] = array(
                    'Nome' => null,
                    'FormaFarma' => null,
                    'Letra' => $LetraAtual
                );
            }
            else if($index == 0)
            {
                $LetraAtual = substr($dados['nm_medicamento'], 0, 1);

                $Resposta[] = array(
                    'Nome' => null,
                    'FormaFarma' => null,
                    'Letra' => $LetraAtual
                );
            }

            $Resposta[] = array(
                'Nome' => $dados['nm_medicamento'],
                'FormaFarma' => $dados['cd_forma_farmaceutica'],
                'Letra' => null
            );

            $index++;
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
