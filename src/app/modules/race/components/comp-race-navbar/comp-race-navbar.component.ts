import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comp-race-navbar',
  templateUrl: './comp-race-navbar.component.html',
  styleUrls: ['./comp-race-navbar.component.scss'],
})
export class CompRaceNavbarComponent {
  @Input() race: any;
  @Output() raceConfig = new EventEmitter();
  @Output() raceAction = new EventEmitter();

  public config(name: string, num: number) {
    let config = { name, num };
    this.raceConfig.emit(config);
  }

  public action(action: string) {
    this.raceAction.emit(action);
  }

  public resetPlayers() {
    localStorage.clear();
  }
}
