import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp-race-list-lap',
  templateUrl: './comp-race-list-lap.component.html',
  styleUrls: ['./comp-race-list-lap.component.scss'],
})
export class CompRaceListLapComponent {
  @Input() lapsRecord: any;
}
