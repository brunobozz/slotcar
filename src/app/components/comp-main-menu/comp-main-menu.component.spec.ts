import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompMainMenuComponent } from './comp-main-menu.component';

describe('CompMainMenuComponent', () => {
  let component: CompMainMenuComponent;
  let fixture: ComponentFixture<CompMainMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompMainMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
