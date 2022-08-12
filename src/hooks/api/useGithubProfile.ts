import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";

interface GetUserResponse {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  followers: number;
  company: string;
}

export const getGithubProfile = async (
  username: string
): Promise<GetUserResponse> => {
  const response = await api.get(`/users/${username}`);
  const user = response.data;

  return user;
};

export function useGithubProfile() {
  return useQuery(
    ["user"],
    async () => await getGithubProfile("ronaldprofile"),
    {
      staleTime: 1000 * 60 * 10,
    }
  );
}
