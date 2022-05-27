export class User {
  email: string;
  avatar: string;
  langue: string;
  name: string;
  // full_name: string;
  // first_name: string;
  // last_name: string;
  role: string;

  constructor(user: any) {
    if (user) {
      this.name = user.name;
      // this.first_name = user.prenom;
      // this.last_name = user.nom;
      this.email = user.email;
      this.avatar = user.image;
      this.langue = user.langue;
      this.email = user.email;
      // this.full_name = user.prenom + ' ' + user.nom;
    }
  }
}
