import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostDetail from "./../../components/PostDetail/PostDetail";
import Comment from "../../components/CommentList/CommentList";
import axios from "axios";
import type { MatchPostType } from "../../type/matchPost";
import NotFound from "../../components/NotFound/NotFound";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteMatchPostMutation,
  useGetAllMatchPostQuery,
  useGetMatchPostQuery,
} from "../../slice/matchPostApi";
import { useAppSelector } from "../../store/hooks";
import Modal from "../../components/Modal/Modal";
import { useDeleteCommentMutation } from "../../slice/commentApi";

const MatchPostDetail = () => {
  // const [post, setPost] = useState<MatchPostType>();
  const [isApplying, setIsApplying] = useState(false);
  const [deleteCommentId, setDeleteCommentId] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const postquery = useGetMatchPostQuery(id);
  const { data: post, isLoading, isError } = postquery;
  const [onDeletePost, { isError: isErrorDeletePost }] =
    useDeleteMatchPostMutation();
  const [onDeleteComment, { isError: isErrorDeleteComment }] =
    useDeleteCommentMutation();

  const { show: isShown, modalText } = useAppSelector((state) => state.modal);
  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await axios.get(
  //       "https://70aee874-8965-4db1-be06-07823d5c4dda.mock.pstmn.io/matchposts/1",
  //     );
  //     setPost(res.data);
  //   };

  //   getData();
  // }, []);
  const onApplyMatch = () => {
    console.log("동행 신청");
    setIsApplying(!isApplying);
  };

  const onCancleMatch = () => {
    console.log("동행 취소");
    setIsApplying(!isApplying);
  };

  const onClickDeletePost = () => {
    console.log("삭제");
    onDeletePost(id);
    navigate("/free");
  };

  const onClickDeleteComment = () => {
    onDeleteComment(deleteCommentId);
    window.location.reload();
  };

  const getModalCallback = () => {
    if (modalText) {
      switch (modalText.title) {
        case "삭제":
          return onClickDeletePost;
        case "동행 신청":
          return onApplyMatch;
        case "동행 신청 취소":
          return onCancleMatch;
        case "댓글 삭제":
          return onClickDeleteComment;
      }
    }
  };

  if (isError) {
    return <NotFound />;
  }

  return (
    <Container>
      {post?.post && (
        <PostDetail
          matchPost={post.post}
          user={post.post.author}
          isApplying={isApplying}
        />
      )}
      {post?.comments && (
        <Comment
          comments={post.comments}
          setDeleteCommentId={setDeleteCommentId}
        />
      )}
      {isShown && <Modal callBackFn={getModalCallback()} />}
    </Container>
  );
};

export default MatchPostDetail;

const Container = styled.div`
  width: 1000px;
  margin: auto;
  padding: 20px 0 11vh;
`;
