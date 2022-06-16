import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-race',
  templateUrl: './route-race.component.html',
  styleUrls: ['./route-race.component.scss'],
})
export class RouteRaceComponent implements OnInit {
  public lapsRecord: any = [];

  public lap = {
    minute: 0,
    second: 0,
    millisecond: 0,
    totalMilliseconds: 0,
  };

  public fastestLap = { ...this.lap };

  public cron: any;

  constructor() {}

  ngOnInit(): void {}

  public start() {
    this.pause();
    this.cron = setInterval(() => {
      this.timer();
    }, 10);
  }

  public reset() {
    this.lap.minute = 0;
    this.lap.second = 0;
    this.lap.millisecond = 0;
    this.lap.totalMilliseconds = 0;
  }

  public pause() {
    clearInterval(this.cron);
  }

  private timer() {
    this.lap.totalMilliseconds += 10;

    if ((this.lap.millisecond += 10) == 1000) {
      this.lap.millisecond = 0;
      this.lap.second++;
    }
    if (this.lap.second == 60) {
      this.lap.second = 0;
      this.lap.minute++;
    }
  }

  public set() {
    let currentLap = { ...this.lap };
    this.lapsRecord.push(currentLap);
    if (
      this.fastestLap.totalMilliseconds > currentLap.totalMilliseconds ||
      this.fastestLap.totalMilliseconds == 0
    )
      this.fastestLap = currentLap;
    this.reset();
    this.start();
  }
}
