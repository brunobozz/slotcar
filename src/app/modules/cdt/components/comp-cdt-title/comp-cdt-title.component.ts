import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp-cdt-title',
  templateUrl: './comp-cdt-title.component.html',
})
export class CompCdtTitleComponent {
  @Input() title: any;
  @Input() icon: any;
}
