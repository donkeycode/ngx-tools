import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RestService } from './rest.service';
import { RestInterceptor } from './rest.interceptor';
import { REST_CONFIG } from './rest.config';
export interface RestConfig {
  contentType?: string;
  accept?: string;
}
/**
 * Rest functions
 * @example
 * import { RestModule } from './tools/rest/rest.module';
 */
@NgModule()
export class RestModule {
  constructor(@Optional() @SkipSelf() parentModule: RestModule) {
    if (parentModule) {
      throw new Error('RestModule is already loaded. It should only be imported in your application\'s main module.');
    }
  }
  static forRoot(config: RestConfig = {}): ModuleWithProviders {
    return {
      ngModule: RestModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: RestInterceptor,
          multi: true
        }, {
          provide: REST_CONFIG,
          useValue: config
        },
        RestService
      ]
    };
  }
}
