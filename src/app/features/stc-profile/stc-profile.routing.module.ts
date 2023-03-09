import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StcProfileComponent } from './pages/stc-profile/stc-profile.component';

const routes: Routes = [
  {
    path: '',
    component: StcProfileComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StcProfileRoutingModule {}
