import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {Error403Component} from '@shared/components/error/error-403.component';
import {Error404Component} from '@shared/components/error/error-404.component';

const routes: Route[] = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'system',
    loadChildren: () => import('./system/system.module').then(value => value.SystemModule)
  },
  {
    path: 'customer-flow',
    loadChildren: () => import('./customerFlow/customer-flow.module').then(value => value.CustomerFlowModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then(value => value.ReportsModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoutesRoutingModule {
}
