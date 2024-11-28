import { RepoProps } from "../../types/repo";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import BackBtn from "../../components/BackBtn/BackBtn";
import Loader from "../../components/Loader/Loader";

import classes from "./Repos.module.css";

const Repos = () => {
  const { username } = useParams();

  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadRepos = async function (username: string) {
      setIsLoading(true);

      const res = await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await res.json();

      setIsLoading(false);

      setRepos(data)
    };

    if (username) {
      loadRepos(username);
    }
  }, []);

  if(!repos && isLoading) return <Loader />

  return (
    <div>
      <BackBtn />
      <h2>Explore os repositórios do usuário: {username}</h2>
      {repos && repos.length === 0 && <p>Usuário não possui nenhum repositório :(</p>}
      {repos && repos.length > 0 && (
        <div>
          {repos.map((repo: RepoProps) => (
            <p>{repo.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Repos;
