import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  openSidebar: boolean = false;

  constructor() {
  }

  doggleSidebar() {
    this.openSidebar = !this.openSidebar;
  }

  doggleSidebarRout(): void {
    if (this.openSidebar === false) return;
    this.openSidebar = !this.openSidebar;

  }
}
