import React, { useState, useEffect } from "react";
import { Content, Layer } from "./TableContentStyle";
import axios from "axios";

export interface UserInfo {
  userId: number;
  nickname: string;
  profileImg?: string;
  tripCount?: number;
  score?: number;
  posts: Post[];
}

export interface Post {
  postId: number;
  author: Author;
  region: string;
  title: string;
  duration: DateType[];
  // comments: CommentType[];
  createdAt: Date;
}

export interface Author {
  authorId: number;
  nickname: string;
  profileImg?: string;
}

export interface DateType {
  start: any;
  end: any;
}

// export interface CommentType {
//   id: number;
//   user: Author;
//   comment: string;
//   createdAt: Date;
// }

const MyPageTable: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);
  useEffect(() => {
    const postData = async () => {
      const fetchData = await axios.get(
        "https://e14cb7f4-6c52-45e6-84b4-2e92c7458bf0.mock.pstmn.io/userInfo",
      ); // http://localhost:4001/userInfo
      setData(fetchData.data.posts);
    };
    postData();
  }, []);

  console.log(data);

  return (
    <>
      <Content>
        <Layer>
          <table>
            <thead>
              <tr id="first">
                <th>제목</th>
                <th>지역</th>
                <th>여행기간</th>
                <th>상태</th>
              </tr>
            </thead>

            <tbody>
              {data?.map((item) => {
                console.log(item);
                return (
                  <tr key={item.postId}>
                    <td>{item.title}</td>
                    <td>{item.region}</td>
                    <td>
                      {item.duration[0].start} ~ {item.duration[0].end}
                    </td>
                    <td id="last">
                      <select name="" id="">
                        <option value="모집중">모집중</option>
                        <option value="모집마감">모집마감</option>
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Layer>
      </Content>
    </>
  );
};

export default MyPageTable;
