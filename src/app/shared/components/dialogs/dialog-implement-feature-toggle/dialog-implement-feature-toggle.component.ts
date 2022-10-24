import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IFeatureToggle } from 'src/app/core/interface/feature-toggle.interface';

// Component
import { DialogFormFeatureToggle } from '../dialog-form-feature-toggle/dialog-form-feature-toggle.component';

@Component({
  selector: 'app-dialog-implement-feature-toggle',
  templateUrl: './dialog-implement-feature-toggle.component.html',
  styleUrls: ['./dialog-implement-feature-toggle.component.scss'],
})
export class DialogImplementFeatureToggleComponent implements OnInit {
  public _id!: string;
  public apiKey!: string;
  public env!: string;

  constructor(
    public dialogRef: MatDialogRef<DialogImplementFeatureToggleComponent>,
    @Inject(MAT_DIALOG_DATA) data: { apiKey: string }
  ) {
    this.apiKey = data.apiKey;
  }

  ngOnInit(): void {}

  public close(): void {
    this.dialogRef.close();
  }
}
