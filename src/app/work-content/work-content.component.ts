import { Component, OnInit } from '@angular/core';
import { WorkGeneratorService } from '../Services/work-generator.service';

@Component({
  selector: 'app-work-content',
  templateUrl: './work-content.component.html',
  styleUrls: ['./work-content.component.scss']
})
export class WorkContentComponent implements OnInit {

  constructor(
    private workService: WorkGeneratorService) { }

  ngOnInit(): void {
  }

}