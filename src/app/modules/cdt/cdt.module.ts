import { NgModule } from '@angular/core';

//IMPORTS
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

//COMPONENTS
import { CdtComponent } from './cdt.component';
import { CompCdtTabComponent } from './components/comp-cdt-tab/comp-cdt-tab.component';
import { CompCdtTitleComponent } from './components/comp-cdt-title/comp-cdt-title.component';
import { CompCdtCarsListComponent } from './routes/route-cars/components/comp-cdt-cars-list/comp-cdt-cars-list.component';
import { CompCdtCarsAddModalComponent } from './routes/route-cars/components/comp-cdt-cars-add-modal/comp-cdt-cars-add-modal.component';

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
    CompCdtCarsAddModalComponent,

    //ROUTES
    RouteCarsComponent,
    RouteDriversComponent,
    RouteTracksComponent,
  ],
  imports: [CommonModule, AppRoutingModule, ReactiveFormsModule],
})
export class CdtModule {}
