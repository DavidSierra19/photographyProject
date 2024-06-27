import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router,  RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {JwtHelperService} from "@auth0/angular-jwt"
import { CrearUsuario } from '../../interfaces/crear-usuario';
import { CrearUsuarioService } from '../../services/crear-usuario.service';
import { NavegacionComponent } from '../navegacion/navegacion.component';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, NavegacionComponent, RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  router = inject(Router);
  toastrService = inject(ToastrService);
  crearUsuarioService: CrearUsuarioService = inject(CrearUsuarioService);

  credencialesFormulario2 =new FormGroup({
    nombre: new FormControl("", Validators.required),
    apellido:new FormControl("", Validators.required),
    correo: new FormControl("", Validators.required),
    telefono:new FormControl("", Validators.required),
    ciudad: new FormControl("", Validators.required),
    contrasena: new FormControl("", Validators.required),
    confirmarContrasena:new FormControl("", Validators.required),
    fechaNacimiento: new FormControl("", Validators.required),
    genero: new FormControl("", Validators.required)    
  });

  registrarSubmit(){
    console.log("Formulario",this.credencialesFormulario2);
    if(this.credencialesFormulario2.valid){
      const nombre = this.credencialesFormulario2.value.nombre;
      const apellido = this.credencialesFormulario2.value.apellido;
      const correo = this.credencialesFormulario2.value.correo;
      const telefono = this.credencialesFormulario2.value.telefono;
      const ciudad = this.credencialesFormulario2.value.ciudad;
      const contrasena = this.credencialesFormulario2.value.contrasena;
      const confirmarContrasena = this.credencialesFormulario2.value.confirmarContrasena;
      const fechaNacimiento = this.credencialesFormulario2.value.fechaNacimiento;
      const genero = this.credencialesFormulario2.value.genero;

      if(contrasena === confirmarContrasena){
        if(typeof nombre === "string" && typeof apellido === "string" && typeof correo === "string" && typeof telefono === "number" && typeof ciudad === "string" && typeof contrasena === "string" && typeof confirmarContrasena === "string" && typeof genero === "string" && typeof fechaNacimiento === "string"){

          const crearUsuario: CrearUsuario ={
            nombre,
            apellido,
            correo,
            telefono,
            ciudad,
            contrasena,
            confirmarContrasena,
            fechaNacimiento,
            genero
            }
            this.crearUsuarioService.crearUsuario(crearUsuario).subscribe((respuesta: any)=>{
              localStorage.setItem("Nombre",nombre);
              this.router.navigate(['/inicio-seccion']);
              this.toastrService.success("Usuario creado exitosamente");
          });
  
        }else{
          this.toastrService.error("Error: Valores incorrecto");
        }
      }else{
        this.toastrService.error("Error: Las contraseñas son difernetes");
      }
    }else{
      this.toastrService.warning("Todas las casillas son requeridas");
    }
  }
}