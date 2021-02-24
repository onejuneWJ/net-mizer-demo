import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowAnomalyComponent } from './flow-anomaly.component';

describe('FlowAnomalyComponent', () => {
  let component: FlowAnomalyComponent;
  let fixture: ComponentFixture<FlowAnomalyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowAnomalyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowAnomalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
