import { CommitDetails } from 'src/app/model/commit-details';

//eg https://api.github.com/repos/angular/angular/commits/359f26e5397fb2ab17ba670049a0619c47ae8c6e
const commit_x: CommitDetails = {
  sha: '359f26e5397fb2ab17ba670049a0619c47ae8c6e',
  node_id:
    'MDY6Q29tbWl0MjQxOTUzMzk6MzU5ZjI2ZTUzOTdmYjJhYjE3YmE2NzAwNDlhMDYxOWM0N2FlOGM2ZQ==',
  commit: {
    author: {
      name: 'dario-piotrowicz',
      email: 'dario.piotrowicz@gmail.com',
      date: '2021-09-04T22:20:09Z',
    },
    committer: {
      name: 'Andrew Scott',
      email: 'atscott01@gmail.com',
      date: '2021-09-07T18:46:01Z',
    },
    message:
      'refactor(core): fix "behavio" typo in schematics README (#43351)\n\nfix the "behavio" typo in the\nschemarics/migrations/router-link-empty-expression README file\n\nPR Close #43351',
    url: 'https://api.github.com/repos/angular/angular/git/commits/359f26e5397fb2ab17ba670049a0619c47ae8c6e',
    comment_count: 0,
  },
  url: 'https://api.github.com/repos/angular/angular/commits/359f26e5397fb2ab17ba670049a0619c47ae8c6e',
  html_url:
    'https://github.com/angular/angular/commit/359f26e5397fb2ab17ba670049a0619c47ae8c6e',
  comments_url:
    'https://api.github.com/repos/angular/angular/commits/359f26e5397fb2ab17ba670049a0619c47ae8c6e/comments',
  author: {
    login: 'dario-piotrowicz',
    id: 61631103,
    node_id: 'MDQ6VXNlcjYxNjMxMTAz',
    avatar_url: 'https://avatars.githubusercontent.com/u/61631103?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/dario-piotrowicz',
    html_url: 'https://github.com/dario-piotrowicz',
    followers_url: 'https://api.github.com/users/dario-piotrowicz/followers',
    following_url:
      'https://api.github.com/users/dario-piotrowicz/following{/other_user}',
    gists_url: 'https://api.github.com/users/dario-piotrowicz/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/dario-piotrowicz/starred{/owner}{/repo}',
    subscriptions_url:
      'https://api.github.com/users/dario-piotrowicz/subscriptions',
    organizations_url: 'https://api.github.com/users/dario-piotrowicz/orgs',
    repos_url: 'https://api.github.com/users/dario-piotrowicz/repos',
    events_url:
      'https://api.github.com/users/dario-piotrowicz/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/dario-piotrowicz/received_events',
    type: 'User',
    site_admin: false,
  },
  files: [
    {
      sha: '1f84c8cd30224aa0118c74fefc80ed180d124ad2',
      filename:
        'packages/core/schematics/migrations/router-link-empty-expression/README.md',
      status: 'modified',
      additions: 1,
      deletions: 1,
      changes: 2,
      blob_url:
        'https://github.com/angular/angular/blob/359f26e5397fb2ab17ba670049a0619c47ae8c6e/packages/core/schematics/migrations/router-link-empty-expression/README.md',
      raw_url:
        'https://github.com/angular/angular/raw/359f26e5397fb2ab17ba670049a0619c47ae8c6e/packages/core/schematics/migrations/router-link-empty-expression/README.md',
      contents_url:
        'https://api.github.com/repos/angular/angular/contents/packages/core/schematics/migrations/router-link-empty-expression/README.md?ref=359f26e5397fb2ab17ba670049a0619c47ae8c6e',
      patch:
        '@@ -16,7 +16,7 @@ removing the `href` attribute.\n \n In the example from above, there is no value provided to the `routerLink` input.\n This button would previously navigate to the current page and update the fragment to "section_2".\n-The updated behavio is to disable this link because the input\n+The updated behavior is to disable this link because the input\n for `routerLink` is `undefined`.\n \n If the intent for the link is to link to the current page rather than disable navigation,',
    },
    {
      sha: '@f84c8cd30224aa0118c74fefc80ed180d124ad2',
      filename:
        'packages/core/schematics/migrations/router-link-empty-expression/README_2.md',
      status: 'modified',
      additions: 2,
      deletions: 5,
      changes: 6,
      blob_url:
        'https://github.com/angular/angular/blob/359f26e5397fb2ab17ba670049a0619c47ae8c6e/packages/core/schematics/migrations/router-link-empty-expression/README_2.md',
      raw_url:
        'https://github.com/angular/angular/raw/359f26e5397fb2ab17ba670049a0619c47ae8c6e/packages/core/schematics/migrations/router-link-empty-expression/README_2.md',
      contents_url:
        'https://api.github.com/repos/angular/angular/contents/packages/core/schematics/migrations/router-link-empty-expression/README_2.md?ref=359f26e5397fb2ab17ba670049a0619c47ae8c6e',
      patch:
        '@@ -16,7 +16,7 @@ removing the `href` attribute.\n \n In the example from above, there is no value provided to the `routerLink` input.\n This button would previously navigate to the current page and update the fragment to "section_2".\n-The updated behavio is to disable this link because the input\n+The updated behavior is to disable this link because the input\n for `routerLink` is `undefined`.\n \n If the intent for the link is to link to the current page rather than disable navigation,',
    },
  ],
};

export default commit_x;
