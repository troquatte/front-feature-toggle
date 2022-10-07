import { NgModule } from '@angular/core';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const GoogleMaterialModules = [
  MatSlideToggleModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
];

@NgModule({
  declarations: [],
  imports: [GoogleMaterialModules],
  exports: [GoogleMaterialModules],
})
export class SharedAngularMaterialModule {}
