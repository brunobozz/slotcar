import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp-cdt-cars-list',
  templateUrl: './comp-cdt-cars-list.component.html',
  styleUrls: ['./comp-cdt-cars-list.component.scss'],
})
export class CompCdtCarsListComponent {
  @Input() cars: any;
}
