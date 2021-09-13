export type Commit = {
    sha: string,
    node_id: string,
    commit: {
        author: {
            name: string,
            email: string,
            date: string
        },
        committer: {
            name: string,
            email: string,
            date: string
        },
        message: string
        // tree: {
        //     sha: fa7b511df4dc81c0143aa663be40a03f6d8c4a01,
        //     url: https://api.github.com/repos/angular/angular/git/trees/fa7b511df4dc81c0143aa663be40a03f6d8c4a01
        // },
        url: string,
        comment_count: number,
        verification: {
            verified: boolean,
            reason: string,
            signature: string,
            payload: string
        }
    },
    url: string,
    html_url: string,
    comments_url: string,
    author: {
        login: string,
        id: number,
        node_id: string,
        avatar_url: string,
        gravatar_id: string,
        url: string,
        html_url: string,
        followers_url: string,
        following_url: string,
        gists_url: string,
        starred_url: string,
        subscriptions_url: string,
        organizations_url: string,
        repos_url: string,
        events_url: string,
        received_events_url: string,
        type: string,
        site_admin: false
    },
    // committer: {
    //     login: atscott,
    //     id: 479713,
    //     node_id: MDQ6VXNlcjQ3OTcxMw==,
    //     avatar_url: https://avatars.githubusercontent.com/u/479713?v=4,
    //     gravatar_id: ,
    //     url: https://api.github.com/users/atscott,
    //     html_url: https://github.com/atscott,
    //     followers_url: https://api.github.com/users/atscott/followers,
    //     following_url: https://api.github.com/users/atscott/following{/other_user},
    //     gists_url: https://api.github.com/users/atscott/gists{/gist_id},
    //     starred_url: https://api.github.com/users/atscott/starred{/owner}{/repo},
    //     subscriptions_url: https://api.github.com/users/atscott/subscriptions,
    //     organizations_url: https://api.github.com/users/atscott/orgs,
    //     repos_url: https://api.github.com/users/atscott/repos,
    //     events_url: https://api.github.com/users/atscott/events{/privacy},
    //     received_events_url: https://api.github.com/users/atscott/received_events,
    //     type: User,
    //     site_admin: false
    // },
    // parents: [
    //     {
    //         sha: 3b6595d450e9f86fdfa9769928e44b4747d0ef35,
    //         url: https://api.github.com/repos/angular/angular/commits/3b6595d450e9f86fdfa9769928e44b4747d0ef35,
    //         html_url: https://github.com/angular/angular/commit/3b6595d450e9f86fdfa9769928e44b4747d0ef35
    //     }
    // ]
}