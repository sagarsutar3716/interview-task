import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmTaskComponent } from './atm-task.component';

describe('AtmTaskComponent', () => {
  let component: AtmTaskComponent;
  let fixture: ComponentFixture<AtmTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtmTaskComponent]
    });
    fixture = TestBed.createComponent(AtmTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
