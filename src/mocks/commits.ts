import { Commit } from 'src/app/model/commit';

//eg https://api.github.com/repos/angular/angular/commits
const commits: Commit[] = [
  {
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
      gists_url:
        'https://api.github.com/users/dario-piotrowicz/gists{/gist_id}',
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
  },
  {
    sha: '3b6595d450e9f86fdfa9769928e44b4747d0ef35',
    node_id:
      'MDY6Q29tbWl0MjQxOTUzMzk6M2I2NTk1ZDQ1MGU5Zjg2ZmRmYTk3Njk5MjhlNDRiNDc0N2QwZWYzNQ==',
    commit: {
      author: {
        name: 'William Sedlacek',
        email: 'wsedlacekc@gmail.com',
        date: '2021-09-05T07:54:30Z',
      },
      committer: {
        name: 'Andrew Scott',
        email: 'atscott01@gmail.com',
        date: '2021-09-07T18:45:16Z',
      },
      message:
        'docs(common): correct typos in jsdoc of http client (#43352)\n\nThis corrects four typos in the HttpClient JSDoc\r\ncapabilites => capabilities\r\nreuested => requested\r\nwuth => with\r\nresponmse => response\nPR Close #43352',
      url: 'https://api.github.com/repos/angular/angular/git/commits/3b6595d450e9f86fdfa9769928e44b4747d0ef35',
      comment_count: 0,
    },
    url: 'https://api.github.com/repos/angular/angular/commits/3b6595d450e9f86fdfa9769928e44b4747d0ef35',
    html_url:
      'https://github.com/angular/angular/commit/3b6595d450e9f86fdfa9769928e44b4747d0ef35',
    comments_url:
      'https://api.github.com/repos/angular/angular/commits/3b6595d450e9f86fdfa9769928e44b4747d0ef35/comments',
    author: {
      login: 'wSedlacek',
      id: 8206108,
      node_id: 'MDQ6VXNlcjgyMDYxMDg=',
      avatar_url: 'https://avatars.githubusercontent.com/u/8206108?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/wSedlacek',
      html_url: 'https://github.com/wSedlacek',
      followers_url: 'https://api.github.com/users/wSedlacek/followers',
      following_url:
        'https://api.github.com/users/wSedlacek/following{/other_user}',
      gists_url: 'https://api.github.com/users/wSedlacek/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/wSedlacek/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/wSedlacek/subscriptions',
      organizations_url: 'https://api.github.com/users/wSedlacek/orgs',
      repos_url: 'https://api.github.com/users/wSedlacek/repos',
      events_url: 'https://api.github.com/users/wSedlacek/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/wSedlacek/received_events',
      type: 'User',
      site_admin: false,
    },    
  },
];

export default commits;
