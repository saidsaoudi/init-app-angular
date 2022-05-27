import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VehicleState } from './vehicle.reducers';
import { AppState } from '../app.states';

const selectVehicleFeature = createFeatureSelector<AppState, VehicleState>(
  'vehicles'
);
export const selectVehicles = createSelector(selectVehicleFeature, (state) =>
  Object.keys(state).map((key) => state[key])
);
export const selectVehicle = createSelector(
  selectVehicleFeature,
  (state: VehicleState, props: { id: string }) => state[props.id]
);
