import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDatePipePipe } from './item-date-pipe.pipe';
import { ItemLevelPipePipe } from './item-level-pipe.pipe';

const COMPONENTS = [ItemDatePipePipe, ItemLevelPipePipe];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS]
})
export class SharedModule { }
