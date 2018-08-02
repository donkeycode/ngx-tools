import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxToolsModule } from 'ngx-tools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxToolsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
