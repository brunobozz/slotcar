import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp-cdt-tab',
  templateUrl: './comp-cdt-tab.component.html',
  styleUrls: ['./comp-cdt-tab.component.scss'],
})
export class CompCdtTabComponent {
  @Input() links: any;
}
