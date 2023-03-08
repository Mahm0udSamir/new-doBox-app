import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoboxComponent } from './dobox/dobox.component';
import { DoboxRoutingModule } from './dobox.routing.module';

@NgModule({
  declarations: [DoboxComponent],
  imports: [CommonModule, DoboxRoutingModule],
})
export class DoboxMapModule {}
