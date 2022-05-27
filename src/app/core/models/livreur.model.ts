import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class Livreur {
  code: string;
  first_name: string;
  last_name: string;
  phone: string;
  departure_point: string;
  arrival_point: string;
  app_acces_email: string;
  end_rest_slots: Timestamp<number>;
  Status: string;
  type: string;

  constructor() {}
}
