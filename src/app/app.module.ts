import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WorkContentComponent } from './work-content/work-content.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SideBarPanelComponent } from './side-bar-panel/side-bar-panel.component';
import { WorkListComponent } from './work-list/work-list.component';
import { AddWorkItemComponent } from './add-work-item/add-work-item.component';
import { ItemSummarryComponent } from './item-summarry/item-summarry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WorkContentComponent,
    SearchInputComponent,
    SideBarPanelComponent,
    WorkListComponent,
    AddWorkItemComponent,
    ItemSummarryComponent
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
