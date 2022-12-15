import React from "react";
import PostDetail from "../../components/PostDetail/PostDetail";
import styled from "styled-components";
import Category from "../../components/Category/Category";
import Comment from "../../components/Comment/Comment";

const FreePostDetail = () => {
  const commentData = [
    {
      id: 1,
      user: { nickname: "nick", profileImg: "" },
      content: "제주도 추천요",
      createdAt: "2022-12-11 16:10:02",
    },
    {
      id: 2,
      user: { nickname: "nick22", profileImg: "" },
      content: "미국 추천요",
      createdAt: "2022-12-11 16:10:02",
    },
  ];

  const userData = {
    nickname: "nickname",
    profileImg: "",
  };

  return (
    <Container>
      <Category />
      <PostDetail user={userData} />
      <Comment comment={commentData} />
    </Container>
  );
};

export default FreePostDetail;

const Container = styled.div`
  width: 1000px;
  margin: auto;
  padding-bottom: 10vh;
`;
