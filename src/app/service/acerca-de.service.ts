
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AcercaDe } from '../model/acercaDe';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  URL = Environment.URL + '/acercaDe/';
  constructor(private http:HttpClient) { }

   public getPersonaLista():Observable<AcercaDe[]> { 
    return this.http.get<AcercaDe[]>(this.URL+'lista');
  }

  public getPersonaId(id: number):Observable<AcercaDe>{
    return this.http.get<AcercaDe>(this.URL+`persona/${id}`);
  }

  public guardar(acercaDe:AcercaDe):Observable<any> {
    return this.http.post<any>(this.URL + 'guardar', acercaDe)
  }

  public editar(id: number, acercaDe: AcercaDe): Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`, acercaDe);
  }

  public borrar(id: number): Observable<any>{
    return this.http.delete<any>(this.URL+`borrar/${id}`);
  }

}