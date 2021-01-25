import { ChangeDetectionStrategy, ChangeDetectorRef, Component,  OnInit } from '@angular/core';
import { WorkGeneratorService } from 'src/app/core/work-generator.service';
import { WorkItem } from 'src/app/shared/workItem';


@Component({
  selector: 'app-side-bar-panel',
  templateUrl: './side-bar-panel.component.html',
  styleUrls: ['./side-bar-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBarPanelComponent implements OnInit {

  items: WorkItem[];

  private allItems: WorkItem[];
  private actualText = '';

  constructor(
    private workService: WorkGeneratorService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.workService.getAllItems().subscribe(_ => {
      this.allItems = _;
      this.onFilter(this.actualText);
      this.cdr.detectChanges();
    });
  }


  onFilter(text: string): void {
    this.actualText = text;

    this.actualText === '' ?
      this.items = this.allItems :
      this.items = this.allItems.filter((_) => _.workName.includes(text));
  }

}
