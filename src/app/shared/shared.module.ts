import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDatePipePipe } from './item-date-pipe.pipe';
import { ItemLevelPipePipe } from './item-level-pipe.pipe';
import { ItemLevelCountPipe } from './item-level-count.pipe';

const COMPONENTS = [ItemDatePipePipe, ItemLevelPipePipe, ItemLevelCountPipe];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS]
})
export class SharedModule { }
