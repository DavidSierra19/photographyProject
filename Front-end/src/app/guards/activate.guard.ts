import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import{ LoginService } from '../services/login.service';
import { ToastrService } from 'ngx-toastr';



export const activateGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loginService = inject(LoginService);
  if(loginService.logeado()){
    return true;
  }else{
    router.navigate(['/inicio-seccion']);
    return false;
  }
};
