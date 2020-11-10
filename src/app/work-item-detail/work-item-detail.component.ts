import { Component, OnDestroy, OnInit } from '@angular/core';

import { WorkGeneratorService } from '../core-modul/work-generator.service';
import { WorkItem } from '../core-modul/workItem';

@Component({
  selector: 'app-work-item-detail',
  templateUrl: './work-item-detail.component.html',
  styleUrls: ['./work-item-detail.component.scss']
})
export class WorkItemDetailComponent implements OnInit, OnDestroy {

  get item(): WorkItem {
    return this.workService.itemDetail;
  }

  get selectedWorkItem(): boolean {
    return !!this.workService.itemDetail;
  }

  constructor(private workService: WorkGeneratorService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
