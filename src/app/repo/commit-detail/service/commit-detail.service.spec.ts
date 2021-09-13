import { TestBed } from '@angular/core/testing';

import { CommitDetailService } from './commit-detail.service';

describe('CommitDetailService', () => {
  let service: CommitDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommitDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
