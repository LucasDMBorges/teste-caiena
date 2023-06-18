import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private htttp: HttpClient) {}

  getUsers(): Observable<any> {
    const parametros = new HttpParams().append('per_page', '20');
    return this.htttp.get<any>(environment.USERS_API, { params: parametros });
  }

  getUsersByLogin(name: any): Observable<any> {
    return this.htttp.get<any>(`${environment.USERS_API}/${name}`);
  }
}
