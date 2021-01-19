import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarPanelComponent } from './sidebar/side-bar-panel/side-bar-panel.component';
import { SideBarSearchComponent } from './sidebar/side-bar-search/side-bar-search.component';
import { ItemSummarryComponent } from './sidebar/side-bar-summary/item-summarry.component';
import { WorkListComponent } from './sidebar/side-bar-work-list/work-list.component';
import { AddWorkItemComponent } from './detail/add-work-item/add-work-item.component';
import { WorkItemDetailComponent } from './detail/work-item-detail/work-item-detail.component';
import { WorkContentComponent } from './work-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkItemsRoutingModule } from './work-item-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ValidatorComponent } from 'src/app/validator/validator.component';

const COMPONENTS = [
  SideBarPanelComponent,
  SideBarSearchComponent,
  ItemSummarryComponent,
  WorkListComponent,
  AddWorkItemComponent,
  WorkItemDetailComponent,
  WorkContentComponent,
  ValidatorComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WorkItemsRoutingModule,
    SharedModule
  ],
  exports: [...COMPONENTS]
})
export class WorkItemModule { }
