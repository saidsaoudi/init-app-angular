import { createAction, props } from '@ngrx/store';
import { Livreur } from './../../../models';

export const loadLivreurs = createAction('[Livreur] Load Livreurs');

export const loadLivreursSuccess = createAction(
  '[Livreur] Load Livreurs Success',
  props<{ livreurs: Livreur[] }>()
);

export const loadLivreursFailure = createAction(
  '[Livreur] Load Livreurs Failure',
  props<{ error: any }>()
);
