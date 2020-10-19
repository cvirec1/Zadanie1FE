import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WorkGeneratorService } from '../Services/work-generator.service';

@Component({
  selector: 'app-work-content',
  templateUrl: './work-content.component.html',
  styleUrls: ['./work-content.component.scss']
})
export class WorkContentComponent implements OnInit {

  workItemForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private workService: WorkGeneratorService) { }

  ngOnInit(): void {
  }

  addWorkItem() {
    this.workService.addWorkItem(this.workItemForm.get('name').value);
    this.workItemForm.controls.name.setValue('');
}

}
