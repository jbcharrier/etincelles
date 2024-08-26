import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-formules',
  templateUrl: './formules.component.html',
  styleUrl: './formules.component.scss',
})
export class FormulesComponent {
  public screenWidth: any;
  public iframeHeight: any;

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.calculateHeight(this.screenWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    this.calculateHeight(this.screenWidth);
  }

  calculateHeight(width: number) {
    if(width > 1663){
      this.iframeHeight = 1500
    } else if (width > 1400){
      this.iframeHeight = 1800
    } else if (width > 1000){
      this.iframeHeight = 2000
    } else {
      this.iframeHeight = 2300
    }
  }
}
