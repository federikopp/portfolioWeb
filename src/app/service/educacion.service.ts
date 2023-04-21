import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = Environment.URL + '/educacion/';
  constructor(private http:HttpClient) { }

   public getEducacionLista():Observable<Educacion[]> { 
    return this.http.get<Educacion[]>(this.URL+'lista');
  }

  public getEducacionId(idEducacion: number):Observable<Educacion>{
    return this.http.get<Educacion>(this.URL+`educacion/${idEducacion}`);
  }

  public guardar(educacion:Educacion):Observable<any> {
    return this.http.post<any>(this.URL + 'guardar', educacion)
  }

  public editar(idEducacion: number, educacion: Educacion): Observable<any>{
    return this.http.put<any>(this.URL + `update/${idEducacion}`, educacion);
  }

  public borrar(idEducacion: number): Observable<any>{
    return this.http.delete<any>(this.URL+`borrar/${idEducacion}`);
  }
}
