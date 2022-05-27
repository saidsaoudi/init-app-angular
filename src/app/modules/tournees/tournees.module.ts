import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../config';
import { TourneesComponent } from './tournees.component';
import { DetailsTourComponent } from './details/details.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

export const tourneesRoutes: Routes = [
  {
    path: '',
    component: TourneesComponent,
    data: { route: ROUTES['tournees'].name },
  },
  {
    path: ROUTES['tournees.detail'].path,
    component: DetailsTourComponent,
    data: { route: ROUTES['tournees.detail'].name },
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(tourneesRoutes),
    SharedModule,
    // RouterModule
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [TourneesComponent, DetailsTourComponent],
  //   exports: [RouterModule]
})
export class TourneesModule {}
