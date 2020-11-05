import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-content',
  templateUrl: './work-content.component.html',
  styleUrls: ['./work-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
