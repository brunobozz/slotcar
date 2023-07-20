import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompRaceSelectPlayerModalComponent } from './comp-race-select-player-modal.component';

describe('CompRaceSelectPlayerModalComponent', () => {
  let component: CompRaceSelectPlayerModalComponent;
  let fixture: ComponentFixture<CompRaceSelectPlayerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompRaceSelectPlayerModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompRaceSelectPlayerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
