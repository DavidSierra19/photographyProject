import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router,  RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrearParticipante } from '../../interfaces/concurso';
import { ConcursoService } from '../../services/concurso.service';
import { NavegacionComponent } from '../navegacion/navegacion.component';

@Component({
  selector: 'app-participar',
  standalone: true,
  imports: [ReactiveFormsModule, NavegacionComponent, RouterLink],
  templateUrl: './participar.component.html',
  styleUrl: './participar.component.css'
})
export class ParticiparComponent {

  router = inject(Router);
  toastrService = inject(ToastrService);
  concursoService: ConcursoService = inject(ConcursoService);

  credencialesFormulario3 =new FormGroup({
    correo: new FormControl("", Validators.required),
    titulo:new FormControl("", Validators.required),
    aceptacion: new FormControl("", Validators.required),
    foto: new FormControl("", Validators.required),
    descripcion: new FormControl("", Validators.required),
  });

  registrarSubmit(){
    console.log("Formulario",this.credencialesFormulario3);
    if(this.credencialesFormulario3.valid){
      const correo = this.credencialesFormulario3.value.correo;
      const titulo = this.credencialesFormulario3.value.titulo;
      const aceptacion = this.credencialesFormulario3.value.titulo;
      const foto = this.credencialesFormulario3.value.foto;
      const descripcion = this.credencialesFormulario3.value.descripcion;
      
        if(typeof correo === "string" && typeof titulo === "string" && typeof descripcion === "string" && typeof foto === "string" ){

          const crearParticipante: CrearParticipante ={
            correo,
            titulo,
            foto,
            descripcion,
            }
            this.concursoService.crearParticipante(crearParticipante).subscribe((respuesta: any)=>{
              localStorage.setItem("Nombre",correo);
              this.router.navigate(['/concurso']);
              this.toastrService.success("Incrito a concurso exitosamente");
          });
  
        }else{
          this.toastrService.error("Error: Valores incorrecto");
          console.log(typeof(aceptacion));
        }
    }else{
      this.toastrService.warning("Todas las casillas son requeridas");
    }
  }
}
