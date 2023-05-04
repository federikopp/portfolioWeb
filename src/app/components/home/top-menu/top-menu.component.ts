import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuarioService } from 'src/app/service/login-usuario.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})

export class TopMenuComponent { 
  log=false;

  constructor (public router: Router, public loginUsuario: LoginUsuarioService) {}

 onLogout():void{
    this.log = false;
    window.location.reload();
  }
  
  login(){
      this.router.navigate(['/login'])
    }
  
}
