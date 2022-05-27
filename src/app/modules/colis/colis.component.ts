import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colis',
  templateUrl: './colis.component.html',
  styleUrls: ['./colis.component.css'],
})
export class ColisComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('colis component');
  }
}
