import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCdtTabComponent } from './comp-cdt-tab.component';

describe('CompCdtTabComponent', () => {
  let component: CompCdtTabComponent;
  let fixture: ComponentFixture<CompCdtTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompCdtTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCdtTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
