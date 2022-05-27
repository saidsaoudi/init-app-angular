import { createAction, props } from '@ngrx/store';
import { Vehicle } from '../../models';

export const loadVehicles = createAction('[Vehicles List] Load Vehicles');
export const loadVehiclesSuccess = createAction(
  '[Vehicles List] Vehicles Loaded Successfully',
  props<{ vehicles }>()
);
export const loadVehiclesError = createAction(
  '[Vehicles List] Load Vehicles Error'
);

export const vehicleActionTypes = {
  loadVehicles,
  loadVehiclesSuccess,
  loadVehiclesError,
};
