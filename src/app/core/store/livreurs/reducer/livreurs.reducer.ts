import { Livreur } from './../../../models/livreur.model';
import {
  loadLivreurs,
  loadLivreursSuccess,
  loadLivreursFailure,
} from '../actions/livreurs.actions';
import { status } from './../../../helpers/consts/status';
import { createReducer, on } from '@ngrx/store';

export interface LivreursState {
  livreurs: Livreur[];
  loading: boolean;
  error: string;
  status: status;
}

const initialState: LivreursState = {
  livreurs: [],
  loading: false,
  error: '',
  status: status.PENDING,
};
export const livreursReducer = createReducer(
  initialState,
  on(loadLivreurs, (state) => ({
    ...state,
    loading: true,
    error: '',
    status: status.LOADING,
  })),
  on(loadLivreursSuccess, (state, { livreurs }) => ({
    ...state,
    livreurs,
    loading: false,
    error: '',
    status: status.SUCCESS,
  })),
  on(loadLivreursFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    status: status.ERROR,
  }))
);
