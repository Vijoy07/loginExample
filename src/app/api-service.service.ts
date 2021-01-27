import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Details } from './details/details';
import { LoginModel } from './Login/login/login';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

basUrl = "http://localhost:5000/api/Values";
  constructor(private http: HttpClient) { }

  Login(user: LoginModel): Observable<any> {
    return this.http.post('https://localhost:5001/api/Values/Login', user);
  }

  Register(user: LoginModel): Observable<any> {
    return this.http.post('https://localhost:5001/api/Registration/Register', user);
  }

  Details(): Observable<Details[]> {
    return this.http.get<Details[]>('https://localhost:5001/api/Details');
  }

  Add(d: Details): Observable<any> {
    return this.http.post<Details>('https://localhost:5001/api/Details/Add', d);
  }

  Remove(d: Details): Observable<any> {
    return this.http.delete<Details>(`https://localhost:5001/api/Details/Delete?uuid=${d.uuid}`);
  }
}
