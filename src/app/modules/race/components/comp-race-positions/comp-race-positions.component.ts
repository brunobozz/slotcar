import {
  Component,
  DoCheck,
  Input,
  IterableDiffers,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-comp-race-positions',
  templateUrl: './comp-race-positions.component.html',
  styleUrls: ['./comp-race-positions.component.scss'],
})
export class CompRacePositionsComponent implements DoCheck, OnInit {
  @Input() race: any;
  public positions: any;
  private ittDiffer: any;

  constructor(private iterableDiffers: IterableDiffers) {
    this.ittDiffer = iterableDiffers.find([]).create();
  }

  ngOnInit(): void {
    this.positions = [];
  }

  // verifica se o array players mudou
  ngDoCheck() {
    let changes: any;
    // faz o map para verificar todos players
    this.race.players.map((player: any) => {
      changes = this.ittDiffer.diff(player.laps);
    });
    if (changes) {
      // recalcula posições
      this.positions = [];
      this.createPositions();
    }
  }

  private createPositions() {
    this.race.players.map((player: any) => {
      let thisPlayer = {
        time: 0,
        laps: 0,
        difTime: 0,
        difLap: 0,
        name: player.driver.name,
      };
      player.laps.map((lap: string) => {
        thisPlayer.time = thisPlayer.time + +lap;
        thisPlayer.laps++;
      });
      this.positions.push(thisPlayer);
    });
    this.calcLaps();
  }

  // calcula e posiciona quem tem mais voltas
  private calcLaps() {
    this.positions.sort(function (a: any, b: any) {
      return b.laps - a.laps;
    });
    this.calcDif();
  }

  // calcula a diferença entre cada player se as voltas forem iguais
  private calcDif() {
    let lapAnt = 0;
    let timeAnt = 0;
    this.positions.map((player: any) => {
      if (lapAnt > player.laps) {
        player.difLap = +lapAnt - +player.laps;
      }
      if (lapAnt == player.laps) {
        player.difTime = +timeAnt - +player.time;
      }
      lapAnt = +player.laps;
      timeAnt = +player.time;
    });
  }
}
