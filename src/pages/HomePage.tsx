import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { repoStore } from "../store/repoStore";
import RepoList from "../components/RepoList";
import style from "../styles/HomePage.module.css";

const HomePage: React.FC = observer(() => {
  useEffect(() => {
    repoStore.fetchRepos("javascript");
  }, []);

  return (
    <div className={style.container}>
      <h1>GitHub Repositories</h1>
      <RepoList />
      {repoStore.loading && <p>Loading...</p>}
      {repoStore.error && <p style={{ color: "red" }}>{repoStore.error}</p>}
    </div>
  );
});

export default HomePage;
