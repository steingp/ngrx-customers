import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
 
import { HomeComponent } from "../home/home.component";
 
const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "customers",
    loadChildren: "../customers/customers.module#CustomersModule"
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
 
export class AppRoutingModule {}