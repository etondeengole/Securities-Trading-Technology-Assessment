import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewTicketsComponent } from '../view-tickets/view-tickets.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: 'Home', component: ViewTicketsComponent },
  { path: '**', component: ViewTicketsComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
