import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'hub', pathMatch: 'full' },
  {
    path: 'hub',
    loadChildren: () =>
      import('./hub-road-map/pages/hub-road-map/hub-road-map.module').then(
        (m) => m.HubRoadMapModule
      ),
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then((m) => m.ChatModule),
  },
  {
    path: 'dobox',
    loadChildren: () =>
      import('./dobox/dobox.module').then((m) => m.DoboxMapModule),
  },
  {
    path: 'inbox',
    loadChildren: () =>
      import('./inbox/inbox.module').then((m) => m.InboxMapModule),
  },
  {
    path: 'meeting',
    loadChildren: () =>
      import('./meeting/meeting.module').then((m) => m.MeetingModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./stc-profile/stc-profile.module').then(
        (m) => m.StcProfileMapModule
      ),
  },

  {
    path: '**',
    loadChildren: () =>
      import('./hub-road-map/pages/hub-road-map/hub-road-map.module').then(
        (m) => m.HubRoadMapModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
