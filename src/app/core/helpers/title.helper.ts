import { MENU, ROUTES } from '../../config';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HeaderSetterHelper {
  private nodes: any;

  public constructor(private _title: Title, private _router: Router) {}

  public setTitleAndHeader() {
    this.setElementByRouteName();
    this.setPageTitle();
  }

  // Affecte un titre a la page courante depuis la constante MENU
  public setPageTitle() {
    if (this.nodes !== undefined && this.nodes !== null) {
      if (this.nodes.sidebarName === this.nodes.name) {
        this._title.setTitle(this.nodes.sidebarName);
      } else {
        this._title.setTitle(this.nodes.sidebarName + ' / ' + this.nodes.name);
      }
    }
  }

  // Affecte un menu breadcrumb pour une route donnée
  public setElementByRouteName() {
    const routeLink = this._router.url;
    // console.log('route link =====>', routeLink);
    for (let KEY in ROUTES) {
      // console.log('route name ===> ', ROUTES[KEY])
      // const regex = new RegExp('\^' + ROUTES[KEY]['route'] + '[\\/]?([[0-9a-zA-Z\-]*]*$)');
      //if (regex.test(routeLink)) {
      if (ROUTES[KEY]['route'] == routeLink) {
        this.nodes = this.getMenuItemByRouteName(ROUTES[KEY]['name']);
        // console.log('current node =====>', this.nodes)
        return this.nodes
          ? {
              title: this.nodes.name,
              icon: this.nodes.icon_title,
              route: ROUTES[KEY]['name'],
              component: this.nodes.header_component,
              style: this.nodes.style_header,
            }
          : null;
      }
    }
  }

  public getMenuItemByRouteName(routeName: string): any {
    let menu: any = null;
    for (const item of MENU) {
      if (item['routeName'] === routeName) {
        menu = item;
      }
    }

    return menu;
  }
}
