import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-header *ngIf="headerDashboard"></app-header>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  public headerDashboard = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.headerDashboard = event.url.includes('/dashboard');
      }
    });
  }
}
