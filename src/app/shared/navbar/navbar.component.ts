import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  opened!: boolean;

  constructor() { }

  ngOnInit() {
  }

  clickHandler() {
    this.sidenav.close();
  }
}
