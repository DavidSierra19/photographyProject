import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {
  loginService = inject(LoginService);
  menuResponsivo: boolean = false;

  menuSubmit(){
    this.menuResponsivo = !this.menuResponsivo;
  }
}