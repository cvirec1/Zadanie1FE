import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { WorkGeneratorService } from '../core-modul/work-generator.service';

import { WorkItem } from '../core-modul/workItem';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkListComponent implements OnInit {
  @Input() itemList: WorkItem[];
  constructor( private workService: WorkGeneratorService) { }

  ngOnInit(): void {
  }

  showItem(item: WorkItem): void {
    this.workService.setSelectedWorkItem(item);
  }
}
