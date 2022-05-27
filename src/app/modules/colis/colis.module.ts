import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../config';
import { ColisComponent } from './colis.component';
import { OptimisationColisComponent } from './optimisation/optimisation.component';
import { CommonModule } from '@angular/common';

export const colisRoutes: Routes = [
  {
    path: '',
    component: ColisComponent,
    data: { route: ROUTES['colis'].name },
  },
  {
    path: ROUTES['colis.optimisation'].path,
    component: OptimisationColisComponent,
    data: { route: ROUTES['colis.optimisation'].name },
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(colisRoutes),
    SharedModule,
    // RouterModule
  ],
  declarations: [ColisComponent, OptimisationColisComponent],
  //   exports: [RouterModule]
})
export class ColisModule {}
