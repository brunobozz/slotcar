import {
  Component,
  DoCheck,
  Input,
  IterableDiffers,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'race-chronometer',
  templateUrl: './race-chronometer.component.html',
  styleUrls: ['./race-chronometer.component.scss'],
})
export class RaceChronometerComponent implements OnInit, DoCheck {
  @Input() laps: any;
  startTime: number = 0;
  elapsedTime = 0;
  timerInterval: any;
  formattedTime = '00:00.00';
  ittDiffer: any;

  constructor(private iterableDiffers: IterableDiffers) {
    this.ittDiffer = iterableDiffers.find([]).create();
  }
  ngOnInit(): void {}

  ngDoCheck() {
    let changes: any;
    changes = this.ittDiffer.diff(this.laps);
    if (changes) {
      this.resetTimer();
      this.startTimer();
    }
    if (this.laps.length == 0) {
      this.resetTimer();
    }
  }

  startTimer(): void {
    this.startTime = Date.now() - this.elapsedTime;
    this.timerInterval = setInterval(() => {
      this.updateTimer();
    }, 10); // Atualiza a cada 10 milissegundos
  }

  updateTimer(): void {
    const currentTime = Date.now();
    this.elapsedTime = currentTime - this.startTime;
    this.displayTime();
  }

  displayTime(): void {
    const minutes = Math.floor(this.elapsedTime / 60000);
    const seconds = Math.floor((this.elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((this.elapsedTime % 1000) / 10);

    this.formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  }

  resetTimer(): void {
    clearInterval(this.timerInterval);
    this.elapsedTime = 0;
    this.displayTime();
  }
}
