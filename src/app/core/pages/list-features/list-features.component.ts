import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

// Services
import { ListAllService } from '../../services/list-all.service';

// Interfaces
import { IFeatureToggle } from '../../interface/feature-toggle.interface';

@Component({
  selector: 'app-list-features',
  templateUrl: './list-features.component.html',
  styleUrls: ['./list-features.component.scss'],
})
export class ListFeaturesComponent implements OnInit {
  public getListSales: Array<IFeatureToggle> = [];
  public loadingSpiner: boolean = true;

  constructor(
    private listAllService: ListAllService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.listAllService.findAll().subscribe({
      next: (next) => {
        this.getListSales = next;
        this.loadingSpiner = false;
      },
      error: (e) => {
        console.log(e);

        this.getListSales = [];
        this.loadingSpiner = false;
      },
    });
  }

  public delete(id: string | undefined, index: number) {
    if (id) {
      this.listAllService.delete(id).subscribe({
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
