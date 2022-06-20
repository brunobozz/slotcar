import { Component } from '@angular/core';
import { menu } from './content/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public links = menu;
}
