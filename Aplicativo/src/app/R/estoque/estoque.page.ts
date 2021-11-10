import { Component, OnInit } from '@angular/core';
import { NavegationService } from 'src/app/services/navegation.service';
import { ServidorService } from 'src/app/services/servidor.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.page.html',
  styleUrls: ['./estoque.page.scss'],
})
export class EstoquePage implements OnInit {

  public editarQuantidade: number;

  constructor(private nav: NavegationService, private servidor: ServidorService) {}
  
  //#region Valores
  public nomeDependente: any;
  public email: any;
  //#endregion

  //#region Abrir e Fechar o Menu
  open()
  {
    //Variaveis
    var menu = document.getElementById('mEstoque');
    var content = document.getElementById('eMenu');

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
    var menu = document.getElementById('mEstoque');
    var content = document.getElementById('eMenu');

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
  carregarEstoque()
  {
    //
  }
  //#endregion

  //#region Editar quantidade do medicamento
  fechar()
  {    
    if(event.target == document.getElementById('fecha'))
    {
      var estoque = document.getElementById('eQuantidade');
      estoque.classList.add('invisivel');
    }
  }

  editar(quantidade: any)
  {
    this.editarQuantidade = quantidade;

    var estoque = document.getElementById('eQuantidade');
    estoque.classList.remove('invisivel');
  }

  menos()
  {
    if(this.editarQuantidade != 0)
    {
      this.editarQuantidade--;
    }
  }

  mais()
  {
    this.editarQuantidade++;
  }
  //#endregion

  //#region Navegação
  tutorial()
  {
    localStorage.setItem('RTutorial', 'rEstoque');
    this.nav.rTutorial();
  }

  dadosAdicionais()
  {
    localStorage.setItem('dadosAdicionais', 'rEstoque');
    this.nav.dadosAdicionais();
  }

  adicionarResponsavel()
  {
    localStorage.setItem('digitarResponsavel', 'rEstoque');
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

    //Dependente
    if(localStorage.getItem('emailDependente') != null && localStorage.getItem('emailDependente') != '')
    {
      document.getElementById('eDep').classList.remove('invisivel');
      document.getElementById('eMeio').classList.add('depMeio');

      this.nomeDependente = localStorage.getItem('nomeDependente');
      this.email = localStorage.getItem('emailDependente');
    }
    else
    {
      document.getElementById('eDep').classList.add('invisivel');
      document.getElementById('eMeio').classList.remove('depMeio');

      this.email = localStorage.getItem('email');
    }

    //Puxar lista de lembretes
    this.carregarEstoque();
  }
  //#endregion
  
  ngOnInit() {
  }
}
