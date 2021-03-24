import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTicketsComponent } from './view-tickets/view-tickets.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewTicketsModule } from './view-tickets/view-tickets.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ViewTicketsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
