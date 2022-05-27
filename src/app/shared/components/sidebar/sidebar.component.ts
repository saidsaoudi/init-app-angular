import { Component, OnInit, Input } from '@angular/core';
import { IMenu } from '../../../core/interface/IMenu';
import { MENU, ROUTES, USER_SlUG } from '../../../config';
import { AuthService } from './../../../core';
import { onSideNavChange, animateText } from '../../animations/animations';
import { SidenavService } from '../../../core/services/sidenav.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [onSideNavChange, animateText],
})
export class SidebarComponent implements OnInit {
  menuList: IMenu[];
  @Input() sidenavWidth;
  @Input() callapsed;

  public sideNavState: boolean = false;
  public linkText: boolean = false;

  constructor(
    public authService: AuthService,
    private _sidenavService: SidenavService
  ) {}

  ngOnInit(): void {
    this.menuList = MENU;
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState;

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200);
    this._sidenavService.sideNavState$.next(this.sideNavState);
  }

  logout() {
    this.authService.logout();
  }
}
