import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/core/material/material.module';
import { HubHeaderComponent } from './hub-header/hub-header.component';

@NgModule({
  declarations: [HubHeaderComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [HubHeaderComponent],
})
export class HubComponentsModule {}
