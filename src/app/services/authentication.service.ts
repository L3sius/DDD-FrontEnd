import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface LoginForm {
  username: string;
  password: string;
}

export interface User {
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}
  // TODO: Implement authentication service
  login(loginForm: LoginForm) {
    return this.http
      .post<any>('/api/users/login', {
        username: loginForm.username,
        password: loginForm.password,
      })
      .pipe(
        map((token) => {
          console.log('token');
          localStorage.setItem('token', token.access_token);
          return token;
        })
      );
  }

  register(user) {
    return this.http.post<any>('/api/users/', user).pipe(map((user) => user));
  }
}
