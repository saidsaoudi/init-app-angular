import { Livreur } from './../models/livreur.model';
import { LivreursState } from './livreurs/reducer/livreurs.reducer';
import { VehicleState } from './vehicle/vehicle.reducers';
export interface AppState {
  livreurs: LivreursState;
  vehicles: VehicleState;
}
