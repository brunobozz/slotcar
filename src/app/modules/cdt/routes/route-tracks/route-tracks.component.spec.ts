import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteTracksComponent } from './route-tracks.component';

describe('RouteTracksComponent', () => {
  let component: RouteTracksComponent;
  let fixture: ComponentFixture<RouteTracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteTracksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
