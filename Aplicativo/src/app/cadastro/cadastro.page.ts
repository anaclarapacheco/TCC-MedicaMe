import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  criar()
  {
    this.navCtrl.navigateForward('dados-adicionais');
  }

  entrarGoogle()
  {
    //Coisas da Api
  }

  entrar()
  {
    this.navCtrl.navigateForward('entrar');
  }

  ngOnInit() {
  }

}
