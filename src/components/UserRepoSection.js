import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import UserRepo from "./UserRepo";
import { GithubContext } from "../context/context";

const UserRepoSectionWrapper = styled.section`
  background: var(--background);
  border-radius: var(--radius);
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  header h3 {
    background: var(--card-gradient);
    color: transparent;
    -webkit-background-clip: text;
  }
  header h5 {
    color: hsl(212, 33%, 89%);
    font-size: 20px;
    margin: 2rem;
    margin-bottom: 2.5rem;
    line-height: 0.2px;
  }

  header div {
    height: 50px;
    margin-bottom: 15px;
  }

  header div button {
    height: 100%;
    width: 150px;
    background-color: var(--card-color);
    color: var(--background);
    border-radius: 12px;
    margin: 0 2rem;
    font-size: 20px;
    transition: var(--transition);
    text-transform: capitalize;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border: 2px solid transparent;

    &:hover {
      background: var(--clr-primary-8);
      color: var(--clr-primary-1);
    }
  }
  .sort-continer {
    display: flex;
    flex-direction: row;
  }
  .container {
    background: var(--card-background);
    padding: 2rem 2rem;
    margin: 2rem auto;
    width: 80%;
    .container-heading {
      color: var(--card-color);
    }
    .repo-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    @media all and (max-width: 1550px) {
      header {
        width: 80%;
        margin: auto;
      }
      header div button {
        margin: 0rem 1rem;
      }
    }

    @media all and (max-width: 1320px) {
      header {
        width: 90%;
      }
      header div button {
        width: 9rem;
      }
    }

    @media all and (max-width: 1160px) {
      header {
        width: 100%;
      }
      header div button {
        width: 7rem;
      }
    }

    @media all and (max-width: 930px) {
      header h5 {
        font-size: 15px;
        margin: 2rem 1rem;
        margin-bottom: 2.5rem;
      }
      header h3 {
        font-size: 20px;
      }
      header div button {
        margin: 0 0.5rem;
        width: 5rem;
      }
    }

    .active {
      background: var(--clr-primary-5);
      color: var(--clr-primary-10);
    }
    @media all and (max-width: 670px) {
      header h3,
      h5 {
        display: none;
      }
      header div button {
        width: 4rem;
      }
    }
  }
`;

let sortOptions = {
  stars: "stargazers_count",
  forks: "forks_count",
  size: "size",
};

let sortOptionsObject = {
  stars: { id: Math.random().toString(36).slice(2), value: "stargazers_count" },
  forks: { id: Math.random().toString(36).slice(2), value: "forks_count" },
  size: { id: Math.random().toString(36).slice(2), value: "size" },
};

// console.log(sortOptionsObject);

const UserRepoSection = () => {
  const [sortState, setSortState] = useState(sortOptions.stars.value);
  const { repos } = React.useContext(GithubContext);
  const sortContainer = useRef(null);
  // console.log(repos);

  const RepoStars = repos
    .sort((a, b) => b[sortState] - a[sortState])
    .slice(0, 8);
  // console.log(RepoStars);

  const handleSort = (item, id) => {
    sortOptionsObject = {
      [item]: {
        id: sortOptionsObject[item].id,
        value: sortOptionsObject[item].value,
      },
      ...sortOptionsObject,
    };
    console.log(sortOptionsObject);
    let List = [...sortContainer.current.children];
    console.log(List, id);
    List.forEach((item) => {
      console.log(item.id);
      if (item.id === id) {
        console.log("working", id);
        item.classList.add("active");
      } else {
        if (item.classList.contains("active")) item.classList.remove("active");
      }
    });

    setSortState(item);
  };

  useEffect(() => {
    let List = [...sortContainer.current.children];
    List.forEach((item) => {
      if (item.id === sortOptionsObject.stars.id) {
        item.classList.add("active");
      }
    });
  }, []);
  return (
    <UserRepoSectionWrapper className="section">
      <section className="container shadow">
        <header>
          <h3 className="container-heading">Top repoes</h3>
          <h5>by</h5>
          <div className="sort-container" ref={sortContainer}>
            {Object.keys(sortOptionsObject).map((item) => {
              console.log(sortOptionsObject[item], item);
              return (
                <button
                  key={sortOptionsObject[item].id}
                  id={sortOptionsObject[item].id}
                  onClick={() => handleSort(item, sortOptionsObject[item].id)}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </header>
        <div className="repo-container">
          {RepoStars
            ? RepoStars.map((item) => {
                return <UserRepo {...item} key={item.id} />;
              })
            : null}
        </div>
      </section>
    </UserRepoSectionWrapper>
  );
};

export default UserRepoSection;
