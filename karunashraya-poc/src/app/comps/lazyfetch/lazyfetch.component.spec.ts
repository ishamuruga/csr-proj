import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyfetchComponent } from './lazyfetch.component';

describe('LazyfetchComponent', () => {
  let component: LazyfetchComponent;
  let fixture: ComponentFixture<LazyfetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyfetchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyfetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
