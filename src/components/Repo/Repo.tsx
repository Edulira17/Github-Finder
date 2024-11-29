import { RepoProps } from "../../types/repo";

import { BsCodeSlash } from "react-icons/bs";

import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";

import { RiGitRepositoryLine } from "react-icons/ri";

import classes from './Repo.module.css'

const Repo = ({
  name,
  language,
  html_url,
  forks_count,
  stargazers_count,
}: RepoProps) => {
  return (
    <div className={classes.repo}>
      <h3>{name}</h3>
      <p>
        <BsCodeSlash />
        {language}
      </p>
      <div className={classes.stats}>
        <div>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </div>
        <div>
          <AiOutlineFork />
          {forks_count}
        </div>
      </div>
      <a href={html_url} target="_blank" className={classes.repo_btn}>
       <span>Ver Código</span>
        <RiGitRepositoryLine />
      </a>
    </div>
  );
};

export default Repo;
