import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteCarsComponent } from './routes/route-cars/route-cars.component';
import { RouteHomeComponent } from './routes/route-home/route-home.component';

const routes: Routes = [
  { path: 'home', component: RouteHomeComponent },
  { path: 'cars', component: RouteCarsComponent },
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
