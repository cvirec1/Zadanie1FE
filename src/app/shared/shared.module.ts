import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDatePipePipe } from './pipes/item-date-pipe.pipe';
import { ItemLevelPipePipe } from './pipes/item-level-pipe.pipe';
import { ItemLevelCountPipe } from './pipes/item-level-count.pipe';

const COMPONENTS = [ItemDatePipePipe, ItemLevelPipePipe, ItemLevelCountPipe];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS]
})
export class SharedModule { }
