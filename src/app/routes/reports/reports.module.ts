import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLinkComponent } from './user-link/user-link.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'user-link',
    component: UserLinkComponent
  }
];

@NgModule({
  declarations: [
    UserLinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ReportsModule { }
