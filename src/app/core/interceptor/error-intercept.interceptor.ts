import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable()
export class ErrorIntercept implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 0:
            this.router.navigate(['']);
            this.snackBar.open('Problema com connexão ao servidor', 'Fechar', {
              duration: 10000,
            });
            break;

          default:
            this.snackBar.open('Ocorreu um problema inesperado', 'Fechar', {
              duration: 10000,
            });
            break;
        }

        return throwError(() => error);
      })
    );
  }
}
