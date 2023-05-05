import { Injectable } from '@angular/core';
import { LoginUsuario } from '../model/login-usuario';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginUsuarioService {
  //private apiUrl = '../assets/json/login.json'

  private credenciales = [
    {email:'admin',password:'admin'}
]

  constructor(/*private http:HttpClient*/) {
    
   }


  public getLogin(email: string, password:string):Observable<boolean> { 
    const credencialesValidacion = this.credenciales.find(credencial =>credencial.email === email && credencial.password === password);
    
    return of(credencialesValidacion ? true : false);
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
