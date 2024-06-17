import { Component, inject } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt"
import { LoginService } from '../../services/login.service';

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
  
  ngOnInit(){
    const token: any = localStorage.getItem("Token");
    if(token){
      this.loginService.validarToken(token).subscribe((respuesta:any)=>{
      console.log(respuesta)
      if(respuesta.resultado === "Excelente"){
        this.nombre = respuesta.datos.nombre;
      }else{
        console.log("No valido Token")
      }
      })
    }else{
      console.log("No existe token")
    }
  }
}
