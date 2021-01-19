import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { WorkItemComponent } from './work-content/work-detail-modul/workItem/work-item.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { WorkItemModule } from './work-content/work-item.module';
import { SearchInputComponent } from '../shared/search-input/search-input.component';

const COMPONENTS = [HomeComponent, NavBarComponent, WorkItemComponent, SearchInputComponent];


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
export class ComponentModule { }
