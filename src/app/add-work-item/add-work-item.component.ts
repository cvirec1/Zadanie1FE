import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { WorkGeneratorService } from '../Services/work-generator.service';

@Component({
  selector: 'app-add-work-item',
  templateUrl: './add-work-item.component.html',
  styleUrls: ['./add-work-item.component.scss']
})
export class AddWorkItemComponent implements OnInit {

  @ViewChild('dateInput') dateInput: ElementRef;
  @ViewChild('nameInput') nameInput: ElementRef;
  constructor(
    private workService: WorkGeneratorService
  ) { }

  ngOnInit(): void {
  }
  
  addWorkItem(){
    this.workService.addWorkItem(this.nameInput.nativeElement.value, this.dateInput.nativeElement.value);
    this.nameInput.nativeElement.value = '';
  }
}
