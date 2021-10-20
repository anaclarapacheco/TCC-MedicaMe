import { Component, OnInit } from '@angular/core';
import { NavegationService } from '../services/navegation.service';
import { ServidorService } from '../services/servidor.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.page.html',
  styleUrls: ['./entrar.page.scss'],
})
export class EntrarPage implements OnInit {

  constructor(public nav: NavegationService, public servidor: ServidorService) { }

  //#region Valores dos iputs
  public email: any;
  public senha: any;

  public erro: any;
  //#endregion

  //#region Entrar
  entrar()
  {
    //Reset
    document.getElementById('erroEntrar').classList.add('invisivel');

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
        phpEmail: this.email,
        phpSenha: this.senha,
      }    

      //Enviando ao PHP
      this.servidor.gravar('entrar.php/', dados).subscribe((res: any) => {
        //Validando valores
        console.log(res);
        
        if (res[0].Erro == 'false')
        {
          //Descobrindo qual é o Tipo do Usuário
          switch (res[0].TipoUsuario)
          {
            case 'Responsavel':
              this.nav.rHome(dados[0].phpEmail);

              break;

            case 'Dependente':
              this.nav.dHome(dados[0].phpEmail);

              break;
          }
        }
        else
        {
          this.erro = 'E-mail ou Senha inválidos, digite novamente!';
          document.getElementById('erroEntrar').classList.remove('invisivel');
        }
      });
    }
  }
  //#endregion

  //#region Navegação
  cadastrar()
  {
    this.nav.cadastro();
  }
  //#endregion

  ngOnInit() {
  }
}