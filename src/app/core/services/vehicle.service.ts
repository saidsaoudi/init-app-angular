import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Config } from '../../config';
import { Vehicle } from '../models';
@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private http: HttpClient) {}

  getListVehicles(): Observable<Vehicle[]> {
    console.log('services  vh');
    return this.http.get<Vehicle[]>(Config.api.vehicle.list);
  }
}
