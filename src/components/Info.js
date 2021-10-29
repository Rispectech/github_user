import React from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";

const UserInfo = () => {
  const { gitHubUser } = React.useContext(GithubContext);
  // console.log(gitHubUser)
  const { public_repos, followers, following, public_gists } = gitHubUser;
  // console.log(public_repos, followers, following, public_gists)

  const githubItems = [
    {
      id: 1,
      label: "repos",
      icon: <GoRepo className="icons" />,
      value: public_repos,
      style: "pink",
    },
    {
      id: 2,
      label: "followers",
      icon: <FiUsers className="icons" />,
      value: followers,
      style: "green",
    },
    {
      id: 3,
      label: "following",
      icon: <FiUserPlus className="icons" />,
      value: following,
      style: "purple",
    },
    {
      id: 4,
      label: "gists",
      icon: <GoGist className="icons" />,
      value: public_gists,
      style: "yellow",
    },
  ];
  return (
    <section className="section">
      <Wrapper className="section-center">
        {githubItems.map((items) => {
          return <Item key={items.id} {...items} />;
        })}
      </Wrapper>
    </section>
  );
};

const Item = ({ label, icon, value, style }) => {
  return (
    <article className="item">
      <span className={style}>{icon}</span>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  );
};
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }

  @media all and (max-width: 1250px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--card-background);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
      color: var(--card-color);
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;

export default UserInfo;
