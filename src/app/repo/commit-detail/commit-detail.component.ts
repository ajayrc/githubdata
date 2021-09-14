import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommitDetails } from 'src/app/model/commit-details';
import { environment } from 'src/environments/environment';
import { CommitDetailService } from './service/commit-detail.service';

@Component({
  selector: 'app-commit-detail',
  templateUrl: './commit-detail.component.html'
})
export class CommitDetailComponent implements OnInit {

  url!: string;
  sha!: string;
  commitDetails!: CommitDetails;

  constructor(
    private route: ActivatedRoute,
    private service: CommitDetailService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.url = decodeURIComponent(params.get('hateoasUrl')!);
      this.service.getCommitDetails(this.url).subscribe(data => {
        this.commitDetails = data;
      });
    })
  }
}
