import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HubComponentsModule } from '../../../components/hub.components.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, HubComponentsModule, DashboardRoutingModule],
})
export class DashboardModule {}
