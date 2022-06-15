import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-main-menu',
  templateUrl: './comp-main-menu.component.html',
  styleUrls: ['./comp-main-menu.component.scss'],
})
export class CompMainMenuComponent {
  public menuList: any = [
    { name: 'Home', link: 'home', icon: 'fa-home' },
    { name: 'Peoples', link: 'people', icon: 'fa-user' },
    { name: 'Films', link: 'films', icon: 'fa-film' },
  ];
}
