import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  URL = Environment.URL + '/autenticacion'

  constructor(private http:HttpClient) { }


}
