import { Component, OnInit } from '@angular/core';
import { NavegationService } from 'src/app/services/navegation.service';
import { ServidorService } from 'src/app/services/servidor.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.page.html',
  styleUrls: ['./relatorio.page.scss'],
})
export class RelatorioPage implements OnInit {

  constructor(private nav: NavegationService, private servidor: ServidorService) {}
  
  //#region Valores
  public nomeDependente: any;
  public email: any;

  public dataInicial: any;
  public dataFinal: any;

  public erro: any;
  public temNao: any;
  public temRelatorio: any;
  public lista: any = [];

  public situacao: any = ['Tomou.', 'Cancelou.', 'Sintomas'];
  public diaAtual: any = '2021-11-24';
  //#endregion

  //#region Abrir e Fechar o Menu
  open()
  {
    //Variaveis
    var menu = document.getElementById('mRelatorio');
    var content = document.getElementById('rMenu');

    //Abre
    menu.classList.remove('invisivel');

    //Preparação
    menu.classList.remove('OutFundo');
    content.classList.remove('OutMenu');

    //Animação
    setTimeout(function()
    {
      menu.classList.add('InFundo');
      content.classList.add('InMenu');
    }, 100);
  }

  close()
  {
    //Variaveis
    var menu = document.getElementById('mRelatorio');
    var content = document.getElementById('rMenu');

    //Preparação
    menu.classList.remove('InFundo');
    content.classList.remove('InMenu');

    //Animação
    menu.classList.add('OutFundo');
    content.classList.add('OutMenu');
    
    //Fecha
    setTimeout(function()
    {
      menu.classList.add('invisivel');
    }, 301);
  }
  //#endregion

  //#region Definir periodo
  periodo()
  {
    document.getElementById('erroPeriodo').classList.add('invisivel');

    document.getElementById('dPeriodo').classList.remove('invisivel');

    //Preparação
    document.getElementById('pFundo').classList.remove('OutFundo');
    document.getElementById('pAlert').classList.remove('OutAlerta');

    //Animação
    setTimeout(function()
    {
      document.getElementById('pAlert').classList.add('InAlerta');
      document.getElementById('pFundo').classList.add('InFundo');
    }, 100);

    //Valores das datas
    let nowData = new Date();
    let data = new Date(nowData.getFullYear(), nowData.getMonth() + 1, 0);
    this.dataInicial = nowData.getFullYear() + '-' + String(nowData.getMonth() + 1).padStart(2, '0') + '-01';
    this.dataFinal = nowData.getFullYear() + '-' + String(nowData.getMonth() + 1).padStart(2, '0') + '-' + data.getDate();
  }

  fechar()
  {    
    if(event.target == document.getElementById('pFundo'))
    {
      //Preparação
      document.getElementById('pFundo').classList.remove('InFundo');
      document.getElementById('pAlert').classList.remove('InAlerta');

      //Animação
      document.getElementById('pFundo').classList.add('OutFundo');
      document.getElementById('pAlert').classList.add('OutAlerta');
      
      //Fecha
      setTimeout(function()
      {
        document.getElementById('dPeriodo').classList.add('invisivel');
      }, 301);
    }
  }

  definir()
  {
    document.getElementById('erroPeriodo').classList.add('invisivel');

    if(this.dataInicial == '' || this.dataFinal == '' || this.dataInicial == null || this.dataFinal == null)
    {
      this.erro = 'Preencha todos os campos!';
      document.getElementById('erroPeriodo').classList.remove('invisivel');
      return;
    }
    else if(this.dataInicial > this.dataFinal)
    {
      this.erro = 'O periodo inicial deve ser menor que o periodo final, digite novamente!';
      document.getElementById('erroPeriodo').classList.remove('invisivel');
      return;
    }
    else
    {
      let dados = 'phpEmail=' + this.email + '&phpDataInicial=' + this.dataInicial + '&phpDataFinal=' + this.dataFinal;
      
      //Enviando ao PHP
      this.servidor.enviar('Responsavel/Relatorio/main.php', dados).subscribe(res => {
        if (res[0]['Erro'] != true)
        {
          this.temRelatorio = true;
          this.temNao = false;

          //Preparação
          document.getElementById('pFundo').classList.remove('InFundo');
          document.getElementById('pAlert').classList.remove('InAlerta');

          //Animação
          document.getElementById('pFundo').classList.add('OutFundo');
          document.getElementById('pAlert').classList.add('OutAlerta');
          
          //Fecha
          setTimeout(function()
          {
            document.getElementById('dPeriodo').classList.add('invisivel');
          }, 301);

          this.puxar(res);
        }
        else
        {
          this.temRelatorio = false;
          this.temNao = true;

          //Preparação
          document.getElementById('pFundo').classList.remove('InFundo');
          document.getElementById('pAlert').classList.remove('InAlerta');

          //Animação
          document.getElementById('pFundo').classList.add('OutFundo');
          document.getElementById('pAlert').classList.add('OutAlerta');
          
          //Fecha
          setTimeout(function()
          {
            document.getElementById('dPeriodo').classList.add('invisivel');
          }, 301);
        }

        document.getElementById('rMeio').classList.remove('foila');

        if(localStorage.getItem('emailDependente') != null)
        {
          document.getElementById('rMeio').classList.add('depMeio');
        }
      });

      this.fechar();
    }
  }
  //#endregion

