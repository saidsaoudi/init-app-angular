import { loadLivreurs } from './../../core/store/livreurs/actions/livreurs.actions';
import { AppState } from './../../core/store/app.states';
import { selectAllLivreurs } from './../../core/store/livreurs/selectors/livreurs.selectors';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Livreur } from 'app/core/models';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-livreurs',
  templateUrl: './livreurs.component.html',
  styleUrls: ['./livreurs.component.scss'],
})
export class LivreursComponent implements OnInit {
  loading: boolean = false;
  livreurs$: Observable<Livreur[]> = this.store.select(selectAllLivreurs);
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.loading = true;
    this.store.dispatch(loadLivreurs());
    this.livreurs$.subscribe((livreurs) => {
      console.log('lllllllll', livreurs);
    });
    this.loading = false;
    console.log('livreurs ===>', this.livreurs$);
  }
}
