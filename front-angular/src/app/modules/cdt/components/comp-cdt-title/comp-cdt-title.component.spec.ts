import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCdtTitleComponent } from './comp-cdt-title.component';

describe('CompCdtTitleComponent', () => {
  let component: CompCdtTitleComponent;
  let fixture: ComponentFixture<CompCdtTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompCdtTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCdtTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
