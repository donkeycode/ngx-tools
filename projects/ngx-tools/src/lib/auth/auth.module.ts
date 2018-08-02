import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interceptor';
import { AUTH_CONFIG } from './auth.config';
export interface AuthConfig {
  getToken?: () => string;
  headerName?: string;
  scheme?: string;
  domainsToActiveInterceptor?: string[];
  routesToDesactiveInterceptor?: string[];
}
/**
 * Auth functions
 * @example
 * import { AuthModule } from './tools/auth/auth.module';
 */
@NgModule()
export class AuthModule {
  constructor(@Optional() @SkipSelf() parentModule: AuthModule) {
    if (parentModule) {
      throw new Error('AuthModule is already loaded. It should only be imported in your application\'s main module.');
    }
  }
  static forRoot(config: AuthConfig = {}): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        }, {
          provide: AUTH_CONFIG,
          useValue: config
        },
        AuthService
      ]
    };
  }
}
