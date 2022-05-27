import { Component, OnInit } from '@angular/core';
import { AuthService, ToastService } from './../../core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(public authService: AuthService, private toast: ToastService) {}

  ngOnInit(): void {
    console.log('dashboard component', this.authService.userValue);
    this.toast.info('Default Notification');
  }
}
