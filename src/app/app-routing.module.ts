import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/hub-road-map/hub-road-map.module').then(
        (m) => m.HubRoadMapModule
      ),
  },
  {
    path: 'chat',
    loadChildren: () =>
      import('./pages/chat/chat.module').then((m) => m.ChatModule),
  },
  {
    path: 'dobox',
    loadChildren: () =>
      import('./pages/dobox/dobox.module').then((m) => m.DoboxMapModule),
  },
  {
    path: 'inbox',
    loadChildren: () =>
      import('./pages/inbox/inbox.module').then((m) => m.InboxMapModule),
  },
  {
    path: 'meeting',
    loadChildren: () =>
      import('./pages/meeting/meeting.module').then((m) => m.MeetingModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/stc-profile/stc-profile.module').then(
        (m) => m.StcProfileMapModule
      ),
  },
  // {
  //   path: 'categories',
  //   canActivate: [AuthGuardGuard],
  //   loadChildren: () =>
  //     import('./categories/categories.module').then((m) => m.CategoriesModule),
  // },
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  // {
  //   path: '**',
  //   loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
