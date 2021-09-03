import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dados-adicionais',
  templateUrl: './dados-adicionais.page.html',
  styleUrls: ['./dados-adicionais.page.scss'],
})
export class DadosAdicionaisPage implements OnInit {

  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customPickerOptions: any;

  constructor(public navCtrl: NavController) {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

  continuar()
  {
    //Verificar se os input estão vazios e dps inserir eles no banco
    
    this.navCtrl.navigateForward('dependente');
  }

  deixar()
  {
    this.navCtrl.navigateForward('dependente');
  }

  ngOnInit() {
  }

}
