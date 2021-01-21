import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { WorkGeneratorService } from 'src/app/core/work-generator.service';
import { ItemLevelCountPipe } from 'src/app/shared/pipes/item-level-count.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { workItem } from 'src/app/shared/workItem.mock';

import { WorkItemDetailComponent } from './work-item-detail.component';

describe('WorkItemDetailComponent', () => {
  let component: WorkItemDetailComponent;
  let fixture: ComponentFixture<WorkItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [ WorkItemDetailComponent ],
      providers: [
        {
          provide: WorkGeneratorService,
          useValue: {}
        },
        {
          provide: ActivatedRoute,
          useValue: {}
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkItemDetailComponent);
    component = fixture.componentInstance;

    component.item = workItem[0];
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
