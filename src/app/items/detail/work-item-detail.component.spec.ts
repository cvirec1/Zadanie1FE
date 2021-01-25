import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { WorkGeneratorService } from 'src/app/core/work-generator.service';
import { ItemLevelCountPipe } from 'src/app/shared/pipes/item-level-count.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { workItem } from 'src/app/shared/workItem.mock';

import { WorkItemDetailComponent } from './work-item-detail.component';

describe('WorkItemDetailComponent', () => {
  let component: WorkItemDetailComponent;
  let fixture: ComponentFixture<WorkItemDetailComponent>;
  const workGeneratorServiceSpy = jasmine.createSpyObj('WorkGeneratorService', ['getItem']);
  const getItemSpy = workGeneratorServiceSpy.getItem.and.returnValue(of(workItem[0]));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [ WorkItemDetailComponent ],
      providers: [
        {
          provide: WorkGeneratorService,
          useValue: workGeneratorServiceSpy
        },
        {
          provide: ActivatedRoute,
          useValue: {params: of({id: '1'})}
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkItemDetailComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be testWork1', () => {
    expect(component.item.workName).toBe('testWork1');
  });
});
