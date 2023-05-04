import { Injectable } from '@angular/core';
import { LoginUsuario } from '../model/login-usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginUsuarioService {
  private apiUrl = '../assets/json/login.json'

  constructor(private http:HttpClient, loginUsuario:LoginUsuario) {
    loginUsuario.email = this.email;
   }


  public getLogin():Observable<LoginUsuario[]> { 
    return this.http.get<LoginUsuario[]>(this.apiUrl);
  };

  public login(){
   
  }
  
 /* log = false;
  loginUsuario!: LoginUsuario;

  constructor() { }

  public login(): boolean {
    if (this.loginUsuario.email == "admin@gmail.com" && this.loginUsuario.password == "admin" ) {
      this.log = true;
    }else{
      this.log = false;
    }
    return this.log;
  }*/
}
