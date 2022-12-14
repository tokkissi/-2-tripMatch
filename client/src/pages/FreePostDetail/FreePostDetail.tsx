import React from "react";
import UserProfile from "../../components/UserProfile/UserProfile";
import PostDetail from "./../../components/PostDetail/PostDetail";
import styled from "styled-components";
import Category from "../../components/Category/Category";

const FreePostDetail = () => {
  return (
    <Container>
      <Category />

      <PostDetail />
    </Container>
  );
};

export default FreePostDetail;

const Container = styled.div`
  width: 1000px;
  margin: auto;
`;
