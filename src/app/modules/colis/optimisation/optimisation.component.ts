import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-optimisation',
  templateUrl: './optimisation.component.html',
  styleUrls: ['./optimisation.component.css'],
})
export class OptimisationColisComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('optimisation');
  }
}
