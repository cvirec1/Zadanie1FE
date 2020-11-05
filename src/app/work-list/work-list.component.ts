import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { WorkItem } from '../core-modul/workItem';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkListComponent implements OnInit {
  @Input() itemList: WorkItem[];
  constructor() { }

  ngOnInit(): void {
  }

}
