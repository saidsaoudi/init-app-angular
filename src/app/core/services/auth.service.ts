import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { Config } from '../../config';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  clearTimeout: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService
  ) {
    this.userSubject = new BehaviorSubject<User>(null);
    this.user = this.userSubject.asObservable();
  }

  login(params: any): Observable<any> {
    return this.http.post<any>(Config.api.auth.login, params).pipe(
      map((resp) => {
        this.autoLogout(resp.response.expires_in * 1000);
        return resp;
      })
    );
  }

  autoLogout(expirationDate: number) {
    this.clearTimeout = setTimeout(() => {
      this.logout();
    }, expirationDate);
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
    this.router.navigate(['/login']);
    if (this.clearTimeout) {
      clearTimeout(this.clearTimeout);
    }
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  public setUser(user) {
    this.userSubject.next(new User(user));
  }

  // me
  me(): Observable<any> {
    return this.http.get(Config.api.auth.me).pipe(
      map((user) => {
        this.userSubject.next(new User(user['response'].user));
        return user['response'].user;
      }),
      catchError((err) => {
        this.logout();
        return 'err';
      })
    );
  }
}
