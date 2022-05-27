import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { routerReducer } from '@ngrx/router-store';
import { livreursReducer } from 'app/core/store/livreurs/reducer/livreurs.reducer';
import { environment } from '../../environments/environment';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  livreurs: livreursReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];
