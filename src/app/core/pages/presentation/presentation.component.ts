import { Component, OnInit } from '@angular/core';

// Services
import { FeatureToggleService } from 'src/app/modules/dashboard/services/featureToggleService.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {
  public featureTogglePromo!: boolean;
  public featureToggleAvista!: boolean;
  public featureToggleCartao!: boolean;
  public featureToggleItau!: boolean;

  constructor(public featureToggleService: FeatureToggleService) {}

  ngOnInit(): void {
    document.querySelector('app-header')?.remove();

    this.featureToggleService.consumer().subscribe((res) => {
      this.featureTogglePromo = res.toggles.promo;
      this.featureToggleAvista = res.toggles.a_vista;
      this.featureToggleCartao = res.toggles.cartao;
      this.featureToggleItau = res.toggles.itau;
    });
  }
}
