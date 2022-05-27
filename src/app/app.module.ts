import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { appRoutingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColisModule, TourneesModule } from './modules';
import { appInitializer, AuthService } from './core';
import { VehiclesComponent } from './modules/vehicles/vehicles.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { LivreursComponent } from './modules/livreurs/livreurs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VehiclesComponent,
    LivreursComponent,
    // HomeComponent,
    // DashboardComponent,
    // ColisComponent,
    // OptimisationColisComponent,
    // TourneesComponent,
    // DetailsTourComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    appRoutingModule,
    FormsModule,
    ColisModule,
    TourneesModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
      deps: [AuthService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
