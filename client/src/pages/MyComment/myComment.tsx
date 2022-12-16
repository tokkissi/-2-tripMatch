import React from "react";
import Top from "../../components/MyPage/Top/Top";
import SideBar from "../../components/MyPage/SideBar/SideBar";
import {
  Body,
  Container,
  MidContainer,
  Content,
  Layer,
} from "./myCommentStyle";

const MyComment = () => {
  return (
    <>
      <Body>
        <Container>
          <Top name={"doylee"} tripCount={32} score={4.5} />
          <MidContainer>
            <SideBar />
            <Content>
              <Layer>
                <table>
                  <thead>
                    <tr id="first">
                      <th>제목</th>
                      <th>지역</th>
                      <th>여행기간</th>
                      <th>작성자</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>title</td>
                      <td>region</td>
                      <td>duration</td>
                      <td id="last">작성자</td>
                    </tr>
                  </tbody>
                </table>
              </Layer>
            </Content>
          </MidContainer>
        </Container>
      </Body>
    </>
  );
};

export default MyComment;
