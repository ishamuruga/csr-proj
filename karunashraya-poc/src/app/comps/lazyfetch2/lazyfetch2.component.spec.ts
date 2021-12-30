import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazyfetch2Component } from './lazyfetch2.component';

describe('Lazyfetch2Component', () => {
  let component: Lazyfetch2Component;
  let fixture: ComponentFixture<Lazyfetch2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lazyfetch2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lazyfetch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
