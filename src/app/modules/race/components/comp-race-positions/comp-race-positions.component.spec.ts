import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompRacePositionsComponent } from './comp-race-positions.component';

describe('CompRacePositionsComponent', () => {
  let component: CompRacePositionsComponent;
  let fixture: ComponentFixture<CompRacePositionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompRacePositionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompRacePositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
