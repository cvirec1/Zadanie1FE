import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WorkGeneratorService } from '../Services/work-generator.service';

@Component({
  selector: 'app-work-content',
  templateUrl: './work-content.component.html',
  styleUrls: ['./work-content.component.scss']
})
export class WorkContentComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  constructor(
    private workService: WorkGeneratorService) { }

  ngOnInit(): void {
  }

  addWorkItem(){
    this.workService.addWorkItem(this.nameInput.nativeElement.value);
    this.nameInput.nativeElement.value = '';
  }
}
