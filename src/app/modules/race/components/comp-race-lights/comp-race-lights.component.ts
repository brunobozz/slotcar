import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServFunctionsService } from 'src/app/services/serv-functions/serv-functions.service';

@Component({
  selector: 'app-comp-race-lights',
  templateUrl: './comp-race-lights.component.html',
  styleUrls: ['./comp-race-lights.component.scss'],
})
export class CompRaceLightsComponent {
  @Input() lights: any;
  @Output() changeStatus = new EventEmitter();

  constructor(private functions: ServFunctionsService) {}

  public turnOff() {
    this.lights = ['', '', '', '', ''];
  }
  public turnOn() {
    this.lights = ['w', 'w', 'w', 'w', 'w'];
  }
  public turnRed() {
    this.lights = ['r', 'r', 'r', 'r', 'r'];
  }
  public turnYellow() {
    this.lights = ['y', 'y', 'y', 'y', 'y'];
  }
  public turnGreen() {
    this.lights = ['g', 'g', 'g', 'g', 'g'];
  }

  public halfGreen() {
    this.lights = ['g', '', 'g', '', 'g'];
  }

  public async fiveRedCount() {
    for (let i = 0; i < 4; i++) {
      await this.functions.delay(500);
      this.lights.push('r');
    }
    this.fiveGreenOnDelay();
  }

  public async fiveGreenOnDelay() {
    let randomTime = Math.floor(Math.random() * (6000 - 1000 + 1)) + 1000;
    await this.functions.delay(randomTime);
    this.changeStatus.emit('started');
    this.turnGreen();
  }

  public async blackAndWhite() {
    for (let i = 0; i < 5; i++) {
      this.lights = ['w', '', 'w', '', 'w'];
      await this.functions.delay(200);
      this.lights = ['', 'w', '', 'w', ''];
      await this.functions.delay(200);
    }
    this.turnOff();
  }
}
