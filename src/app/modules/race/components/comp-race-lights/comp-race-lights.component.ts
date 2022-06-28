import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp-race-lights',
  templateUrl: './comp-race-lights.component.html',
  styleUrls: ['./comp-race-lights.component.scss'],
})
export class CompRaceLightsComponent {
  @Input() lights: any;
}
