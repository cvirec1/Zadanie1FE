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
  store: any;
  items: any;
  generatePoint: number;

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

  addItemStore(form: {name: string, date: string}): void {
    this.store.dispatch({
      type: 'ADD_TODO',
      payload: {
        id: this.items.length,
        workName : form.name,
        point : this.workService.numberGenerator(),
        level: this.generatePoint < 0.5 ? 'low' : 'high',
        createDate: !form.date ? new Date() : form.date
      }
    });
  }

  addWorkItem(): void{
    this.workService.addItem(this.form.value);
    this.form.reset();
  }
}
