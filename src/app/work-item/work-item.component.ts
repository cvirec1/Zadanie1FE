import { Component, Input, OnInit } from '@angular/core';
import { WorkItem } from '../Services/workItem';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss']
})
export class WorkItemComponent implements OnInit {
  @Input() workItem: WorkItem;
  constructor() { }

  ngOnInit(): void {
  }

  get getText(): string {
    return this.workItem.point < 5 ? 'low' : 'high';
  }
}
