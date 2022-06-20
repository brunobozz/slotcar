import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteCarsComponent } from './route-cars.component';

describe('RouteCarsComponent', () => {
  let component: RouteCarsComponent;
  let fixture: ComponentFixture<RouteCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
