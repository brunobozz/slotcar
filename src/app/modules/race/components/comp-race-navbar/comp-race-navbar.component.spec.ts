import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompRaceNavbarComponent } from './comp-race-navbar.component';

describe('CompRaceNavbarComponent', () => {
  let component: CompRaceNavbarComponent;
  let fixture: ComponentFixture<CompRaceNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompRaceNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompRaceNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
