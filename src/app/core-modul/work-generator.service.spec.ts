import { TestBed } from '@angular/core/testing';

import { WorkGeneratorService } from './work-generator.service';

describe('WorkGeneratorService', () => {
  let service: WorkGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
