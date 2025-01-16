import React from "react";
import { observer } from "mobx-react-lite";
import { repoStore } from "../store/repoStore";
import { List, Button } from "antd";
import style from "../styles/RepoList.module.css";

const RepoList: React.FC = observer(() => {
  return (
    <List
      dataSource={repoStore.repositories}
      renderItem={(repo) => (
        <List.Item
          actions={[
            <Button
              className={style.repoButtonEdit}
              onClick={() =>
                repoStore.editRepo(repo.id, prompt("New name") || repo.name)
              }
            >
              Edit
            </Button>,
            <Button
              className={style.repoButtonDelete}
              onClick={() => repoStore.removeRepo(repo.id)}
            >
              Delete
            </Button>,
          ]}
        >
          {repo.name}
        </List.Item>
      )}
    />
  );
});

export default RepoList;
