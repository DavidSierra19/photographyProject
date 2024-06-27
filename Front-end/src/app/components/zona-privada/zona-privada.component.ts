import { Component, inject } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt"
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';
import { ConcursoService } from '../../services/concurso.service';

const jwtHelperService = new  JwtHelperService();

@Component({
  selector: 'app-zona-privada',
  standalone: true,
  imports: [],
  templateUrl: './zona-privada.component.html',
  styleUrl: './zona-privada.component.css'
})
export class ZonaPrivadaComponent {


loginService = inject(LoginService);
nombre: string = "";
datos: any[] = [];
concursoService = inject(ConcursoService);

obtenerTodosLosDatos(){
  this.concursoService.obtenerDatos().subscribe((respuesta: any)=>{
    if (respuesta.datos){
      this.datos = respuesta.datos;
      console.log("Estas aqui",this.datos);
    } else {
      console.log("ocurrio un error aqui");
    }
  });
}

  ngOnInit(){

    this.obtenerTodosLosDatos();
    const token: any = localStorage.getItem("Token");
    
    if(token){
      this.loginService.validarToken(token).subscribe((respuesta:any)=>{
      if(respuesta.resultado === "Excelente"){
        this.nombre = respuesta.datos.nombre;
      }else{
        this.loginService.cerrarSeccion();
      }
      })
    }else{
      console.log("No existe token")
      
    }
  }
}
