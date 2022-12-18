import React, { useState, useEffect } from "react";
import { Content, Layer } from "./TableContentStyle";
import axios from "axios";

export interface UserInfo {
  id: number;
  nickname: string;
  profileImg?: string;
  tripCount?: number;
  score?: number;
  posts: Post[];
}

export interface Post {
  id: number;
  author: Author;
  region: string;
  category: string;
  title: string;
  content: string;
  duration: DateType[];
  comments: CommentType[];
  createdAt: Date;
}

export interface Author {
  id: number;
  nickname: string;
  profileImg: string;
}

export interface DateType {
  start: any;
  end: any;
}

export interface CommentType {
  id: number;
  user: Author;
  comment: string;
  createdAt: Date;
}

const MyCommentTable: React.FC = () => {
  const [data, setData] = useState<UserInfo[] & Post[]>([]);
  useEffect(() => {
    const postData = async () => {
      const fetchData = await axios.get("http://localhost:4000/userInfo");
      setData(fetchData.data);
    };
    postData();
  }, []);

  console.log(data);

  return (
    <Content>
      <Layer>
        <table>
          <thead>
            <tr id="first">
              <th>제목</th>
              <th>지역</th>
              <th>여행기간</th>
              <th>작성자</th>
            </tr>
          </thead>

          <tbody>
            {data[0]?.posts.map((item) => {
              console.log(item);
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.region}</td>
                  <td>
                    {item.duration[0].start} ~ {item.duration[0].end}
                  </td>
                  <td id="last">{item.author.nickname}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Layer>
    </Content>
  );
};

export default MyCommentTable;
