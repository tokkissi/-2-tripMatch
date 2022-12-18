import React, { useEffect, useState } from "react";
import { UserInfo } from "../TableContent/MyCommentTable";
import { Top, TripCount, Score } from "./TopStyle";
import axios from "axios";

const MyPageTop: React.FC = () => {
  const [data, setData] = useState<UserInfo>();
  useEffect(() => {
    const postData = async () => {
      const fetchData = await axios.get("http://localhost:4000/userInfo");
      setData(fetchData.data[0]);
    };
    postData();
  }, []);

  console.log(data, "H"); // userInfo를 새로 만들어야함...... 진짜 열받는다

  return (
    <Top key={data?.id}>
      <h1>{data?.nickname}님, 안녕하세요 !</h1>
      <TripCount>
        <span>동행 횟수</span>
        <span>{data?.tripCount}</span>
      </TripCount>
      <Score>
        <span>나의 점수</span>
        <span>
          <span id="scoreNum">{data?.score}</span>/5
        </span>
      </Score>
    </Top>
  );
};

export default MyPageTop;
