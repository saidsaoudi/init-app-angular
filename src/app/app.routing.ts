import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { AdminComponent } from './shared/layouts/admin/admin.component';
import { AuthGuard, LoginGuard } from './core/guards';
import { ROUTES } from './config';
import { NgModule } from '@angular/core';
import {
  HomeComponent,
  DashboardComponent,
  UtilisateursComponent,
  VehiclesComponent,
} from './modules';
// import { AuthGuard } from './helpers';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard],
  },
  // otherwise redirect to home
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: ROUTES['home'].path,
        component: HomeComponent,
        data: { route: ROUTES['home'].name },
        canActivate: [AuthGuard],
      },
      {
        path: ROUTES['dashboard'].path,
        component: DashboardComponent,
        data: { route: ROUTES['dashboard'].name },
        canActivate: [AuthGuard],
      },
      {
        path: ROUTES['vehicles'].path,
        component: VehiclesComponent,
        data: { route: ROUTES['vehicles'].name },
        canActivate: [AuthGuard],
      },
      {
        path: ROUTES['utilisateurs'].path,
        component: UtilisateursComponent,
        data: { route: ROUTES['utilisateurs'].name },
        canActivate: [AuthGuard],
      },
      {
        path: ROUTES['colis'].path,
        loadChildren: () =>
          import('./modules/colis/colis.module').then((mod) => mod.ColisModule),
        canActivate: [AuthGuard],
      },
      {
        path: ROUTES['tournees'].path,
        loadChildren: () =>
          import('./modules/tournees/tournees.module').then(
            (mod) => mod.TourneesModule
          ),
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class appRoutingModule {}
