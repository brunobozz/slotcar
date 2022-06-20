import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comp-cdt-tab',
  templateUrl: './comp-cdt-tab.component.html',
})
export class CompCdtTabComponent {
  @Input() links: any;
  public activated: any = 'cars';

  constructor(private location: Location, private router: Router) {
    this.router.events.subscribe(() => {
      if (this.location.path() !== '') {
        this.activated = location.path().split('/').pop();
      }
    });
  }
}
