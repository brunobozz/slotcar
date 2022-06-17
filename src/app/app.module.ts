import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//COMPONENTS
import { CompMainFooterComponent } from './components/comp-main-footer/comp-main-footer.component';
import { CompMainMenuComponent } from './components/comp-main-menu/comp-main-menu.component';
import { CompMainNavbarComponent } from './components/comp-main-navbar/comp-main-navbar.component';
import { CompMainSidebarComponent } from './components/comp-main-sidebar/comp-main-sidebar.component';
import { CompThemeSwitcherComponent } from './components/comp-theme-switcher/comp-theme-switcher.component';

//ROUTES
import { RouteCarsComponent } from './routes/route-cars/route-cars.component';
import { RouteHomeComponent } from './routes/route-home/route-home.component';
import { RouteDriversComponent } from './routes/route-drivers/route-drivers.component';
import { RouteRaceComponent } from './routes/route-race/route-race.component';
import { CompQuickLinkComponent } from './components/comp-quick-link/comp-quick-link.component';

//MODULES
import { RaceModule } from './modules/race/race.module';

@NgModule({
  declarations: [
    AppComponent,

    //COMPONENTS
    CompMainMenuComponent,
    CompMainSidebarComponent,
    CompMainNavbarComponent,
    CompMainFooterComponent,
    CompThemeSwitcherComponent,

    //ROUTES
    RouteCarsComponent,
    RouteHomeComponent,
    RouteDriversComponent,
    RouteRaceComponent,
    CompQuickLinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      maxOpened: 2,
      autoDismiss: true,
    }),

    //MODULES
    RaceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
