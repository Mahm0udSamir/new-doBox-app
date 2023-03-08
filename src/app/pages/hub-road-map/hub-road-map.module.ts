import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanComponent } from './kanban/kanban.component';
import { HubRoadMapRoutingModule } from './hub-road-map.routing.module';

@NgModule({
  declarations: [KanbanComponent],
  imports: [CommonModule, HubRoadMapRoutingModule],
})
export class HubRoadMapModule {}
