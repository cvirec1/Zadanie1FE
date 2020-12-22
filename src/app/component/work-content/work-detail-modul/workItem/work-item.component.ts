import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
