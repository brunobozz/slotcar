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
      if (this.race.status == 'started') {
        let theLap = res.split('\r');
        theLap = theLap[0].split('-');
        //chama a gravação da volta para cada player
        if (!this.race.players[theLap[0]].firstLap) {
          this.race.players[theLap[0]].laps.push(theLap[1]);
        }
        this.race.players[theLap[0]].firstLap = false;
      }
    });
  }

  async startRace() {
    // this.race.status = 'releasing';
    // // luzes vermelhas
    // for (let i = 0; i < 5; i++) {
    //   await this.functions.delay(1000);
    //   this.lights.push('r');
    // }
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
      this.race.players[0].firstLap = true;
      this.race.players[1].firstLap = true;
      this.race.players[0].laps = [];
      this.race.players[1].laps = [];
      this.lights = [];
    }
  }
}
