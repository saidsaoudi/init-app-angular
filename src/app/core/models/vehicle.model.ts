export class Vehicle {
  uuid: string;
  id: string;
  type: string;
  volume: string;
  matricule: string;
  km_cumule: string;

  constructor(vehicle: any = null) {
    if (vehicle) {
      this.uuid = vehicle.uuid;
      this.id = vehicle.id;
      this.type = vehicle.type;
      this.volume = vehicle.volume;
      this.matricule = vehicle.matricule;
      this.km_cumule = vehicle.km_cumule;
    }
  }
}
