/*
  Liste des noms des routes pour changer l'envoi des lien par nom de route et non pas par route
  path: [la route définit dans dans le fichier routing],
  route: [La route pour la navigation],
  name: [Nom de la route],
*/

export const ROUTES = {
  '404': {
    path: '404',
    route: '/404',
    name: '404',
  },
  login: {
    path: 'login',
    route: '/login',
    name: 'login',
  },
  dashboard: {
    path: 'dashboard',
    route: '/dashboard',
    name: 'dashboard',
  },
  utilisateurs: {
    path: 'utilisateurs',
    route: '/utilisateurs',
    name: 'utilisateurs',
  },
  home: {
    path: 'home',
    route: '/home',
    name: 'home',
  },
  tournees: {
    path: 'tournees',
    route: '/tournees',
    name: 'tournees',
  },
  'tournees.detail': {
    path: 'detail',
    route: '/tournees/detail',
    name: 'tournees.detail',
  },
  colis: {
    path: 'colis',
    route: '/colis',
    name: 'colis',
  },
  'colis.optimisation': {
    path: 'optimisation',
    route: '/colis/optimisation',
    name: 'colis.optimisation',
  },
  vehicles: {
    path: 'vehicles',
    route: '/vehicles',
    name: 'vehicles',
  },
  livreurs: {
    path: 'livreurs',
    route: '/livreurs',
    name: 'livreurs',
  },
};
