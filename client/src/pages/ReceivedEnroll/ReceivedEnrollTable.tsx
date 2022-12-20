import React, { useState, useEffect } from "react";
import { Content, Layer } from "./ReceivedEnrollTableStyle";
import axios from "axios";

export interface EnrolledPerson {
  userId: number;
  nickname: string;
  postTitle: string;
  status: boolean;
}

const ReceivedEnrollTable: React.FC = () => {
  const [data, setData] = useState<EnrolledPerson[]>([]);

  const baseUrl = "https://8ada489c-50d9-464f-ae66-8e0b28048eb6.mock.pstmn.io";

  useEffect(() => {
    const getData = async () => {
      const fetchData = await axios.get(baseUrl + "/enrolledPerson");
      setData(fetchData.data);
    };
    getData();
  }, []);

  console.log(data);

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

          <tbody>
            {data?.map((item) => {
              return (
                <tr key={item.userId}>
                  <td id="title">{item.postTitle}</td>
                  <td>{item.nickname}</td>
                  <td id="last">
                    <button>수락</button>
                    <button>거절</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Layer>
    </Content>
  );
};

export default ReceivedEnrollTable;
