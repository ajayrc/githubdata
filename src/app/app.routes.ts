import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RepoSelectorComponent } from "./repo-selector/repo-selector.component";

const routes: Routes = [
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

export default routes;