import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { workItem } from 'src/app/shared/workItem.mock';

import { WorkListComponent } from './work-list.component';

describe('WorkListComponent', () => {
  let component: WorkListComponent;
  let fixture: ComponentFixture<WorkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule
      ],
      declarations: [ WorkListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkListComponent);
    component = fixture.componentInstance;

    component.itemList = workItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
