import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApifunctionsService <T>{

  constructor(@Inject(String) public DBURL, public http: HttpClient) { }

  // private DBURL = "http://localhost:3000/teachers";

  getById(id): Observable<T> {
    return this.http.get<T>(this.DBURL + `/${id}`);
  }
  getTeacher(): Observable<T> {
    return this.http.get<T>(this.DBURL);
  }

  post(obj): Observable<T> {
    return this.http.post<T>(this.DBURL, obj);
  }

  put(obj, id) {
    return this.http.put(this.DBURL + `/${id}`, obj);
  }

  delete(id): Observable<T> {
    return this.http.delete<T>(this.DBURL + `/${id}`);
  }
}
