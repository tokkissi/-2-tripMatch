import React from "react";
import Top from "../../components/MyPage/Top/Top";
import SideBar from "../../components/MyPage/SideBar/SideBar";
import MyPageTable from "../../components/MyPage/TableContent/MyPageTable";
import { Body, Container, MidContainer } from "./MyPageStyle";

const MyPage: React.FC = () => {
  return (
    <>
      <Body>
        <Container>
          <Top />
          <MidContainer>
            <SideBar />
            <MyPageTable />
          </MidContainer>
        </Container>
      </Body>
    </>
  );
};

export default MyPage;
