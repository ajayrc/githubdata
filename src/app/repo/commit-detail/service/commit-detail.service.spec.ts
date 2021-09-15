import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import commit_x from 'src/mocks/commit_x';

import { CommitDetailService } from './commit-detail.service';

describe('CommitDetailService', () => {
  let service: CommitDetailService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommitDetailService],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CommitDetailService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getCommitDetails', () => {
    const commitUrl = 'https://api.github.com/repos/repo/commits/somesha';

    beforeEach(() => {
      service = TestBed.inject(CommitDetailService);
    });

    it('should return expected data (called once)', () => {
      service
        .getCommitDetails(commitUrl)
        .subscribe((data) => expect(data).toEqual(commit_x), fail);

      // service should have made one request to GET data from expected URL
      const req = httpTestingController.expectOne(commitUrl);
      expect(req.request.method).toEqual('GET');

      // Respond with the mock data
      req.flush(commit_x);
    });

    it('should be OK returning no data', () => {
      service
        .getCommitDetails(commitUrl)
        .subscribe((data) => expect(data?.sha).toBeFalsy(), fail);

      const req = httpTestingController.expectOne(commitUrl);
      req.flush(null); // Respond with no data
    });
  });
});
