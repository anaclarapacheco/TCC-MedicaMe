import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.page.html',
  styleUrls: ['./entrar.page.scss'],
})
export class EntrarPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  entrar()
  {
    //Verificar se o usuário existe e ver se é Dependete ou Responsável
    
    this.navCtrl.navigateForward('R/home');

    //this.navCtrl.navigateForward('D/home');
  }

  cadastrar()
  {
    this.navCtrl.navigateForward('cadastro');
  }

  ngOnInit() {
  }

}