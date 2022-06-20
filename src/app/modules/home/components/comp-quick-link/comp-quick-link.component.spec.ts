import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompQuickLinkComponent } from './comp-quick-link.component';

describe('CompQuickLinkComponent', () => {
  let component: CompQuickLinkComponent;
  let fixture: ComponentFixture<CompQuickLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompQuickLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompQuickLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
