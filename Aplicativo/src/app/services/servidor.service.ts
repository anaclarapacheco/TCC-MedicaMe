import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  private url_base: string = "https://cors-anywhere.herokuapp.com/https://medicame.000webhostapp.com/"

  constructor(private http: HttpClient) { }

  enviar(url: any, data: any)
  {
    return this.http.get(`${this.url_base + url}?${data}`);
  }
}
