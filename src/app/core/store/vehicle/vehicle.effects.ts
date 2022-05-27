import { Injectable } from '@angular/core';
import { VehicleService } from './../../services/vehicle.service';
import { vehicleActionTypes } from './vehicle.actions';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  catchError,
  delay,
  map,
  switchMap,
  mergeMap,
  tap,
} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class VehicleEffects {
  constructor(
    private vehicleService: VehicleService,
    private actions$: Actions,
    private router: Router
  ) {}

  loadVehicles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(vehicleActionTypes.loadVehicles),
      switchMap(() =>
        this.vehicleService.getListVehicles().pipe(
          map((vehicles) => {
            console.log('----> vehicles', vehicles);
            vehicles = vehicles['response'].vehicles;
            return vehicleActionTypes.loadVehiclesSuccess({ vehicles });
          }),
          catchError(() => [vehicleActionTypes.loadVehiclesError()])
        )
      )
    )
  );
}
