import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Commit } from 'src/app/model/commit';
import { handleServerError } from 'src/app/service-utils/error-handler';

import { environment } from 'src/environments/environment';

@Injectable()
export class CommitsService {

  constructor(private http: HttpClient) { }

  getCommitsForRepo(repoUrl: string, since: string, until: string): Observable<Commit[]> {
    const commitsRepoUrl = `${environment.commitsApiUrl}${repoUrl}/commits?since=${since}&until=${until}`;
    return this.http
      .get<Commit[]>(commitsRepoUrl)
      .pipe(catchError(handleServerError));
  }
}
