import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localePl from '@angular/common/locales/pl'
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pl-PL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
