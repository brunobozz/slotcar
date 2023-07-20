import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompRaceListLapComponent } from './comp-race-list-lap.component';

describe('CompRaceListLapComponent', () => {
  let component: CompRaceListLapComponent;
  let fixture: ComponentFixture<CompRaceListLapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompRaceListLapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompRaceListLapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
