import React from "react";
import Card from "./Card";
import Followers from "./Followers";
import styled from "styled-components";

const UserWrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 18rem;
  width: 80%;
  margin: 4rem auto;
  justify-content: center;

  @media all and (max-width: 1160px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

const UserInfoCard = () => {
  return (
    <UserWrapper>
      <Card />
      <Followers />
    </UserWrapper>
  );
};

export default UserInfoCard;
