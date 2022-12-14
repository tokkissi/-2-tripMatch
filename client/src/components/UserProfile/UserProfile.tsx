import React from "react";
import styled from "styled-components";
import defaultImage from "./../../images/user-default.jpg";

const UserProfile = () => {
  return (
    <Container>
      <ProfileImg src={defaultImage} alt="" />
      <Nickname>nickname</Nickname>
    </Container>
  );
};

export default UserProfile;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 6px;
  border-radius: 50%;
`;

const Nickname = styled.p`
  font-size: 14px;
`;
