import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceChronometerComponent } from './race-chronometer.component';

describe('CompRaceChronometerComponent', () => {
  let component: RaceChronometerComponent;
  let fixture: ComponentFixture<RaceChronometerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaceChronometerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceChronometerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
