import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { parse } from 'url';
import { AuthService } from './auth.service';
import { AUTH_CONFIG } from './auth.config';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isDomainActived(request) || this.isRouteBlacklisted(request)) {
      return next.handle(request);
    }
    request = request.clone({
      setHeaders: {
        [this.auth.headerName]: `${this.auth.scheme}${this.auth.token}`
      }
    });
    return next.handle(request);
  }
  private isDomainActived(request: HttpRequest<any>): boolean {
    const requestUrl: any = parse(request.url, false, true);
    return this.auth.domainsToActiveInterceptor.findIndex(domain => domain === requestUrl.host) > -1;
  }
  private isRouteBlacklisted(request: HttpRequest<any>): boolean {
    const requestUrl: any = parse(request.url, false, true);
    return this.auth.routesToDesactiveInterceptor.findIndex(route => route === requestUrl.path) > -1;
  }
}
