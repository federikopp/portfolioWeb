/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  constructor(private http: HttpClient) { }

  getAcercaDe(): Observable<any> {
    return this.http.get<any>('')
  }

}*/

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
    return this.http.get<AcercaDe>('src/assets/json/acercaDe.json');
  }
}