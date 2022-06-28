import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';

//PIPES
import { TimePipe } from 'src/app/pipes/time.pipe';

//COMPONENTS
import { RaceComponent } from './race.component';
import { CompRaceLapTimerComponent } from './components/comp-race-lap-timer/comp-race-lap-timer.component';
import { CompRaceListLapComponent } from './components/comp-race-list-lap/comp-race-list-lap.component';
import { CompRaceFastestLapComponent } from './components/comp-race-fastest-lap/comp-race-fastest-lap.component';
import { CompRaceLightsComponent } from './components/comp-race-lights/comp-race-lights.component';
import { CompRacePlayerComponent } from './components/comp-race-player/comp-race-player.component';
import { CompRaceNavbarComponent } from './components/comp-race-navbar/comp-race-navbar.component';
import { CompRaceSelectPlayerModalComponent } from './components/comp-race-select-player-modal/comp-race-select-player-modal.component';

@NgModule({
  declarations: [
    //PIPES
    TimePipe,

    //COMPONENTS
    RaceComponent,
    CompRaceLapTimerComponent,
    CompRaceListLapComponent,
    CompRaceFastestLapComponent,
    CompRaceLightsComponent,
    CompRacePlayerComponent,
    CompRaceNavbarComponent,
    CompRaceSelectPlayerModalComponent,
  ],
  imports: [CommonModule, NgxMaskModule.forRoot(), ReactiveFormsModule],
})
export class RaceModule {}
