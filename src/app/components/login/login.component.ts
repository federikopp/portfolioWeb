import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from 'src/app/model/login-usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  email!: string;
  password!: string;
  loginUsuario!: LoginUsuario;

  constructor (loginUsuario: LoginUsuario) {
    this.email = loginUsuario.email;
    this.password = loginUsuario.password;
  }
    
  
  ngOnInit() {
    this.loginUsuario = new LoginUsuario(this.email, this.password);
  }

  submit() {
     
  }
  
}
