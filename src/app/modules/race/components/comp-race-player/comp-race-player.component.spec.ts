import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompRacePlayerComponent } from './comp-race-player.component';

describe('CompRacePlayerComponent', () => {
  let component: CompRacePlayerComponent;
  let fixture: ComponentFixture<CompRacePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompRacePlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompRacePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
