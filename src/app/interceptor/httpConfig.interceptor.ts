import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
router:Router;
constructor(router: Router){
this.router = router;
}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = localStorage.getItem('TOKEN');

        if (token){
            req = req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`)});
        }

        if (!req.headers.has('Content-Type')) {
            req = req.clone({headers: req.headers.set('Content-Type', 'application/json')});
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json')});

        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                return event;
            }),
            catchError ((error: HttpErrorResponse) => {
                if (error.status == 401) {
                   this.router.navigate(['login']);
                }
                
            return throwError(error);         
            })
        );
    }

}