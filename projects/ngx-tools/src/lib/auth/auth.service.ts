import { Injectable, Inject } from '@angular/core';
import { AUTH_CONFIG } from './auth.config';
@Injectable()
export class AuthService {
  constructor(@Inject(AUTH_CONFIG) private config: any) {}
  /**
   * Retrieve auth token
   * @example
   *
   *  export function getToken() {
   *    return localStorage.getItem('token');
   *  }
   *
   *  AuthModule.forRoot({
   *    getToken: getToken
   *  })
   */
  public get token(): string {
    if (this.config.getToken) {
      return this.config.getToken();
    }
    return localStorage.getItem('token');
  }
  /**
   * Header name
   * @example
   * AuthModule.forRoot({
   *   headerName: 'Authorization'
   * })
   */
  public get headerName(): string {
    return this.config.headerName || 'Authorization';
  }
  /**
   * Header name
   * @example
   * AuthModule.forRoot({
   *   scheme: 'Bearer '
   * })
   */
  public get scheme(): string {
    return this.config.scheme || 'Bearer ';
  }
  /**
   * Domains to active interceptor
   * @example
   * AuthModule.forRoot({
   *   domainsToActiveInterceptor: ['localhost:8099']
   * })
   */
  public get domainsToActiveInterceptor(): string[] {
    return this.config.domainsToActiveInterceptor || [];
  }
  /**
   * Routes to not active interceptor
   * @example
   * AuthModule.forRoot({
   *   routesToDesactiveInterceptor: ['/api/login']
   * })
   */
  public get routesToDesactiveInterceptor(): string[] {
    return this.config.routesToDesactiveInterceptor || [];
  }
}
