import { Etudiant } from "./reservation";

export interface Reservation {
  idReservation: string;
  anneeUniversitaire: string;
  estValide: boolean;
  etudiants?: Etudiant[];
}