import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCdtCarsAddModalComponent } from './comp-cdt-cars-add-modal.component';

describe('CompCdtCarsAddModalComponent', () => {
  let component: CompCdtCarsAddModalComponent;
  let fixture: ComponentFixture<CompCdtCarsAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompCdtCarsAddModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCdtCarsAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
