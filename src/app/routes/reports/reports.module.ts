import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserLinkComponent} from './user-link/user-link.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/Shared.Module';
import {FlowStcsComponent} from './flow-stcs/flow-stcs.component';
import {HolidaysFlowAnalysisComponent} from './holidays-flow-analysis/holidays-flow-analysis.component';
import {UserInfoComponent} from './user-info/user-info.component';
import { ServiceOpenAnalysisComponent } from './service-open-analysis/service-open-analysis.component';

const routes: Routes = [
  {
    path: 'user-link',
    component: UserLinkComponent
  },
  {
    path: 'flow-stcs',
    component: FlowStcsComponent
  },
  {
    path: 'holidays-flow-analysis',
    component: HolidaysFlowAnalysisComponent
  },
  {
    path: 'user-info',
    component: UserInfoComponent
  },
  {
    path: 'service-open-analysis',
    component: ServiceOpenAnalysisComponent
  }
];

@NgModule({
  declarations: [
    UserLinkComponent,
    FlowStcsComponent,
    HolidaysFlowAnalysisComponent,
    UserInfoComponent,
    ServiceOpenAnalysisComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ReportsModule {
}
