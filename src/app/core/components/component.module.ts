import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AppOuterNavComponent } from './app-outer-nav/app-outer-nav.component';
import { AppOuterHeaderComponent } from './app-outer-header/app-outer-header.component';
import { AppOuterMenuComponent } from './app-outer-menu/app-outer-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppOuterNavComponent,
    AppOuterHeaderComponent,
    AppOuterMenuComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [AppOuterNavComponent, AppOuterHeaderComponent],
})
export class ComponentModule {}
