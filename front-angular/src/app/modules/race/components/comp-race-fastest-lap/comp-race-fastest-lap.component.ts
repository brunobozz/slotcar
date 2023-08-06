import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp-race-fastest-lap',
  templateUrl: './comp-race-fastest-lap.component.html',
  styleUrls: ['./comp-race-fastest-lap.component.scss'],
})
export class CompRaceFastestLapComponent {
  @Input() fast: any;
}
