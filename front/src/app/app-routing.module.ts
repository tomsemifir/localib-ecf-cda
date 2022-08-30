import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LocatairesComponent } from './pages/locataires/locataires.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { VehiculesComponent } from './pages/vehicules/vehicules.component';

const routes: Routes = [
  { path : "", component: HomeComponent },
  { path : "locations", component: LocationsComponent },
  { path : "vehicules", component: VehiculesComponent },
  { path : "locataires", component: LocatairesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
