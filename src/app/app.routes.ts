import { Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReflexionComponent } from './reflexion/reflexion.component';

export const routes: Routes = [
  { path: 'template-driven', component: TemplateDrivenFormComponent },
  { path: 'reactive', component: ReactiveFormComponent },
  { path: 'reflexion', component: ReflexionComponent },
  { path: '', redirectTo: 'template-driven', pathMatch: 'full' },
  { path: '**', redirectTo: 'template-driven' },
];
