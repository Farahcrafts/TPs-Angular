import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { COUNTRIES } from '../shared/countries';
import { minAgeValidator } from '../shared/validators';

interface InscriptionData {
  nom: string;
  email: string;
  age: number;
  pays: string;
}

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent {
  private fb = inject(FormBuilder);

  countries = COUNTRIES;
  submitted = false;
  summary: InscriptionData | null = null;

  inscriptionForm: FormGroup = this.fb.group({
    nom: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    age: [null, [Validators.required, minAgeValidator(18)]],
    pays: ['', [Validators.required]],
  });

  // Getters pour garder le template propre
  get nom() {
    return this.inscriptionForm.get('nom')!;
  }
  get email() {
    return this.inscriptionForm.get('email')!;
  }
  get age() {
    return this.inscriptionForm.get('age')!;
  }
  get pays() {
    return this.inscriptionForm.get('pays')!;
  }

  onSubmit(): void {
    if (this.inscriptionForm.valid) {
      this.summary = this.inscriptionForm.value as InscriptionData;
      this.submitted = true;
      console.log('Données du formulaire (Reactive) :', this.summary);
    }
  }

  reset(): void {
    this.inscriptionForm.reset();
    this.summary = null;
    this.submitted = false;
  }
}
