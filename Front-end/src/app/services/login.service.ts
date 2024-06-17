import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credencial } from '../interfaces/credencial';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {}
  httpClient = inject(HttpClient);

  API_URL = "http://localhost:3000/inicio-seccion";
  login(credencial: Credencial){
    return this.httpClient.post(this.API_URL, credencial);
  }
  validarToken(token: string){
    return this.httpClient.get(`${this.API_URL}/${token}`)

  }
}
