import { Observable, of } from 'rxjs';
import { Commit } from 'src/app/model/commit';
import { CommitDetails } from 'src/app/model/commit-details';
import commits from 'src/mocks/commits';
import commit_x from 'src/mocks/commit_x';

export const mockCommitsService = {
  getCommitsForRepo(
    repoUrl: string,
    since: string,
    until: string
  ): Observable<Commit[]> {
    return of(commits);
  },
};

export const mockCommitDetailService = {
  getCommitDetails(url: string): Observable<CommitDetails> {
    return of(commit_x);
  },
};
