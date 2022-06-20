import { Component } from '@angular/core';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
})
export class RaceComponent {
  public lapsRecord: any = [];
  public lap = {
    number: 1,
    minute: 0,
    second: 0,
    millisecond: 0,
    totalMilliseconds: 0,
  };
  public fastestLap = { ...this.lap };
  public cron: any;

  public start() {
    this.pause();
    this.cron = setInterval(() => {
      this.timer();
    }, 1);
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
    this.lap.totalMilliseconds += 1;

    if ((this.lap.millisecond += 1) == 1000) {
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
    this.lapsRecord.unshift(currentLap);
    this.lap.number = this.lap.number + 1;
    if (
      this.fastestLap.totalMilliseconds > currentLap.totalMilliseconds ||
      this.fastestLap.totalMilliseconds == 0
    ) {
      this.fastestLap = currentLap;
    }
    this.reset();
    this.start();
  }
}
