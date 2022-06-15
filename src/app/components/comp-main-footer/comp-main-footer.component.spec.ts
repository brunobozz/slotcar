import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompMainFooterComponent } from './comp-main-footer.component';

describe('CompMainFooterComponent', () => {
  let component: CompMainFooterComponent;
  let fixture: ComponentFixture<CompMainFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompMainFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompMainFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
