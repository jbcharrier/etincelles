import { Component, OnInit } from '@angular/core';
import moment, { Moment } from 'moment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  year: string = '';
  constructor() {}

  ngOnInit(): void {
    this.year = moment().format('MMMM YYYY');
  }
}
