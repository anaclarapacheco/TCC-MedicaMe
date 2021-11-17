import { Component, OnInit } from '@angular/core';
import { NavegationService } from '../services/navegation.service';
import { ServidorService } from '../services/servidor.service';

@Component({
  selector: 'app-sintomas',
  templateUrl: './sintomas.page.html',
  styleUrls: ['./sintomas.page.scss'],
})
export class SintomasPage implements OnInit {

  constructor(private servidor: ServidorService, private nav: NavegationService) { }

  //#region Valores
  public email: any;
  public sintoma: any;
  //#endregion

  //#region Adicionar Sintoma
  adicionarSintoma()
  {
    document.getElementById('erroSintoma').classList.add('invisivel');

    if(this.sintoma == null || this.sintoma == '')
    {
      document.getElementById('erroSintoma').classList.remove('invisivel');
    }
    else
    {
      let dados = 'phpEmail=' + this.email + '&phpSintoma=' + this.sintoma;

      this.servidor.enviar('Sintomas/main.php', dados).subscribe(res =>{
        if(res[0]['Erro'] == false)
        {
          this.cancelar();
        }
      });
    }
  }
  //#endregion

  //#region Navegação
  cancelar()
  {
    switch (localStorage.getItem('sintomas')) {
      case 'dHome':
        this.nav.dHome();
        break;
    }

    localStorage.removeItem('sintomas');
  }
  //#endregion

  //#region ViewWillEnter
  ionViewWillEnter()
  {
    //Verificar Login
    this.servidor.verificar();

    //Dependente
    if(localStorage.getItem('emailDependente') != null && localStorage.getItem('emailDependente') != '')
    {
      this.email = localStorage.getItem('emailDependente');
    }
    else
    {
      this.email = localStorage.getItem('email');
    }
  }
  //#endregion

  ngOnInit(){}
}
