import React from "react";
import Search from "./Search";
import UserInfoCard from "./userInfo";
import UserInfo from "./Info";
import styled from "styled-components";

const UserSectionWrapper = styled.section`
  height: auto;
  overflow: overlay;
  background: var(--background);
`;
const UserSection = () => {
  return (
    <UserSectionWrapper>
      <UserInfoCard />
      <UserInfo />
    </UserSectionWrapper>
  );
};

export default UserSection;
