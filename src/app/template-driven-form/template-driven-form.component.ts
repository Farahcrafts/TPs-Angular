import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { COUNTRIES } from '../shared/countries';
import { MinAgeDirective } from '../shared/min-age.directive';

interface Inscription {
  nom: string;
  email: string;
  age: number | null;
  pays: string;
}

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MinAgeDirective,
  ],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss',
})
export class TemplateDrivenFormComponent {
  countries = COUNTRIES;
  submitted = false;
  summary: Inscription | null = null;

  model: Inscription = {
    nom: '',
    email: '',
    age: null,
    pays: '',
  };

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.summary = { ...this.model };
      this.submitted = true;
      console.log('Données du formulaire (Template-Driven) :', this.summary);
    }
  }

  reset(form: NgForm): void {
    form.resetForm();
    this.model = { nom: '', email: '', age: null, pays: '' };
    this.summary = null;
    this.submitted = false;
  }
}
