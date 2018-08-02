import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';

@Injectable()
export class RestInterceptor implements HttpInterceptor {
  constructor(public rest: RestService) {}
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        setHeaders: {
          'Content-Type': this.rest.contentType
        }
      });
    }
    if (!request.headers.has('Accept')) {
      request = request.clone({
        setHeaders: {
          'Accept': this.rest.accept
        }
      });
    }
    return next.handle(request);
  }
}
