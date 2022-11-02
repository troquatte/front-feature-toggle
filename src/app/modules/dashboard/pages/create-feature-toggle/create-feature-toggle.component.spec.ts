import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFeatureToggleComponent } from './create-feature-toggle.component';

describe('CreateFeatureToggleComponent', () => {
  let component: CreateFeatureToggleComponent;
  let fixture: ComponentFixture<CreateFeatureToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateFeatureToggleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateFeatureToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
