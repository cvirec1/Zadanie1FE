import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkContentComponent } from './work-modul/work-content/work-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemLevelPipePipe } from './item-level-pipe.pipe';
import { ItemDatePipePipe } from './item-date-pipe.pipe';
import { NavBarComponent } from './nav-bar-modul/nav-bar/nav-bar.component';
import { SearchInputComponent } from './nav-bar-modul/search-input/search-input.component';
import { SideBarPanelComponent } from './work-modul/work-content/side-bar-modul/side-bar-panel/side-bar-panel.component';
import { WorkListComponent } from './work-modul/work-content/side-bar-modul/side-bar-work-list/work-list.component';
import { SideBarSearchComponent } from './work-modul/work-content/side-bar-modul/side-bar-search/side-bar-search.component';
import { ItemSummarryComponent } from './work-modul/work-content/side-bar-modul/side-bar-summary/item-summarry.component';
import { AddWorkItemComponent } from './work-modul/work-content/work-detail-modul/add-work-item/add-work-item.component';
import { WorkItemDetailComponent } from './work-modul/work-content/work-detail-modul/work-item-detail/work-item-detail.component';
import { StoreModule } from '@ngrx/store';
import { ValidatorComponent } from './validator/validator.component';

import { todos } from './redux/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
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
    ItemDatePipePipe,
    ValidatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ workItems: todos }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
