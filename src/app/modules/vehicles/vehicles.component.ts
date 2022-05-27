import { Component, OnInit } from '@angular/core';
import { State } from '../../reducers/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Vehicle } from '../../core/models';
import { VehicleService } from '../../core/services';
import { loadVehicles, selectVehicles } from '../../core/store';
import { AppState } from '../../core/store/app.states';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent implements OnInit {
  vehicles$: any;
  loading: boolean = false;
  constructor(
    private vehicleService: VehicleService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadVehicles());
    this.getList();
  }

  getList() {
    this.loading = true;
    this.vehicles$ = this.store.select(selectVehicles).pipe(
      map((res) => {
        console.log('response', res);
        return res[0];
      })
    );
    // this.vehicles$ = this.vehicleService.getListVehicles().pipe(
    //   map((res) => {
    //     console.log(res);

    //     return res['response'].vehicles;
    //   })
    // );
    this.loading = false;
    console.log('vehicles ===>', this.vehicles$);
  }
}
