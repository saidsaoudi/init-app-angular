import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../config';
import { DashboardComponent } from './dashboard.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: { route: ROUTES['dashboard'].name },
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes),
    SharedModule,
    // RouterModule
  ],
  declarations: [DashboardComponent],
  //   exports: [RouterModule]
})
export class DashboardModule {}
