import { Injectable, Inject } from '@angular/core';
import { REST_CONFIG } from './rest.config';

@Injectable()
export class RestService {
  constructor(@Inject(REST_CONFIG) private config: any) {}
  /**
   * Header content type
   * @example
   * RestModule.forRoot({
   *   contentType: 'application/json'
   * })
   */
  public get contentType(): string {
    return this.config.contentType || 'application/json';
  }
  /**
   * Header accept
   * @example
   * RestModule.forRoot({
   *   accept: 'application/json'
   * })
   */
  public get accept(): string {
    return this.config.accept || 'application/json';
  }
}
