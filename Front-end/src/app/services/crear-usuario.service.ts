import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {CrearUsuario} from '../interfaces/crear-usuario'
import { Credencial } from '../interfaces/credencial';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CrearUsuarioService {
  
  constructor() { }
  httpClient = inject(HttpClient);
  toastrService = inject(ToastrService);
  router = inject(Router);

  API_URL = "http://3.15.160.20:3000/usuarios";
  

  crearUsuario(crearUsuarios: CrearUsuario){
    return this.httpClient.post(this.API_URL, crearUsuarios);
  }
}
