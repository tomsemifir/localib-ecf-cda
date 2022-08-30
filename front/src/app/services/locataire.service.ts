import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Locataire } from '../models/locataire';

@Injectable({
  providedIn: 'root'
})
export class LocataireService {

  constructor(private http : HttpClient) { }

  findAll() {
    return this.http.get<Locataire[]>(`${environment.apiUrl}/locataires`);
  }
}
