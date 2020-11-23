import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WorkGeneratorService } from 'src/app/core-modul/work-generator.service';


@Component({
  selector: 'app-add-work-item',
  templateUrl: './add-work-item.component.html',
  styleUrls: ['./add-work-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddWorkItemComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private workService: WorkGeneratorService
  ) {
    this.form = fb.group({
      name: '',
      date: ''
    });
  }

  ngOnInit(): void {
    this.form.controls.name.valueChanges.subscribe(val => console.log(val));
  }

  addWorkItem(): void{
    this.workService.addItem(this.form.value);
    this.form.reset();
  }
}
