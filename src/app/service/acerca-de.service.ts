
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { AcercaDe } from '../model/acercaDe';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  constructor(private http:HttpClient) { }

  getPersona():Observable<any> { 
    return this.http.get('./assets/json/acercaDe.json')
  }
}