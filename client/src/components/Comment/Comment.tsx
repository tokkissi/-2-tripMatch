import React from "react";
import styled from "styled-components";
import CommentContent from "./CommentContent";
import CommentForm from "./CommentForm";

const Comment: React.FC<{ comment: any }> = ({ comment }) => {
  return (
    <>
      <CommentCount>
        <span>{comment.length}</span>개의 답변
      </CommentCount>
      {comment.map((comment: any) => (
        <CommentContent data={comment} key={comment.id} />
      ))}
      <CommentForm />
    </>
  );
};

export default Comment;

const CommentCount = styled.p`
  margin: 20px 0 10px;
  font-size: 14px;

  span {
    color: ${(props) => props.theme.color.pink};
    font-weight: bold;
  }
`;
