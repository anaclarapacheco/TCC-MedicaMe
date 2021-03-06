import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavegationService } from 'src/app/services/navegation.service';
import { ServidorService } from 'src/app/services/servidor.service';

@Component({
  selector: 'app-lembretes',
  templateUrl: './lembretes.page.html',
  styleUrls: ['./lembretes.page.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class LembretesPage implements OnInit {

  constructor(private nav: NavegationService, private servidor: ServidorService){}

  //#region Valores
  public nomeDependente: any;
  public email: any;

  lista: any = [];
  temLista: any;
  temListaNao: any;

  codigo: any;
  semData = ['Sem data prevista'];
  //#endregion

  //#region Abrir e Fechar o Menu
  open()
  {
    //Variaveis
    var menu = document.getElementById('mLembretes');
    var content = document.getElementById('lMenu');

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
    var menu = document.getElementById('mLembretes');
    var content = document.getElementById('lMenu');

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

  //#region Editar
  editar(codigo: any)
  {
    localStorage.setItem('agendamento', codigo);
    this.novoLembrete();
  }
  //#endregion

  //#region Remover Lembrete
  removerMedicamento(codigo: any)
  {
    document.getElementById('rMedicamento').classList.remove('invisivel');

    //Preparação
    document.getElementById('rFundo').classList.remove('OutFundo');
    document.getElementById('rAlert').classList.remove('OutAlerta');

    //Animação
    setTimeout(function()
    {
      document.getElementById('rAlert').classList.add('InAlerta');
      document.getElementById('rFundo').classList.add('InFundo');
    }, 100);

    this.codigo = codigo;
  }

  nao()
  {
    if(event.target == document.getElementById('rFundo') || event.target == document.getElementById('rBtn'))
    {
      //Preparação
      document.getElementById('rFundo').classList.remove('InFundo');
      document.getElementById('rAlert').classList.remove('InAlerta');

      //Animação
      document.getElementById('rFundo').classList.add('OutFundo');
      document.getElementById('rAlert').classList.add('OutAlerta');
      
      //Fecha
      setTimeout(function()
      {
        document.getElementById('rMedicamento').classList.add('invisivel');
      }, 301);
    }
  }

  sim()
  {
    //Deletar o medicamento
    let dados = 'phpEmail=' + this.email + '&phpCodigo=' + this.codigo;

    this.servidor.enviar('Responsavel/Lembretes/remover.php', dados).subscribe(res =>{});

    //Preparação
    document.getElementById('rFundo').classList.remove('InFundo');
    document.getElementById('rAlert').classList.remove('InFundo');

    //Animação
    document.getElementById('rFundo').classList.add('OutFundo');
    document.getElementById('rAlert').classList.add('OutAlerta');
    
    //Fecha
    setTimeout(function()
    {
      document.getElementById('rMedicamento').classList.add('invisivel');
    }, 301);

    //Recaregar lembretes
    this.listalembretes();
  }
  //#endregion

  //#region Puxar Lembretes
  listalembretes()
  {
    let dados = 'phpEmail=' + this.email;

    this.servidor.enviar('Responsavel/Lembretes/main.php', dados).subscribe(res => {
      if(res[0]['Erro'] == true)
      {
        this.temLista = false;
        this.temListaNao = true;
      }
      else
      {
        this.lista = res;
        this.temLista = true;
        this.temListaNao = false;
      }
    });
  }
  //#endregion

  //#region Navegação
  novoLembrete()
  {
    this.nav.rNovoLembrete();
  }

  tutorial()
  {
    localStorage.setItem('RTutorial', 'rLembretes');
    this.nav.rTutorial();
  }

  adicionarResponsavel()
  {
    localStorage.setItem('digitarResponsavel', 'rLembretes');
    this.nav.digitarResponsavel();
  }

  adicionarSintomas()
  {
    localStorage.setItem('sintomas', 'rLembretes');
    this.nav.adicionarSintomas();
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
    //Verificar Login
    this.servidor.verificar();

    //Dependente
    if(localStorage.getItem('emailDependente') != null && localStorage.getItem('emailDependente') != '')
    {
      document.getElementById('lDep').classList.remove('invisivel');
      document.getElementById('lMeio').classList.add('depMeio');
      document.getElementById('lTabs').classList.add('invisivel');
      document.getElementById('lNav').classList.add('invisivel');
      document.getElementById('lButton').classList.add('baixo');
      document.getElementById('lContent').classList.add('baixoButton');

      this.nomeDependente = localStorage.getItem('nomeDependente');
      this.email = localStorage.getItem('emailDependente');
    }
    else
    {
      document.getElementById('lDep').classList.add('invisivel');
      document.getElementById('lMeio').classList.remove('depMeio');
      document.getElementById('lTabs').classList.remove('invisivel');
      document.getElementById('lNav').classList.remove('invisivel');
      document.getElementById('lButton').classList.remove('baixo');
      document.getElementById('lContent').classList.remove('baixoButton');

      this.email = localStorage.getItem('email');
    }

    //Puxar lista de lembretes
    this.listalembretes();
  }
  //#endregion

  ngOnInit(){}
}
