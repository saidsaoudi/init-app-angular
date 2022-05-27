import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LivreursService {
  private URL = environment.URL + 'delivery-men';
  /**
   *
   */
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get(this.URL);
  }
}
