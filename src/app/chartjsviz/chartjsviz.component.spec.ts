import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartjsvizComponent } from './chartjsviz.component';

describe('ChartjsvizComponent', () => {
  let component: ChartjsvizComponent;
  let fixture: ComponentFixture<ChartjsvizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartjsvizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartjsvizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
