import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';

//PIPES
import { TimePipe } from 'src/app/pipes/time.pipe';

//COMPONENTS
import { RaceComponent } from './race.component';
import { CompRaceLapTimerComponent } from './components/comp-race-lap-timer/comp-race-lap-timer.component';
import { CompRaceListLapComponent } from './components/comp-race-list-lap/comp-race-list-lap.component';
import { CompRaceFastestLapComponent } from './components/comp-race-fastest-lap/comp-race-fastest-lap.component';

@NgModule({
  declarations: [
    //PIPES
    TimePipe,

    //COMPONENTS
    RaceComponent,
    CompRaceLapTimerComponent,
    CompRaceListLapComponent,
    CompRaceFastestLapComponent,
  ],
  imports: [CommonModule, NgxMaskModule.forRoot()],
})
export class RaceModule {}
