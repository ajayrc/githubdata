import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import commits from 'src/mocks/commits';

import { CommitsService } from './commits.service';

describe('CommitsService', () => {
  let commitsService: CommitsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommitsService],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    commitsService = TestBed.inject(CommitsService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(commitsService).toBeTruthy();
  });

  describe('#getCommitsForRepo', () => {
    const repoUrl = 'repo';
    const startDate = '2020-01-01';
    const endDate = '2020-02-02';
    const urlToApi =
      'https://api.github.com/repos/repo/commits?since=2020-01-01&until=2020-02-02';

    beforeEach(() => {
      commitsService = TestBed.inject(CommitsService);
    });

    it('should return expected data (called once)', () => {
      commitsService
        .getCommitsForRepo(repoUrl, startDate, endDate)
        .subscribe((data) => expect(data).toEqual(commits), fail);

      // service should have made one request to GET data from expected URL
      const req = httpTestingController.expectOne(urlToApi);
      expect(req.request.method).toEqual('GET');

      // Respond with the mock data
      req.flush(commits);
    });

    it('should be OK returning no data', () => {
      commitsService
        .getCommitsForRepo(repoUrl, startDate, endDate)
        .subscribe((data) => expect(data.length).toEqual(0), fail);

      const req = httpTestingController.expectOne(urlToApi);
      req.flush([]); // Respond with no data
    });
  });
});
