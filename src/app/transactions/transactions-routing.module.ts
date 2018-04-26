import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent, TransactionsComponent } from './components';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [],
  },
  {
    path: 'transactions',
    component: TransactionsComponent,
    children: [],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes) // !forChild() important
  ],
  exports: [
    RouterModule
  ]
})
export class TransactionsRoutingModule {}
