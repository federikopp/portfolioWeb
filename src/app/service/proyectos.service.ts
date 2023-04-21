import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/environments/environment';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  URL = Environment.URL + '/proyectos/';

  constructor(private http: HttpClient) { }

  public getProyectoLista(): Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(this.URL + 'lista');
  }

  public getProyectoId(idProyecto: number): Observable<Proyectos>{
    return this.http.get<Proyectos>(this.URL + `detail/${idProyecto}`);
  }

  public guardar(proyectos: Proyectos): Observable<any>{
    return this.http.post<any>(this.URL + 'guardar', proyectos);
  }

  public editar(idProyecto: number, proyectos: Proyectos): Observable<any>{
    return this.http.put<any>(this.URL + `update/${idProyecto}`, proyectos);
  }

  public borrar(idProyecto: number): Observable<any>{
    return this.http.delete(this.URL + `borrar/${idProyecto}`);
  }

}
