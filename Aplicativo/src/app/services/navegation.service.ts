import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NavegationService {

  constructor(public navCtrl: NavController) { }

  //#region Geral
  firstView()
  {
    this.navCtrl.navigateForward('first-view');
  }

  entrar()
  {
    this.navCtrl.navigateForward('entrar');
  }

  cadastro()
  {
    this.navCtrl.navigateForward('cadastro');
  }

  dadosAdicionais()
  {
    this.navCtrl.navigateForward('dados-adicionais');
  }

  dependente()
  {
    this.navCtrl.navigateForward('dependente');
  }

  digitarResponsavel()
  {
    this.navCtrl.navigateForward('digitar-responsavel');
  }

  adicionarSintomas()
  {
    this.navCtrl.navigateForward('sintomas');
  }
  //#endregion

  //#region Responsável
  rTutorial()
  {
    this.navCtrl.navigateForward('R/tutorial');
  }
  
  rHome()
  {
    this.navCtrl.navigateForward('R/home');
  }

  rLembretes()
  {
    this.navCtrl.navigateForward('R/lembretes');
  }

  rNovoLembrete()
  {
    this.navCtrl.navigateForward('R/novo-lembrete')
  }

  rEstoque()
  {
    this.navCtrl.navigateForward('R/estoque');
  }
  
  rDependentes()
  {
    this.navCtrl.navigateForward('R/dependentes');
  }

  rDependente()
  {
    this.navCtrl.navigateForward('R/dependente');
  }

  rRelatorio()
  {
    this.navCtrl.navigateForward('R/relatorio');
  }
  //#endregion

  //#region Dependete
  dTutorial()
  {
    this.navCtrl.navigateForward('D/tutorial');
  }
  
  dHome()
  {
    this.navCtrl.navigateForward('D/home');
  }
  //#endregion
}
