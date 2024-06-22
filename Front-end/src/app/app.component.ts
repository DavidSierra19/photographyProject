import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InicioSeccionComponent } from './components/inicio-seccion/inicio-seccion.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ZonaPrivadaComponent } from './components/zona-privada/zona-privada.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent,InicioComponent,InicioSeccionComponent, NavegacionComponent, RegistroComponent, ZonaPrivadaComponent, PaginaNoEncontradaComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // intecto la ruta url de la pagina
  constructor(private router: Router) {}

  isNavegadorVisible(): boolean {
    const currentUrl = this.router.url;
    return currentUrl === '/inicio';
  }
}
