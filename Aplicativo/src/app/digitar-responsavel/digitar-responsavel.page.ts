import { Component, OnInit } from '@angular/core';
import { NavegationService } from '../services/navegation.service';
import { ServidorService } from '../services/servidor.service';

@Component({
  selector: 'app-digitar-responsavel',
  templateUrl: './digitar-responsavel.page.html',
  styleUrls: ['./digitar-responsavel.page.scss'],
})
export class DigitarResponsavelPage implements OnInit {

  //#region Constructor
  constructor(public nav: NavegationService, public servidor: ServidorService)
  {
    this.nav.verificar();
  }
  //#endregion

  //#region Valores do Frontend
  public email: any;

  public erro: any;
  //#endregion

  //#region Adicionar dados adicionais
  registrar()
  {
    //Reset
    document.getElementById('erroDigitarResponsavel').classList.add('invisivel');

    //Verificação dos valores do input
    if(this.email == '' || this.email == null)
    {
      this.erro = 'Preencha todos os campos!';
      document.getElementById('erroDigitarResponsavel').classList.remove('invisivel');
    }
    else
    {
      //Valores que serão enviados
      let dados = 'phpEmailResponsavel=' + this.email + '&phpEmailDependente=' + localStorage.getItem('locEmail');

      //Enviando ao PHP
      this.servidor.enviar('digitarResponsavel.php', dados).subscribe(res => {
        if(res == false)
        {
          localStorage.setItem('locNavDTutorial', 'dHome');
          this.nav.dTutorial();
        }
        else
        {
          this.erro = 'Preencha todos os campos!';
          document.getElementById('erroDigitarResponsavel').classList.remove('invisivel');
        }
      });
     }
  }
  //#endregion

  //#region Navegação
  voltar()
  {
    switch (localStorage.getItem('locNavDigitarResponsavel')) {
      case 'dependente':
        this.nav.dependente();
        break;
    }
  }
  //#endregion

  ngOnInit() {
  }
}
