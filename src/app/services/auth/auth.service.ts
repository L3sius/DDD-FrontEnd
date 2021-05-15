import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { User } from '../../models/user';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  private baseUrl = environment.baseUrl;

  // Original logIn

  // public logIn(user: User) {
  //   return this.httpClient
  //     .put(`${this.baseUrl}/login`, user, { observe: 'response' })
  //     .pipe(
  //       tap((data) => {
  //         sessionStorage.setItem(
  //           'authorization',
  //           data.headers.get('Authorization')
  //         );
  //         console.log('Data header: ' + data.headers.get('Authorization'));
  //       })
  //     );
  // }

  public logIn(user: User) {
    return this.httpClient
      .put(`${this.baseUrl}/login`, user, {
        responseType: 'text',
        observe: 'response',
      })
      .pipe(
        tap((data) => {
          sessionStorage.setItem(
            'authorization',
            data.headers.get('Authorization')
          );
        })
      );
  }

  // public logIn(user: User) {
  //   return this.httpClient.put(`${this.baseUrl}/login`, user).pipe(
  //     map((user) => {
  //       // store user details and jwt token in local storage to keep user logged in between page refreshes
  //       sessionStorage.setItem('authorization', JSON.stringify(user));
  //       console.log('User:' + user);
  //       return user;
  //     })
  //   );
  // }

  public getToken() {
    console.log(
      'Token from getToken is:' + sessionStorage.getItem('authorization')
    );
    return sessionStorage.getItem('authorization');
  }

  public logOut() {
    sessionStorage.clear();
  }

  error(error: HttpErrorResponse) {
    let errorMessage = '';
    error.error instanceof ErrorEvent
      ? (errorMessage = error.error.message)
      : (errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`);
    return throwError(errorMessage);
  }
}
