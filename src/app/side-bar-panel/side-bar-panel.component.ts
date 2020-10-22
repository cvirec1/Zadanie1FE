import { Component, OnInit, Output } from '@angular/core';
import { WorkGeneratorService } from '../Services/work-generator.service';
import { WorkItem } from '../Services/workItem';

@Component({
  selector: 'app-side-bar-panel',
  templateUrl: './side-bar-panel.component.html',
  styleUrls: ['./side-bar-panel.component.scss']
})
export class SideBarPanelComponent implements OnInit {

  @ Output() workItems: WorkItem[];

  get high(): number {
    return this.workService.countHighWorkItem;
  }
  
  get low(): number {
    return this.workService.countLowWorkItem;
  }

  constructor( private workService: WorkGeneratorService) { }

  ngOnInit(): void {
    if( this.workService.workItems.length <= 0){
      this.workService.generateWorkList();
      this.workItems = this.workService.workItems;
    }else{
      this.workItems = this.workService.workItems;
    }
  }

  filter(text: string) {
    this.workService.filter(text);
    this.workItems = this.workService.workItems;
  }

  getText(point: number): string {
    return point < 0.5 ? 'low' : 'high';
  }

}
