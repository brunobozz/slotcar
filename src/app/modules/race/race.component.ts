import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServSocketioService } from 'src/app/services/serv-socketio/serv-socketio.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
})
export class RaceComponent implements OnInit {
  public lapsP1: any = [];
  public lapsP2: any = [];
  public firstLap = true;
  public raceStatus = 'reseted';
  public lights: any = [];

  constructor(
    private socketIo: ServSocketioService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.listenLap();
  }

  private listenLap() {
    this.socketIo.listen().subscribe((res: any) => {
      let theLap = res.split('\r');
      theLap = theLap[0].split('-');
      if (!this.firstLap) {
        if (theLap[0] === 'P1') {
          this.lapsP1.push(theLap[1]);
        } else if (theLap[0] === 'P2') {
          this.lapsP2.push(+theLap[1]);
        }
      }
      this.firstLap = false;
    });
  }

  async startRace() {
    this.raceStatus = 'releasing';
    for (let i = 0; i < 5; i++) {
      console.log('to no for');
      await this.delay(1000);
      this.lights.push('r');
    }
    let randomTime = Math.floor(Math.random() * (6000 - 1000 + 1)) + 1000;
    await this.delay(randomTime);
    this.lights = ['g', 'g', 'g', 'g', 'g'];
    this.raceStatus = 'started';
  }

  public stopRace() {
    this.raceStatus = 'stopped';
  }

  public resetRace() {
    if (confirm('Tem certeza que quer resetar a corrida?') == true) {
      this.toastr.error('Corrida resetada');
      this.firstLap = true;
      this.lapsP1 = [];
      this.lapsP2 = [];
      this.lights = [];
      this.raceStatus = 'reseted';
    }
  }

  private delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
