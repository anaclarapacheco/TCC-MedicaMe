import { Component, OnInit } from '@angular/core';
import { NavegationService } from '../services/navegation.service';
import { ServidorService } from '../services/servidor.service';

@Component({
  selector: 'app-digitar-responsavel',
  templateUrl: './digitar-responsavel.page.html',
  styleUrls: ['./digitar-responsavel.page.scss'],
})
export class DigitarResponsavelPage implements OnInit {

  constructor(private nav: NavegationService, private servidor: ServidorService){}

  //#region Valores do Frontend
  public email: any;

  public erro: any;
  //#endregion

  //#region Adicionar responsavel
  registrar()
  {
    //Reset
    this.reset();

    //Variaveis
    let validacaoEmail = /\S+@\S+\.\S+/;

    //Verificação dos valores do input
    if(this.email == '' || this.email == null)
    {
      this.erro = 'Preencha todos os campos!';
      document.getElementById('erroDigitarResponsavel').classList.remove('invisivel');
    }
    else if (!validacaoEmail.test(this.email))
    {
      this.erro = 'E-mail inválido, digite novamente!';
      document.getElementById('erroDigitarResponsavel').classList.remove('invisivel');
    }
    else if (this.email == localStorage.getItem('email'))
    {
      this.erro = 'Digite o e-mail da pessoa que será responsavel por você, não o seu próprio e-mail!';
      document.getElementById('erroDigitarResponsavel').classList.remove('invisivel');
    }
    else
    {
      //Valores que serão enviados
      let dados = 'phpEmailResponsavel=' + this.email + '&phpEmailDependente=' + localStorage.getItem('email');

      //Enviando ao PHP
      this.servidor.enviar('Digitar Responsavel/main.php', dados).subscribe(res => {
        if(res[0]['Erro'] == false)
        {
          localStorage.setItem('DTutorial', 'dHome');
          localStorage.removeItem('digitarResponsavel');
          this.nav.dTutorial();
        }
        else if(res[0]['Erro'] == 'Dependente')
        {
          this.erro = 'O e-mail inserido é de um dependente portanto não pode ser utilizado como responsável, digite novamente!';
          document.getElementById('erroDigitarResponsavel').classList.remove('invisivel');
        }
        else
        {
          this.erro = 'O e-mail inserido não está cadastrado, digite um e-mail que já possui conta no MedicaMe ou crie uma ';
          document.getElementById('erroDigitarResponsavel').classList.remove('invisivel');
          document.getElementById('erroEmailInexistente').classList.remove('invisivel');
        }
      });
     }
  }
  //#endregion

  //#region Reset
  reset()
  {
    document.getElementById('erroDigitarResponsavel').classList.add('invisivel');
    document.getElementById('erroEmailInexistente').classList.add('invisivel');
  }
  //#endregion

  //#region Navegação
  criar()
  {
    localStorage.setItem('digitarResponsavel', 'cadastrar');
    this.voltar();
  }

  voltar()
  {
    switch (localStorage.getItem('digitarResponsavel')) {
      case 'dependente':
        this.nav.dependente();
        break;

      case 'cadastrar':
        this.nav.cadastro();
        break;

      case 'rHome':
        this.nav.rHome();
        break;

      case 'rLembretes':
        this.nav.rLembretes();
        break;
      
      case 'rEstoque':
        this.nav.rEstoque();
        break;

      case 'rDependentes':
        this.nav.rDependentes();
        break;

      case 'rRelatorio':
        this.nav.rRelatorio();
        break;
    }

    localStorage.removeItem('digitarResponsavel');
  }
  //#endregion

  //#region OnInit
  ngOnInit()
  {
    //Reset
    this.reset();

    //Verificar Login
    this.servidor.verificar();
  }
  //#endregion
}
