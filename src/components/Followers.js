import React from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";

const Followers = () => {
  const { gitHubFollowers } = React.useContext(GithubContext);
  return (
    <Wrapper>
      <div className="followers">
        {gitHubFollowers.map((followers) => {
          // console.log(followers)
          const { avatar_url, html_url, login, id } = followers;
          return (
            <article key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>{html_url}</a>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: #24292e;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  color: #f6f8fa;
  box-shadow: 0 20px 40px -14px var(--card-color);

  &::before {
    content: " followers";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: #24292e;
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  .followers {
    overflow: scroll;
    overflow-x: hidden;
    transition: var(--transition);
    height: 20rem;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(70px, 1fr));
    gap: 0rem 1rem;
    padding: 1rem 0rem;
  }
  article {
    transition: var(--transition-updated);
    padding: 1.15rem 2rem;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;
    img {
      height: 100%;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
    }
    h4 {
      transition: var(--transition-updated);
      margin-bottom: 0;
    }
    a {
      color: var(--clr-primary-3);
      transition: var(--transition-updated);
      &:hover {
        color: #c8e1ff;
      }
    }
    &:hover {
      background-color: white;
      h4 {
        color: black;
      }
      a {
        color: var(--clr-grey-5);
      }
    }
  }
`;
export default Followers;
