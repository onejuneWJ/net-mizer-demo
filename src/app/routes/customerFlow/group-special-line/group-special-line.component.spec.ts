import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSpecialLineComponent } from './group-special-line.component';

describe('GroupSpecialLineComponent', () => {
  let component: GroupSpecialLineComponent;
  let fixture: ComponentFixture<GroupSpecialLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupSpecialLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSpecialLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
