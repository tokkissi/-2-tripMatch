import React, { useState, useEffect } from "react";
import { Content, Layer } from "./ReceivedEnrollTableStyle";
import axios from "axios";
import authAxios from "../../axios/authAxios";

export interface EnrolledPersonType {
  matchId: string;
  postId: string;
  title: string;
  status: boolean;
  duration: string[];
  applicant: Applicant[];
}

export interface Applicant {
  email: string;
  nickname: string;
  profileImg: string;
}

const ReceivedEnrollTable: React.FC = () => {
  const [data, setData] = useState<EnrolledPersonType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchData = await authAxios.get(
          "/api/main/mypage/receivedEnroll",
        );
        setData(fetchData.data);
      } catch (err: unknown) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <Content>
      <Layer>
        <table>
          <thead>
            <tr id="first">
              <th>내가 쓴 글</th>
              <th>신청자</th>
              <th>상태</th>
            </tr>
          </thead>
          {/* 수락하면 status true, 거절하면 status false */}
          <tbody>
            {data &&
              data.map((item) => {
                return (
                  <tr key={item.postId}>
                    <td id="title">{item.title}</td>
                    <td>{item.applicant[0].nickname}</td>
                    <td id="last">
                      <button>수락</button>
                      <button>거절</button>
                    </td>
                  </tr>
                );
              })}
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </Layer>
    </Content>
  );
};

export default ReceivedEnrollTable;
