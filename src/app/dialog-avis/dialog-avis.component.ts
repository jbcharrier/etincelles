import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  name: string;
  citation: string;
}

@Component({
  selector: 'app-dialog-avis',
  templateUrl: './dialog-avis.component.html',
  styleUrl: './dialog-avis.component.scss'
})
export class DialogAvisComponent {
  readonly dialogRef = inject(MatDialogRef<DialogAvisComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
}
