import React from "react";

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
  matchData?: any;
  user: any;
}

const PostDetail: React.FC<PostDetailProps> = ({ matchData, user }) => {
  return (
    <div>
      {matchData && (
        <Thumbnail>
          <ThumbnailImg src={matchData.thumbnailImg} />
        </Thumbnail>
      )}
      <PostTitle>
        {matchData && (
          <MatchStatus status={matchData.status === "모집중"}>
            {matchData.status}
          </MatchStatus>
        )}
        공주 한정식 82식당 후기입니다
      </PostTitle>
      <UserContainer>
        <UserProfile user={user} />
        <Date>2022-12-12 02:19</Date>
      </UserContainer>
      {matchData && (
        <MatchContainer>
          <p>
            <span>지역</span>
            {matchData.region}
          </p>
          <p>
            <span>기간</span>
            {`${matchData.duration[0]} ~ ${matchData.duration[1]}`}
          </p>
          <p>
            <span>모집 인원</span>
            {matchData.userCount}명
          </p>
          <p>
            <span>희망 성별</span>
            {matchData.hopeGender}
          </p>
          <p>
            <span>희망 연령대</span>
            {matchData.hopeAge}
          </p>
        </MatchContainer>
      )}
      <PostContent>
        겨울을 느낄 수 있는 나라였으면 좋겠어요
        <br />
        자유롭고 여유롭고 힐링 그 잡채,,,
        <br />
        여자고 혼자 여행할 거예요!
        <br />
        새로운 친구를 사귀는 것도 좋고, 엑티비티, 구경거리가
        <br />
        많은 것도 좋을 것 같아요 ㅎㅎ
        <br />
        이번에 태국에 왔기 때문에 태국은 제외하고 부탁드려용!
      </PostContent>
      {matchData && <MatchButton>동행 신청하기</MatchButton>}
      <ButtonContainer>
        <Button>목록</Button>
        <Button>글수정</Button>
        <Button>글삭제</Button>
      </ButtonContainer>
    </div>
  );
};

export default PostDetail;
