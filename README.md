# TP 1 : Angular – Formulaires

**ENSA Fès** – Travaux Pratiques Angular

Application Angular démontrant les deux approches de gestion des formulaires : Template-Driven Forms (Exercice 1) et Reactive Forms (Exercice 2). Interface en français avec Angular Material.

---

## Prérequis

| Outil       | Version recommandée | Vérifier avec         |
|-------------|--------------------|-----------------------|
| Node.js     | 20.x ou 22.x (LTS)| `node -v`             |
| npm         | 10.x+             | `npm -v`              |
| Angular CLI | 19.x              | `ng version`          |

Installer Angular CLI globalement si nécessaire :

```bash
npm install -g @angular/cli
```

---

## Installation

### Option A : Création depuis zéro

```bash
# 1. Créer le projet
ng new tp1-angular-forms --routing --style=scss
cd tp1-angular-forms

# 2. Ajouter Angular Material (choisir un thème, activer les animations)
ng add @angular/material

# 3. Remplacer les fichiers suivants par ceux fournis :
#    src/app/app.config.ts
#    src/app/app.routes.ts
#    src/app/app.component.ts
#    src/app/app.component.html
#    src/app/app.component.scss
#    src/app/template-driven-form/  (3 fichiers)
#    src/app/reactive-form/         (3 fichiers)
#    src/app/reflexion/             (3 fichiers)
#    src/app/shared/countries.ts
#    src/app/shared/validators.ts
#    src/app/shared/min-age.directive.ts
#    src/styles.scss
#    src/index.html
```

### Option B : Cloner le projet existant

```bash
git clone <url-du-repo>
cd tp1-angular-forms
npm install
```

---

## Lancer l'application

```bash
ng serve -o
```

L'application s'ouvre automatiquement sur **http://localhost:4200**

---

## Routes

| Route               | Description                                        |
|---------------------|----------------------------------------------------|
| `/template-driven`  | Exercice 1 – Formulaire Template-Driven            |
| `/reactive`         | Exercice 2 – Formulaire Reactive Forms             |
| `/reflexion`        | Réflexion sur les différences entre les approches   |
| `/`                 | Redirige vers `/template-driven`                   |

---

## Tests de validation

### Tableau de test pour chaque champ

| Champ        | Saisie                  | Erreur attendue                              |
|--------------|-------------------------|----------------------------------------------|
| Nom complet  | *(vide)*                | "Le nom complet est obligatoire"             |
| Nom complet  | `Ab`                    | "Le nom doit contenir au moins 3 caractères" |
| Nom complet  | `Ahmed`                 | *(aucune erreur)*                            |
| Email        | *(vide)*                | "L'email est obligatoire"                    |
| Email        | `abc`                   | "Format d'email invalide"                    |
| Email        | `user@example.com`      | *(aucune erreur)*                            |
| Âge          | *(vide)*                | "L'âge est obligatoire"                      |
| Âge          | `15`                    | "Vous devez avoir au moins 18 ans"           |
| Âge          | `22`                    | *(aucune erreur)*                            |
| Pays         | *(aucune sélection)*    | "Veuillez sélectionner un pays"              |
| Pays         | `France`                | *(aucune erreur)*                            |

### Test de soumission

1. Remplir tous les champs correctement → le bouton "S'inscrire" devient actif
2. Cliquer sur "S'inscrire" → un récapitulatif vert apparaît sous le formulaire
3. Ouvrir la console (F12) → les données sont affichées en `console.log`
4. Cliquer sur "Réinitialiser" → le formulaire est vidé et le récapitulatif disparaît

---

## Structure du projet

```
tp1-angular-forms/
├── src/
│   ├── app/
│   │   ├── template-driven-form/
│   │   │   ├── template-driven-form.component.ts
│   │   │   ├── template-driven-form.component.html
│   │   │   └── template-driven-form.component.scss
│   │   ├── reactive-form/
│   │   │   ├── reactive-form.component.ts
│   │   │   ├── reactive-form.component.html
│   │   │   └── reactive-form.component.scss
│   │   ├── reflexion/
│   │   │   ├── reflexion.component.ts
│   │   │   ├── reflexion.component.html
│   │   │   └── reflexion.component.scss
│   │   ├── shared/
│   │   │   ├── countries.ts
│   │   │   ├── validators.ts
│   │   │   └── min-age.directive.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── styles.scss
│   ├── index.html
│   └── main.ts
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── REPONSE.md
└── README.md
```

---

## Dépannage

| Problème                           | Solution                                                |
|------------------------------------|---------------------------------------------------------|
| Port 4200 déjà utilisé            | `ng serve --port 4300`                                  |
| Styles Material non chargés        | Vérifier que `@angular/material/prebuilt-themes/azure-blue.css` est dans `angular.json` > `styles` |
| Erreur de version Node.js          | Installer Node.js LTS (20.x ou 22.x) depuis nodejs.org |
| `ng: command not found`           | `npm install -g @angular/cli`                           |
| Icônes Material non affichées      | Vérifier le lien `Material+Icons` dans `index.html`     |
| Erreur `Module not found`         | Supprimer `node_modules` et relancer `npm install`      |

---

## Technologies utilisées

- **Angular 19** (standalone components, sans NgModules)
- **Angular Material 19** (thème Azure Blue)
- **TypeScript 5.6**
- **SCSS**
