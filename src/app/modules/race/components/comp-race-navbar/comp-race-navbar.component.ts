import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comp-race-navbar',
  templateUrl: './comp-race-navbar.component.html',
  styleUrls: ['./comp-race-navbar.component.scss'],
})
export class CompRaceNavbarComponent {
  @Input() race: any;
  @Output() numberPlayers = new EventEmitter();
  @Output() raceAction = new EventEmitter();

  public numberOfPlayers() {
    this.numberPlayers.emit();
  }

  public action(action: string) {
    this.raceAction.emit(action);
  }
}
