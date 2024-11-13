import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChambreService } from '../services/chambre.service';
import { Chambre } from '../models/chambre';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css']
})
export class ChambreComponent implements OnInit {
  chambres: Chambre[] = [];
  chambreForm: FormGroup;
  isEditing = false;
  selectedChambreId?: number;

  constructor(private chambreService: ChambreService, private fb: FormBuilder) {
    this.chambreForm = this.fb.group({
      numeroChambre: ['', Validators.required],
      typeChambre: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.retrieveAllChambres();
  }

  retrieveAllChambres(): void {
    this.chambreService.retrieveAllChambres().subscribe((data: Chambre[]) => {
      this.chambres = data;
    });
  }

  onSubmit(): void {
    if (this.chambreForm.valid) {
      const chambre = this.chambreForm.value;
      if (this.isEditing && this.selectedChambreId) {
        chambre.idChambre = this.selectedChambreId;
        this.chambreService.updateChambre(chambre).subscribe(() => {
          this.resetForm();
          this.retrieveAllChambres();
        });
      } else {
        this.chambreService.addChambre(chambre).subscribe(() => {
          this.resetForm();
          this.retrieveAllChambres();
        });
      }
    }
  }

  editChambre(chambre: Chambre): void {
    this.chambreForm.patchValue(chambre);
    this.isEditing = true;
    this.selectedChambreId = chambre.idChambre;
  }

  deleteChambre(idChambre: number): void {
    this.chambreService.removeChambre(idChambre).subscribe(() => {
      this.retrieveAllChambres();
    });
  }

  resetForm(): void {
    this.chambreForm.reset();
    this.isEditing = false;
    this.selectedChambreId = undefined;
  }
}
