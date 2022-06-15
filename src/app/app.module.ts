import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//COMPONENTS
import { CompMainFooterComponent } from './components/comp-main-footer/comp-main-footer.component';
import { CompMainMenuComponent } from './components/comp-main-menu/comp-main-menu.component';
import { CompMainNavbarComponent } from './components/comp-main-navbar/comp-main-navbar.component';
import { CompMainSidebarComponent } from './components/comp-main-sidebar/comp-main-sidebar.component';
import { CompThemeSwitcherComponent } from './components/comp-theme-switcher/comp-theme-switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    CompMainMenuComponent,
    CompMainSidebarComponent,
    CompMainNavbarComponent,
    CompMainFooterComponent,
    CompThemeSwitcherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      maxOpened: 2,
      autoDismiss: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
