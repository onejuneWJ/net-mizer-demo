import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroFlowAnalysisComponent } from './zero-flow-analysis.component';

describe('ZeroFlowAnalysisComponent', () => {
  let component: ZeroFlowAnalysisComponent;
  let fixture: ComponentFixture<ZeroFlowAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZeroFlowAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroFlowAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
