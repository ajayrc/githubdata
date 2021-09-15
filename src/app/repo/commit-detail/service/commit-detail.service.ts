import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommitDetails } from 'src/app/model/commit-details';
import { handleServerError } from 'src/app/service-utils/error-handler';

@Injectable()
export class CommitDetailService {
  constructor(private http: HttpClient) {}

  getCommitDetails(url: string): Observable<CommitDetails> {
    return this.http
      .get<CommitDetails>(url)
      .pipe(catchError(handleServerError));
  }
}
