import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http : HttpClient) { }

  create(location : Location) {
    return this.http.post<Location>(`${environment.apiUrl}/locations`, location);
  }
}
