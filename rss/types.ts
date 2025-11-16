export type RegistryItemType = "component" | "block" | "unknown";
export type PubDateStrategyFn = (item: RegistryItem) => Date | Promise<Date>;

export type PubDateStrategy =
  | "githubLastEdit"
  | "fileMtime"
  | "dateNow"
  | PubDateStrategyFn;

export interface RegistryItem {
  name: string;
  title: string;
  description: string;
  files: Array<{
    path: string;
    [key: string]: any;
  }>;
  [key: string]: any;
}

export interface Registry {
  name?: string;
  items: RegistryItem[];
  [key: string]: any;
}

export type RssOptions = {
  title?: string;
  link?: string;
  description?: string;
  endpoint?: string;
  pubDateStrategy?: PubDateStrategy;
};

export type GenerateRssOptions = {
  /**
   * RSS feed configuration
   *
   * */
  rss?: RssOptions;
  baseUrl?: string;
  componentsUrl?: string;
  blocksUrl: string;
  registry?: {
    path?: string;
  };
  /**
   * Github API configuration
   *
   * */
  github?: GetGithubLastCommitOptions;
};

export interface GetGithubLastCommitOptions {
  /**
   * Repository name, like "fumadocs"
   */
  repo: string;

  /** Owner of repository */
  owner: string;

  /**
   * Path to file
   */
  path?: string;

  /**
   * GitHub access token
   */
  token?: string;

  /**
   * SHA or ref (branch or tag) name.
   */
  sha?: string;

  /**
   * Base URL for GitHub API
   * @default "https://api.github.com"
   * @link https://docs.github.com/en/get-started/using-github-docs/about-versions-of-github-docs#determining-which-github-product-you-use
   */
  baseUrl?: string;

  /**
   * Custom query parameters
   */
  params?: Record<string, string>;

  options?: RequestInit;
}
