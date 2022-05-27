import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournees',
  templateUrl: './tournees.component.html',
  styleUrls: ['./tournees.component.css'],
})
export class TourneesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('tournee ');
  }
}
