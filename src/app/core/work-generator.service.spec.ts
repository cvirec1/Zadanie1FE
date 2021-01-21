import { TestBed } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';
import { WorkGeneratorService } from './work-generator.service';

describe('WorkGeneratorService', () => {
  let service: WorkGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({})
      ]
    });
    service = TestBed.inject(WorkGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
