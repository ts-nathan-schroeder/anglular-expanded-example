import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveboardComponent } from './liveboard.component';

describe('LiveboardComponent', () => {
  let component: LiveboardComponent;
  let fixture: ComponentFixture<LiveboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
