import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar-modul/nav-bar/nav-bar.component';
import { InvoicingComponent } from './invoicing/invoicing.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { WorkItemModule } from './work-content/work-item.module';
import { SearchInputComponent } from './nav-bar-modul/search-input/search-input.component';

const COMPONENTS = [HomeComponent, NavBarComponent, InvoicingComponent, SearchInputComponent];


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
