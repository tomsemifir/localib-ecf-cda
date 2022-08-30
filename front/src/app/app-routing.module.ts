import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VehiculesComponent } from './pages/vehicules/vehicules.component';

const routes: Routes = [
  { path : "", component: HomeComponent },
  { path : "vehicules", component: VehiculesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
