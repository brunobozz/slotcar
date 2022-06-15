import { Component, OnInit } from '@angular/core';
import { ServThemeService } from '../../services/serv-theme/serv-theme.service';

@Component({
  selector: 'app-comp-theme-switcher',
  templateUrl: './comp-theme-switcher.component.html',
})
export class CompThemeSwitcherComponent implements OnInit {
  public currentTheme: string = '';

  constructor(private theme: ServThemeService) {}

  ngOnInit(): void {
    this.currentTheme = this.theme.current
  }

  public switchTheme(): void {
    if (this.theme.current === 'light') {
      this.theme.current = 'dark';
      this.currentTheme = 'dark';
    } else {
      this.theme.current = 'light';
      this.currentTheme = 'light';
    }
  }
}
