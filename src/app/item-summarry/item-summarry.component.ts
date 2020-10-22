import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-summarry',
  templateUrl: './item-summarry.component.html',
  styleUrls: ['./item-summarry.component.scss']
})
export class ItemSummarryComponent implements OnInit {
  @Input() low: number;
  @Input() high: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
