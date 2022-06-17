import { Component } from '@angular/core';
import { menu } from './menu';

@Component({
  selector: 'app-route-home',
  templateUrl: './route-home.component.html',
  styleUrls: ['./route-home.component.scss'],
})
export class RouteHomeComponent {
  public links = menu;
}
