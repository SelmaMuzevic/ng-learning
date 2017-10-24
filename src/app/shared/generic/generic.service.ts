import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";


// faire en sorte que les différentes méthodes renvoient des Observable au lieu de Promise
@Injectable()
export abstract class GenericService<T> {
  protected urlAPI:string = '';
  constructor(protected http:HttpClient) { }

  getAll():Observable<T[]> {
    return this.http.get<T[]>(this.urlAPI);
  }

  getById(id:number):Observable<T> {
    return this.http.get<T>(this.urlAPI+'/'+id);
  }

  add(entitiy:T):Observable<T> {
    return this.http.post<T>(this.urlAPI, entitiy);
  }

  delete(id:number):Observable<void> {
    return this.http.delete<void>(this.urlAPI+'/'+id);
  }
  

  


}