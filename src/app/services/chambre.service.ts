import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chambre } from '../models/chambre';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  private baseUrl = 'http://192.168.1.12/tpFoyer17/api/chambres';

  constructor(private http: HttpClient) { }

  // Récupérer toutes les chambres
  retrieveAllChambres(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.baseUrl}/retrieveAllChambres`);
  }

  // Ajouter une nouvelle chambre
  addChambre(chambre: Chambre): Observable<Chambre> {
    return this.http.post<Chambre>(`${this.baseUrl}/addChambre`, chambre);
  }

  // Mettre à jour une chambre existante
  updateChambre(chambre: Chambre): Observable<Chambre> {
    return this.http.put<Chambre>(`${this.baseUrl}/updateChambre`, chambre);
  }

  // Récupérer une chambre par ID
  retrieveChambre(idChambre: number): Observable<Chambre> {
    return this.http.get<Chambre>(`${this.baseUrl}/retrieveChambre/${idChambre}`);
  }

  // Supprimer une chambre par ID
  removeChambre(idChambre: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/removeChambre/${idChambre}`);
  }
}
