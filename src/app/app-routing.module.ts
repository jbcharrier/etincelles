import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AtelierComponent } from './atelier/atelier.component';

const routes: Routes = [

  { path: 'accueil', component: AccueilComponent },
  { path: 'atelier', component: AtelierComponent },
  { path: '**', redirectTo: 'accueil' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
