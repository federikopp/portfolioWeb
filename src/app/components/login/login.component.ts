import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { LoginUsuarioService } from 'src/app/service/login-usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  email!: string;
  password: string='admin';
  //loginUsuario!: LoginUsuario;

  constructor (private loginUsuarioService:LoginUsuarioService) {


  }



  submit(){

    this.loginUsuarioService.getLogin(this.email,this.password).subscribe(
      resultado =>{
        if (resultado){
          
          alert("Sesión iniciada correctamente"+' '+this.email+' ' +this.password);
        }else{
          alert("Falla de usuario y contraseña"+' '+this.email+' ' +this.password);
        }
      }
    );
    
  }




    
}
