import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router,  RouterLink } from '@angular/router';
import {JwtHelperService} from "@auth0/angular-jwt"
import { Credencial } from '../../interfaces/credencial';
import { LoginService } from '../../services/login.service';
import { NavegacionComponent } from '../navegacion/navegacion.component';



const jwtHelperService = new  JwtHelperService();

@Component({
  selector: 'app-inicio-seccion',
  standalone: true,
  imports: [ ReactiveFormsModule, NavegacionComponent, RouterLink],
  templateUrl: './inicio-seccion.component.html',
  styleUrl: './inicio-seccion.component.css'
})
export class InicioSeccionComponent {
  router = inject(Router);
  loginService: LoginService = inject(LoginService);

    credencialesFormulario =new FormGroup({
      usuario: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });

    handleSubmit(){
      if(this.credencialesFormulario.valid){
        const usuario = this.credencialesFormulario.value.usuario;
        const password = this.credencialesFormulario.value.password;
        if(typeof usuario === "string" && typeof password === "string"){
          const credencial: Credencial ={
            usuario,
            password
          }
          this.loginService.login(credencial).subscribe((respuesta: any)=>{
            console.log("Respuesta 1",respuesta)
            const decoded = jwtHelperService.decodeToken(respuesta.datos);
            console.log("Decodificacion",decoded)
            if(decoded === null){
              console.log("Error con credenciales")
            }else{
              localStorage.setItem("Token",respuesta.datos);
              this.router.navigateByUrl("/privada")
            }
            
          });
        }      
      }else{
        console.log("Error: Campos vacios");
      }
    }
}
