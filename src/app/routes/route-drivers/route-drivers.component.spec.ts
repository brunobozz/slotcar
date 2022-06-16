import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDriversComponent } from './route-drivers.component';

describe('RouteDriversComponent', () => {
  let component: RouteDriversComponent;
  let fixture: ComponentFixture<RouteDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteDriversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
