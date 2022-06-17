import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExchangeHeader } from './components/exchange-header/exchange-header.component';
import { ExchangeBody } from './components/exchange-body/exchange-body.component';

@NgModule({
  declarations: [AppComponent, ExchangeHeader, ExchangeBody],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
