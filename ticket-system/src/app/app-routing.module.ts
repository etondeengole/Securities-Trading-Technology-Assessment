import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ViewTicketsComponent } from './view-tickets/view-tickets.component';


const routes: Routes = [
  { path: 'Home', component: ViewTicketsComponent },
  //{ path: '',   redirectTo: '/Home', pathMatch: 'full' }, // redirect to `Home page`
  { path: '**', component: ViewTicketsComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }