import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

// Interfaces
import { IFeatureToggle } from 'src/app/core/interface/feature-toggle.interface';

// Services
import { FeatureToggleService } from 'src/app/modules/dashboard/services/featureToggleService.service';

// Components
import { DialogFormFeatureToggle } from 'src/app/shared/components/dialogs/dialog-form-feature-toggle/dialog-form-feature-toggle.component';
import { DialogImplementFeatureToggleComponent } from 'src/app/shared/components/dialogs/dialog-implement-feature-toggle/dialog-implement-feature-toggle.component';

@Component({
  selector: 'app-read-feature-toggle',
  templateUrl: './read-feature-toggle.component.html',
  styleUrls: ['./read-feature-toggle.component.scss'],
})
export class ReadFeatureToggleComponent implements OnInit {
  public getFeatureToggle!: IFeatureToggle;
  public getCompareFeatureToggle!: IFeatureToggle;

  public getEnabledSave!: boolean;

  public loadingSpiner: boolean = true;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private featureToggleService: FeatureToggleService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.featureToggleService
      .read(String(this.activatedRoute.snapshot.paramMap.get('id')))
      .subscribe({
        next: (next) => {
          this.getFeatureToggle = next;
          this.loadingSpiner = false;
          this.getCompareFeatureToggle = JSON.parse(
            JSON.stringify(this.getFeatureToggle)
          );
        },
      });
  }

  public openDialogEdit(): void {
    const dialogRef = this.dialog.open(DialogFormFeatureToggle, {
      data: this.getFeatureToggle,
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.getFeatureToggle = res;
        this.getCompareFeatureToggle = JSON.parse(
          JSON.stringify(this.getFeatureToggle)
        );
      }
    });
  }

  public openDialogImplement() {
    this.dialog.open(DialogImplementFeatureToggleComponent, {
      data: {
        apiKey: this.getFeatureToggle.apiKey,
      },
    });
  }

  public setEnabledOrDisabledSave(
    event: any,
    indexEnv: number,
    indexToggle: number
  ) {
    this.getFeatureToggle.itensEnvironment[indexEnv].toggle[indexToggle].value =
      event.checked;

    this.validateEnabledSave(this.getFeatureToggle);
  }

  public update() {
    this.loadingSpiner = true;
    this.featureToggleService.update(this.getFeatureToggle).subscribe({
      next: (next) => {
        this.loadingSpiner = false;
        this.validateEnabledSave(next, true);
        this.snackBar.open('Atualizado com sucesso', 'Fechar', {
          duration: 5000,
        });
      },
    });
  }

  private validateEnabledSave(
    getFeatureToggle: IFeatureToggle,
    copy: boolean = false
  ) {
    this.getFeatureToggle = getFeatureToggle;

    if (copy) {
      this.getCompareFeatureToggle = JSON.parse(
        JSON.stringify(this.getFeatureToggle)
      );
    }

    this.getEnabledSave =
      JSON.stringify(this.getFeatureToggle) !==
      JSON.stringify(this.getCompareFeatureToggle);
  }
}
