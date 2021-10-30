import React from "react";
import styled from "styled-components";
import { GoRepo, GoStar } from "react-icons/go";
import { VscRepoForked } from "react-icons/vsc";

const UserReposWrapper = styled.article`
  background-color: var(--card-color);
  width: 270px;
  flex: auto;
  margin: 1rem;
  height: 12rem;
  border-radius: var(--radius);
  cursor: pointer;
  .User-container {
    font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console,
      Monaco, monospace;
    padding: 2rem 1rem 2rem;
    position: relative;
    height: 100%;
    p {
      color: rgb(88, 96, 105);
      font-size: 12px;
      margin: 0.5rem 0;
      margin-bottom: 1rem;
    }
  }
  .heading-icon {
    font-size: 15px;
  }
  .User-header {
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    h3 {
      font-size: 15px;
    }
  }

  .repo-stats {
    display: flex;
    flex-direction: row;
    color: #6a737d;
    font-size: 10px;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    margin-bottom: 1rem;
    width: 90%;
  }

  .lang-color {
    background-color: red;
    border-radius: 999px;
    height: 10px;
    width: 10px;
  }
  .lang {
    display: flex;
    flex-direction: row;
    align-items: center;
    h5 {
      text-align: center;
      font-size: 12px;
      color: #6a737d;
      font-weight: 400;
      margin-left: 3px;
    }
  }
  .repo-stats-left {
    display: flex;
    flex-direction: row;
  }
`;

const UserRepos = ({
  name,
  description,
  language,
  stargazers_count,
  forks,
  size,
  html_url,
}) => {
  // console.log(name, description, language, stargazers_count, forks, size);
  // console.log(html_url);
  return (
    <UserReposWrapper onClick={() => (window.location.href = `${html_url}`)}>
      <div className="User-container">
        <div className="User-header">
          <GoRepo className="heading-icon" />
          <h3>{name}</h3>
        </div>
        <p>{description || "No description provided"}</p>
        <div className="repo-stats">
          <div className="repo-stats-left">
            <span className="lang margin-1">
              <div className="lang-color"></div>
              <h5>{language || "javascript"}</h5>
            </span>
            <span className="lang margin-1">
              <GoStar />
              <h5>{stargazers_count}</h5>
            </span>
            <span className="lang margin-1">
              <VscRepoForked />
              <h5>{forks}</h5>
            </span>
          </div>
          <span className="lang margin-l-2">
            <h5>{size} KB</h5>
          </span>
        </div>
      </div>
    </UserReposWrapper>
  );
};

export default UserRepos;
