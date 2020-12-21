import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { WorkItemSelectorService } from './work-item-selector.service';
import { addWorkItem } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({items: addWorkItem})
  ],
  providers: [WorkItemSelectorService]
})
export class ReduxModule { }
