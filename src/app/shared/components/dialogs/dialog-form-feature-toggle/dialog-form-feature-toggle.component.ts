import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Interfaces
import { IFeatureToggle } from 'src/app/core/interface/feature-toggle.interface';

@Component({
  selector: 'app-dialog-form-feature-toggle',
  templateUrl: './dialog-form-feature-toggle.component.html',
  styleUrls: ['./dialog-form-feature-toggle.component.scss'],
})
export class DialogFormFeatureToggle implements OnInit {
  public dataFormFeatureToggle: IFeatureToggle;

  constructor(
    public dialogRef: MatDialogRef<DialogFormFeatureToggle>,
    @Inject(MAT_DIALOG_DATA) data: IFeatureToggle
  ) {
    this.dataFormFeatureToggle = data;
  }

  ngOnInit(): void {}

  public close(): void {
    this.dialogRef.close();
  }

  public setOutputAddFormFeatureToggle(data: IFeatureToggle) {
    this.dialogRef.close(data);
  }
}
