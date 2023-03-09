import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, ComponentsModule],
  providers: [],
  exports: [MaterialModule, ComponentsModule],
})
export class CoreModule {}
