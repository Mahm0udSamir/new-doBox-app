import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { FeaturesRoutingModule } from './features.routing.module';
@NgModule({
  declarations: [],
  imports: [CommonModule, FeaturesRoutingModule, CoreModule],
  providers: [],
  exports: [],
})
export class FeaturesModule {}
