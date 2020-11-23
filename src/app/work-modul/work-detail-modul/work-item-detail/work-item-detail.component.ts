import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap} from 'rxjs/operators';
import { WorkGeneratorService } from 'src/app/core-modul/work-generator.service';
import { WorkItem } from 'src/app/core-modul/workItem';


@Component({
  selector: 'app-work-item-detail',
  templateUrl: './work-item-detail.component.html',
  styleUrls: ['./work-item-detail.component.scss']
})
export class WorkItemDetailComponent implements OnInit, OnDestroy {

  item: WorkItem;

  constructor(
    private workService: WorkGeneratorService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(params => this.workService.getItem(+params.id))
      ).subscribe(item => this.item = item);
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
