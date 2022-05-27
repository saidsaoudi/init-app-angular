import { AuthService } from '../services';

// export function appInitializer(authenticationService: AuthenticationService) {
export function appInitializer(authService: AuthService) {
  return () =>
    new Promise((resolve) => {
      authService.me().subscribe((res) => {
        // authService.setUser(res)
        resolve(true);
      });
    });
}
