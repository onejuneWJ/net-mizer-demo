import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FlowAnomalyComponent} from "@routes/customerFlow/flow-anomaly/flow-anomaly.component";
import {SharedModule} from "@shared/Shared.Module";
import {CoreModule} from "@core/core.module";
import { ZeroFlowAnalysisComponent } from './zero-flow-analysis/zero-flow-analysis.component';
import { GroupSpecialLineComponent } from './group-special-line/group-special-line.component';
import { UserManageComponent } from './user-manage/user-manage.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'flow-anomaly', pathMatch: 'full'
  },
  {
    path: 'flow-anomaly', component: FlowAnomalyComponent,
    data: {
      reload: true,
      hash: 'khllgl-llycjk'
    }
  },
  {
    path: 'zero-flow-analysis', component: ZeroFlowAnalysisComponent,
    data: {
      reload: true,
      hash: 'khllgl-lllfx'
    }
  },
  {
    path: 'group-special-line', component: GroupSpecialLineComponent,
    data: {
      reload: true,
      hash: 'khllgl-jtzxgl'
    }
  },
  {
    path: 'user-manage', component: UserManageComponent,
    data: {
      reload: true,
      hash: 'khllgl-yhlldkgl'
    }
  },
  ]

@NgModule({
  declarations: [
    FlowAnomalyComponent,
    ZeroFlowAnalysisComponent,
    GroupSpecialLineComponent,
    UserManageComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    CoreModule
  ]
})
export class CustomerFlowModule { }
