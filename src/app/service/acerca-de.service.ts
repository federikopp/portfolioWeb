
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AcercaDe } from '../model/acercaDe';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  constructor(private http:HttpClient) { }

  public getPersona():Observable<AcercaDe> { 
    return this.http.get<AcercaDe>('./assets/json/acercaDe.json');
  }
}