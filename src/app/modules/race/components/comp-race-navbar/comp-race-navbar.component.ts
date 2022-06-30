import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comp-race-navbar',
  templateUrl: './comp-race-navbar.component.html',
  styleUrls: ['./comp-race-navbar.component.scss'],
})
export class CompRaceNavbarComponent {
  @Input() race: any;
  @Output() numberPlayers = new EventEmitter();
  @Output() startRace = new EventEmitter();
  @Output() stopRace = new EventEmitter();
  @Output() resetLaps = new EventEmitter();

  public numberOfPlayers() {
    this.numberPlayers.emit();
  }

  public start() {
    this.startRace.emit();
  }

  public stop() {
    this.stopRace.emit();
  }

  public reset() {
    this.resetLaps.emit();
  }
}
