import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Vehicule } from '../models/vehicule';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor(private http : HttpClient) { }

  findAll() {
    return this.http.get<Vehicule[]>(`${environment.apiUrl}/vehicules`);
  }
}
