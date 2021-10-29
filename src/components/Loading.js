import React from "react";
import styled from "styled-components";

const Loader = styled.section`
  width: 100%;
  .loader {
    width: 400px;
    height: 50px;
    line-height: 50px;
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    letter-spacing: 0.2em;
    height: 3rem;

    &::before,
    &::after {
      content: "";
      display: block;
      width: 15px;
      height: 15px;
      background: var(--card-gradient);
      position: absolute;
      animation: load 0.7s infinite alternate ease-in-out;
    }
    &::before {
      top: -2px;
      left: 50px;
    }

    &::after {
      bottom: -2px;
      left: 0;
    }
  }

  .loader p {
    background: var(--card-gradient);
    color: transparent;
    -webkit-background-clip: text;
    font-size: 2.5rem;
  }
  @keyframes load {
    0% {
      left: 40px;
      height: 30px;
      width: 15px;
    }
    50% {
      height: 8px;
      width: 40px;
    }
    100% {
      left: 350px;
      height: 30px;
      width: 15px;
    }
  }
`;

const Loading = () => {
  return (
    <Loader>
      <div class="loader">
        <p>Loading...</p>
      </div>
    </Loader>
  );
};

export default Loading;
