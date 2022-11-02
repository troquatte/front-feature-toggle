import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

// Services
import { FeatureToggleService } from 'src/app/modules/dashboard/services/featureToggleService.service';

// Interfaces
import { IFeatureToggle } from 'src/app/core/interface/feature-toggle.interface';

@Component({
  selector: 'app-list-features',
  templateUrl: './list-features.component.html',
  styleUrls: ['./list-features.component.scss'],
})
export class ListFeaturesComponent implements OnInit {
  public getListSales: Array<IFeatureToggle> = [];
  public loadingSpiner: boolean = true;

  constructor(
    private featureToggleService: FeatureToggleService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.featureToggleService.findAll().subscribe({
      next: (next) => {
        this.getListSales = next;
        this.loadingSpiner = false;
      },
      error: (e) => {
        this.getListSales = [];
        this.loadingSpiner = false;
      },
    });
  }

  public delete(id: string | undefined, index: number) {
    if (id) {
      this.featureToggleService.delete(id).subscribe({
        next: (next) => {
          this.loadingSpiner = false;
          this.getListSales.splice(index, 1);

          this.snackBar.open('Deletado com sucesso', 'Fechar', {
            duration: 5000,
          });
        },
      });
    }
  }
}
