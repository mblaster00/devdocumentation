import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SandboxComponent } from './sandbox.component';

const routes: Routes = [
  {
    path: '',
    component: SandboxComponent,
    children: [
      { path: '', redirectTo: 'collections', pathMatch: 'full' },
      {
        path: 'collections',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'quotations',
        loadChildren: () =>
          import('./quotations/quotations.module').then((m) => m.QuotationsModule),
      },
      {
        path: 'delivery',
        loadChildren: () =>
          import('./delivery/delivery.module').then((m) => m.DeliveryModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SandboxRoutingModule { }
