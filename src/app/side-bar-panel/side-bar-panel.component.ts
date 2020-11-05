import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WorkGeneratorService } from '../core-modul/work-generator.service';
import { WorkItem } from '../core-modul/workItem';

@Component({
  selector: 'app-side-bar-panel',
  templateUrl: './side-bar-panel.component.html',
  styleUrls: ['./side-bar-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
}
