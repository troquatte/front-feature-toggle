import { Component, OnInit } from '@angular/core';

// Services
import { ListAllService } from '../../services/list-all.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public featureToggleWhats!: boolean;
  public featureToggleLogo!: boolean;

  constructor(public listAllService: ListAllService) {}

  ngOnInit(): void {
    document.querySelector('app-header')?.remove();

    this.listAllService.consumer().subscribe((res) => {
      this.featureToggleWhats = res.toggles.whatsapp;
      this.featureToggleLogo = res.toggles.logo;
    });
  }
}
