import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanComponent } from './kanban.component';
import { HubComponentsModule } from '../../../components/hub.components.module';
import { KanbanRoutingModule } from './kanban-routing.module';

@NgModule({
  declarations: [KanbanComponent],
  imports: [CommonModule, HubComponentsModule, KanbanRoutingModule],
})
export class KnbanModule {}
