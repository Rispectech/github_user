import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import loadingGif from "../images/preloader.gif";
import styled from "styled-components";
function AuthWrapper({ children }) {
  const { isLoading, error, user, isAuthenticated } = useAuth0();
  if (isLoading) {
    console.log("Loading");
    return (
      <Wrapper>
        <img src={loadingGif} alt="spinner" />
      </Wrapper>
    );
  } else if (error) {
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    );
  } else {
    console.log("esle", user, isAuthenticated);
    return <>{children}</>;
  }
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`;

export default AuthWrapper;
