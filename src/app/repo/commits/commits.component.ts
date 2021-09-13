import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommitsService } from './service/commits.service';
import { Commit } from 'src/app/model/commit';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {

  namespace!: string;
  repo!: string;
  since!: string;
  until!: string;

  commits!: Commit[];
  commitDetailsRoute = '/repo/commit/'

  constructor(
    private route: ActivatedRoute,
    private service: CommitsService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      this.namespace = params.get('namespace')!;
      this.repo = params.get('repo')!;
      this.since = params.get('since')!;
      this.until = params.get('until')!;

      this.service.getCommitsForRepo(`${this.namespace}/${this.repo}`, this.since, this.until).subscribe(data => {
        this.commits = data;
      });
    });
  }

  getEncodedUrl(commit: Commit) {
    return `${this.commitDetailsRoute}${encodeURIComponent(commit.url)}`
  }
}
