import React from "react";
import Top from "../../components/MyPage/Top/Top";
import SideBar from "../../components/MyPage/SideBar/SideBar";
import MyCommentTable from "../../components/MyPage/TableContent/MyCommentTable";
import { Body, Container, MidContainer } from "./myCommentStyle";

const MyComment: React.FC = () => {
  return (
    <>
      <Body>
        <Container>
          <Top />
          <MidContainer>
            <SideBar />
            <MyCommentTable />
          </MidContainer>
        </Container>
      </Body>
    </>
  );
};

export default MyComment;
