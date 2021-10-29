import { Component, OnInit } from '@angular/core';
import { NavegationService } from '../services/navegation.service';
import { ServidorService } from '../services/servidor.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(public nav: NavegationService, public servidor: ServidorService) { }

  //#region Valores do Frontend
  public email: any;
  public senha: any;
  public confirmarSenha: any;

  public erro: any;
  //#endregion

  //#region Cadastar
  criar()
  {
    //Reset
    document.getElementById('erroCadastrar').classList.add('invisivel');
    document.getElementById('erroEmail').classList.add('invisivel');
    document.getElementById('erroSenha').classList.add('invisivel');

    //Variaveis
    let validacaoEmail = /\S+@\S+\.\S+/;

    //Verificação dos valores do input
    if(this.email == '' || this.senha == '' || this.confirmarSenha == '' || this.email == null || this.senha == null || this.confirmarSenha == null)
    {
      this.erro = 'Preencha todos os campos!';
      document.getElementById('erroCadastrar').classList.remove('invisivel');
    }
    else if (!validacaoEmail.test(this.email))
    {
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
      this.servidor.enviar('cadastrar.php', dados).subscribe(res => {
        if (res == false)
        {
          localStorage.setItem('locEmail', this.email);
          localStorage.setItem('locNavDadosAdicionais', 'dependente');
          this.nav.dadosAdicionais();
        }
        else
        {
          this.erro = 'E-mail ou Senha inválidos, digite novamente!';
          document.getElementById('erroCadastar').classList.remove('invisivel');
        }
      });
    }
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
    document.getElementById('erroCadastrar').classList.add('invisivel');
    document.getElementById('erroEmail').classList.add('invisivel');
    document.getElementById('erroSenha').classList.add('invisivel');
  }
  //#endregion
}
