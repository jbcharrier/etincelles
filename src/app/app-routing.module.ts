import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AtelierComponent } from './atelier/atelier.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ValeursComponent } from './valeurs/valeurs.component';

const routes: Routes = [

  { path: 'accueil', component: AccueilComponent },
  { path: 'contenu', component: AtelierComponent },
  { path: 'valeurs', component: ValeursComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: '**', redirectTo: 'accueil' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
