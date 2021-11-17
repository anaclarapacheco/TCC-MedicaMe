import { Component, OnInit } from '@angular/core';
import { NavegationService } from 'src/app/services/navegation.service';
import { ServidorService } from 'src/app/services/servidor.service';

@Component({
  selector: 'app-dependentes',
  templateUrl: './dependentes.page.html',
  styleUrls: ['./dependentes.page.scss'],
})
export class DependentesPage implements OnInit {

  constructor(private nav: NavegationService, private servidor: ServidorService) {}
  
  //#region Valores
  public email: any;

  public dependente: any = [];
  public temLista: any = false;
  public temListaNao: any = false;

  public idade = [null];
  //#endregion

  //#region Abrir e Fechar o Menu
  open()
  {
    //Variaveis
    var menu = document.getElementById('mDependentes');
    var content = document.getElementById('dMenu');

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
    var menu = document.getElementById('mDependentes');
    var content = document.getElementById('dMenu');

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

  //#region Carregar o Estoque
  carregarDependentes()
  {
    let dados = 'phpEmail=' + localStorage.getItem('email');

    this.servidor.enviar('Responsavel/Dependentes/main.php', dados).subscribe(res =>{
      if(res[0].Erro != true)
      {
        this.temLista = true;
        this.temListaNao = false;
        this.dependente = res;
      }
      else
      {
        this.temLista = false;
        this.temListaNao = true;
      }
    });
  }
  //#endregion
  
  //#region Remover Dependente
  removerDependente(email: any)
  {
    document.getElementById('rDependentes').classList.remove('invisivel');

    //Preparação
    document.getElementById('dFundo').classList.remove('OutFundo');
    document.getElementById('dAlert').classList.remove('OutAlerta');

    //Animação
    setTimeout(function()
    {
      document.getElementById('dAlert').classList.add('InAlerta');
      document.getElementById('dFundo').classList.add('InFundo');
    }, 100);

    this.email = email;
  }

  nao()
  {
    if(event.target == document.getElementById('dFundo') || event.target == document.getElementById('dBtn'))
    {
      //Preparação
      document.getElementById('dFundo').classList.remove('InFundo');
      document.getElementById('dAlert').classList.remove('InAlerta');

      //Animação
      document.getElementById('dFundo').classList.add('OutFundo');
      document.getElementById('dAlert').classList.add('OutAlerta');
      
      //Fecha
      setTimeout(function()
      {
        document.getElementById('rDependentes').classList.add('invisivel');
      }, 301);
    }
  }

  sim()
  {
    //Remover o dependente
    let dados = 'phpEmail=' + this.email;

    this.servidor.enviar('Responsavel/Dependentes/remover.php', dados).subscribe(res =>{
      if(res == 'Removeu')
      {
        //Preparação
        document.getElementById('dFundo').classList.remove('InFundo');
        document.getElementById('dAlert').classList.remove('InFundo');

        //Animação
        document.getElementById('dFundo').classList.add('OutFundo');
        document.getElementById('dAlert').classList.add('OutAlerta');
        
        //Fecha
        setTimeout(function()
        {
          document.getElementById('rDependentes').classList.add('invisivel');
        }, 301);

        //Recaregar lembretes
        this.carregarDependentes();
      }
    });
  }
  //#endregion

  //#region Editar Dependente
  editarDependente(email, nome)
  {
    localStorage.setItem('emailDependente', email);

    if(nome == null)
    {
      localStorage.setItem('nomeDependente', email);
    }
    else
    {
      localStorage.setItem('nomeDependente', nome);
    }

    this.nav.rDependente();
  }
  //#endregion

  //#region Adicionar Dependente
  novoDependente()
  {
    document.getElementById('aDependentes').classList.remove('invisivel');

    //Preparação
    document.getElementById('entendi').classList.remove('OutFundo');
    document.getElementById('entendiAlert').classList.remove('OutAlerta');

    //Animação
    setTimeout(function()
    {
      document.getElementById('entendiAlert').classList.add('InAlerta');
      document.getElementById('entendi').classList.add('InFundo');
    }, 100);
  }

  entendi()
  {
    if(event.target == document.getElementById('entendi') || event.target == document.getElementById('entendiBtn'))
    {
      //Preparação
      document.getElementById('entendi').classList.remove('InFundo');
      document.getElementById('entendiAlert').classList.remove('InAlerta');

      //Animação
      document.getElementById('entendi').classList.add('OutFundo');
      document.getElementById('entendiAlert').classList.add('OutAlerta');
      
      //Fecha
      setTimeout(function()
      {
        document.getElementById('aDependentes').classList.add('invisivel');
      }, 301);
    }
  }
  //#endregion 

  //#region Navegação
  tutorial()
  {
    localStorage.setItem('RTutorial', 'rDependentes');
    this.nav.rTutorial();
  }

  dadosAdicionais()
  {
    localStorage.setItem('dadosAdicionais', 'rDependentes');
    this.nav.dadosAdicionais();
  }

  adicionarResponsavel()
  {
    localStorage.setItem('digitarResponsavel', 'rDependentes');
    this.nav.digitarResponsavel();
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

    //Puxar lista de lembretes
    this.carregarDependentes();
  }
  //#endregion
 
  ngOnInit() {
  }
}
