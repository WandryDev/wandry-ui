import fs from "fs/promises";

import {
  GenerateRssOptions,
  GetGithubLastCommitOptions,
  PubDateStrategy,
  PubDateStrategyFn,
  RegistryItem,
} from "./types";
import path from "path";

const isDateNowStrategy = (strategy: PubDateStrategy): strategy is "dateNow" => {
  return strategy === "dateNow";
};

const isGithubLastEditStrategy = (
  strategy: PubDateStrategy
): strategy is "githubLastEdit" => {
  return strategy === "githubLastEdit";
};

const isFileMtimeStrategy = (
  strategy: PubDateStrategy
): strategy is "fileMtime" => {
  return strategy === "fileMtime";
};

const isFunctionStrategy = (
  strategy: PubDateStrategy
): strategy is PubDateStrategyFn => {
  return typeof strategy === "function";
};

async function getGithubLastEdit({
  repo,
  token,
  owner,
  path = "",
  sha,
  baseUrl = "https://api.github.com",
  options = {},
  params: customParams = {},
}: GetGithubLastCommitOptions): Promise<Date | null> {
  const headers = new Headers(options.headers);
  const params = new URLSearchParams();

  params.set("path", path);
  params.set("page", "1");
  params.set("per_page", "1");

  if (sha) params.set("sha", sha);

  for (const [key, value] of Object.entries(customParams)) {
    params.set(key, value);
  }

  if (token) {
    headers.append("authorization", token);
  }

  const res = await fetch(
    `${baseUrl}/repos/${owner}/${repo}/commits?${params.toString()}`,
    {
      cache: "force-cache",
      ...options,
      headers,
    }
  );

  if (!res.ok)
    throw new Error(
      `Failed to fetch last edit time from Git ${await res.text()}`
    );
  const data = await res.json();

  if (data.length === 0) return null;

  return new Date(data[0].commit.committer.date);
}

const getFileMtime = async (item: RegistryItem): Promise<Date> => {
  const stat = await fs.stat(
    path.resolve(process.cwd(), item.files[0].path)
  );
  return stat.mtime;
};

const getDateNow = (): Date => {
  return new Date();
};

export const getPubDate = async (
  item: RegistryItem,
  options: GenerateRssOptions
): Promise<string> => {
  if (!options.rss?.pubDateStrategy) {
    return getDateNow().toUTCString();
  }

  const strategy = options.rss.pubDateStrategy;

  if (isGithubLastEditStrategy(strategy) && options.github) {
    try {
      const date = await getGithubLastEdit({
        ...options.github,
        path: item.files[0]?.path ?? "",
      });
      return date ? date.toUTCString() : getDateNow().toUTCString();
    } catch (error) {
      return getDateNow().toUTCString();
    }
  }

  if (isDateNowStrategy(strategy)) {
    return getDateNow().toUTCString();
  }

  if (isFileMtimeStrategy(strategy)) {
    try {
      const date = await getFileMtime(item);
      return date.toUTCString();
    } catch (error) {
      return getDateNow().toUTCString();
    }
  }

  if (isFunctionStrategy(strategy)) {
    try {
      const date = await strategy(item);
      return date.toUTCString();
    } catch (error) {
      return getDateNow().toUTCString();
    }
  }

  return getDateNow().toUTCString();
};
