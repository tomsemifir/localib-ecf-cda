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

  create(locataire : Locataire) {
    return this.http.post<Locataire>(`${environment.apiUrl}/locataires`, locataire);
  }

  delete(id : number) {
    return this.http.delete<Locataire>(`${environment.apiUrl}/locataires/${id}`);
  }

  update(locataire: Locataire) {
    return this.http.patch<Locataire>(`${environment.apiUrl}/locataires/${locataire.id}`, locataire)
  }
}
