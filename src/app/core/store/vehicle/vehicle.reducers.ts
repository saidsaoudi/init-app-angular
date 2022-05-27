import { Vehicle } from '../../models';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { vehicleActionTypes } from './vehicle.actions';

export interface VehicleState {
  vehicles: Vehicle[];
}

// export const vehicleFeatureKey = 'vehicle';

// export interface VehicleRootState {
//   [vehicleFeatureKey]: VehicleState;
// }

const initialState: VehicleState = {
  vehicles: [],
};

export const vehicleReducer = createReducer(
  initialState,
  on(vehicleActionTypes.loadVehicles, (state) => ({
    ...state,
  })),
  on(vehicleActionTypes.loadVehiclesSuccess, (state, { vehicles }) => {
    return {
      ...state,
      vehicles,
    };
  })
);
