import { LivreursState } from './../reducer/livreurs.reducer';
import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.states';

export const appSelectLivreurs = (state: AppState) => state.livreurs;
export const selectAllLivreurs = createSelector(
  appSelectLivreurs,
  (state: LivreursState) => state.livreurs
);
