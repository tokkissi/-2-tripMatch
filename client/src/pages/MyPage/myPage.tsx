import React from "react";
import {
  Body,
  Container,
  MidContainer,
  Top,
  SideBar,
  Content,
} from "./modules.style";

const MyPage = () => {
  return (
    <>
      <Body>
        <Container>
          <Top>Top</Top>
          <MidContainer>
            <SideBar>side-bar</SideBar>
            <Content>Body</Content>
          </MidContainer>
        </Container>
      </Body>
    </>
  );
};

export default MyPage;
