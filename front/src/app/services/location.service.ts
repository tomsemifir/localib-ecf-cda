import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http : HttpClient) { }

  findAll() {
    return this.http.get<Location[]>(`${environment.apiUrl}/locations`);
  }

  create(location : Location) {
    return this.http.post<Location>(`${environment.apiUrl}/locations`, location);
  }
}
