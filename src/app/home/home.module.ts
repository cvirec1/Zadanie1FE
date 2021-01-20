import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { WorkItemModule } from '../items/work-item.module';

const COMPONENTS = [HomeComponent, NavBarComponent];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    WorkItemModule
  ],
  exports: [...COMPONENTS]
})
export class HomeModule { }
