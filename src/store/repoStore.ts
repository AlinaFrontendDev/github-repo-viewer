import { makeAutoObservable } from "mobx";
import { fetchRepositories } from "../utils/api";

export interface Repository {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
}

class RepoStore {
  repositories: Repository[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchRepos(query: string, page: number = 1) {
    this.loading = true;
    this.error = null;

    try {
      const data: { items: Repository[] } = await fetchRepositories(
        query,
        page
      );
      this.repositories = [...this.repositories, ...data.items];
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.error = error.message;
      } else {
        this.error = "Failed to fetch repositories";
      }
    } finally {
      this.loading = false;
    }
  }

  editRepo(id: number, newName: string) {
    this.repositories = this.repositories.map((repo) =>
      repo.id === id ? { ...repo, name: newName } : repo
    );
  }

  removeRepo(id: number) {
    this.repositories = this.repositories.filter((repo) => repo.id !== id);
  }

  clearRepos() {
    this.repositories = [];
  }
}

export const repoStore = new RepoStore();
