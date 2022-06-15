import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompMainNavbarComponent } from './comp-main-navbar.component';

describe('CompMainNavbarComponent', () => {
  let component: CompMainNavbarComponent;
  let fixture: ComponentFixture<CompMainNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompMainNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompMainNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
