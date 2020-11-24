import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkContentComponent } from './work-modul/work-content/work-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemLevelPipePipe } from './item-level-pipe.pipe';
import { ItemDatePipePipe } from './item-date-pipe.pipe';
import { SideBarPanelComponent } from './work-modul/side-bar-modul/side-bar-panel/side-bar-panel.component';
import { AddWorkItemComponent } from './work-modul/work-detail-modul/add-work-item/add-work-item.component';
import { WorkListComponent } from './work-modul/side-bar-modul/side-bar-work-list/work-list.component';
import { ItemSummarryComponent } from './work-modul/side-bar-modul/side-bar-summary/item-summarry.component';
import { SideBarSearchComponent } from './work-modul/side-bar-modul/side-bar-search/side-bar-search.component';
import { WorkItemDetailComponent } from './work-modul/work-detail-modul/work-item-detail/work-item-detail.component';
import { NavBarComponent } from './nav-bar-modul/nav-bar/nav-bar.component';
import { SearchInputComponent } from './nav-bar-modul/search-input/search-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WorkContentComponent,
    SearchInputComponent,
    SideBarPanelComponent,
    WorkListComponent,
    AddWorkItemComponent,
    ItemSummarryComponent,
    SideBarSearchComponent,
    WorkItemDetailComponent,
    ItemLevelPipePipe,
    ItemDatePipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
