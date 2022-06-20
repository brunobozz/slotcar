import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompRaceFastestLapComponent } from './comp-race-fastest-lap.component';

describe('CompRaceFastestLapComponent', () => {
  let component: CompRaceFastestLapComponent;
  let fixture: ComponentFixture<CompRaceFastestLapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompRaceFastestLapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompRaceFastestLapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
