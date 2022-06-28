import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompRaceLightsComponent } from './comp-race-lights.component';

describe('CompRaceLightsComponent', () => {
  let component: CompRaceLightsComponent;
  let fixture: ComponentFixture<CompRaceLightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompRaceLightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompRaceLightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
