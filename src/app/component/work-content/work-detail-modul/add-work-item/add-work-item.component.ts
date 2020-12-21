import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkGeneratorService } from 'src/app/core-modul/work-generator.service';


@Component({
  selector: 'app-add-work-item',
  templateUrl: './add-work-item.component.html',
  styleUrls: ['./add-work-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddWorkItemComponent implements OnInit {

  form: FormGroup;
  store: any;
  items: any;
  generatePoint: number;

  constructor(
    private fb: FormBuilder,
    private workService: WorkGeneratorService
  ) {
    this.form = fb.group({
      name: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]],
      date: ''
    });
  }

  ngOnInit(): void {
    this.form.controls.name.valueChanges.subscribe(val => console.log(val));
  }

  addWorkItem(): void{
    if (this.form.valid) {
      this.workService.createWorkItem(this.form.value);
      this.form.reset();
    }
  }
}
