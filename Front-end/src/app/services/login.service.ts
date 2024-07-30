import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Credencial } from '../interfaces/credencial';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {}
  httpClient = inject(HttpClient);
  toastrService = inject(ToastrService);
  router = inject(Router);

  API_URL = "http://3.15.160.20:3000/inicio-seccion";
  
  login(credencial: Credencial){
    return this.httpClient.post(this.API_URL, credencial);
  }
  validarToken(token: string){
    return this.httpClient.get(`${this.API_URL}/${token}`)

  }
  logeado(){
    const token = localStorage.getItem('Token');
    if(token){
      return true;
    }else{
      return false;
    }
  }

  cerrarSeccion(){
    localStorage.removeItem('Token');
    this.router.navigate(['/inicio']);
    this.toastrService.info("Se ha cerrado la sesión");
  }
   
}
