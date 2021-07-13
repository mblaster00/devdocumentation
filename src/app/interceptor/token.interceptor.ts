import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor() {}


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const token = localStorage.getItem('token');
          if (token) {
            req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token )});
          }
          if (req.body instanceof FormData) {
            req = req.clone({
              headers: req.headers.delete('Content-Type','application/json')
            });
          } else {
            req = req.clone({
              headers: req.headers.set('Content-Type', 'application/json')
            });
          }
          

          return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
              if (event instanceof HttpResponse) {
              }
              return event;
            }),
            catchError((error: HttpErrorResponse) => {
              if (error.status === 401) {
                if (error.error.success === false) {
                } else {
                } 
              } else if (error.status === 400) {
              }

              return throwError(error);
            }));
    }
}
