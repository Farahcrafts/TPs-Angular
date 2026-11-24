# Réflexion : Template-Driven vs Reactive Forms

## Quelles sont les principales différences entre Template-Driven et Reactive Forms ? Dans quels cas préférer l'une ou l'autre ?

**Localisation de la logique** : En Template-Driven, la validation et la structure du formulaire sont déclarées dans le template HTML (attributs `required`, `minlength`, directives). En Reactive, tout est défini dans la classe TypeScript via `FormBuilder`, `Validators`, et des fonctions de validation personnalisées.

**Modèle synchrone vs asynchrone** : Les Reactive Forms offrent un accès synchrone à la valeur et à la validité du formulaire. Les Template-Driven reposent sur `ngModel` qui met à jour le modèle de façon asynchrone via le cycle de détection de changement d'Angular.

**Testabilité** : Les Reactive Forms sont nettement plus simples à tester unitairement, car on peut valider le `FormGroup` sans rendre le DOM. Les Template-Driven nécessitent un `TestBed` complet avec compilation du template.

**Formulaires dynamiques** : Les Reactive Forms permettent d'ajouter/supprimer des contrôles à la volée (`FormArray`, `addControl`, `removeControl`). C'est complexe et peu élégant en Template-Driven.

**Validation personnalisée** : En Reactive, on passe une simple fonction `ValidatorFn`. En Template-Driven, il faut créer une directive avec `NG_VALIDATORS`, ce qui représente plus de code boilerplate.

**Scalabilité** : Les Reactive Forms sont mieux adaptés aux formulaires complexes (multi-étapes, champs conditionnels, validation croisée entre champs).

**Conclusion** : Utiliser les **Template-Driven Forms** pour les formulaires simples (login, contact, recherche) où la rapidité de développement prime. Préférer les **Reactive Forms** pour les formulaires complexes, les applications d'entreprise, et lorsque la testabilité et la maintenabilité sont importantes.
