import { Universite } from './universite';
import { Bloc } from './bloc';

export interface Foyer {
  idFoyer: number;
  nomFoyer: string;
  capaciteFoyer: number;
  universite?: Universite;
  blocs?: Bloc[];
}
