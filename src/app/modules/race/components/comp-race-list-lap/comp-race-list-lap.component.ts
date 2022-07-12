import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  IterableDiffers,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-comp-race-list-lap',
  templateUrl: './comp-race-list-lap.component.html',
  styleUrls: ['./comp-race-list-lap.component.scss'],
})
export class CompRaceListLapComponent implements DoCheck {
  @Input() player: any;
  public bestLap: number = 0;
  public worstLap: number = 0;
  private iterableDiffer: any;
  @Output() deleteLap = new EventEmitter();

  constructor(private iterableDiffers: IterableDiffers) {
    this.iterableDiffer = iterableDiffers.find([]).create();
  }

  // verifica se o array recebeu uma volta nova
  ngDoCheck() {
    const changes = this.iterableDiffer.diff(this.player.laps);
    if (changes) {
      // pega o menor tempo e coloca na variavel (bestLap)
      this.verifyLaps();
    }
  }

  public verifyLaps() {
    this.bestLap = Math.min(...this.player.laps);
    this.worstLap = Math.max(...this.player.laps);
  }

  public async delete(index: number) {
    await this.player.laps.splice(index, 1);
    this.deleteLap.emit(this.player);
  }
}
