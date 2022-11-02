// Modules Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Router
import { DashboardRoutingModule } from './dashboard-routing.module';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';

// Pages
import { ReadFeatureToggleComponent } from './pages/read-feature-toggle/read-feature-toggle.component';
import { ListFeaturesComponent } from './pages/list-features/list-features.component';
import { CreateFeatureToggleComponent } from './pages/create-feature-toggle/create-feature-toggle.component';

const pagesComponents = [
  ReadFeatureToggleComponent,
  ListFeaturesComponent,
  CreateFeatureToggleComponent,
];

@NgModule({
  declarations: [pagesComponents],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
})
export class DashboardModule {}
