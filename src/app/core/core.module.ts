import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { HeaderComponent } from './components/header/header.component';

// Pages
import { ListFeaturesComponent } from './pages/list-features/list-features.component';
import { CreateFeatureToggleComponent } from './pages/create-feature-toggle/create-feature-toggle.component';
import { ReadFeatureToggleComponent } from './pages/read-feature-toggle/read-feature-toggle.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ListFeaturesComponent,
    CreateFeatureToggleComponent,
    ReadFeatureToggleComponent,
    HomeComponent,
  ],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
  ],
})
export class CoreModule {}
