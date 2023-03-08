import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StcProfileComponent } from './stc-profile/stc-profile.component';
import { StcProfileRoutingModule } from './stc-profile.routing.module';

@NgModule({
  declarations: [StcProfileComponent],
  imports: [CommonModule, StcProfileRoutingModule],
})
export class StcProfileMapModule {}
