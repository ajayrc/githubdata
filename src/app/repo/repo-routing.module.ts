import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitDetailComponent } from './commit-detail/commit-detail.component';
import { CommitsComponent } from './commits/commits.component';

const routes: Routes = [
  {
    path: "commits/:namespace/:repo/:since/:until",
    component: CommitsComponent
  },
  {
    path: "commit/:hateoasUrl",
    component: CommitDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepoRoutingModule { }
