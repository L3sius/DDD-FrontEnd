import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingStatusPageComponent } from './tracking-status-page.component';

describe('TrackingStatusPageComponent', () => {
  let component: TrackingStatusPageComponent;
  let fixture: ComponentFixture<TrackingStatusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingStatusPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingStatusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
