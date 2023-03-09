import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HubComponentsModule } from '../../../components/hub.components.module';
import { MainTableRoutingModule } from './main-table-routing.module';
import { MainTableComponent } from './main-table.component';

@NgModule({
  declarations: [MainTableComponent],
  imports: [CommonModule, HubComponentsModule, MainTableRoutingModule],
})
export class MainTableModule {}
