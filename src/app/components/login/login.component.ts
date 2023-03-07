import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log(this.email, this.password);
    // Aquí se puede hacer la lógica para enviar los datos de inicio de sesión a una API
  }
}