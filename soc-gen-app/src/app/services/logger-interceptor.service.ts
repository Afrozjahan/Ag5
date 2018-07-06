import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpParams, HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class LoggerInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedReq = req.clone({ params: new HttpParams().set("auth", this.authService.getToken()) })
    return next.handle(clonedReq)
      .do(response => {
        console.log("response : ", response);
        return response;
      });

  }
  constructor(private authService: AuthService) { }

}
