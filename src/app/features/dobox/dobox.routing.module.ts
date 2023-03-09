import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoboxComponent } from './pages/dobox/dobox.component';

const routes: Routes = [
  {
    path: '',
    component: DoboxComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoboxRoutingModule {}
