import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoicing',
  templateUrl: './invoicing.component.html',
  styleUrls: ['./invoicing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoicingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
