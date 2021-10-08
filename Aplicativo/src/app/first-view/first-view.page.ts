import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.page.html',
  styleUrls: ['./first-view.page.scss'],
})
export class FirstViewPage implements OnInit {

  constructor (public navCtrl: NavController) { }

  //#region Navegação
  criarConta()
  {
    this.navCtrl.navigateForward('cadastro');
  }

  entrar()
  {
    this.navCtrl.navigateForward('entrar');
  }
  //#endregion

  ngOnInit(){
  }
}
