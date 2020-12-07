import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { WorkGeneratorService } from 'src/app/core-modul/work-generator.service';
import { WorkItem } from 'src/app/core-modul/workItem';


@Component({
  selector: 'app-side-bar-panel',
  templateUrl: './side-bar-panel.component.html',
  styleUrls: ['./side-bar-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBarPanelComponent implements OnInit {
  items$: Observable<WorkItem[]>;
  filteredItems: WorkItem[] = [];

  get high(): number {
    return this.workService.countHighWorkItem;
  }

  get low(): number {
    return this.workService.countLowWorkItem;
  }

  constructor(
    private workService: WorkGeneratorService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.workService.items$.subscribe(_ => {
      this.filteredItems = _;
      this.cdr.detectChanges();
    });
  }

}
