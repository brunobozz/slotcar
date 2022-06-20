import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//ROUTES
import { HomeComponent } from './modules/home/home.component';
import { RaceComponent } from './modules/race/race.component';
import { CdtComponent } from './modules/cdt/cdt.component';
import { RouteCarsComponent } from './modules/cdt/routes/route-cars/route-cars.component';
import { RouteDriversComponent } from './modules/cdt/routes/route-drivers/route-drivers.component';
import { RouteTracksComponent } from './modules/cdt/routes/route-tracks/route-tracks.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'cdt',
    component: CdtComponent,
    children: [
      { path: 'cars', component: RouteCarsComponent },
      { path: 'drivers', component: RouteDriversComponent },
      { path: 'tracks', component: RouteTracksComponent },
    ],
  },
  { path: 'race', component: RaceComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
