import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDatePipePipe } from './pipes/item-date-pipe.pipe';
import { ItemLevelPipePipe } from './pipes/item-level-pipe.pipe';
import { ItemLevelCountPipe } from './pipes/item-level-count.pipe';
import { ValidatorComponent } from './validator/validator.component';
import { SearchInputComponent } from './search-input/search-input.component';

const COMPONENTS = [ItemDatePipePipe, ItemLevelPipePipe, ItemLevelCountPipe, ValidatorComponent, SearchInputComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS]
})
export class SharedModule { }
