import axios from "axios";

const BASE_URL = "https://api.github.com";
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const fetchRepositories = async (query: string, page: number = 1) => {
  const response = await axios.get(`${BASE_URL}/search/repositories`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    params: {
      q: query,
      sort: "stars",
      order: "asc",
      page,
    },
  });
  return response.data;
};