  //#region Puxar relatório
  puxar(res)
  {
    this.lista = res;
    let i = 0;

    this.lista.forEach(l => {
      l['Dia'] = l['Dia'].substring(8, 10) + '/' + l['Dia'].substring(5, 7) + '/' + l['Dia'].substring(0, 4);
      l['Horas'] = l['Horas'].substring(0, 2) + 'h' + l['Horas'].substring(3, 5);

      if(i > 0)
      {
        if(l['Dia'] == this.diaAtual)
        {
          l['Dia'] = 'null';
        }
        else
        {
          this.diaAtual = l['Dia'];
        }
      }
      else
      {
        this.diaAtual = l['Dia'];
      }

      i++

      if(l['Situacao'] != 'Sintomas')
      {
        if(l['FormaFarmaceutica'] == '4')
        {
          l['Dosagem'] = Math.trunc(l['Dosagem']);
  
          if(l['Dosagem'] > 1)
          {
            l['Dosagem'] +=' cápsulas';
          }
          else
          {
            l['Dosagem'] +=' cápsula';
          }
        }
        else if(l['FormaFarmaceutica'] == '3')
        {
          l['Dosagem'] = Math.trunc(l['Dosagem']);
  
          if(l['Dosagem'] > 1)
          {
            l['Dosagem'] +=' comprimidos';
          }
          else
          {
            l['Dosagem'] +=' comprimido';
          }
        }
        else if(l['FormaFarmaceutica'] == '2')
        {
          l['Dosagem'] = Math.trunc(l['Dosagem']);
  
          if(l['Dosagem'] > 1)
          {
            l['Dosagem'] +=' gotas';
          }
          else
          {
            l['Dosagem'] +=' gota';
          }
        }
        else
        {
          l['Dosagem'] = l['Dosagem'].replace('.', ',') + 'ml';
        }
      }
    });
  }
  //#endregion

  //#region Navegação
  tutorial()
  {
    localStorage.setItem('RTutorial', 'rRelatorio');
    this.nav.rTutorial();
  }

  adicionarResponsavel()
  {
    localStorage.setItem('digitarResponsavel', 'rRelatorio');
    this.nav.digitarResponsavel();
  }

  adicionarSintomas()
  {
    localStorage.setItem('sintomas', 'rRelatorio');
    this.nav.adicionarSintomas();
  }

  historico()
  {
    this.nav.rHistorico();
  }

  removDependente()
  {
    this.nav.rDependente();
  }

  sair()
  {
    this.servidor.limpar();
  }

  home()
  {
    this.nav.rHome();
  }

  lembretes()
  {
    this.nav.rLembretes();
  }

  estoque()
  {
    this.nav.rEstoque();
  }

  dependentes()
  {
    this.nav.rDependentes();
  }

  relatorio()
  {
    this.nav.rRelatorio();
  }
  //#endregion

  //#region ViewWillEnter
  ionViewWillEnter()
  {
    document.getElementById('rMeio').classList.add('foila');
    document.getElementById('rMeio').classList.remove('depMeio');
    this.temNao = false;
    this.temRelatorio = false;

    //Verificar Login
    this.servidor.verificar();

    //Dependente
    if(localStorage.getItem('emailDependente') != null && localStorage.getItem('emailDependente') != '')
    {
      document.getElementById('rDep').classList.remove('invisivel');
      document.getElementById('rTabs').classList.add('invisivel');
      document.getElementById('rNav').classList.add('invisivel');
      document.getElementById('rContent').classList.add('baixoButton2');

      this.nomeDependente = localStorage.getItem('nomeDependente');
      this.email = localStorage.getItem('emailDependente');
    }
    else
    {
      document.getElementById('rDep').classList.add('invisivel');
      document.getElementById('rTabs').classList.remove('invisivel')
      document.getElementById('rNav').classList.remove('invisivel');
      document.getElementById('rContent').classList.remove('baixoButton2');

      this.email = localStorage.getItem('email');
    }
  }
  //#endregion
  
  ngOnInit(){}
}
