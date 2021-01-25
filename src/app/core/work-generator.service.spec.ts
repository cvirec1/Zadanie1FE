import { TestBed } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { WorkItemSelectorService } from '../redux/work-item-selector.service';
import { workItem } from '../shared/workItem.mock';
import { WorkGeneratorService } from './work-generator.service';

describe('WorkGeneratorService', () => {
  const workItemSelectorMock = jasmine.createSpyObj('WorkItemSelectorService', ['getAllItems$', 'getItem$'], []);
  workItemSelectorMock.getAllItems$.and.returnValue(of(workItem));

  let service: WorkGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: WorkItemSelectorService,
          useValue: workItemSelectorMock
        },
        provideMockStore({})
      ]
    });
    service = TestBed.inject(WorkGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
