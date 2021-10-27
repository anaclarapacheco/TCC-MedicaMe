import { Component, OnInit } from '@angular/core';
import { NavegationService } from '../services/navegation.service';
import { ServidorService } from '../services/servidor.service';

@Component({
  selector: 'app-dados-adicionais',
  templateUrl: './dados-adicionais.page.html',
  styleUrls: ['./dados-adicionais.page.scss'],
})
export class DadosAdicionaisPage implements OnInit {

  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customPickerOptions: any;

  //#region Constructor
  constructor(public nav: NavegationService, public servidor: ServidorService)
  {
    //Verificar Login
    this.nav.varificar();

    //Adicionar valor máximo e minimo no ion-datetime
    let nowData = new Date();

    this.maximo = nowData.getFullYear() + '-' + String(nowData.getMonth() + 1).padStart(2, '0') + '-' + String(nowData.getDate()).padStart(2, '0');
    this.minimo = String(nowData.getFullYear() - 100) + '-12-31';

    //Backend ion-date-picker
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
  //#endregion

  //#region Valores do Frontend
  public nome: any;
  public data: any;

  public maximo: any;
  public minimo: any;
  //#endregion

  //#region Adicionar dados adicionais
  adicionar()
  {
    //Reset
    document.getElementById('erroDadosAdicionais').classList.add('invisivel');

    //Verificação dos valores do input
    if(this.nome == '' || this.data == '' || this.nome == null || this.data == null)
    {
      document.getElementById('erroDadosAdicionais').classList.remove('invisivel');
    }
    else
    {
      //Valores que serão enviados
      let dados = 'phpNome=' + this.nome + '&phpData=' + this.data.substring(0, 10) + '&phpEmail=' + localStorage.getItem('locEmail');

      //Enviando ao PHP
      this.servidor.enviar('dadosAdicionais.php', dados).subscribe(res => {
        if (res == false)
        {
          localStorage.setItem('locNavDadosAdicionais', 'dependente');
          this.continuar();
        }
      });
     }
  }
  //#endregion

  //#region Navegação
  continuar()
  {
    switch (localStorage.getItem('locNavDadosAdicionais'))
    {
      case 'dependente':
        localStorage.removeItem('locNavDadosAdicionais');
        this.nav.dependente();
        
        break;

      default:
        localStorage.removeItem('locNavDadosAdicionais');
        this.nav.dependente();
        
        break;
    }
  }
  //#endregion

  //#region OnInit
  ngOnInit()
  {
    document.getElementById('erroDadosAdicionais').classList.add('invisivel');
  }
  //#endregion
}
