import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://jsonplaceholder.typicode.com/users/1';
  constructor(private http: HttpClient) {}

  login(email: String, password: String):Observable<Object> {
    return this.http.get(this.url)
  }
}
