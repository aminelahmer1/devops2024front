import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChambreComponent } from './chambre/chambre.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'chambres', component: ChambreComponent },
  // Vous pouvez ajouter d'autres routes ici si besoin
];

@NgModule({
  declarations: [
    AppComponent,
    ChambreComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    RouterModule.forRoot(routes) ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
