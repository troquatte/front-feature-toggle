import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { PresentationComponent } from './pages/presentation/presentation.component';

@NgModule({
  declarations: [HomeComponent, PresentationComponent],
  exports: [],
  imports: [CommonModule, HttpClientModule, RouterModule],
})
export class CoreModule {}
