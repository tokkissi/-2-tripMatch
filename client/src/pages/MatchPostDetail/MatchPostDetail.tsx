import React from "react";
import styled from "styled-components";
import PostDetail from "./../../components/PostDetail/PostDetail";
import dummy from "../dummy.png";
import Comment from "../../components/Comment/Comment";

const MatchPostDetail = () => {
  const matchData = {
    status: "모집중",
    hopeGender: "성별 무관",
    hopeAge: "20대",
    region: "경상도",
    duration: ["2022-12-14", "2022-12-15"],
    userCount: 4,
    thumbnailImg: dummy,
  };

  const userData = {
    nickname: "nickname",
    profileImg: "",
  };

  const commentData = [
    {
      id: 1,
      user: { nickname: "홍길동", profileImg: "" },
      content: "짱이다",
      createdAt: "2022-12-11 16:10:02",
    },
    {
      id: 2,
      user: { nickname: "김철수", profileImg: "" },
      content: "굳이다",
      createdAt: "2022-12-11 16:10:02",
    },
  ];

  return (
    <Container>
      <PostDetail matchData={matchData} user={userData} />
      <Comment comment={commentData} />
    </Container>
  );
};

export default MatchPostDetail;

const Container = styled.div`
  width: 1000px;
  margin: auto;
  padding-bottom: 11vh;
`;
