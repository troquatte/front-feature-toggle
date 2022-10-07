import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { ListFeaturesComponent } from './core/pages/list-features/list-features.component';
import { CreateFeatureToggleComponent } from './core/pages/create-feature-toggle/create-feature-toggle.component';
import { ReadFeatureToggleComponent } from './core/pages/read-feature-toggle/read-feature-toggle.component';
import { HomeComponent } from './core/pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: ListFeaturesComponent,
    title: 'Suas Features Toggle',
  },
  {
    path: 'create-feature',
    component: CreateFeatureToggleComponent,
    title: 'Crie Features Toggle',
  },
  {
    path: 'read-feature/:id',
    component: ReadFeatureToggleComponent,
    title: 'Veja suas Features Toggle',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Seu App',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
