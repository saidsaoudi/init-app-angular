import { LivreursService } from './../../../services/livreurs/livreurs.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadLivreurs,
  loadLivreursSuccess,
  loadLivreursFailure,
} from '../actions/livreurs.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';

@Injectable()
export class LivreurEffects {
  //!TODO :to be removed
  constructor(
    private actions$: Actions,
    private livreursService: LivreursService // private store: Store<AppState>
  ) {}

  loadLivreurs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadLivreurs),
      switchMap(() => {
        return from(this.livreursService.get()).pipe(
          map((result: any) => {
            console.log('jjjjjjjjjj', result.response);
            const livreurs = result.response.delivery_men || [];
            return loadLivreursSuccess({ livreurs });
          }),
          catchError((error) => of(loadLivreursFailure({ error })))
        );
      })
    )
  );
}
