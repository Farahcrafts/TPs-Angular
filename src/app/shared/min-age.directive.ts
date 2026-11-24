import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

/**
 * Directive de validation personnalisée pour l'âge minimum (Template-Driven Forms).
 *
 * Pourquoi une directive plutôt que min="18" ?
 * - min="18" est un attribut HTML5 natif qui ne déclenche PAS de validation Angular,
 *   il empêche seulement la saisie via les flèches du navigateur.
 * - Cette directive s'intègre au système de validation Angular (NG_VALIDATORS),
 *   ce qui permet d'afficher des mat-error cohérents et de bloquer la soumission.
 */
@Directive({
  selector: '[appMinAge]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinAgeDirective,
      multi: true,
    },
  ],
})
export class MinAgeDirective implements Validator {
  @Input('appMinAge') minAge = 18;

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value !== null && value !== '' && +value < +this.minAge) {
      return { minAge: { requiredAge: this.minAge, actualAge: value } };
    }
    return null;
  }
}
