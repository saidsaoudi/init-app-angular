import { environment } from '../../environments/environment';

export class Config {
  private static url = environment.URL;

  public static get api(): any {
    const auth_url: string = this.url + 'auth';
    const vehicle_url: string = this.url + 'vehicles';
    // Auth
    return {
      auth: {
        login: auth_url + '/login',
        logout: auth_url + '/logout',
        me: auth_url + '/me',
      },
      vehicle: {
        list: vehicle_url,
      },
    };
  }
}
