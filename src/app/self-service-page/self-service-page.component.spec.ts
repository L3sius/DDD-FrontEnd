import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfServicePageComponent } from './self-service-page.component';

describe('SelfServicePageComponent', () => {
  let component: SelfServicePageComponent;
  let fixture: ComponentFixture<SelfServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfServicePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
