import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.page.html',
  styleUrls: ['./estoque.page.scss'],
})
export class EstoquePage implements OnInit {

  public editarQuantidade: number;

  constructor(public navCtrl: NavController) {
    //this.carregarEstoque();
  }
  
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

  //#region Carregar o Estoque
  carregarEstoque()
  {
    //
  }
  //#endregion

  //#region Abrir e Fechar o Menu
  open()
  {
    var menu = document.getElementById('mEstoque');
    menu.classList.remove('invisivel');
  }

  close()
  {
    var menu = document.getElementById('mEstoque');
    menu.classList.add('invisivel');
  }
  //#endregion

  //#region SideMenu
  tutorial()
  {
    this.navCtrl.navigateForward('R/tutorial');
  }

  dadosAdicionais()
  {
    this.navCtrl.navigateForward('dados-adicionais');
  }

  adicionarResponsavel()
  {
    this.navCtrl.navigateForward('digitar-responsavel');
  }

  sair()
  {
    this.navCtrl.navigateForward('first-view');
  }
  //#endregion

  //#region Tabs
  home()
  {
    this.navCtrl.navigateForward('R/home');
  }
  
  lembretes()
  {
    this.navCtrl.navigateForward('R/lembretes');
  }

  dependentes()
  {
    this.navCtrl.navigateForward('R/dependentes');
  }

  relatorio()
  {
    this.navCtrl.navigateForward('R/relatorio');
  }
  //#endregion

  ngOnInit() {
  }
}
