import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router,  RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  toastrService = inject(ToastrService);
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
            if(respuesta.resultado ==="Algo esta mal"){
              this.toastrService.error("Error: Usuario o contraseña incorrectos");}else{
          const decoded = jwtHelperService.decodeToken(respuesta.datos);
            if(decoded === null){
              this.toastrService.error("Error: Usuario o contraseña incorrectos");
            }else{
              localStorage.setItem("Token",respuesta.datos);
              this.router.navigate(['/concurso']);
              this.toastrService.success("Inicio de sesión exitoso");
            }
          }
          });
        }      
      }else{
        this.toastrService.warning("Todas las casillas son requeridas");
      }
    }
}
