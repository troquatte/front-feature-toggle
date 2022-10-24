import { Component, OnInit } from '@angular/core';

// Services
import { FeatureToggleService } from '../../services/featureToggleService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public featureToggle!: boolean;

  constructor(public featureToggleService: FeatureToggleService) {}

  ngOnInit(): void {
    document.querySelector('app-header')?.remove();

    this.featureToggleService.consumer().subscribe((res) => {
      this.featureToggle = res.toggles.promo;
    });
  }
}
