import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//ROUTES
import { RouteCarsComponent } from './routes/route-cars/route-cars.component';
import { RouteDriversComponent } from './routes/route-drivers/route-drivers.component';
import { RouteHomeComponent } from './routes/route-home/route-home.component';
import { RaceComponent } from './modules/race/race.component';

const routes: Routes = [
  { path: 'home', component: RouteHomeComponent },
  { path: 'cars', component: RouteCarsComponent },
  { path: 'drivers', component: RouteDriversComponent },
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
