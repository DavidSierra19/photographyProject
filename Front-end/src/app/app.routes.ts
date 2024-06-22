import { NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { InicioSeccionComponent } from './components/inicio-seccion/inicio-seccion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { ZonaPrivadaComponent } from './components/zona-privada/zona-privada.component';

export const routes: Routes = [
    {path: "inicio",title:"Index", component: InicioComponent},
    {path: "inicio-seccion",title:"Inicio-Seccion", component: InicioSeccionComponent},
    {path: "registro",title:"Registro", component: RegistroComponent},
    {path: "privada",title:"Zona Privada", component: ZonaPrivadaComponent},
    {path: "", redirectTo: "inicio", pathMatch: "full"},
    {path: "**", title: "404 | Pagina no encontrada", component: PaginaNoEncontradaComponent}
   ];

   @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
   })
    export class AppRoutingModule { }