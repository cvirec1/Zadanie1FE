import { Pipe, PipeTransform } from '@angular/core';
import { WorkItem } from './workItem';
import { WorkItemLevel } from './workItemLevelCount';

@Pipe({
  name: 'itemLevelCount'
})
export class ItemLevelCountPipe implements PipeTransform {
  summarryItem: WorkItemLevel[];

  transform(value: WorkItem[]): WorkItemLevel[] {
    this.summarryItem = [{
      description: 'Nízka priorita',
      count: value.filter(_ => _.level === 'low').length} as WorkItemLevel];
    this.summarryItem = [{
      description: 'Vysoká priorita',
      count: value.filter(_ => _.level === 'high').length} as WorkItemLevel, ...this.summarryItem];
    return this.summarryItem;
  }

}
