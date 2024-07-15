import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvisComponent } from '../dialog-avis/dialog-avis.component';

@Component({
  selector: 'app-atelier',
  templateUrl: './atelier.component.html',
  styleUrl: './atelier.component.scss',
})
export class AtelierComponent {
  readonly dialog = inject(MatDialog);
  selectedData: any;
  data = [
    {
      name: 'Valérie F.',
      citation:
        'Notre fils a adoré les deux années culture générale en CM1 et en CM2 avec Olivier. Il a réussi à l’intéresser à beaucoup de sujets, et cela suscite de bonnes discussions à la maison',
    },
    {
      name: 'Evelyne D.',
      citation:
        'Ma fille et quatre de ses amis ont suivi l’atelier en classe de seconde. Elle a gagné en maturité intellectuelle et suit désormais l’actualité. L’atelier prépare bien pour l’option HGGSP en 1ère',
    },
    {
      name: 'Pierre R., CM2',
      citation:
        'Olivier explique bien les sujets, même ceux qui sont super compliqués, comme ce qui se passe en Israël et Palestine. On peut aussi choisir certains thèmes. On a parlé de l’histoire des jeux vidéos, des mangas, de cinéma, et on a même fait des débats.',
    },
  ];

  openDialog(number: number) {
    this.selectedData = this.data[number];
    this.dialog.open(DialogAvisComponent, {
      data: this.selectedData,
    });
  }
}
