import { Component, OnInit, Output } from '@angular/core';
import { WorkGeneratorService } from '../Services/work-generator.service';
import { WorkItem } from '../Services/workItem';

@Component({
  selector: 'app-side-bar-panel',
  templateUrl: './side-bar-panel.component.html',
  styleUrls: ['./side-bar-panel.component.scss']
})
export class SideBarPanelComponent implements OnInit {

  get high(): number {
    return this.workService.countHighWorkItem;
  }
  
  get low(): number {
    return this.workService.countLowWorkItem;
  }

  get workItems(): WorkItem[] {
    return this.workService.workItems;
  }

  constructor( private workService: WorkGeneratorService) { }

  ngOnInit(): void {
  }

  filter(text:string): void {
    this.workService.filter(text);
  }
}
