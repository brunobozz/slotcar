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
    config: {
      players: 2,
      laps: 5,
    },
    status: 'reseted',
    track: '',
    players: [
      {
        firstLap: true,
        driver: null,
        car: null,
        laps: [],
      },
      {
        firstLap: true,
        driver: null,
        car: null,
        laps: [],
      },
    ],
  };

  public playerSelected!: string;
  @ViewChild(CompRaceLightsComponent) raceLights!: CompRaceLightsComponent;
  public lights: any = [];

  constructor(
    private servApi: ServMovkApiService,
    private socketIo: ServSocketioService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.listenLap();
    this.getLocalStorage();
  }

  //seleciona player
  public setPlayer(event: any) {
    this.servApi.getData('/drivers/' + event.driver).subscribe((res: any) => {
      if (event.player == 'P1') {
        this.race.players[0].driver = res;
        localStorage.setItem('P1 driver', JSON.stringify(res));
      }
      if (event.player == 'P2') {
        this.race.players[1].driver = res;
        localStorage.setItem('P2 driver', JSON.stringify(res));
      }
    });
    this.servApi.getData('/cars/' + event.car).subscribe((res: any) => {
      if (event.player == 'P1') {
        this.race.players[0].car = res;
        localStorage.setItem('P1 car', JSON.stringify(res));
      }
      if (event.player == 'P2') {
        this.race.players[1].car = res;
        localStorage.setItem('P2 car', JSON.stringify(res));
      }
    });
  }

  private getLocalStorage() {
    this.race.players[0].driver = JSON.parse(
      localStorage.getItem('P1 driver') || '{}'
    );
    this.race.players[0].car = JSON.parse(
      localStorage.getItem('P1 car') || '{}'
    );
    this.race.players[1].driver = JSON.parse(
      localStorage.getItem('P2 driver') || '{}'
    );
    this.race.players[1].car = JSON.parse(
      localStorage.getItem('P2 car') || '{}'
    );
  }

  public changeNumberPlayers() {
    if (this.race.config.players == 1) {
      this.race.config.players = 2;
    } else {
      this.race.config.players = 1;
    }
  }

  // escuta a volta marcada
  private listenLap() {
    this.socketIo.listen().subscribe((res: any) => {
      let theLap = res.split('\r');
      theLap = theLap[0].split('-');
      if (this.race.status == 'started') {
        // chama a gravação da volta para cada player
        if (
          this.race.players[theLap[0]].laps.length + 1 ==
          this.race.config.laps
        ) {
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

  private recordLap(theLap: any) {
    if (!this.race.players[theLap[0]].firstLap) {
      this.race.players[theLap[0]].laps.push(theLap[1]);
    }
    this.race.players[theLap[0]].firstLap = false;
  }

  private burnedRelease(theLap: any) {
    this.toastr.error(
      'Queimou a largada!',
      this.race.players[theLap[0]].driver.name
    );
  }

  private finishRace(theLap: any) {
    this.raceLights.blackAndWhite();
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
      case 'start':
        this.raceLights.fiveRedCount();
        break;
      case 'stop':
        this.raceLights.turnRed();
        this.raceStatus('stopped');
        break;
      case 'resume':
        this.raceLights.turnGreen();
        this.raceStatus('started');
        break;
      case 'reset':
        this.resetRace();
        this.raceStatus('reseted');
        this.toastr.info('Corrida resetada');
        break;
    }
  }

  public raceStatus(status: string) {
    this.race.status = status;
  }

  public resetRace() {
    if (confirm('Tem certeza que quer resetar a corrida?') == true) {
      this.race.players[0].firstLap = true;
      this.race.players[1].firstLap = true;
      this.race.players[0].laps = [];
      this.race.players[1].laps = [];
      this.lights = [];
    }
  }
}
