import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompMainSidebarComponent } from './comp-main-sidebar.component';

describe('CompMainSidebarComponent', () => {
  let component: CompMainSidebarComponent;
  let fixture: ComponentFixture<CompMainSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompMainSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompMainSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
