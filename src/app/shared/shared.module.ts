import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { SharedAngularMaterialModule } from './shared-angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { FormFeatureToggleComponent } from './components/form-feature-toggle/form-feature-toggle.component';
import { DialogFormFeatureToggle } from './components/dialogs/dialog-form-feature-toggle/dialog-form-feature-toggle.component';

@NgModule({
  declarations: [FormFeatureToggleComponent, DialogFormFeatureToggle],
  imports: [CommonModule, SharedAngularMaterialModule, ReactiveFormsModule],
  exports: [
    FormFeatureToggleComponent,
    DialogFormFeatureToggle,
    SharedAngularMaterialModule,
  ],
})
export class SharedModule {}
