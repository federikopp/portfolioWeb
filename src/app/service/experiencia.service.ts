import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from 'src/environments/environment';
import { Experiencias } from '../model/experiencias';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL = Environment.URL + '/experiencias/'

  constructor(private http: HttpClient) { }

  public getExperienciaLista(): Observable<Experiencias[]>{
    return this.http.get<Experiencias[]>(this.URL + 'lista');
  }

  public getExperienciaId(idExperiencia: number): Observable<Experiencias>{
    return this.http.get<Experiencias>(this.URL + `detail/${idExperiencia}`);
  }

  public save(experiencia: Experiencias): Observable<any>{
    return this.http.post<any>(this.URL+'create',experiencia);
  }

  public update(idExperiencia: number, experiencia: Experiencias): Observable<any>{
    return this.http.put<any>(this.URL + `update/${idExperiencia}`,experiencia)
  }

  public delete(idExperiencia: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${idExperiencia}`);
  }

}
