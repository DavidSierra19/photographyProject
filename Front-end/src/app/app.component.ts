import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
  imports: [RouterOutlet, FooterComponent, HeaderComponent,InicioComponent,InicioSeccionComponent, NavegacionComponent, RegistroComponent, ZonaPrivadaComponent, PaginaNoEncontradaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
