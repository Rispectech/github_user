import React from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
import "react-loading-skeleton/dist/skeleton.css";

const Card = () => {
  const { gitHubUser } = React.useContext(GithubContext);
  const {
    avatar_url,
    bio,
    company,
    blog,
    html_url,
    location,
    name,
    twitter_username,
  } = gitHubUser;
  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>@{twitter_username || "john doe"}</p>
        </div>
        <a href={html_url}>follow</a>
      </header>
      <p className="bio">{bio}</p>
      <div className="links">
        <p>
          <MdBusiness></MdBusiness>
          {company || "No Affiliated Organisation"}
        </p>
        <p>
          <MdLocationOn></MdLocationOn>
          {location}
        </p>
        <a href={`https://${blog}`}>
          <MdLink />
          {blog || ""}
        </a>
      </div>
    </Wrapper>
  );
};

// const UserSkeleton = () => {
//   return (
//     <Wrapper>
//       <header>
//         <Skeleton />
//         <div>
//           <h3>
//             <Skeleton />
//           </h3>
//           <p>
//             <Skeleton />
//           </p>
//         </div>
//         <a>
//           <Skeleton />
//         </a>
//       </header>
//       <p className="bio">
//         <Skeleton />
//       </p>
//       <div className="links">
//         <p>
//           <Skeleton />
//         </p>
//         <p>
//           <Skeleton />
//         </p>
//         <a>
//           <Skeleton />
//         </a>
//       </div>
//     </Wrapper>
//   );
// };
const Wrapper = styled.article`
  height: 20rem;
  color: #f6f8fa;
  background: #24292e;
  padding: 1.5rem 2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  &::before {
    content: "user";
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
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 0.1rem solid #0070f3;
    }
    h3 {
      margin-bottom: 0.25rem;
    }
    p {
      color: #c8e1ff;
      font-size: 1rem;
      margin-bottom: 0;
    }
    a {
      color: var(--clr-primary-5);
      border: 2px solid var(--clr-primary-5);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-5);
        color: var(--clr-white);
      }
    }
  }
  .bio {
    color: #c8e1ff;
  }
  .links {
    p,
    a {
      color: #c8e1ff;
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: var(--clr-primary-5);
      transition: var(--transition);
      svg {
        color: var(--clr-grey-5);
      }
      &:hover {
        color: var(--clr-primary-3);
      }
    }
  }
`;
export default Card;
