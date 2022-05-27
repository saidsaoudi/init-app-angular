export interface IMenu {
  isMenu: boolean;
  parentMenu: string;
  sidebarName: string;
  routeName: string;
  icon: string;
  name: string;
  role: string[];
  id_group: number;
  hasBtn: boolean;
  target: string;
  children: IMenuItem[];
}
export interface IMenuItem {
  isMenu: boolean;
  parentMenu: string;
  sidebarName: string;
  routeName: string;
  icon: string;
  name: string;
  role: string[];
  id_group: number;
  hasBtn: boolean;
  target: string;
}
