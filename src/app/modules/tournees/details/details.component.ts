import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-tour',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsTourComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('details tour');
  }
}
