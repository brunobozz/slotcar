import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';

//COMPONENTS
import { CdtComponent } from './cdt.component';
import { CompCdtTabComponent } from './components/comp-cdt-tab/comp-cdt-tab.component';

//ROUTES
import { RouteCarsComponent } from './routes/route-cars/route-cars.component';
import { RouteDriversComponent } from './routes/route-drivers/route-drivers.component';
import { RouteTracksComponent } from './routes/route-tracks/route-tracks.component';

@NgModule({
  declarations: [
    CdtComponent,

    //COMPONENTS
    CompCdtTabComponent,

    //ROUTES
    RouteCarsComponent,
    RouteDriversComponent,
    RouteTracksComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
})
export class CdtModule {}
