import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HubRoadMapComponent } from './hub-road-map.component';
import { HubRoadMapRoutingModule } from './hub-road-map-routing.module';
import { HubComponentsModule } from '../../components/hub.components.module';

@NgModule({
  declarations: [HubRoadMapComponent],
  imports: [CommonModule, HubComponentsModule, HubRoadMapRoutingModule],
})
export class HubRoadMapModule {}
