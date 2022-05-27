import { LivreurEffects } from './store/livreurs/effects/livreurs.effects';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthGuard, LoginGuard } from './guards';
import { appInitializer } from './helpers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AuthStateService,
  AuthService,
  HandleResponse,
  HeaderService,
  ToastService,
  TokenService,
  DynamicContentHeaderService,
  VehicleService,
  SidenavService,
} from './services';

import { VehicleEffects, vehicleReducer } from './store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('vehicles', vehicleReducer),
    EffectsModule.forFeature([VehicleEffects, LivreurEffects]),
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthStateService,
    AuthService,
    DynamicContentHeaderService,
    HandleResponse,
    HeaderService,
    ToastService,
    TokenService,
    AuthGuard,
    LoginGuard,
    EffectsModule,
    VehicleService,
    SidenavService,
  ],
  declarations: [],
  exports: [],
})
export class CoreModule {}
