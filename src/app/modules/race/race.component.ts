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
  public P1: any = {
    driver: null,
    car: null,
    laps: [],
  };
  public P2: any = {
    driver: null,
    car: null,
    laps: [],
  };
  public playerSelected!: string;
  public firstLapP1 = true;
  public firstLapP2 = true;
  public raceStatus = 'reseted';
  public lights: any = [];

  constructor(
    private servApi: ServMovkApiService,
    private socketIo: ServSocketioService,
    private functions: ServFunctionsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.listenLap();
  }

  //seleciona player
  public setPlayer(event: any) {
    this.servApi.getData('/drivers/' + event.driver).subscribe((res: any) => {
      if (event.player == 'P1') {
        this.P1.driver = res;
      }
      if (event.player == 'P2') {
        this.P2.driver = res;
      }
    });
    this.servApi.getData('/cars/' + event.car).subscribe((res: any) => {
      if (event.player == 'P1') {
        this.P1.car = res;
      }
      if (event.player == 'P2') {
        this.P2.car = res;
      }
    });
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
      if (!this.firstLapP1) {
        this.P1.laps.push(thisLap[1]);
      }
      this.firstLapP1 = false;
    }
    // se for P2
    if (thisLap[0] === 'P2') {
      if (!this.firstLapP2) {
        this.P2.laps.push(thisLap[1]);
      }
      this.firstLapP2 = false;
    }
  }

  async startRace() {
    this.raceStatus = 'releasing';
    // luzes vermelhas
    for (let i = 0; i < 5; i++) {
      await this.functions.delay(1000);
      this.lights.push('r');
    }
    // luz verde com um tempo sutil randomico
    let randomTime = Math.floor(Math.random() * (6000 - 1000 + 1)) + 1000;
    await this.functions.delay(randomTime);
    this.lights = ['g', 'g', 'g', 'g', 'g'];
    this.raceStatus = 'started';
  }

  public stopRace() {
    this.raceStatus = 'stopped';
  }

  public resetRace() {
    if (confirm('Tem certeza que quer resetar a corrida?') == true) {
      this.raceStatus = 'reseted';
      this.toastr.info('Corrida resetada');
      this.firstLapP1 = true;
      this.firstLapP2 = true;
      this.P1.laps = [];
      this.P2.laps = [];
      this.lights = [];
    }
  }
}
