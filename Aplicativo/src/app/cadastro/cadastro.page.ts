import { Component, OnInit } from '@angular/core';
import { NavegationService } from '../services/navegation.service';
import { ServidorService } from '../services/servidor.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(private nav: NavegationService, private servidor: ServidorService) { }

  //#region Valores do Frontend
  public email: any;
  public senha: any;
  public confirmarSenha: any;

  public erro: any;
  public erroEmail: any;
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

  //#region Cadastar
  criar()
  {
    //Reset
    this.reset();

    //Variaveis
    let validacaoEmail = /\S+@\S+\.\S+/;

    //Verificação dos valores do input
    if(this.email == '' || this.senha == '' || this.confirmarSenha == '' || this.email == null || this.senha == null || this.confirmarSenha == null)
    {
      this.erro = 'Preencha todos os campos!'
      document.getElementById('erroCadastrar').classList.remove('invisivel');
    }
    else if (!validacaoEmail.test(this.email))
    {
      this.erroEmail = 'E-mail inválido, digite novamente!';
      document.getElementById('erroEmail').classList.remove('invisivel');
    }
    else if (this.senha.length < 5)
    {
      document.getElementById('erroSenha').classList.remove('invisivel');
    }
    else if (this.senha != this.confirmarSenha)
    {
      this.erro = 'As duas senhas não coincidem, digite novamente!';
      document.getElementById('erroCadastrar').classList.remove('invisivel');
    }
    else
    {
      //Valores que serão enviados
      let dados = 'phpEmail=' + this.email + '&phpSenha=' + this.senha;
      
      //Enviando ao PHP
      this.servidor.enviar('Cadastrar/main.php', dados).subscribe(res => {
        if (res[0]['Erro'] == false)
        {
          localStorage.setItem('email', this.email);
          this.nav.dadosAdicionais();
        }
        else
        {
          this.erroEmail = 'E-mail já utilizado, digite novamente!';
          document.getElementById('erroEmail').classList.remove('invisivel');
        }
      });
    }
  }
  //#endregion

  //#region Reset
  reset()
  {
    document.getElementById('erroCadastrar').classList.add('invisivel');
    document.getElementById('erroEmail').classList.add('invisivel');
    document.getElementById('erroSenha').classList.add('invisivel');
  }
  //#endregion

  //#region Navegação
  entrar()
  {
    this.nav.entrar();
  }
  //#endregion

  //#region OnInit
  ngOnInit()
  {
    //Reset
    this.reset
  }
  //#endregion
}
