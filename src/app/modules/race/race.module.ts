import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENTS
import { RaceComponent } from './race.component';
import { CompRaceLapTimerComponent } from './components/comp-race-lap-timer/comp-race-lap-timer.component';
import { CompRaceListLapComponent } from './components/comp-race-list-lap/comp-race-list-lap.component';
import { CompRaceFastestLapComponent } from './components/comp-race-fastest-lap/comp-race-fastest-lap.component';

@NgModule({
  declarations: [
    //COMPONENTS
    RaceComponent,
    CompRaceLapTimerComponent,
    CompRaceListLapComponent,
    CompRaceFastestLapComponent,
  ],
  imports: [CommonModule],
})
export class RaceModule {}
