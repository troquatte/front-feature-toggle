import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogImplementFeatureToggleComponent } from './dialog-implement-feature-toggle.component';

describe('DialogImplementFeatureToggleComponent', () => {
  let component: DialogImplementFeatureToggleComponent;
  let fixture: ComponentFixture<DialogImplementFeatureToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogImplementFeatureToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogImplementFeatureToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
