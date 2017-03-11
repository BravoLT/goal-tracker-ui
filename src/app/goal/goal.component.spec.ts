import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalComponent } from './goal.component';

describe('GoalComponent', () => {
  let component: GoalComponent;
  let fixture: ComponentFixture<GoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be 0% complete', () => {
     component.done = false;
     
     expect(component.percentComplete).toBe(0)
  });

  it('should be 100% complete', () => {
     component.done = true;
     
     expect(component.percentComplete).toBe(1)
  });
});
