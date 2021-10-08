import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { $ } from 'protractor';
import { ServidorService } from '../services/servidor.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.page.html',
  styleUrls: ['./entrar.page.scss'],
})
export class EntrarPage implements OnInit {

  constructor(public navCtrl: NavController, public servidor: ServidorService) { }

  //#region Valores dos iputs
  public email: any;
  public senha: any;

  public erro: any;
  //#endregion

  //#region Entrar
  entrar()
  {
    //Verificação dos valores do input
    if(this.email == '' || this.senha == '' || this.email == null || this.senha == null)
    {
      this.erro = 'Preencha todos os campos';
      document.getElementById('erroEntrar').classList.remove('invisivel');
    }
    else
    {
      //Valores que serão enviados
      let dados = {
        phpEmail : this.email,
        phpSenha : this.senha
      }

      //Enviando ao PHP
      this.servidor.ler('entrar.php/', dados).subscribe((res: any) =>{
        console.log(res);
      });

      //this.navCtrl.navigateForward('R/home');

      //this.navCtrl.navigateForward('D/home');
    }
  }
  //#endregion

  //#region Cadastrar
  cadastrar()
  {
    this.navCtrl.navigateForward('cadastro');
  }
  //#endregion

  ngOnInit() {
  }

}