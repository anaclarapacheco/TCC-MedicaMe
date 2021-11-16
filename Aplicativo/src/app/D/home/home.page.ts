import { Component, OnInit } from '@angular/core';
import { NavegationService } from 'src/app/services/navegation.service';
import { ServidorService } from 'src/app/services/servidor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private nav: NavegationService, private servidor: ServidorService){}

  //#region Valores do FrontEnd

  //#endregion

  //#region Abrir e Fechar o Menu
  open()
  {
    //Variaveis
    var menu = document.getElementById('dHome');
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
    var menu = document.getElementById('dHome');
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

  //#region Navegação
  tutorial()
  {
    localStorage.setItem('DTutorial', 'dHome');
    this.nav.dTutorial();
  }

  dadosAdicionais()
  {
    localStorage.setItem('dadosAdicionais', 'dHome');
    this.nav.dadosAdicionais();
  }

  sair()
  {
    this.servidor.limpar();
  }

  sintomas()
  {
    localStorage.setItem('sintomas', 'dHome');
    //this.nav.adicionarSintomas();
  }
  //#endregion

  //#region ViewWillEnter
  ionViewWillEnter()
  {
    //Verificar Login
    this.servidor.verificar();

    //Carregar medicamentos
    
  }
  //#endregion

  ngOnInit() {
  }
}
