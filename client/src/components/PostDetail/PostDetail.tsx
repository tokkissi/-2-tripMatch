import React from "react";
import { MatchPost } from "../../pages/MatchPostDetail/MatchPostDetail";
import UserProfile from "../UserProfile/UserProfile";
import {
  Thumbnail,
  ThumbnailImg,
  PostTitle,
  MatchStatus,
  UserContainer,
  Date,
  MatchContainer,
  PostContent,
  MatchButton,
  ButtonContainer,
  Button,
} from "./style";

interface PostDetailProps {
  matchPost?: MatchPost;
  freePost?: any;
  user?: any;
}

const PostDetail: React.FC<PostDetailProps> = ({
  matchPost,
  user,
  freePost,
}) => {
  return (
    <div>
      {matchPost && (
        <Thumbnail>
          <ThumbnailImg src={matchPost.thumbnailImg} />
        </Thumbnail>
      )}
      <PostTitle>
        {matchPost && (
          <MatchStatus status={matchPost.status === true}>
            {matchPost.status}
          </MatchStatus>
        )}
        {freePost?.title || matchPost?.title}
      </PostTitle>
      <UserContainer>
        <UserProfile user={user} />
        <Date>{freePost?.createdAt || matchPost?.createdAt}</Date>
      </UserContainer>
      {matchPost && (
        <MatchContainer>
          <p>
            <span>지역</span>
            {matchPost.region}
          </p>
          <p>
            <span>기간</span>
            {`${matchPost.duration[0]} ~ ${matchPost.duration[1]}`}
          </p>
          <p>
            <span>모집 인원</span>
            {matchPost.userCount}명
          </p>
          <p>
            <span>희망 성별</span>
            {matchPost.hopeGender}
          </p>
          <p>
            <span>희망 연령대</span>
            {matchPost.hopeAge}
          </p>
        </MatchContainer>
      )}
      <PostContent
        dangerouslySetInnerHTML={
          (freePost && { __html: freePost.content }) ||
          (matchPost && { __html: matchPost.content })
        }
      ></PostContent>
      {matchPost && <MatchButton>동행 신청하기</MatchButton>}
      <ButtonContainer>
        <Button>목록</Button>
        <Button>글수정</Button>
        <Button>글삭제</Button>
      </ButtonContainer>
    </div>
  );
};

export default PostDetail;
