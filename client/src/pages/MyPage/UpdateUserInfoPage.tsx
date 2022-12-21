import React from "react";
import Top from "./components/Top";
import SideBar from "./components/SideBar";
import { Body, Container, MidContainer } from "./MyPageStyle";
import UpdateUserInfoFrom from "./components/UpdateUserInfoFrom";

const UpdateUserInfoPage = () => {
  return (
    <>
      <Body>
        <Container>
          <Top />
          <MidContainer>
            <SideBar />
            <UpdateUserInfoFrom />
          </MidContainer>
        </Container>
      </Body>
    </>
  );
};

export default UpdateUserInfoPage;
