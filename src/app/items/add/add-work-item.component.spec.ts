import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { WorkGeneratorService } from 'src/app/core/work-generator.service';

import { AddWorkItemComponent } from './add-work-item.component';

describe('AddWorkItemComponent', () => {
  let component: AddWorkItemComponent;
  let fixture: ComponentFixture<AddWorkItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ AddWorkItemComponent ],
      providers: [
        {
          provide: WorkGeneratorService,
          useValue: {}
        },
        {
          provide: FormBuilder,
          usevalue: {}
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
