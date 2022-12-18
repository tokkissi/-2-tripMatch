import React from "react";
import Top from "../../components/MyPage/Top/Top";
import SideBar from "../../components/MyPage/SideBar/SideBar";
import TableContent from "../../components/MyPage/TableContent/TableContent";
import { Body, Container, MidContainer } from "./myCommentStyle";

const MyComment: React.FC = () => {
  return (
    <>
      <Body>
        <Container>
          <Top />
          <MidContainer>
            <SideBar />
            <TableContent />
          </MidContainer>
        </Container>
      </Body>
    </>
  );
};

export default MyComment;
