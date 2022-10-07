import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFeatureToggleComponent } from './form-feature-toggle.component';

describe('FormFeatureToggleComponent', () => {
  let component: FormFeatureToggleComponent;
  let fixture: ComponentFixture<FormFeatureToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormFeatureToggleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormFeatureToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
