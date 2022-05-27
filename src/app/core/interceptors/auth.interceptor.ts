// import { Injectable } from "@angular/core";
// import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
// import { TokenService } from "./token.service";
// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//     constructor(private tokenService: TokenService) { }
//     intercept(req: HttpRequest<any>, next: HttpHandler) {
//         const accessToken = this.tokenService.getToken();
//         req = req.clone({
//             setHeaders: {
//                 Authorization: "Bearer " + accessToken
//             }
//         });
//         return next.handle(req);
//     }
// }

import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { HandleResponse } from '../services/handleResponse.service';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { TokenService } from '../services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private _handleResponse: HandleResponse,
    private tokenService: TokenService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Clone the request to add the new header.
    const token = this.tokenService.getToken();
    console.log('> bearer token ======>', token);
    let newReq;
    if (token !== null) {
      newReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token),
      });
    } else {
      newReq = req.clone();
    }

    return next.handle(newReq).pipe(
      map((event) => {
        if (event instanceof HttpResponse) {
          this._handleResponse.handleData(event.body);
        }
        return event;
      }),
      catchError(this.catchError)
    );
  }

  catchError(error) {
    this._handleResponse.handleError(error);
    return throwError(error);
  }
}
