import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Validateur personnalisé pour l'âge minimum (Reactive Forms).
 * Retourne une erreur 'minAge' si la valeur est inférieure à l'âge minimum.
 */
export function minAgeValidator(minAge: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value !== null && value !== '' && value < minAge) {
      return { minAge: { requiredAge: minAge, actualAge: value } };
    }
    return null;
  };
}
