import { Component, OnInit } from '@angular/core';
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

  constructor(private socketIo: ServSocketioService) {}

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

  public reset() {
    this.firstLap = true;
    this.lapsP1 = [];
    this.lapsP2 = [];
  }
}
