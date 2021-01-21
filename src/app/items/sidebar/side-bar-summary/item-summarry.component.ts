import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { WorkItemLevel } from 'src/app/shared/workItemLevelCount';

@Component({
  selector: 'app-item-summarry',
  templateUrl: './item-summarry.component.html',
  styleUrls: ['./item-summarry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemSummarryComponent implements OnInit {

  @Input() summaryItems: WorkItemLevel[];

  constructor() { }

  ngOnInit(): void {
  }

}
