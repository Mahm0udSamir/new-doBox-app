import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HubRoadMapComponent } from './hub-road-map.component';

const routes: Routes = [
  {
    path: '',
    component: HubRoadMapComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./kanban/kanban.module').then((m) => m.KnbanModule),
      },
      {
        path: 'table',
        loadChildren: () =>
          import('./main-table/main-table.module').then(
            (m) => m.MainTableModule
          ),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HubRoadMapRoutingModule {}
