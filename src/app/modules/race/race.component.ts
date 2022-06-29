import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServFunctionsService } from 'src/app/services/serv-functions/serv-functions.service';
import { ServMovkApiService } from 'src/app/services/serv-mock/serv-movk-api.service';
import { ServSocketioService } from 'src/app/services/serv-socketio/serv-socketio.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
})
export class RaceComponent implements OnInit {
  public race: any = {
    config: {
      players: 2,
      laps: 10,
    },
    status: 'reseted',
    track: '',
    P1: {
      firstLap: true,
      driver: null,
      car: null,
      laps: [],
    },
    P2: {
      firstLap: true,
      driver: {},
      car: {},
      laps: [],
    },
  };

  public playerSelected!: string;
  public lights: any = [];

  constructor(
    private servApi: ServMovkApiService,
    private socketIo: ServSocketioService,
    private functions: ServFunctionsService,
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
        this.race.P1.driver = res;
        localStorage.setItem('P1 driver', JSON.stringify(res));
      }
      if (event.player == 'P2') {
        this.race.P2.driver = res;
        localStorage.setItem('P2 driver', JSON.stringify(res));
      }
    });
    this.servApi.getData('/cars/' + event.car).subscribe((res: any) => {
      if (event.player == 'P1') {
        this.race.P1.car = res;
        localStorage.setItem('P1 car', JSON.stringify(res));
      }
      if (event.player == 'P2') {
        this.race.P2.car = res;
        localStorage.setItem('P2 car', JSON.stringify(res));
      }
    });
  }

  private getLocalStorage() {
    this.race.P1.driver = JSON.parse(localStorage.getItem('P1 driver') || '{}');
    this.race.P1.car = JSON.parse(localStorage.getItem('P1 car') || '{}');
    this.race.P2.driver = JSON.parse(localStorage.getItem('P2 driver') || '{}');
    this.race.P2.car = JSON.parse(localStorage.getItem('P2 car') || '{}');
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
      //chama a gravação da volta
      this.recordLap(theLap);
    });
  }

  private recordLap(thisLap: any) {
    // se for P1
    if (thisLap[0] === 'P1') {
      if (!this.race.P1.firstLap) {
        this.race.P1.laps.push(thisLap[1]);
      }
      this.race.P1.firstLap = false;
    }
    // se for P2
    if (thisLap[0] === 'P2') {
      if (!this.race.P2.firstLap) {
        this.race.P2.laps.push(thisLap[1]);
      }
      this.race.P2.firstLap = false;
    }
  }

  async startRace() {
    this.race.status = 'releasing';
    // luzes vermelhas
    for (let i = 0; i < 5; i++) {
      await this.functions.delay(1000);
      this.lights.push('r');
    }
    // luz verde com um tempo sutil randomico
    let randomTime = Math.floor(Math.random() * (6000 - 1000 + 1)) + 1000;
    await this.functions.delay(randomTime);
    this.lights = ['g', 'g', 'g', 'g', 'g'];
    this.race.status = 'started';
  }

  public stopRace() {
    this.race.status = 'stopped';
  }

  public resetRace() {
    if (confirm('Tem certeza que quer resetar a corrida?') == true) {
      this.race.status = 'reseted';
      this.toastr.info('Corrida resetada');
      this.race.P1.firstLap = true;
      this.race.P2.firstLap = true;
      this.race.P1.laps = [];
      this.race.P2.laps = [];
      this.lights = [];
    }
  }
}
