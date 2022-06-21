import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';

//COMPONENTS
import { CdtComponent } from './cdt.component';
import { CompCdtTabComponent } from './components/comp-cdt-tab/comp-cdt-tab.component';
import { CompCdtTitleComponent } from './components/comp-cdt-title/comp-cdt-title.component';
import { CompCdtCarsListComponent } from './components/comp-cdt-cars-list/comp-cdt-cars-list.component';

//ROUTES
import { RouteCarsComponent } from './routes/route-cars/route-cars.component';
import { RouteDriversComponent } from './routes/route-drivers/route-drivers.component';
import { RouteTracksComponent } from './routes/route-tracks/route-tracks.component';

@NgModule({
  declarations: [
    CdtComponent,

    //COMPONENTS
    CompCdtTitleComponent,
    CompCdtTabComponent,
    CompCdtCarsListComponent,

    //ROUTES
    RouteCarsComponent,
    RouteDriversComponent,
    RouteTracksComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
})
export class CdtModule {}
