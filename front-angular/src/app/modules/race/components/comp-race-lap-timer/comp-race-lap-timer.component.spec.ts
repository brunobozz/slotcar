import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompRaceLapTimerComponent } from './comp-race-lap-timer.component';

describe('CompRaceLapTimerComponent', () => {
  let component: CompRaceLapTimerComponent;
  let fixture: ComponentFixture<CompRaceLapTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompRaceLapTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompRaceLapTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
