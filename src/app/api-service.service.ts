import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  Details(): Observable<string[]> {
    return this.http.get<string[]>('https://localhost:5001/api/Values/Details');
  }
}
