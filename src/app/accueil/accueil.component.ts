import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {
  public screenWidth: any;
  public onMobile: boolean = false;

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.evaluateMobile()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    this.evaluateMobile();
  }

  evaluateMobile(){
    this.onMobile = this.screenWidth < 746;
  }

}
