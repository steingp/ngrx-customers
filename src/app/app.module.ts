import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { StoreModule } from "@ngrx/store";
 
import { AppRoutingModule } from "./app-routing/app-routing.module";
 
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CustomerComponent } from './customers/customer/customer.component';
import { Routes } from '@angular/router';
 
const customerRoutes: Routes = [{ path: "", component: CustomerComponent }];

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent],
  imports: [
    BrowserModule,
    // Import Store module
    StoreModule.forRoot({}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 

export class AppModule {}