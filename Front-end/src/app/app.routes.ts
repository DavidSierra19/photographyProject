import { NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { activateGuard } from './guards/activate.guard';
import { InicioComponent } from './components/inicio/inicio.component';
import { InicioSeccionComponent } from './components/inicio-seccion/inicio-seccion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { ZonaPrivadaComponent } from './components/zona-privada/zona-privada.component';
import { ParticiparComponent } from './components/participar/participar.component';
import { ServiciosComponent } from './components/servicios/servicios.component';


export const routes: Routes = [
    {path: "inicio",title:"Home", component: InicioComponent},
    {path: "inicio-seccion",title:"Inicio-Seccion", component: InicioSeccionComponent},
    {path: "registro",title:"Registro", component: RegistroComponent},
    {path: "servicios",title:"Servicios", component: ServiciosComponent},
    {path: "incribirse",title:"Incribirse", component: ParticiparComponent, canActivate: [activateGuard]},
    {path: "concurso",title:"Concurso", component: ZonaPrivadaComponent, canActivate: [activateGuard]},
    {path: "", redirectTo: "inicio", pathMatch: "full"},
    {path: "**", title: "404 | Pagina no encontrada", component: PaginaNoEncontradaComponent}
   ];

   @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
   })
    export class AppRoutingModule { }