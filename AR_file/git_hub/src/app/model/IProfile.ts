export interface IProfile {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string | null; // Nullable field
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name?: string | null; // Nullable and optional field
    company?: string | null; // Optional and nullable field
    blog?: string | null; // Optional and nullable field
    location?: string | null; // Optional and nullable field
    email?: string | null; // Optional and nullable field
    hireable?: boolean | null; // Optional and nullable field
    bio?: string | null; // Optional and nullable field
    twitter_username?: string | null; // Optional and nullable field
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
  }
  