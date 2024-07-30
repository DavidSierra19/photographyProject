import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrearParticipante } from '../interfaces/concurso';


@Injectable({
  providedIn: 'root'
})
export class ConcursoService {

  constructor() { }

  API_URL: string = "http://3.15.160.20:3000/concurso"
  
  httpClient = inject(HttpClient);

  obtenerDatos(){
    return this.httpClient.get(this.API_URL)
  }
  crearParticipante(crearParticipante: CrearParticipante){
    return this.httpClient.post(this.API_URL, crearParticipante);
  }
}
