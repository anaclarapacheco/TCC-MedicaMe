import { Component, OnInit } from '@angular/core';
import { NavegationService } from '../services/navegation.service';
import { ServidorService } from '../services/servidor.service';

@Component({
  selector: 'app-dados-adicionais',
  templateUrl: './dados-adicionais.page.html',
  styleUrls: ['./dados-adicionais.page.scss'],
})
export class DadosAdicionaisPage implements OnInit {


  //#region Constructor
  constructor(public nav: NavegationService, public servidor: ServidorService)
  {    
    //Adicionar valor máximo e minimo no ion-datetime
    let nowData = new Date();

    this.maximo = nowData.getFullYear() + '-' + String(nowData.getMonth() + 1).padStart(2, '0') + '-' + String(nowData.getDate()).padStart(2, '0');
    this.minimo = String(nowData.getFullYear() - 100) + '-12-31';
  }
  //#endregion

  //#region Valores
  public nome: any;
  public data: any;

  public maximo: any;
  public minimo: any;
  //#endregion

  //#region Adicionar dados adicionais
  adicionar()
  {
    //Reset
    this.reset();

    //Verificação dos valores do input
    if(this.nome == '' || this.data == '' || this.nome == null || this.data == null)
    {
      document.getElementById('erroDadosAdicionais').classList.remove('invisivel');
    }
    else
    {
      //Valores que serão enviados
      let dados = 'phpNome=' + this.nome + '&phpData=' + this.data.substring(0, 10) + '&phpEmail=' + localStorage.getItem('email');

      //Enviando ao PHP
      this.servidor.enviar('Dados Adicionais/main.php', dados).subscribe(res => {
        if (res[0]['Erro'] == false)
        {
          this.nav.dependente();
        }
      });
     }
  }
  //#endregion

  //#region Reset
  reset()
  {
    document.getElementById('erroDadosAdicionais').classList.add('invisivel');
  }
  //#endregion

  //#region ViewWillEnter
  ionViewWillEnter()
  {
    //Reset
    this.reset();

    //Verificar Login
    this.servidor.verificar();
  }
  //#endregion

  ngOnInit(){}
}
