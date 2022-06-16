import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteRaceComponent } from './route-race.component';

describe('RouteRaceComponent', () => {
  let component: RouteRaceComponent;
  let fixture: ComponentFixture<RouteRaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteRaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
