import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormFeatureToggle } from './dialog-form-feature-toggle.component';

describe('DialogFormFeatureToggle', () => {
  let component: DialogFormFeatureToggle;
  let fixture: ComponentFixture<DialogFormFeatureToggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogFormFeatureToggle],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogFormFeatureToggle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
