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
      document.getElementById('rDep').classList.remove('invisivel');
      document.getElementById('rMeio').classList.add('depMeio');
      document.getElementById('rTabs').classList.add('invisivel');
      document.getElementById('rNav').classList.add('invisivel');
      document.getElementById('rContent').classList.add('baixoButton2');

      this.nomeDependente = localStorage.getItem('nomeDependente');
      this.email = localStorage.getItem('emailDependente');
    }
    else
    {
      document.getElementById('rDep').classList.add('invisivel');
      document.getElementById('rMeio').classList.remove('depMeio');
      document.getElementById('rTabs').classList.remove('invisivel');
      document.getElementById('rNav').classList.remove('invisivel');
      document.getElementById('rContent').classList.remove('baixoButton2');

      this.email = localStorage.getItem('email');
    }
  }
  //#endregion
  
  ngOnInit(){}
}
