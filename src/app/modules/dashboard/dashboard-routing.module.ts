import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { CreateFeatureToggleComponent } from './pages/create-feature-toggle/create-feature-toggle.component';
import { ListFeaturesComponent } from './pages/list-features/list-features.component';
import { ReadFeatureToggleComponent } from './pages/read-feature-toggle/read-feature-toggle.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
