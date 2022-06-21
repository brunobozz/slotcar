import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCdtCarsListComponent } from './comp-cdt-cars-list.component';

describe('CompCdtCarsListComponent', () => {
  let component: CompCdtCarsListComponent;
  let fixture: ComponentFixture<CompCdtCarsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompCdtCarsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCdtCarsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
