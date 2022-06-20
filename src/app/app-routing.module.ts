import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//ROUTES
import { HomeComponent } from './modules/home/home.component';
import { RaceComponent } from './modules/race/race.component';
import { CdtComponent } from './modules/cdt/cdt.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cars', component: CdtComponent },
  { path: 'drivers', component: CdtComponent },
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
