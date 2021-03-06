import { Routes } from '@angular/router';
import { ListComponent } from './list.component';
import { TableComponent } from './table.component';

export const contentRoutes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'list',
    component: ListComponent,
    outlet: 'content'
  },
  {
    path: 'table',
    component: TableComponent,
    outlet: 'content'
  }
];
