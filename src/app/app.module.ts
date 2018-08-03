import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxToolsModule } from '../../projects/ngx-tools/src/lib/ngx-tools.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgxToolsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
