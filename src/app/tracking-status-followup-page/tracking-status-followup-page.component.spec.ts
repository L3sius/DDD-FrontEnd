import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingStatusFollowupPageComponent } from './tracking-status-followup-page.component';

describe('TrackingStatusFollowupPageComponent', () => {
  let component: TrackingStatusFollowupPageComponent;
  let fixture: ComponentFixture<TrackingStatusFollowupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingStatusFollowupPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingStatusFollowupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
