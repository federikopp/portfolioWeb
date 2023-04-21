import { Injectable } from '@angular/core';
import { Environment } from 'src/environments/environment';
import { Skills } from '../model/skills';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  URL = Environment.URL + '/skill/';

  constructor(private http: HttpClient) { }

  public getSkillsLista(): Observable<Skills[]>{
    return this.http.get<Skills[]>(this.URL + 'lista');
  }

  public getSkillsId(id: number): Observable<Skills>{
    return this.http.get<Skills>(this.URL + `detail/${id}`);
  }

  public save(skill: Skills): Observable<any>{
    return this.http.post<any>(this.URL + 'create', skill);
  }

  public update(id: number, skill: Skills): Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`, skill);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete(this.URL + `delete/${id}`);
  }
}
