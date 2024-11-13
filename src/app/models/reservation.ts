
import { Reservation } from "./etudiant";

export interface Etudiant {
  idEtudiant: number;
  nomEtudiant: string;
  prenomEtudiant: string;
  cinEtudiant: number;
  dateNaissance: Date;
  reservations?: Reservation[];
}
