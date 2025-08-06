import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  constructor() {}

  menuVisibleOnMobile: boolean = false;

  onMenuVisible() {
    this.menuVisibleOnMobile = !this.menuVisibleOnMobile;
  }
}
