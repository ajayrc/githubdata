import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepoRoutingModule } from './repo-routing.module';
import { CommitsComponent } from './commits/commits.component';
import { CommitDetailComponent } from './commit-detail/commit-detail.component';
import { CommitsService } from './commits/service/commits.service';

@NgModule({
  declarations: [
    CommitsComponent,
    CommitDetailComponent
  ],
  imports: [
    CommonModule,
    RepoRoutingModule
  ],
  providers: [
    CommitsService
  ]

})
export class RepoModule { }
