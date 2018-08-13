import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxToolsModule } from '../../projects/ngx-tools/src/lib/ngx-tools.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxToolsModule,
    FormsModule,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  public errors;

  public boom400() {
    this.errors = {
      status: 'error',
      errors: {
        errors: [
          'error message 1',
          'error message 2'
        ],
        children: {
          field: {
            errors: [ 'error message 3' ]
          },
          'field-parent': {
            children: [
              {
                children: {
                  'field-child': {
                    errors: [ 'error message 4' ]
                  },
                }
              }
            ]
          }
        }
      }
    };
  }
}
