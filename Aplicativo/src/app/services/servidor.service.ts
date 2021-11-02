import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavegationService } from './navegation.service';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  private url_base: string = "https://medicame.000webhostapp.com/"

  constructor(private http: HttpClient, private nav: NavegationService) { }

  //#region Verificar Login
  verificar()
  {
    if(localStorage.getItem('email') == '' || localStorage.getItem('email') == null)
    {
      this.nav.firstView();
    }
  }
  //#endregion

  //#region Limpar login
  limpar()
  {
    localStorage.removeItem('email');
    localStorage.removeItem('emailDependente');
    localStorage.removeItem('nomeDependente');
    
    this.nav.firstView();
  }
  //#endregion

  //#region Banco de Dados
  enviar(url: any, data: any)
  {
    return this.http.get(`${this.url_base + url}?${data}`);
  }
  //#endregion
}
