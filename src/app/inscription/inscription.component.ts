import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss',
})
export class InscriptionComponent {
  public screenWidth: any;

  ngOnInit() {
    this.screenWidth = window.innerWidth - 30;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth - 30;
  }
}
