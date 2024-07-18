import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AtelierComponent } from './atelier/atelier.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ValeursComponent } from './valeurs/valeurs.component';
import { FormulesComponent } from './formules/formules.component';
import { CgvComponent } from './cgv/cgv.component';

const routes: Routes = [

  { path: 'accueil', component: AccueilComponent },
  { path: 'contenu', component: AtelierComponent },
  { path: 'formules', component: FormulesComponent },
  { path: 'valeurs', component: ValeursComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'cgv', component: CgvComponent },
  { path: '**', redirectTo: 'accueil' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
