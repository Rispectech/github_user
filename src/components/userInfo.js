import React from "react";
import Card from "./Card";
import Followers from "./Followers";
import styled from "styled-components";

const UserWrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 4rem auto;
  justify-content: space-between;

  @media all and (max-width: 1160px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

const UserInfoCard = () => {
  return (
    <UserWrapper className="section-center">
      <Card />
      <Followers />
    </UserWrapper>
  );
};

export default UserInfoCard;
