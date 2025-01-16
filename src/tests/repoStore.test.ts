import { repoStore } from "../store/repoStore";

test("fetchRepos should load repositories", async () => {
  await repoStore.fetchRepos("javascript");
  expect(repoStore.repositories.length).toBeGreaterThan(0);
});

test("editRepo should update repository name", () => {
  repoStore.repositories = [{ id: 1, name: "Old Name" }];
  repoStore.editRepo(1, "New Name");
  expect(repoStore.repositories[0].name).toBe("New Name");
});

test("removeRepo should delete repository", () => {
  repoStore.repositories = [{ id: 1, name: "Repo to delete" }];
  repoStore.removeRepo(1);
  expect(repoStore.repositories.length).toBe(0);
});
