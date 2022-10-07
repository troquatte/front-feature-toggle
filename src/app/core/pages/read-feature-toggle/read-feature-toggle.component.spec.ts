import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadFeatureToggleComponent } from './read-feature-toggle.component';

describe('ReadFeatureToggleComponent', () => {
  let component: ReadFeatureToggleComponent;
  let fixture: ComponentFixture<ReadFeatureToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadFeatureToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadFeatureToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
