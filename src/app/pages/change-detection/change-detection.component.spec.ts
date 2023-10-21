import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetection } from './change-detection.component';

describe('AComponent', () => {
  let component: ChangeDetection;
  let fixture: ComponentFixture<ChangeDetection>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeDetection]
    });
    fixture = TestBed.createComponent(ChangeDetection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
