import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-repo-selector',
  templateUrl: './repo-selector.component.html',
  styleUrls: ['./repo-selector.component.css']
})
export class RepoSelectorComponent implements OnInit {

  selected!: { startDate: dayjs.Dayjs, endDate: dayjs.Dayjs };

  constructor(private router: Router) {
    this.selected = {
      startDate: dayjs().subtract(1, 'month'),
      endDate: dayjs()
    }
  }

  ngOnInit(): void {
  }

  goToRepo(owner: string, repo: string): boolean {
    const since = this.selected.startDate.format('YYYY-MM-DD');
    const until = this.selected.endDate.format('YYYY-MM-DD');
    this.router.navigateByUrl(`/repo/commits/${owner}/${repo}/${since}/${until}`);
    return false;
  }
}
