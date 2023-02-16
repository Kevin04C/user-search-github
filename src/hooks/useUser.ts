import { useState } from "react";
import { User } from "../interfaces/User";
import { searchUser } from "../services/searchUser";

interface Data {
  isLoading: boolean;
  user: null | User;
  hasError: boolean;
  textError: null | string;
}

const INITIAL_USER: User = {
  login: "Kevin04C",
  id: 90799311,
  node_id: "MDQ6VXNlcjkwNzk5MzEx",
  avatar_url: "https://avatars.githubusercontent.com/u/90799311?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Kevin04C",
  html_url: "https://github.com/Kevin04C",
  followers_url: "https://api.github.com/users/Kevin04C/followers",
  following_url: "https://api.github.com/users/Kevin04C/following{/other_user}",
  gists_url: "https://api.github.com/users/Kevin04C/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Kevin04C/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Kevin04C/subscriptions",
  organizations_url: "https://api.github.com/users/Kevin04C/orgs",
  repos_url: "https://api.github.com/users/Kevin04C/repos",
  events_url: "https://api.github.com/users/Kevin04C/events{/privacy}",
  received_events_url: "https://api.github.com/users/Kevin04C/received_events",
  type: "User",
  site_admin: false,
  name: "Kevin Cespedes",
  company: null,
  blog: "https://orealy.tech",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 37,
  public_gists: 0,
  followers: 8,
  following: 1,
  created_at: "2021-09-15T20:03:28Z",
  updated_at: "2023-02-02T15:01:15Z",
};

export const useUser = () => {
  const [data, setData] = useState<Data>({
    isLoading: false,
    hasError: false,
    textError: null,
    user: INITIAL_USER,
  });

  const getUser = async (username: string) => {
    if (username === "") return;
    try {
      setData({
        ...data,
        isLoading: true,
      });
      const user = await searchUser(username);
      setData({
        isLoading: false,
        hasError: false,
        textError: null,
        user,
      });
    } catch (error: any) {
      setData({
        isLoading: false,
        hasError: true,
        textError: error.message,
        user: null,
      });
    }
  };

  return {
    getUser,
    ...data,
  };
};
