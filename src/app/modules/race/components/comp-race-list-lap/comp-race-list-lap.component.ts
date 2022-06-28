import { Component, DoCheck, Input, IterableDiffers } from '@angular/core';

@Component({
  selector: 'app-comp-race-list-lap',
  templateUrl: './comp-race-list-lap.component.html',
  styleUrls: ['./comp-race-list-lap.component.scss'],
})
export class CompRaceListLapComponent implements DoCheck {
  @Input() lapsList: any;
  public bestLap: number = 0;
  public worstLap: number = 0;
  private iterableDiffer: any;

  constructor(private iterableDiffers: IterableDiffers) {
    this.iterableDiffer = iterableDiffers.find([]).create();
  }

  // verifica se o array recebeu uma volta nova
  ngDoCheck() {
    const changes = this.iterableDiffer.diff(this.lapsList);
    if (changes) {
      // pega o menor tempo e coloca na variavel (bestLap)
      this.bestLap = Math.min(...this.lapsList);
      this.worstLap = Math.max(...this.lapsList);
    }
  }
}
