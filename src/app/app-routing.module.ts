import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RepoSelectorComponent } from './repo-selector/repo-selector.component';

export const routes: Routes = [
  {
      path: 'reposelector',
      component: RepoSelectorComponent
  },
  {
      path: 'repo',
      loadChildren: () => import('./repo/repo.module').then(m => m.RepoModule)
  },
  {
      path: '',
      redirectTo: '/reposelector',
      pathMatch: 'full'
  },
  {
      path: '**',
      component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
