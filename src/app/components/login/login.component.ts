import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { LoginUsuarioService } from 'src/app/service/login-usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email!: string;
  password: string='admin';
  //loginUsuario!: LoginUsuario;

  constructor (private loginUsuarioService:LoginUsuarioService) {


  }
  ngOnInit(): void {
    this.email='hoal';
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

  otro(){
    this.email;
    alert(this.email);
  }


    
}
