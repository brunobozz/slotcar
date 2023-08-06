import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CompQuickLinkComponent } from './components/comp-quick-link/comp-quick-link.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [HomeComponent, CompQuickLinkComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class HomeModule {}
