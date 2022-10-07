import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

// Interfaces
import { ActivatedRoute } from '@angular/router';

// Services
import { FeatureToggleService } from '../../services/featureToggleService.service';

// Components
import { DialogFormFeatureToggle } from 'src/app/shared/components/dialogs/dialog-form-feature-toggle/dialog-form-feature-toggle.component';
import { DialogImplementFeatureToggleComponent } from 'src/app/shared/components/dialogs/dialog-implement-feature-toggle/dialog-implement-feature-toggle.component';
import { IFeatureToggle } from '../../interface/feature-toggle.interface';

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
        _id: this.getFeatureToggle._id,
        apiKey: this.getFeatureToggle.apiKey,
      },
    });
  }

  public setEnabledOrDisabledSave(
    event: any,
    indexToggle: number,
    indexEnv: number
  ) {
    this.getFeatureToggle.itensEnvironment[indexToggle][1][indexEnv][1] =
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
