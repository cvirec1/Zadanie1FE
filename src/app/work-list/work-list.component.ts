import { Component, Input, OnInit } from '@angular/core';
import { WorkItem } from '../Services/workItem';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss']
})
export class WorkListComponent implements OnInit {
  @Input() itemList: WorkItem[];

  kkk: WorkItem[];


  get items(): WorkItem[] {
    return this.kkk;
  }
  constructor() { }

  ngOnInit(): void {
    this.kkk = this.itemList;
  }

}
