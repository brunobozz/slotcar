import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServMovkApiService } from 'src/app/services/serv-mock/serv-movk-api.service';
import { ServSocketioService } from 'src/app/services/serv-socketio/serv-socketio.service';
import { CompRaceLightsComponent } from './components/comp-race-lights/comp-race-lights.component';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
})
export class RaceComponent implements OnInit {
  public race: any = {
    laps: 10,
    status: 'stopped',
    track: '',
    players: [
      {
        firstLap: true,
        driver: {},
        car: {},
        laps: [],
        speed: 0,
      },
    ],
  };
  public fast = {
    driver: 'FASTEST LAP',
    lap: '',
  };

  public playerSelected!: number;
  @ViewChild(CompRaceLightsComponent) raceLights!: CompRaceLightsComponent;
  public lights: any = [];

  constructor(
    private servApi: ServMovkApiService,
    private socketIo: ServSocketioService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.listenLap();
    // localStorage.setItem('race', JSON.stringify(this.race));
    // localStorage.clear();
    this.getLocalStorage();
  }

  private getLocalStorage() {
    if (localStorage.getItem('race')) {
      this.race = JSON.parse(localStorage.getItem('race') || '{}');
    }
  }

  //seleciona player
  public async setPlayer(event: any) {
    this.servApi.getData('/drivers/' + event.driver).subscribe((res: any) => {
      this.race.players[event.player].driver = res;
      this.servApi.getData('/cars/' + event.car).subscribe((res: any) => {
        this.race.players[event.player].car = res;
        localStorage.setItem('race', JSON.stringify(this.race));
      });
    });
  }

  public raceConfig(config: any) {
    switch (config.name) {
      case 'laps':
        this.race.laps = this.race.laps + config.num;
        localStorage.setItem('race', JSON.stringify(this.race));
        break;
      case 'players':
        if (config.num > 0) {
          this.race.players.push({
            firstLap: true,
            driver: {},
            car: {},
            laps: [],
            speed: 0,
          });
        } else {
          this.race.players.pop();
        }
        localStorage.setItem('race', JSON.stringify(this.race));
        break;
    }
  }

  // escuta a volta marcada
  private listenLap() {
    this.socketIo.listen().subscribe((res: any) => {
      let data = res.split('\r');
      data = data[0].split('-');

      if (data[0] === 'V') {
        this.race.players[data[1]].speed = 0;
        this.race.players[data[1]].speed = +data[2];
      }

      let theLap = data;

      if (theLap[1])
        if (this.race.status == 'free') {
          this.recordLap(theLap);
        } else if (this.race.status == 'started') {
          // chama a gravação da volta para cada player
          if (this.race.players[theLap[1]].laps.length + 1 == this.race.laps) {
            this.recordLap(theLap);
            this.finishRace(theLap);
          } else {
            this.recordLap(theLap);
          }
        } else if (this.race.status == 'releasing') {
          // chama queimou a largada
          this.burnedRelease(theLap);
        }
    });
  }

  // grava a volta
  private recordLap(theLap: any) {
    console.log('grava volta');
    if (theLap[0] == 'T') {
      console.log(theLap);
      const player = this.race.players[theLap[1]];
      if (player?.firstLap !== undefined) {
        if (!player.firstLap) {
          player.laps.push(theLap[2]);
          this.setFastest();
        }
        player.firstLap = false;
      }
    }
  }

  // verifica a volta maos rápida
  private setFastest() {
    this.race.players.map((player: any) => {
      player.laps.map((lap: any) => {
        if (+lap < +this.fast.lap || this.fast.lap == '') {
          this.fast.lap = lap;
          this.fast.driver = player.driver.name;
        }
      });
    });
  }

  // deleta a volta do player certo e recalcula melhor volta
  public deleteLap(player: any) {
    const found = this.race.players.findIndex(
      (element: any) => element.driver.name == player.driver.name
    );
    this.race.players[found] = player;
    this.fast.lap = '';
    this.fast.driver = '- FASTEST LAP';
    this.setFastest();
  }

  private burnedRelease(theLap: any) {
    this.toastr.error(
      'Queimou a largada!',
      this.race.players[theLap[0]].driver.name
    );
  }

  private finishRace(theLap: any) {
    this.raceLights.blackAndWhite();
    this.raceStatus('finished');
    this.toastr.success(
      'GANHOOOOOU!!!',
      this.race.players[theLap[0]].driver.name,
      {
        timeOut: 10000,
      }
    );
  }

  public raceAction(action: any) {
    console.log(action);
    switch (action) {
      case 'free':
        this.raceLights.halfGreen();
        this.raceStatus('free');
        break;
      case 'start':
        this.raceLights.fiveRedCount();
        this.raceStatus('releasing');
        break;
      case 'stop':
        this.resetRace();
        this.raceLights.turnRed();
        this.raceStatus('stopped');
        this.toastr.info('Corrida resetada');
        break;
    }
  }

  public raceStatus(status: string) {
    this.race.status = status;
  }

  public resetRace() {
    this.race.players.map((player: any) => {
      player.firstLap = true;
      player.laps = [];
      player.speed = 0;
    });
    this.lights = [];
    this.fast.driver = '- FASTEST LAP';
    this.fast.lap = '';
  }
}
