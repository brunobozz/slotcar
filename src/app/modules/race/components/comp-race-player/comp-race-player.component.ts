import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-race-player',
  templateUrl: './comp-race-player.component.html',
  styleUrls: ['./comp-race-player.component.scss'],
})
export class CompRacePlayerComponent {
  @Input() driver: any;
  @Input() car: any;
}
