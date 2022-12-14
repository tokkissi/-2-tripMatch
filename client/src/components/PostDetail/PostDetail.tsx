import React from "react";
import styled from "styled-components";
import UserProfile from "../UserProfile/UserProfile";

interface PostDetailProps {
  matchData?: any;
}

const PostDetail: React.FC<PostDetailProps> = ({ matchData }) => {
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
        <UserProfile />
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

const PostTitle = styled.h3`
  font-size: 20px;
  margin: 20px 0;
`;

const MatchStatus = styled.span<{ status: boolean }>`
  display: inline-block;
  margin-right: 10px;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => (props.status ? "#0088b9" : "#999")};
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  margin-bottom: 10px;
`;

const ThumbnailImg = styled.img`
  width: 100%;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MatchContainer = styled.div`
  width: 50%;
  border: 2px solid #daeaf1;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px 30px;
  font-size: 15px;
  line-height: 1.7;
  span {
    display: inline-block;
    margin-right: 10px;
    color: #747474;
    font-size: 14px;
  }
`;

const PostContent = styled.article`
  min-height: 300px;
  padding: 40px 0;
  font-size: 14px;
  line-height: 1.7;
`;

const Date = styled.p`
  font-size: 13px;
  color: #747474;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;

const Button = styled.button`
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #daeaf1;
  color: #333;

  + button {
    margin-left: 15px;
  }
`;

const MatchButton = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #f2d1d1;
  font-size: 17px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 20px;
`;
