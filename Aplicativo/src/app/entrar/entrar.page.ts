import { Component, OnInit } from '@angular/core';
import { NavegationService } from '../services/navegation.service';
import { ServidorService } from '../services/servidor.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.page.html',
  styleUrls: ['./entrar.page.scss'],
})
export class EntrarPage implements OnInit {

  constructor(private nav: NavegationService, private servidor: ServidorService) { }

  //#region Valores do Frontend
  public email: any;
  public senha: any;

  public erro: any;
  //#endregion
  
  //#region Olho
  olho(input)
  {
    if(document.getElementById(input).getAttribute('type') == 'password')
    {
      document.getElementById(input).setAttribute('type', 'text');
      document.getElementById(input + 'SVG2').classList.add('invisivel');
      document.getElementById(input + 'SVG1').classList.remove('invisivel');
    }
    else
    {
      document.getElementById(input).setAttribute('type', 'password');
      document.getElementById(input + 'SVG1').classList.add('invisivel');
      document.getElementById(input + 'SVG2').classList.remove('invisivel');
    }
  }
  //#endregion

  //#region Entrar
  entrar()
  {
    //Reset
    this.reset();

    //Verificação dos valores do input
    if(this.email == '' || this.senha == '' || this.email == null || this.senha == null)
    {
      this.erro = 'Preencha todos os campos!';
      document.getElementById('erroEntrar').classList.remove('invisivel');
    }
    else
    {
      //Valores que serão enviados
      let dados = 'phpEmail=' + this.email + '&phpSenha=' + this.senha;
      
      //Enviando ao PHP
      this.servidor.enviar('Entrar/main.php', dados).subscribe(res => {
        if (res[0]['Erro'] == false)
        {
          //Descobrindo qual é o Tipo do Usuário
          switch (res[0]['Tipo Usuario'])
          {
            case 'Responsavel':
              this.nav.rHome();
              break;

            case 'Dependente':
              this.nav.dHome();
              break;
          }

          localStorage.setItem('email', this.email);
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

  //#region Reset
  reset()
  {
    document.getElementById('erroEntrar').classList.add('invisivel');
  }
  //#endregion

  //#region Navegação
  cadastrar()
  {
    this.nav.cadastro();
  }
  //#endregion

  //#region OnInit
  ngOnInit()
  {
    //Reset
    this.reset();
  }
  //#endregion
}
