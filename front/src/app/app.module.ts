import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { VehiculesComponent } from './pages/vehicules/vehicules.component';
import { LocationModalComponent } from './components/locations/location-modal/location-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocationsComponent } from './pages/locations/locations.component';
import { LocatairesComponent } from './pages/locataires/locataires.component';
import { LocataireComponent } from './components/locataires/locataire/locataire.component';
import { VehiculeComponent } from './components/vehicules/vehicule/vehicule.component';
import { LocationsValidesComponent } from './pages/locations-valides/locations-valides.component';
import { LocationComponent } from './components/locations-valides/location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    VehiculesComponent,
    LocationModalComponent,
    LocationsComponent,
    LocatairesComponent,
    LocataireComponent,
    VehiculeComponent,
    LocationsValidesComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
