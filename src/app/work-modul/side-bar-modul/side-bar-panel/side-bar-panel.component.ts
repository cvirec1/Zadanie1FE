import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WorkGeneratorService } from 'src/app/core-modul/work-generator.service';
import { WorkItem } from 'src/app/core-modul/workItem';


@Component({
  selector: 'app-side-bar-panel',
  templateUrl: './side-bar-panel.component.html',
  styleUrls: ['./side-bar-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBarPanelComponent implements OnInit {

  filteredItems: WorkItem[] = [];

  get high(): number {
    return this.workService.countHighWorkItem;
  }

  get low(): number {
    return this.workService.countLowWorkItem;
  }

  constructor( private workService: WorkGeneratorService) { }

  ngOnInit(): void {
    this.workService.items$.subscribe(_ => {
      this.filteredItems = _;
    });
  }

}
